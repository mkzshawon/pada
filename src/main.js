/* PADA - Step 1: canvas, tabs, toolbar, pan/zoom, basic shapes */
(function () {
  "use strict";

  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");
  const tabsEl = document.getElementById("tabs");
  const toolbarEl = document.getElementById("toolbar");

  // Tool list: id, label, shortcut key (matches the screenshot's shortcut hints)
  const TOOLS = [
    { id: "select", label: "Select", key: "v" },
    { id: "hand", label: "Hand", key: "h" },
    { id: "rect", label: "Rect", key: "r" },
    { id: "diamond", label: "Diamond", key: "d" },
    { id: "ellipse", label: "Ellipse", key: "o" },
    { id: "arrow", label: "Arrow", key: "a" },
    { id: "line", label: "Line", key: "l" },
    { id: "pencil", label: "Pencil", key: "p" },
    { id: "text", label: "Text", key: "t" },
    { id: "note", label: "Note", key: "n" },
    { id: "eraser", label: "Eraser", key: "e" },
  ];
  const TOOL_BY_KEY = Object.fromEntries(TOOLS.map((t) => [t.key, t.id]));

  // Inline SVG icons (24x24 grid, stroke uses currentColor so they follow the button state)
  const ICONS = {
    select: '<path d="M5 3l14 8-6 2-2 6z"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5V4a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L4.3 14.6a1.5 1.5 0 0 1 2.1-2.1L8 14"/>',
    rect: '<rect x="4" y="5" width="16" height="14" rx="2"/>',
    diamond: '<path d="M12 3l9 9-9 9-9-9z"/>',
    ellipse: '<circle cx="12" cy="12" r="8"/>',
    arrow: '<path d="M4 12h15m-5-6l6 6-6 6"/>',
    line: '<path d="M4 20L20 4"/>',
    pencil: '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
    text: '<path d="M5 20L12 4l7 16M8 14h8"/>',
    note: '<path d="M4 4h16v11l-5 5H4z"/><path d="M15 20v-5h5"/>',
    eraser: '<path d="M4 15l8-9 7 6-5 5H8z"/><path d="M9 19h11"/>',
  };

  // Each board (tab) keeps its own shapes and camera
  const boards = [
    { name: "Tab 01", shapes: [], camera: { x: 0, y: 0, zoom: 1 } },
    { name: "Tab 02", shapes: [], camera: { x: 0, y: 0, zoom: 1 } },
  ];
  let active = 0;
  let tool = "select";

  let drawing = null; // shape currently being dragged out
  let panning = null; // { sx, sy, camera } while panning
  let erasing = false;
  let spaceHeld = false;

  const board = () => boards[active];

  /* ---------- Coordinates ---------- */

  function screenToWorld(sx, sy) {
    const cam = board().camera;
    return { x: (sx - cam.x) / cam.zoom, y: (sy - cam.y) / cam.zoom };
  }

  function eventToWorld(e) {
    const r = canvas.getBoundingClientRect();
    return screenToWorld(e.clientX - r.left, e.clientY - r.top);
  }

  /* ---------- Rendering ---------- */

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    render();
  }

  function render() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cam = board().camera;

    // Clear in screen space
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);

    // Draw in world space
    ctx.setTransform(dpr * cam.zoom, 0, 0, dpr * cam.zoom, dpr * cam.x, dpr * cam.y);
    ctx.strokeStyle = "#1d1b2e";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (const s of board().shapes) drawShape(s);
    if (drawing) drawShape(drawing);
  }

  function drawShape(s) {
    const x = Math.min(s.x0, s.x1);
    const y = Math.min(s.y0, s.y1);
    const w = Math.abs(s.x1 - s.x0);
    const h = Math.abs(s.y1 - s.y0);

    ctx.beginPath();
    switch (s.type) {
      case "rect":
        ctx.roundRect(x, y, w, h, 6);
        break;
      case "ellipse":
        ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
        break;
      case "diamond":
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w, y + h / 2);
        ctx.lineTo(x + w / 2, y + h);
        ctx.lineTo(x, y + h / 2);
        ctx.closePath();
        break;
      case "line":
        ctx.moveTo(s.x0, s.y0);
        ctx.lineTo(s.x1, s.y1);
        break;
      case "arrow": {
        const ang = Math.atan2(s.y1 - s.y0, s.x1 - s.x0);
        const head = 14;
        ctx.moveTo(s.x0, s.y0);
        ctx.lineTo(s.x1, s.y1);
        ctx.moveTo(s.x1 - head * Math.cos(ang - 0.45), s.y1 - head * Math.sin(ang - 0.45));
        ctx.lineTo(s.x1, s.y1);
        ctx.lineTo(s.x1 - head * Math.cos(ang + 0.45), s.y1 - head * Math.sin(ang + 0.45));
        break;
      }
      case "pencil":
        s.points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        break;
    }
    ctx.stroke();
  }

  // Bounding box of a shape in world space (used by the eraser)
  function bounds(s) {
    if (s.type === "pencil") {
      const xs = s.points.map((p) => p.x);
      const ys = s.points.map((p) => p.y);
      return { x1: Math.min(...xs), y1: Math.min(...ys), x2: Math.max(...xs), y2: Math.max(...ys) };
    }
    return {
      x1: Math.min(s.x0, s.x1),
      y1: Math.min(s.y0, s.y1),
      x2: Math.max(s.x0, s.x1),
      y2: Math.max(s.y0, s.y1),
    };
  }

  /* ---------- Tools & actions ---------- */

  function setTool(id) {
    tool = id;
    for (const btn of toolbarEl.querySelectorAll(".tool")) {
      btn.setAttribute("aria-pressed", String(btn.dataset.tool === id));
    }
    updateCursor();
  }

  function updateCursor() {
    if (spaceHeld || tool === "hand") canvas.style.cursor = panning ? "grabbing" : "grab";
    else if (tool === "select") canvas.style.cursor = "default";
    else if (tool === "eraser") canvas.style.cursor = "not-allowed";
    else canvas.style.cursor = "crosshair";
  }

  function eraseAt(p) {
    const margin = 8 / board().camera.zoom;
    const shapes = board().shapes;
    for (let i = shapes.length - 1; i >= 0; i--) {
      const b = bounds(shapes[i]);
      if (p.x >= b.x1 - margin && p.x <= b.x2 + margin && p.y >= b.y1 - margin && p.y <= b.y2 + margin) {
        shapes.splice(i, 1);
        render();
        return;
      }
    }
  }

  function undo() {
    if (board().shapes.length) {
      board().shapes.pop();
      render();
    }
  }

  function addBoard() {
    boards.push({ name: `Tab ${String(boards.length + 1).padStart(2, "0")}`, shapes: [], camera: { x: 0, y: 0, zoom: 1 } });
    switchBoard(boards.length - 1);
  }

  function switchBoard(index) {
    active = index;
    renderTabs();
    render();
  }

  /* ---------- Pointer input ---------- */

  canvas.addEventListener("pointerdown", (e) => {
    canvas.setPointerCapture(e.pointerId);
    const p = eventToWorld(e);

    if (tool === "hand" || spaceHeld || e.button === 1) {
      panning = { sx: e.clientX, sy: e.clientY, camera: { ...board().camera } };
      updateCursor();
      return;
    }
    if (tool === "eraser") {
      erasing = true;
      eraseAt(p);
      return;
    }
    if (tool === "select" || tool === "text" || tool === "note") return; // coming in later steps

    drawing = { type: tool, x0: p.x, y0: p.y, x1: p.x, y1: p.y, points: [p] };
    render();
  });

  canvas.addEventListener("pointermove", (e) => {
    if (panning) {
      const cam = board().camera;
      cam.x = panning.camera.x + (e.clientX - panning.sx);
      cam.y = panning.camera.y + (e.clientY - panning.sy);
      render();
      return;
    }
    const p = eventToWorld(e);
    if (erasing) eraseAt(p);
    if (drawing) {
      drawing.x1 = p.x;
      drawing.y1 = p.y;
      if (drawing.type === "pencil") drawing.points.push(p);
      render();
    }
  });

  function endPointer() {
    if (drawing) {
      const big = Math.hypot(drawing.x1 - drawing.x0, drawing.y1 - drawing.y0) > 2;
      if (big || drawing.type === "pencil") board().shapes.push(drawing);
      drawing = null;
    }
    panning = null;
    erasing = false;
    updateCursor();
    render();
  }
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);

  // Wheel: pan. Ctrl/Cmd + wheel (or trackpad pinch): zoom around the cursor.
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const cam = board().camera;
      if (e.ctrlKey || e.metaKey) {
        const r = canvas.getBoundingClientRect();
        const sx = e.clientX - r.left;
        const sy = e.clientY - r.top;
        const before = screenToWorld(sx, sy);
        cam.zoom = Math.min(5, Math.max(0.1, cam.zoom * Math.exp(-e.deltaY * 0.01)));
        cam.x = sx - before.x * cam.zoom;
        cam.y = sy - before.y * cam.zoom;
      } else {
        cam.x -= e.deltaX;
        cam.y -= e.deltaY;
      }
      render();
    },
    { passive: false }
  );

  /* ---------- Keyboard ---------- */

  window.addEventListener("keydown", (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    if (e.code === "Space" && !spaceHeld) {
      spaceHeld = true;
      updateCursor();
      e.preventDefault();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const id = TOOL_BY_KEY[e.key.toLowerCase()];
    if (id) setTool(id);
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      spaceHeld = false;
      updateCursor();
    }
  });

  window.addEventListener("resize", resize);

  /* ---------- UI construction ---------- */

  function renderToolbar() {
    toolbarEl.innerHTML = "";
    TOOLS.forEach((t, i) => {
      // Visual divider before the "more" group, like the screenshot
      if (i === 2 || i === 9) {
        const sep = document.createElement("span");
        sep.className = "sep";
        toolbarEl.appendChild(sep);
      }
      const btn = document.createElement("button");
      btn.className = "tool";
      btn.dataset.tool = t.id;
      btn.title = `${t.label} (${t.key.toUpperCase()})`;
      btn.setAttribute("aria-label", t.label);
      btn.setAttribute("aria-pressed", String(t.id === tool));
      btn.innerHTML =
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ` +
        `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[t.id]}</svg>`;
      const kbd = document.createElement("kbd");
      kbd.textContent = t.key.toUpperCase();
      btn.appendChild(kbd);
      btn.addEventListener("click", () => setTool(t.id));
      toolbarEl.appendChild(btn);
    });
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    boards.forEach((b, i) => {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.textContent = b.name;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(i === active));
      btn.addEventListener("click", () => switchBoard(i));
      tabsEl.appendChild(btn);
    });
    const add = document.createElement("button");
    add.className = "tab-add";
    add.title = "New board";
    add.setAttribute("aria-label", "New board");
    add.textContent = "+";
    add.addEventListener("click", addBoard);
    tabsEl.appendChild(add);
  }

  renderToolbar();
  renderTabs();
  setTool("select");
  resize();
})();
