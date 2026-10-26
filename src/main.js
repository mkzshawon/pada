/* PADA - Step 2: select, move, resize, multi-select, delete, undo history */
(function () {
  "use strict";

  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");
  const tabsEl = document.getElementById("tabs");
  const toolbarEl = document.getElementById("toolbar");

  const ACCENT = "#4f46e5";
  const MAX_HISTORY = 100;

  // Tool list: id, label, shortcut key
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

  // Inline SVG icons (24x24 grid, stroke uses currentColor)
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

  const HANDLE_CURSOR = {
    nw: "nwse-resize",
    se: "nwse-resize",
    ne: "nesw-resize",
    sw: "nesw-resize",
    n: "ns-resize",
    s: "ns-resize",
    e: "ew-resize",
    w: "ew-resize",
  };

  // Each board (tab) keeps its own shapes, camera and undo history
  const boards = [
    { name: "Tab 01", shapes: [], camera: { x: 0, y: 0, zoom: 1 }, history: [] },
    { name: "Tab 02", shapes: [], camera: { x: 0, y: 0, zoom: 1 }, history: [] },
  ];
  let active = 0;
  let tool = "select";
  let idCounter = 0;

  let selected = new Set(); // ids of selected shapes on the active board
  let drawing = null; // shape being dragged out
  let gesture = null; // current pointer action: pan | move | resize | marquee | erase | draw
  let spaceHeld = false;

  const board = () => boards[active];
  const shapesOf = () => board().shapes;
  const newId = () => ++idCounter;

  /* ---------- Coordinates ---------- */

  function screenToWorld(sx, sy) {
    const cam = board().camera;
    return { x: (sx - cam.x) / cam.zoom, y: (sy - cam.y) / cam.zoom };
  }

  function eventToWorld(e) {
    const r = canvas.getBoundingClientRect();
    return screenToWorld(e.clientX - r.left, e.clientY - r.top);
  }

  /* ---------- Geometry ---------- */

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

  function distToSegment(p, a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len2 = dx * dx + dy * dy;
    let t = len2 ? ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
  }

  // Lines and pencil strokes are hit near the stroke; closed shapes by their box
  function hitShape(s, p, m) {
    if (s.type === "line" || s.type === "arrow") {
      return distToSegment(p, { x: s.x0, y: s.y0 }, { x: s.x1, y: s.y1 }) <= m;
    }
    if (s.type === "pencil") return s.points.some((q) => Math.hypot(q.x - p.x, q.y - p.y) <= m);
    const b = bounds(s);
    return p.x >= b.x1 - m && p.x <= b.x2 + m && p.y >= b.y1 - m && p.y <= b.y2 + m;
  }

  function topmostAt(p) {
    const m = 8 / board().camera.zoom;
    const arr = shapesOf();
    for (let i = arr.length - 1; i >= 0; i--) if (hitShape(arr[i], p, m)) return arr[i];
    return null;
  }

  function normalize(r) {
    return { x1: Math.min(r.x1, r.x2), y1: Math.min(r.y1, r.y2), x2: Math.max(r.x1, r.x2), y2: Math.max(r.y1, r.y2) };
  }

  function intersects(b, r) {
    const n = normalize(r);
    return b.x1 <= n.x2 && b.x2 >= n.x1 && b.y1 <= n.y2 && b.y2 >= n.y1;
  }

  // Bounding box around all selected shapes
  function selectionBox() {
    let box = null;
    for (const s of shapesOf()) {
      if (!selected.has(s.id)) continue;
      const b = bounds(s);
      if (!box) box = { ...b };
      else {
        box.x1 = Math.min(box.x1, b.x1);
        box.y1 = Math.min(box.y1, b.y1);
        box.x2 = Math.max(box.x2, b.x2);
        box.y2 = Math.max(box.y2, b.y2);
      }
    }
    return box;
  }

  function handlePoints(b) {
    const mx = (b.x1 + b.x2) / 2;
    const my = (b.y1 + b.y2) / 2;
    return {
      nw: { x: b.x1, y: b.y1 },
      n: { x: mx, y: b.y1 },
      ne: { x: b.x2, y: b.y1 },
      e: { x: b.x2, y: my },
      se: { x: b.x2, y: b.y2 },
      s: { x: mx, y: b.y2 },
      sw: { x: b.x1, y: b.y2 },
      w: { x: b.x1, y: my },
    };
  }

  function handleAt(p) {
    const box = selectionBox();
    if (!box) return null;
    const tol = 10 / board().camera.zoom;
    const hp = handlePoints(box);
    for (const k of Object.keys(hp)) {
      if (Math.abs(p.x - hp[k].x) <= tol && Math.abs(p.y - hp[k].y) <= tol) return k;
    }
    return null;
  }

  // Returns a copy of a shape with every point passed through f(x, y) -> {x, y}
  function mapShape(src, f) {
    const out = { ...src };
    if (src.type === "pencil") {
      out.points = src.points.map((q) => f(q.x, q.y));
    } else {
      const a = f(src.x0, src.y0);
      const b = f(src.x1, src.y1);
      out.x0 = a.x;
      out.y0 = a.y;
      out.x1 = b.x;
      out.y1 = b.y;
    }
    return out;
  }

  // Deep copies of the selected shapes, keyed by id (the starting point of a move/resize)
  function cloneSelected() {
    return new Map(
      shapesOf()
        .filter((s) => selected.has(s.id))
        .map((s) => [s.id, JSON.parse(JSON.stringify(s))])
    );
  }

  function applyToSelected(origMap, f) {
    board().shapes = shapesOf().map((s) => (origMap.has(s.id) ? mapShape(origMap.get(s.id), f) : s));
  }

  /* ---------- Undo history ---------- */

  function snapshot() {
    return JSON.stringify(shapesOf());
  }

  // Call with the snapshot taken at the start of an action; stores it if the shapes changed
  function commit(before) {
    if (snapshot() === before) return;
    const h = board().history;
    h.push(before);
    if (h.length > MAX_HISTORY) h.shift();
  }

  function undo() {
    const h = board().history;
    if (!h.length) return;
    board().shapes = JSON.parse(h.pop());
    const ids = new Set(shapesOf().map((s) => s.id));
    for (const id of [...selected]) if (!ids.has(id)) selected.delete(id);
    render();
  }

  function deleteSelected() {
    if (!selected.size) return;
    const before = snapshot();
    board().shapes = shapesOf().filter((s) => !selected.has(s.id));
    selected.clear();
    commit(before);
    render();
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
    const cam = board().camera;
    const z = cam.zoom;

    // Clear in screen space
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw in world space
    ctx.setTransform(dpr * z, 0, 0, dpr * z, dpr * cam.x, dpr * cam.y);
    ctx.strokeStyle = "#1d1b2e";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (const s of shapesOf()) drawShape(s);
    if (drawing) drawShape(drawing);
    drawSelection(z);
    drawMarquee(z);
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

  function drawSelection(z) {
    const sel = shapesOf().filter((s) => selected.has(s.id));
    if (!sel.length) return;

    ctx.save();
    ctx.strokeStyle = ACCENT;
    ctx.lineWidth = 1 / z;
    ctx.setLineDash([5 / z, 4 / z]);
    const pad = 4 / z;
    for (const s of sel) {
      const b = bounds(s);
      ctx.strokeRect(b.x1 - pad, b.y1 - pad, b.x2 - b.x1 + 2 * pad, b.y2 - b.y1 + 2 * pad);
    }

    ctx.setLineDash([]);
    const box = selectionBox();
    if (box) {
      const hs = 8 / z;
      ctx.fillStyle = "#ffffff";
      for (const pt of Object.values(handlePoints(box))) {
        ctx.fillRect(pt.x - hs / 2, pt.y - hs / 2, hs, hs);
        ctx.strokeRect(pt.x - hs / 2, pt.y - hs / 2, hs, hs);
      }
    }
    ctx.restore();
  }

  function drawMarquee(z) {
    if (!gesture || gesture.type !== "marquee") return;
    const r = normalize(gesture.rect);
    ctx.save();
    ctx.strokeStyle = ACCENT;
    ctx.fillStyle = "rgba(79, 70, 229, 0.08)";
    ctx.lineWidth = 1 / z;
    ctx.setLineDash([4 / z, 4 / z]);
    ctx.fillRect(r.x1, r.y1, r.x2 - r.x1, r.y2 - r.y1);
    ctx.strokeRect(r.x1, r.y1, r.x2 - r.x1, r.y2 - r.y1);
    ctx.restore();
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
    if (spaceHeld || tool === "hand") canvas.style.cursor = gesture && gesture.type === "pan" ? "grabbing" : "grab";
    else if (tool === "select") canvas.style.cursor = "default";
    else if (tool === "eraser") canvas.style.cursor = "not-allowed";
    else canvas.style.cursor = "crosshair";
  }

  function hoverCursor(p) {
    const h = handleAt(p);
    if (h) canvas.style.cursor = HANDLE_CURSOR[h];
    else canvas.style.cursor = topmostAt(p) ? "move" : "default";
  }

  function eraseAt(p) {
    const m = 8 / board().camera.zoom;
    const arr = shapesOf();
    for (let i = arr.length - 1; i >= 0; i--) {
      if (hitShape(arr[i], p, m)) {
        selected.delete(arr[i].id);
        arr.splice(i, 1);
        render();
        return;
      }
    }
  }

  function selectInRect(baseSet) {
    const next = new Set(baseSet);
    for (const s of shapesOf()) if (intersects(bounds(s), gesture.rect)) next.add(s.id);
    selected = next;
  }

  function addBoard() {
    boards.push({
      name: `Tab ${String(boards.length + 1).padStart(2, "0")}`,
      shapes: [],
      camera: { x: 0, y: 0, zoom: 1 },
      history: [],
    });
    switchBoard(boards.length - 1);
  }

  function switchBoard(index) {
    active = index;
    selected = new Set();
    gesture = null;
    drawing = null;
    renderTabs();
    render();
  }

  /* ---------- Pointer input ---------- */

  canvas.addEventListener("pointerdown", (e) => {
    canvas.setPointerCapture(e.pointerId);
    const p = eventToWorld(e);
    const before = snapshot();

    // Pan
    if (tool === "hand" || spaceHeld || e.button === 1) {
      gesture = { type: "pan", sx: e.clientX, sy: e.clientY, camera: { ...board().camera } };
      updateCursor();
      return;
    }

    // Eraser
    if (tool === "eraser") {
      gesture = { type: "erase", before };
      eraseAt(p);
      return;
    }

    // Select tool
    if (tool === "select") {
      const h = handleAt(p);
      if (h) {
        gesture = { type: "resize", handle: h, box: selectionBox(), orig: cloneSelected(), before };
        return;
      }
      const hit = topmostAt(p);
      if (hit) {
        if (e.shiftKey) {
          if (selected.has(hit.id)) selected.delete(hit.id);
          else selected.add(hit.id);
        } else if (!selected.has(hit.id)) {
          selected = new Set([hit.id]);
        }
        if (selected.has(hit.id)) {
          gesture = { type: "move", start: p, orig: cloneSelected(), before };
        }
        render();
        return;
      }
      // Empty space: start a rubber-band selection
      const base = e.shiftKey ? new Set(selected) : new Set();
      if (!e.shiftKey) selected.clear();
      gesture = { type: "marquee", rect: { x1: p.x, y1: p.y, x2: p.x, y2: p.y }, base };
      render();
      return;
    }

    // Not implemented yet (later steps)
    if (tool === "text" || tool === "note") return;

    // Shape tools
    drawing = { id: null, type: tool, x0: p.x, y0: p.y, x1: p.x, y1: p.y, points: [p] };
    gesture = { type: "draw", before };
    render();
  });

  canvas.addEventListener("pointermove", (e) => {
    const p = eventToWorld(e);

    if (!gesture) {
      if (tool === "select") hoverCursor(p);
      return;
    }

    switch (gesture.type) {
      case "pan": {
        const cam = board().camera;
        cam.x = gesture.camera.x + (e.clientX - gesture.sx);
        cam.y = gesture.camera.y + (e.clientY - gesture.sy);
        break;
      }
      case "move": {
        const dx = p.x - gesture.start.x;
        const dy = p.y - gesture.start.y;
        applyToSelected(gesture.orig, (x, y) => ({ x: x + dx, y: y + dy }));
        break;
      }
      case "resize": {
        const r = gesture.box;
        const h = gesture.handle;
        let x1 = r.x1;
        let y1 = r.y1;
        let x2 = r.x2;
        let y2 = r.y2;
        if (h.includes("w")) x1 = p.x;
        if (h.includes("e")) x2 = p.x;
        if (h.includes("n")) y1 = p.y;
        if (h.includes("s")) y2 = p.y;

        const nx = Math.min(x1, x2);
        const ny = Math.min(y1, y2);
        const nw = Math.max(1, Math.abs(x2 - x1));
        const nh = Math.max(1, Math.abs(y2 - y1));
        const ow = r.x2 - r.x1;
        const oh = r.y2 - r.y1;
        const sx = ow >= 1 ? nw / ow : 1;
        const sy = oh >= 1 ? nh / oh : 1;

        applyToSelected(gesture.orig, (x, y) => ({ x: nx + (x - r.x1) * sx, y: ny + (y - r.y1) * sy }));
        break;
      }
      case "marquee": {
        gesture.rect.x2 = p.x;
        gesture.rect.y2 = p.y;
        selectInRect(gesture.base);
        break;
      }
      case "erase":
        eraseAt(p);
        break;
      case "draw": {
        drawing.x1 = p.x;
        drawing.y1 = p.y;
        if (drawing.type === "pencil") drawing.points.push(p);
        break;
      }
    }
    render();
  });

  function endGesture() {
    if (drawing) {
      const big = Math.hypot(drawing.x1 - drawing.x0, drawing.y1 - drawing.y0) > 2;
      if (big || drawing.type === "pencil") {
        drawing.id = newId();
        shapesOf().push(drawing);
      }
      drawing = null;
    }
    if (gesture && gesture.before !== undefined) commit(gesture.before);
    gesture = null;
    updateCursor();
    render();
  }
  canvas.addEventListener("pointerup", endGesture);
  canvas.addEventListener("pointercancel", endGesture);

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

    const k = e.key.toLowerCase();

    if ((e.ctrlKey || e.metaKey) && k === "z") {
      e.preventDefault();
      undo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "a") {
      e.preventDefault();
      selected = new Set(shapesOf().map((s) => s.id));
      render();
      return;
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      if (selected.size) {
        e.preventDefault();
        deleteSelected();
      }
      return;
    }
    if (e.key === "Escape") {
      selected.clear();
      render();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const id = TOOL_BY_KEY[k];
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
