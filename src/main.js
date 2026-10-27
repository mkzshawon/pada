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
    { id: "triangle", label: "Triangle", key: "g" },
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
    triangle: '<path d="M12 4l9 16H3z"/>',
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

  /* ---------- Style: color, stroke width, fill ---------- */

  // Line color bar (PALETTE) and fill color bar (FILLS); the native picker allows any color
  const PALETTE = ["#1d1b2e", "#868e96", "#e03131", "#f76707", "#f59f00", "#2f9e44", "#1971c2", "#7048e8"];
  const FILLS = [null, "#ffc9c9", "#ffe8cc", "#fff3bf", "#d3f9d8", "#c5f6fa", "#d0ebff", "#eebefa"];
  const WIDTHS = [1, 2, 4];
  const CLOSED = new Set(["rect", "diamond", "ellipse", "triangle"]); // shapes that can be filled
  const SHAPE_TOOLS = new Set(["rect", "diamond", "triangle", "ellipse", "arrow", "line", "pencil", "text", "note"]);

  // Style used for the next shape you draw.
  // transparency (0-100) fades the fill only; blur (0-10) softens the whole shape.
  const currentStyle = { stroke: PALETTE[0], width: 2, fill: null, transparency: 0, blur: 0 };

  // "#rrggbb" plus alpha (0-1) to "rgba(...)"
  function withAlpha(hex, alpha) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
  }

  // A pencil stroke that comes back to its starting point counts as a closed shape
  function isClosedPencil(s) {
    if (s.type !== "pencil" || s.points.length < 4) return false;
    const a = s.points[0];
    const b = s.points[s.points.length - 1];
    const xs = s.points.map((p) => p.x);
    const ys = s.points.map((p) => p.y);
    const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    return Math.hypot(a.x - b.x, a.y - b.y) < 15 && span > 30;
  }
  let styleEl = null;

  // Applies a style change to the selection (and to the next shape)
  // record=false is used while a slider is dragged; the whole drag is recorded once when it ends
  function applyStyle(patch, record = true) {
    Object.assign(currentStyle, patch);
    const before = record ? snapshot() : null;
    board().shapes = shapesOf().map((s) => (selected.has(s.id) ? { ...s, ...patch } : s));
    if (record) commit(before);
    render();
  }

  // Moves the selected shapes one step up or down in the stacking order (later = on top)
  function moveLayer(dir) {
    const arr = [...shapesOf()];
    const before = snapshot();
    if (dir === "up") {
      for (let i = arr.length - 2; i >= 0; i--) {
        if (selected.has(arr[i].id) && !selected.has(arr[i + 1].id)) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } else {
      for (let i = 1; i < arr.length; i++) {
        if (selected.has(arr[i].id) && !selected.has(arr[i - 1].id)) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    board().shapes = arr;
    commit(before);
    render();
  }

  // Updates the panel's selected states and values; the layout itself is built once
  function renderStyle() {
    if (!styleEl) return;
    const sel = shapesOf().filter((s) => selected.has(s.id));
    const visible = sel.length > 0 || SHAPE_TOOLS.has(tool);
    styleEl.style.display = visible ? "flex" : "none";
    if (!visible) return;

    const cur = sel.length ? sel[0] : currentStyle;
    const fillName = cur.fill || "none";
    styleEl.querySelectorAll("[data-stroke]").forEach((b) => b.classList.toggle("on", b.dataset.stroke === cur.stroke));
    styleEl.querySelectorAll("[data-fill]").forEach((b) => b.classList.toggle("on", b.dataset.fill === fillName));
    styleEl.querySelectorAll("[data-width]").forEach((b) => b.classList.toggle("on", Number(b.dataset.width) === cur.width));
    styleEl.querySelector('input[data-kind="stroke"]').value = cur.stroke || PALETTE[0];
    styleEl.querySelector('input[data-kind="fill"]').value = cur.fill || "#ffffff";
    styleEl.querySelector('input[data-kind="transparency"]').value = cur.transparency ?? 0;
    styleEl.querySelector('input[data-kind="blur"]').value = cur.blur ?? 0;
  }

  let sliderBefore = null; // snapshot taken when a slider or picker starts changing

  function onStyleInput(e) {
    const t = e.target;
    const kind = t.dataset.kind;
    if (!kind) return;
    if (sliderBefore === null) sliderBefore = snapshot();
    const numeric = kind === "transparency" || kind === "blur";
    applyStyle({ [kind]: numeric ? Number(t.value) : t.value }, false);
  }

  function onStyleChange(e) {
    if (!e.target.dataset.kind || sliderBefore === null) return;
    commit(sliderBefore);
    sliderBefore = null;
  }

  function buildStylePanel() {
    const lineSwatches = PALETTE.map(
      (c) => `<button class="sw" data-stroke="${c}" style="background:${c}" aria-label="Line color"></button>`
    ).join("");
    const fillSwatches = FILLS.map(
      (f) =>
        `<button class="sw fl" data-fill="${f || "none"}"${f ? ` style="background:${f}"` : ""} aria-label="Fill"></button>`
    ).join("");
    const widths = WIDTHS.map(
      (w) => `<button class="wd" data-width="${w}" aria-label="Width ${w}"><i style="height:${w * 2}px"></i></button>`
    ).join("");

    styleEl = document.createElement("div");
    styleEl.id = "style";
    styleEl.innerHTML = `
      <div class="grp"><span class="lbl">Line</span><div class="bar">${lineSwatches}</div>
        <input type="color" class="pick" data-kind="stroke" aria-label="Custom line color" /></div>
      <div class="grp"><span class="lbl">Width</span>${widths}</div>
      <div class="grp"><span class="lbl">Fill</span><div class="bar">${fillSwatches}</div>
        <input type="color" class="pick" data-kind="fill" aria-label="Custom fill color" /></div>
      <div class="grp"><span class="lbl">Transparency</span>
        <input type="range" class="rng" min="0" max="100" step="1" data-kind="transparency" aria-label="Background transparency" /></div>
      <div class="grp"><span class="lbl">Blur</span>
        <input type="range" class="rng" min="0" max="10" step="1" data-kind="blur" aria-label="Blur" /></div>
      <div class="grp"><span class="lbl">Layer</span>
        <button class="tx" data-layer="up" aria-label="Bring forward">&#8593; Up</button>
        <button class="tx" data-layer="down" aria-label="Send backward">&#8595; Down</button></div>`;

    styleEl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      const d = b.dataset;
      if (d.stroke !== undefined) applyStyle({ stroke: d.stroke });
      else if (d.fill !== undefined) applyStyle({ fill: d.fill === "none" ? null : d.fill });
      else if (d.width !== undefined) applyStyle({ width: Number(d.width) });
      else if (d.layer !== undefined) moveLayer(d.layer);
    });
    styleEl.addEventListener("input", onStyleInput);
    styleEl.addEventListener("change", onStyleChange);
    document.body.appendChild(styleEl);
  }

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

  /* ---------- Text & sticky notes ---------- */

  const TEXT_SIZE = 20;
  const LINE_H = Math.round(TEXT_SIZE * 1.35);
  const FONT_FAMILY = '"Virgil", "Nirmala UI", "Segoe UI", system-ui, sans-serif';
  const NOTE_FILL = "#fff1a8";
  const NOTE_STROKE = "#d9c34a";
  const NOTE_W = 200;
  const NOTE_H = 160;
  const NOTE_PAD = 12;

  let editingId = null; // id of the shape whose text is being edited
  let editBefore = null; // snapshot to record in undo history when editing ends
  let editor = null; // the textarea overlay

  function setTextFont() {
    ctx.font = `${TEXT_SIZE}px ${FONT_FAMILY}`;
    ctx.textBaseline = "top";
  }

  // Wraps text to maxWidth. Breaks by character, so Bangla and English both wrap.
  function wrapText(text, maxWidth) {
    const lines = [];
    for (const para of String(text).split("\n")) {
      let line = "";
      for (const ch of para) {
        const next = line + ch;
        if (line && ctx.measureText(next).width > maxWidth) {
          lines.push(line);
          line = ch;
        } else {
          line = next;
        }
      }
      lines.push(line);
    }
    return lines;
  }

  function drawBoxText(s) {
    const b = bounds(s);
    ctx.save();
    if (s.type === "note") {
      ctx.fillStyle = NOTE_FILL;
      ctx.strokeStyle = NOTE_STROKE;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1, 4);
      ctx.fill();
      ctx.stroke();
    }
    // The shape being edited is shown by the textarea instead
    if (s.id !== editingId && s.text) {
      setTextFont();
      ctx.fillStyle = s.stroke || PALETTE[0];
      if (s.type === "note") {
        const maxW = Math.max(10, b.x2 - b.x1 - 2 * NOTE_PAD);
        wrapText(s.text, maxW).forEach((ln, i) => ctx.fillText(ln, b.x1 + NOTE_PAD, b.y1 + NOTE_PAD + i * LINE_H));
      } else {
        String(s.text)
          .split("\n")
          .forEach((ln, i) => ctx.fillText(ln, b.x1, b.y1 + i * LINE_H));
      }
    }
    ctx.restore();
  }

  // A text shape grows to fit its lines. Notes keep the size the user gave them.
  function fitTextBox(s) {
    setTextFont();
    const b = bounds(s);
    const lines = String(s.text).split("\n");
    const w = Math.max(8, ...lines.map((l) => ctx.measureText(l).width));
    s.x0 = b.x1;
    s.y0 = b.y1;
    s.x1 = b.x1 + w;
    s.y1 = b.y1 + lines.length * LINE_H;
  }

  function startTextAt(p) {
    const before = snapshot();
    const s = {
      id: newId(),
      type: "text",
      text: "",
      x0: p.x,
      y0: p.y,
      x1: p.x,
      y1: p.y + LINE_H,
      stroke: currentStyle.stroke,
      transparency: currentStyle.transparency,
      blur: currentStyle.blur,
    };
    shapesOf().push(s);
    beginEdit(s, before);
  }

  // Places the textarea over the shape, in screen coordinates
  function positionEditor() {
    const s = shapesOf().find((x) => x.id === editingId);
    if (!editor || !s) return;
    const cam = board().camera;
    const z = cam.zoom;
    const r = canvas.getBoundingClientRect();
    const b = bounds(s);
    const isNote = s.type === "note";
    const pad = isNote ? NOTE_PAD : 0;
    const boxW = b.x2 - b.x1 - 2 * pad;

    editor.style.left = r.left + cam.x + (b.x1 + pad) * z + "px";
    editor.style.top = r.top + cam.y + (b.y1 + pad) * z + "px";
    editor.style.width = Math.max(isNote ? 10 : 120, boxW * z + (isNote ? 0 : 12)) + "px";
    editor.style.fontSize = TEXT_SIZE * z + "px";
    editor.style.lineHeight = LINE_H * z + "px";
    editor.style.whiteSpace = isNote ? "pre-wrap" : "pre";
    editor.style.color = s.stroke || PALETTE[0];
    editor.style.height = "auto";
    editor.style.height = Math.max(LINE_H * z, editor.scrollHeight) + "px";
  }

  function beginEdit(s, before) {
    editingId = s.id;
    editBefore = before;

    editor = document.createElement("textarea");
    editor.className = "editor";
    editor.value = s.text || "";
    editor.spellcheck = false;
    document.body.appendChild(editor);

    editor.addEventListener("input", () => {
      const cur = shapesOf().find((x) => x.id === editingId);
      if (!cur) return;
      cur.text = editor.value;
      if (cur.type === "text") fitTextBox(cur);
      positionEditor();
      render();
    });
    editor.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        finishEditing();
      }
    });
    editor.addEventListener("blur", finishEditing);

    positionEditor();
    render();
    // Focus after the current pointer event finishes; focusing during pointerdown
    // lets the browser's mousedown focus change blur the editor immediately.
    requestAnimationFrame(() => {
      if (editor) editor.focus();
    });
  }

  // Ends the current edit: saves the text, removes the shape if it is empty, records undo history
  function finishEditing() {
    if (!editor) return;
    const ed = editor;
    const id = editingId;
    const before = editBefore;
    editor = null;
    editingId = null;
    editBefore = null;
    ed.remove();

    const s = shapesOf().find((x) => x.id === id);
    if (s) {
      s.text = ed.value;
      if (!s.text.trim()) {
        board().shapes = shapesOf().filter((x) => x !== s);
        selected.delete(id);
      } else {
        if (s.type === "text") fitTextBox(s);
        selected = new Set([id]);
      }
    }
    if (before !== undefined) commit(before);
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

    for (const s of shapesOf()) drawWithStyle(s);
    if (drawing) drawWithStyle(drawing);
    drawSelection(z);
    drawMarquee(z);
    if (editor) positionEditor();
    renderStyle();
  }

  // Applies the shape's opacity and blur around its normal drawing
  function drawWithStyle(s) {
    ctx.save();
    ctx.filter = s.blur ? `blur(${s.blur}px)` : "none";
    drawShape(s);
    ctx.restore();
  }

  function drawShape(s) {
    if (s.type === "text" || s.type === "note") {
      drawBoxText(s);
      return;
    }
    ctx.strokeStyle = s.stroke || PALETTE[0];
    ctx.lineWidth = s.width || 2;
    const x = Math.min(s.x0, s.x1);
    const y = Math.min(s.y0, s.y1);
    const w = Math.abs(s.x1 - s.x0);
    const h = Math.abs(s.y1 - s.y0);

    ctx.beginPath();
    switch (s.type) {
      case "rect":
        ctx.roundRect(x, y, w, h, 6);
        break;
      case "triangle":
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.closePath();
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
        if (isClosedPencil(s)) ctx.closePath();
        break;
    }
    if (s.fill && (CLOSED.has(s.type) || isClosedPencil(s))) {
      ctx.fillStyle = withAlpha(s.fill, 1 - (s.transparency ?? 0) / 100);
      ctx.fill();
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
    renderStyle();
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
      name: nextTabName(),
      shapes: [],
      camera: { x: 0, y: 0, zoom: 1 },
      history: [],
    });
    switchBoard(boards.length - 1);
  }

  // "Tab 01", "Tab 02", ... using the highest number in use plus one
  function nextTabName() {
    const top = boards.reduce((m, b) => Math.max(m, parseInt(b.name.replace("Tab ", ""), 10) || 0), 0);
    return `Tab ${String(top + 1).padStart(2, "0")}`;
  }

  function removeBoard(index) {
    if (boards.length === 1) return;
    finishEditing();
    boards.splice(index, 1);
    if (index < active) active--;
    else if (index === active) active = Math.min(index, boards.length - 1);
    selected = new Set();
    gesture = null;
    drawing = null;
    renderTabs();
    render();
  }

  function switchBoard(index) {
    finishEditing();
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
    finishEditing();
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

    // Text: click to place and start typing
    if (tool === "text") {
      startTextAt(p);
      return;
    }

    // Shape tools (rect, diamond, ellipse, arrow, line, pencil) and Note (drag to size)
    drawing = { id: null, type: tool, x0: p.x, y0: p.y, x1: p.x, y1: p.y, points: [p],
      text: "",
      stroke: currentStyle.stroke,
      width: currentStyle.width,
      fill: currentStyle.fill,
      transparency: currentStyle.transparency,
      blur: currentStyle.blur,
    };
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
    let created = null;
    if (drawing) {
      let big = Math.hypot(drawing.x1 - drawing.x0, drawing.y1 - drawing.y0) > 2;
      if (drawing.type === "note" && !big) {
        drawing.x1 = drawing.x0 + NOTE_W;
        drawing.y1 = drawing.y0 + NOTE_H;
        big = true;
      }
      if (big || drawing.type === "pencil") {
        drawing.id = newId();
        if (isClosedPencil(drawing)) {
          drawing.points[drawing.points.length - 1] = { ...drawing.points[0] };
        }
        shapesOf().push(drawing);
        created = drawing;
      }
      drawing = null;
    }
    const before = gesture && gesture.before;
    gesture = null;
    updateCursor();

    // A new note opens straight into editing; the edit records the undo step
    if (created && created.type === "note") {
      beginEdit(created, before);
      return;
    }
    if (before !== undefined) commit(before);
    render();
  }
  canvas.addEventListener("pointerup", endGesture);
  canvas.addEventListener("pointercancel", endGesture);

  // Double-click a text or note with the Select tool to edit it
  canvas.addEventListener("dblclick", (e) => {
    if (tool !== "select") return;
    const hit = topmostAt(eventToWorld(e));
    if (hit && (hit.type === "text" || hit.type === "note")) {
      selected = new Set([hit.id]);
      beginEdit(hit, snapshot());
    }
  });

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
      if (t.id === "rect" || t.id === "note") {
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
      const wrap = document.createElement("div");
      wrap.className = "tab-wrap" + (i === active ? " active" : "");

      const btn = document.createElement("button");
      btn.className = "tab";
      btn.textContent = b.name;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(i === active));
      btn.addEventListener("click", () => switchBoard(i));

      const x = document.createElement("button");
      x.className = "tab-x";
      x.title = "Close tab";
      x.setAttribute("aria-label", `Close ${b.name}`);
      x.textContent = "×";
      x.style.display = boards.length > 1 ? "" : "none";
      x.addEventListener("click", (e) => {
        e.stopPropagation();
        removeBoard(i);
      });

      wrap.append(btn, x);
      tabsEl.appendChild(wrap);
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
  buildStylePanel();
  resize();

  // Canvas text is drawn once the font is ready, so redraw after it loads
  if (document.fonts) {
    document.fonts.load(`${TEXT_SIZE}px Virgil`).then(render).catch(() => {});
  }
})();
