/* PADA - Step 2: select, move, resize, multi-select, delete, undo history */
(function () {
  "use strict";

  const canvas = document.getElementById("board");
  let ctx = canvas.getContext("2d");
  const tabsEl = document.getElementById("tabs");
  const toolbarEl = document.getElementById("toolbar");

  const ACCENT = "#4f46e5";
  const MAX_HISTORY = 100;
  const TEXT_SIZE = 12; // default font size for text and notes

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
    { id: "polyline", label: "Polyline", key: "m" },
    { id: "laser", label: "Laser", key: "z" },
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
    polyline: '<path d="M3 18l5-7 4 4 4-6 5 5"/><circle cx="3" cy="18" r="1.5"/><circle cx="21" cy="16" r="1.5"/>',
    laser: '<circle cx="12" cy="12" r="2.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
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
  const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32, 40, 48];
  const CLOSED = new Set(["rect", "diamond", "ellipse", "triangle"]); // shapes that can be filled
  const SHAPE_TOOLS = new Set(["rect", "diamond", "triangle", "ellipse", "arrow", "line", "pencil", "polyline", "text", "note"]);

  // Style used for the next shape you draw.
  // transparency (0-100) fades the fill only; blur (0-10) softens the whole shape.
  const currentStyle = {
    stroke: PALETTE[0],
    width: 2,
    fill: null,
    transparency: 0,
    blur: 0,
    fontSize: TEXT_SIZE,
    family: "virgil",
  };

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
    if (patch.fontSize || patch.family) {
      for (const s of shapesOf()) if ((s.type === "text" || s.type === "note") && selected.has(s.id)) fitTextBox(s);
    }
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
    const textOnly = sel.length ? sel.every((s) => s.type === "text") : tool === "text";
    const hasText = sel.length ? sel.some((s) => s.type === "text" || s.type === "note") : tool === "text" || tool === "note";
    const group = (name) => styleEl.querySelector(`[data-group="${name}"]`);
    group("fill").hidden = textOnly;
    group("transp").hidden = textOnly;
    group("width").hidden = textOnly;
    group("font").hidden = !hasText;
    group("word").hidden = !hasText;
    styleEl.querySelector('[data-role="line-label"]').textContent = textOnly ? "Color" : "Line";
    styleEl.querySelector('select[data-kind="fontSize"]').value = String(cur.fontSize ?? TEXT_SIZE);
    styleEl.querySelector('select[data-kind="family"]').value = cur.family || "virgil";

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
    if (!kind || kind === "wordSize") return;
    if (sliderBefore === null) sliderBefore = snapshot();
    const numeric = kind === "transparency" || kind === "blur" || kind === "fontSize";
    // (fontSize comes from the dropdown as text and is converted here)
    applyStyle({ [kind]: numeric ? Number(t.value) : t.value }, false);
  }

  function onStyleChange(e) {
    if (e.target.dataset.kind === "wordSize") {
      if (e.target.value) applyWordFormat({ size: Number(e.target.value) });
      e.target.value = "";
      return;
    }
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
    const wordBg = FILLS.map(
      (f) =>
        `<button class="sw fl" data-word-bg="${f || "none"}"${f ? ` style="background:${f}"` : ""} aria-label="Word background"></button>`
    ).join("");
    const widths = WIDTHS.map(
      (w) => `<button class="wd" data-width="${w}" aria-label="Width ${w}"><i style="height:${w * 2}px"></i></button>`
    ).join("");

    styleEl = document.createElement("div");
    styleEl.id = "style";
    styleEl.innerHTML = `
      <div class="grp"><span class="lbl" data-role="line-label">Line</span><div class="bar">${lineSwatches}</div>
        <input type="color" class="pick" data-kind="stroke" aria-label="Custom line color" /></div>
      <div class="grp" data-group="width"><span class="lbl">Width</span>${widths}</div>
      <div class="grp" data-group="fill"><span class="lbl">Fill</span><div class="bar">${fillSwatches}</div>
        <input type="color" class="pick" data-kind="fill" aria-label="Custom fill color" /></div>
      <div class="grp" data-group="transp"><span class="lbl">Transparency</span>
        <input type="range" class="rng" min="0" max="100" step="1" data-kind="transparency" aria-label="Background transparency" /></div>
      <div class="grp"><span class="lbl">Blur</span>
        <input type="range" class="rng" min="0" max="10" step="1" data-kind="blur" aria-label="Blur" /></div>
      <div class="grp" data-group="word"><span class="lbl">Word size</span>
        <select class="fsel" data-kind="wordSize" aria-label="Word size"><option value="">—</option>${FONT_SIZES.map((n) => `<option value="${n}">${n}</option>`).join("")}</select>
        <span class="lbl">Word bg</span><div class="bar">${wordBg}</div></div>
      <div class="grp" data-group="font"><span class="lbl">Font size</span>
        <select class="fsel" data-kind="fontSize" aria-label="Font size">${FONT_SIZES.map((n) => `<option value="${n}">${n}</option>`).join("")}</select>
        <select class="fsel" data-kind="family" aria-label="Font family">${Object.entries(FAMILIES).map(([k, f]) => `<option value="${k}">${f.label}</option>`).join("")}</select></div>
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
      else if (d.wordBg !== undefined) applyWordFormat({ bg: d.wordBg === "none" ? null : d.wordBg });
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
    if (s.type === "pencil" || s.type === "polyline") {
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
  function hitShape(s, p0, m) {
    const p = s.angle ? rotatePt(p0, centerOf(s), -s.angle) : p0;
    if (s.type === "line" || s.type === "arrow") {
      return distToSegment(p, { x: s.x0, y: s.y0 }, { x: s.x1, y: s.y1 }) <= m;
    }
    if (s.type === "polyline") {
      const pts = s.closed ? [...s.points, s.points[0]] : s.points;
      for (let i = 1; i < pts.length; i++) if (distToSegment(p, pts[i - 1], pts[i]) <= m) return true;
      return false;
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
    if (singleLine()) return null;
    const box = selectionBox();
    if (!box) return null;
    const tol = 10 / board().camera.zoom;
    const hp = frameHandles(box);
    for (const k of Object.keys(hp)) {
      if (Math.abs(p.x - hp[k].x) <= tol && Math.abs(p.y - hp[k].y) <= tol) return k;
    }
    return null;
  }

  // Returns a copy of a shape with every point passed through f(x, y) -> {x, y}
  function mapShape(src, f) {
    const out = { ...src };
    if (src.type === "pencil" || src.type === "polyline") {
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

  /* ---------- Connecting lines & arrows to shapes ---------- */

  const BIND_DIST = 16; // screen px: how close a line end must be to a shape to connect to it

  // The midpoint of one side of a box: n (top), e (right), s (bottom), w (left)
  function sidePoint(b, side) {
    const mx = (b.x1 + b.x2) / 2;
    const my = (b.y1 + b.y2) / 2;
    if (side === "n") return { x: mx, y: b.y1 };
    if (side === "s") return { x: mx, y: b.y2 };
    if (side === "w") return { x: b.x1, y: my };
    return { x: b.x2, y: my };
  }

  // The shape a line end would connect to, if the point is on it or close enough
  function bindTarget(p) {
    const d = BIND_DIST / board().camera.zoom;
    const arr = shapesOf();
    for (let i = arr.length - 1; i >= 0; i--) {
      const s = arr[i];
      if (s.type === "line" || s.type === "arrow" || s.type === "pencil") continue;
      const b = bounds(s);
      if (p.x >= b.x1 - d && p.x <= b.x2 + d && p.y >= b.y1 - d && p.y <= b.y2 + d) return s;
    }
    return null;
  }

  // The side midpoint closest to a point
  function nearestSide(s, p) {
    const b = bounds(s);
    let best = "n";
    let bestDist = Infinity;
    for (const side of ["n", "e", "s", "w"]) {
      const q = anchorOf(s, side);
      const dist = Math.hypot(q.x - p.x, q.y - p.y);
      if (dist < bestDist) {
        bestDist = dist;
        best = side;
      }
    }
    return best;
  }

  // Keeps connected line ends on their shapes, so moving or resizing a shape drags its arrows along
  function syncBindings() {
    const byId = new Map(shapesOf().map((s) => [s.id, s]));
    for (const s of shapesOf()) {
      if (s.bindStart && byId.has(s.bindStart)) {
        const p = anchorOf(byId.get(s.bindStart), s.bindStartSide);
        s.x0 = p.x;
        s.y0 = p.y;
      }
      if (s.bindEnd && byId.has(s.bindEnd)) {
        const p = anchorOf(byId.get(s.bindEnd), s.bindEndSide);
        s.x1 = p.x;
        s.y1 = p.y;
      }
    }
  }

  // Moving or resizing a selected line or arrow by hand detaches it from its shapes
  function detachSelectedLines() {
    for (const s of shapesOf()) {
      if (!selected.has(s.id) || (s.type !== "line" && s.type !== "arrow")) continue;
      delete s.bindStart;
      delete s.bindStartSide;
      delete s.bindEnd;
      delete s.bindEndSide;
    }
  }

  // While drawing an arrow or line, outline the shape its end would connect to
  function drawBindHint(z) {
    if (!drawing || (drawing.type !== "arrow" && drawing.type !== "line")) return;
    const t = bindTarget({ x: drawing.x1, y: drawing.y1 });
    if (!t) return;
    const b = bounds(t);
    const pad = 4 / z;
    ctx.save();
    ctx.strokeStyle = ACCENT;
    ctx.lineWidth = 2 / z;
    ctx.strokeRect(b.x1 - pad, b.y1 - pad, b.x2 - b.x1 + 2 * pad, b.y2 - b.y1 + 2 * pad);
    ctx.restore();
  }

  /* ---------- Rotation ---------- */

  const ROT_OFFSET = 28; // screen px above the selection's top edge
  const ROT_ZONE = 36; // screen px: the pointer must be this close to show or grab the rotate button
  let rotHover = false;

  // Rotates point p around c by angle a (radians, clockwise on screen)
  function rotatePt(p, c, a) {
    const cs = Math.cos(a);
    const sn = Math.sin(a);
    const dx = p.x - c.x;
    const dy = p.y - c.y;
    return { x: c.x + dx * cs - dy * sn, y: c.y + dx * sn + dy * cs };
  }

  function centerOf(s) {
    const b = bounds(s);
    return { x: (b.x1 + b.x2) / 2, y: (b.y1 + b.y2) / 2 };
  }

  // Connection point on one side of a shape, following the shape's rotation
  function anchorOf(s, side) {
    const p = sidePoint(bounds(s), side);
    return s.angle ? rotatePt(p, centerOf(s), s.angle) : p;
  }

  // The selection frame follows a single shape's angle; a group frame stays level
  function frameAngle() {
    const sel = shapesOf().filter((s) => selected.has(s.id));
    return sel.length === 1 ? sel[0].angle || 0 : 0;
  }

  function frameHandles(b) {
    const a = frameAngle();
    const hp = handlePoints(b);
    if (!a) return hp;
    const c = { x: (b.x1 + b.x2) / 2, y: (b.y1 + b.y2) / 2 };
    const out = {};
    for (const k of Object.keys(hp)) out[k] = rotatePt(hp[k], c, a);
    return out;
  }

  // The rotate button sits above the top edge of the selection frame
  function rotButtonPos() {
    const box = selectionBox();
    if (!box) return null;
    const z = board().camera.zoom;
    const a = frameAngle();
    const c = { x: (box.x1 + box.x2) / 2, y: (box.y1 + box.y2) / 2 };
    const top = { x: c.x, y: box.y1 - ROT_OFFSET / z };
    return a ? rotatePt(top, c, a) : top;
  }

  function nearRotButton(p) {
    const pos = rotButtonPos();
    if (!pos) return false;
    return Math.hypot(p.x - pos.x, p.y - pos.y) <= ROT_ZONE / board().camera.zoom;
  }

  function drawRotateButton(z) {
    const pos = rotButtonPos();
    if (!pos || !(rotHover || (gesture && gesture.type === "rotate"))) return;
    const box = selectionBox();
    const a = frameAngle();
    const c = { x: (box.x1 + box.x2) / 2, y: (box.y1 + box.y2) / 2 };
    const edge = a ? rotatePt({ x: c.x, y: box.y1 }, c, a) : { x: c.x, y: box.y1 };
    const r = 11 / z;

    ctx.save();
    ctx.setLineDash([]);
    ctx.strokeStyle = ACCENT;
    ctx.lineWidth = 1 / z;
    ctx.beginPath();
    ctx.moveTo(edge.x, edge.y);
    ctx.lineTo(pos.x, pos.y + r);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 1.6 / z;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r * 0.55, -0.6, Math.PI * 1.4);
    ctx.stroke();
    ctx.restore();
  }

  /* ---------- Polyline ---------- */

  let polyDraft = null; // { points, before } while corners are being added
  let polyCursor = null; // where the pointer is, to draw the next segment

  // Ends the polyline: closed (its first corner was clicked) or open (Enter, double-click or tool change)
  function finishPoly(closed) {
    if (!polyDraft) return;
    const z = board().camera.zoom;
    const pts = polyDraft.points.filter(
      (q, i, arr) => i === 0 || Math.hypot(q.x - arr[i - 1].x, q.y - arr[i - 1].y) > 1 / z
    );
    const before = polyDraft.before;
    polyDraft = null;
    polyCursor = null;
    if (pts.length >= 2) {
      const s = {
        id: newId(),
        type: "polyline",
        points: pts,
        closed: closed && pts.length >= 3,
        stroke: currentStyle.stroke,
        width: currentStyle.width,
        fill: currentStyle.fill,
        transparency: currentStyle.transparency,
        blur: currentStyle.blur,
      };
      shapesOf().push(s);
      selected = new Set([s.id]);
      commit(before);
    }
    render();
  }

  // The dashed guide while a polyline is being drawn
  function drawPolyDraft(z) {
    if (!polyDraft) return;
    const pts = polyDraft.points;
    ctx.save();
    ctx.strokeStyle = ACCENT;
    ctx.lineWidth = 2 / z;
    ctx.setLineDash([6 / z, 4 / z]);
    ctx.beginPath();
    pts.forEach((q, i) => (i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y)));
    if (polyCursor) ctx.lineTo(polyCursor.x, polyCursor.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(pts[0].x, pts[0].y, 5 / z, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  /* ---------- Line endpoints ---------- */

  // The selected line or arrow, when exactly one is selected and it is not rotated
  function singleLine() {
    const sel = shapesOf().filter((s) => selected.has(s.id));
    if (sel.length !== 1) return null;
    const s = sel[0];
    return (s.type === "line" || s.type === "arrow") && !s.angle ? s : null;
  }

  // Which end of the selected line the point is on: "start", "end", or null
  function endpointAt(p) {
    const s = singleLine();
    if (!s) return null;
    const tol = 10 / board().camera.zoom;
    if (Math.hypot(p.x - s.x0, p.y - s.y0) <= tol) return "start";
    if (Math.hypot(p.x - s.x1, p.y - s.y1) <= tol) return "end";
    return null;
  }

  // Moves one end of a line. Released on a shape, the end connects to it; otherwise it is free.
  function moveEndpoint(s, which, p) {
    const key = which === "start" ? "Start" : "End";
    const t = bindTarget(p);
    let q = p;
    if (t) {
      const side = nearestSide(t, p);
      s["bind" + key] = t.id;
      s["bind" + key + "Side"] = side;
      q = anchorOf(t, side);
    } else {
      delete s["bind" + key];
      delete s["bind" + key + "Side"];
    }
    if (which === "start") {
      s.x0 = q.x;
      s.y0 = q.y;
    } else {
      s.x1 = q.x;
      s.y1 = q.y;
    }
  }

  // Round handles at the two ends of the selected line
  function drawEndpoints(z) {
    const s = singleLine();
    if (!s) return;
    ctx.save();
    ctx.strokeStyle = ACCENT;
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = 1.5 / z;
    for (const q of [
      { x: s.x0, y: s.y0 },
      { x: s.x1, y: s.y1 },
    ]) {
      ctx.beginPath();
      ctx.arc(q.x, q.y, 5 / z, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();
  }

  /* ---------- Grid, snapping, clipboard, nudging ---------- */

  const GRID = 20; // world units between grid lines
  let snapOn = true; // Ctrl+G turns the grid and snapping on or off; hold Alt to skip snapping while dragging
  let snapGuides = null; // { x, y }: lines shown while a move snaps to something
  let clipboard = null; // shapes copied with Ctrl+C; kept in memory, so they paste into any tab
  let pasteCount = 0;

  function boxOf(map) {
    let box = null;
    for (const s of map.values()) {
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

  // Snaps a move so the selection's left, centre or right (and top, middle, bottom) line up
  // with other shapes or with the grid
  function snapMove(startMap, dx, dy) {
    snapGuides = null;
    if (!snapOn) return { dx, dy };
    const tol = 6 / board().camera.zoom;
    const box = boxOf(startMap);
    const mine = {
      x: [box.x1, (box.x1 + box.x2) / 2, box.x2],
      y: [box.y1, (box.y1 + box.y2) / 2, box.y2],
    };
    const others = shapesOf()
      .filter((s) => !selected.has(s.id))
      .map((s) => bounds(s));
    const targets = {
      x: others.flatMap((b) => [b.x1, (b.x1 + b.x2) / 2, b.x2]),
      y: others.flatMap((b) => [b.y1, (b.y1 + b.y2) / 2, b.y2]),
    };

    const pick = (axis, delta) => {
      let best = null;
      for (const m of mine[axis]) {
        const moved = m + delta;
        for (const t of [...targets[axis], Math.round(moved / GRID) * GRID]) {
          const off = t - moved;
          if (Math.abs(off) <= tol && (best === null || Math.abs(off) < Math.abs(best.off))) best = { off, guide: t };
        }
      }
      return best;
    };

    const sx = pick("x", dx);
    const sy = pick("y", dy);
    snapGuides = { x: sx ? sx.guide : null, y: sy ? sy.guide : null };
    return { dx: dx + (sx ? sx.off : 0), dy: dy + (sy ? sy.off : 0) };
  }

  // Faint grid dots, drawn only when the grid is on and the dots are big enough to see
  function drawGrid(z) {
    if (!snapOn || GRID * z < 10 || board().bg === "transparent") return;
    const a = screenToWorld(0, 0);
    const b = screenToWorld(window.innerWidth, window.innerHeight);
    const r = 1 / z;
    ctx.save();
    ctx.fillStyle = "#d9d6e8";
    for (let x = Math.ceil(a.x / GRID) * GRID; x <= b.x; x += GRID) {
      for (let y = Math.ceil(a.y / GRID) * GRID; y <= b.y; y += GRID) {
        ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
      }
    }
    ctx.restore();
  }

  function drawSnapGuides(z) {
    if (!snapGuides) return;
    const a = screenToWorld(0, 0);
    const b = screenToWorld(window.innerWidth, window.innerHeight);
    ctx.save();
    ctx.strokeStyle = "#e03131";
    ctx.lineWidth = 1 / z;
    ctx.setLineDash([4 / z, 4 / z]);
    if (snapGuides.x !== null) {
      ctx.beginPath();
      ctx.moveTo(snapGuides.x, a.y);
      ctx.lineTo(snapGuides.x, b.y);
      ctx.stroke();
    }
    if (snapGuides.y !== null) {
      ctx.beginPath();
      ctx.moveTo(a.x, snapGuides.y);
      ctx.lineTo(b.x, snapGuides.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Copies of shapes with new ids; connections between the copies are kept, others are dropped
  function cloneWithNewIds(list, dx, dy) {
    const idMap = new Map(list.map((s) => [s.id, newId()]));
    return list.map((s) => {
      const c = JSON.parse(JSON.stringify(s));
      c.id = idMap.get(s.id);
      if (c.bindStart && idMap.has(c.bindStart)) c.bindStart = idMap.get(c.bindStart);
      else {
        delete c.bindStart;
        delete c.bindStartSide;
      }
      if (c.bindEnd && idMap.has(c.bindEnd)) c.bindEnd = idMap.get(c.bindEnd);
      else {
        delete c.bindEnd;
        delete c.bindEndSide;
      }
      return dx || dy ? mapShape(c, (x, y) => ({ x: x + dx, y: y + dy })) : c;
    });
  }

  function copySelection() {
    const list = shapesOf().filter((s) => selected.has(s.id));
    if (!list.length) return;
    clipboard = JSON.parse(JSON.stringify(list));
    pasteCount = 0;
  }

  function cutSelection() {
    if (!selected.size) return;
    copySelection();
    deleteSelected();
  }

  // Each paste lands slightly further along, so repeated pastes are visible
  function pasteClipboard() {
    if (!clipboard || !clipboard.length) return;
    finishEditing();
    const before = snapshot();
    pasteCount++;
    const off = 20 * pasteCount;
    const copies = cloneWithNewIds(clipboard, off, off);
    for (const c of copies) shapesOf().push(c);
    selected = new Set(copies.map((c) => c.id));
    commit(before);
    render();
  }

  // Arrow keys move the selection: 1 unit, or 10 with Shift
  function nudgeSelection(dx, dy) {
    const before = snapshot();
    detachSelectedLines();
    board().shapes = shapesOf().map((s) =>
      selected.has(s.id) ? mapShape(s, (x, y) => ({ x: x + dx, y: y + dy })) : s
    );
    commit(before);
    render();
  }

  /* ---------- Laser pointer & quick colour ---------- */

  const LASER_MS = 1200; // how long a laser trail stays visible
  let laserTrail = []; // { x, y, t }: points drawn by the laser, not part of the board
  let laserRunning = false;

  // Keeps the trail fading until it has disappeared
  function startLaserFade() {
    if (laserRunning) return;
    laserRunning = true;
    const step = () => {
      const now = Date.now();
      laserTrail = laserTrail.filter((q) => now - q.t < LASER_MS);
      render();
      if (laserTrail.length) requestAnimationFrame(step);
      else laserRunning = false;
    };
    requestAnimationFrame(step);
  }

  function drawLaser(z) {
    if (laserTrail.length < 2) return;
    const now = Date.now();
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = 4 / z;
    for (let i = 1; i < laserTrail.length; i++) {
      const a = laserTrail[i - 1];
      const b = laserTrail[i];
      const alpha = Math.max(0, 1 - (now - b.t) / LASER_MS);
      ctx.strokeStyle = `rgba(224, 49, 49, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Colour 1-8 from the palette: applies to the selection, or to the next shape
  function applyColorIndex(i) {
    const c = PALETTE[i - 1];
    if (c) applyStyle({ stroke: c });
  }

  /* ---------- Camera ---------- */

  let camMenuOpen = false;
  let camMenuEl = null;
  let camCam = null; // webcam stream
  let camVirt = null; // the board's picture as a video stream
  let camShape = "rect"; // "rect" or "round"
  let dragCam = null; // offset while the preview box is being dragged

  function stopStream(stream) {
    if (stream) stream.getTracks().forEach((t) => t.stop());
  }

  // One preview box shows the virtual camera if it is on, otherwise the webcam
  function refreshPreview() {
    const stream = camVirt || camCam;
    let box = document.getElementById("cam-box");
    if (!stream) {
      if (box) box.remove();
      return;
    }
    if (!box) {
      box = document.createElement("div");
      box.id = "cam-box";
      box.innerHTML = '<div class="cb-title"></div><video autoplay muted playsinline></video>';
      box.style.left = window.innerWidth - 272 + "px";
      box.style.top = "56px";
      box.style.right = "auto";
      // Drag the preview anywhere inside the window
      box.addEventListener("pointerdown", (e) => {
        if (e.target.tagName === "BUTTON") return;
        dragCam = { dx: e.clientX - box.offsetLeft, dy: e.clientY - box.offsetTop };
        box.setPointerCapture(e.pointerId);
      });
      box.addEventListener("pointermove", (e) => {
        if (!dragCam) return;
        const left = Math.min(window.innerWidth - box.offsetWidth, Math.max(0, e.clientX - dragCam.dx));
        const top = Math.min(window.innerHeight - box.offsetHeight, Math.max(0, e.clientY - dragCam.dy));
        box.style.left = left + "px";
        box.style.top = top + "px";
      });
      box.addEventListener("pointerup", () => {
        dragCam = null;
      });
      document.body.appendChild(box);
    }
    box.classList.toggle("round", camShape === "round");
    const video = box.querySelector("video");
    if (video.srcObject !== stream) video.srcObject = stream;
    box.querySelector(".cb-title").textContent = camVirt ? "Virtual camera (PADA)" : "Camera";
  }

  async function runCamAction(action) {
    if (action === "show-round" || action === "show-rect") {
      camShape = action === "show-round" ? "round" : "rect";
      action = "show";
    }
    if (action === "show") {
      if (!camCam) {
        try {
          camCam = await navigator.mediaDevices.getUserMedia({ video: true });
        } catch (err) {
          alert("ক্যামেরা চালু করা যায়নি: " + err.message);
          return;
        }
      }
    } else if (action === "off") {
      stopStream(camCam);
      camCam = null;
    } else if (action === "vstart") {
      // The board's canvas as a live video stream (shown here; other apps need a virtual camera driver)
      if (!camVirt) camVirt = canvas.captureStream(30);
    } else if (action === "voff") {
      stopStream(camVirt);
      camVirt = null;
    }
    refreshPreview();
  }

  function renderCamMenu() {
    if (camMenuEl) camMenuEl.style.display = camMenuOpen ? "flex" : "none";
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
    board().redo = [];
  }

  // Restores a saved state and keeps the current one for the opposite action
  function restore(from, to) {
    if (!from.length) return;
    to.push(snapshot());
    board().shapes = JSON.parse(from.pop());
    const ids = new Set(shapesOf().map((s) => s.id));
    for (const id of [...selected]) if (!ids.has(id)) selected.delete(id);
    render();
  }

  function undo() {
    if (!board().redo) board().redo = [];
    restore(board().history, board().redo);
  }

  function redo() {
    if (!board().redo) board().redo = [];
    restore(board().redo, board().history);
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

  const FONT_FAMILY = '"Virgil", "Nirmala UI", "Segoe UI", system-ui, sans-serif';

  // Font choices for text and notes (the key is stored on each shape)
  const FAMILIES = {
    virgil: { label: "Hand (Virgil)", css: FONT_FAMILY },
    mono: { label: "Monospace", css: '"PADA Mono", Consolas, "Courier New", monospace' },
    sans: { label: "Sans", css: '"Segoe UI", system-ui, sans-serif' },
  };
  const familyOf = (s) => (FAMILIES[s.family] || FAMILIES.virgil).css;
  const NOTE_FILL = "#fff1a8";
  const NOTE_STROKE = "#d9c34a";
  const NOTE_W = 200;
  const NOTE_H = 160;
  const NOTE_PAD = 12;

  let editingId = null; // id of the shape whose text is being edited
  let editBefore = null; // snapshot to record in undo history when editing ends
  let editor = null; // the textarea overlay
  let lastRange = null; // { id, from, to }: the characters last selected in the editor, for word styling

  const sizeOf = (s) => s.fontSize || TEXT_SIZE;

  // Narrowest width a text box can have: its longest word, since wrapping never splits a word
  function minTextWidth(s) {
    setTextFont(sizeOf(s));
    return Math.max(8, ...String(s.text).split(/\s+/).map((w) => ctx.measureText(w).width));
  }
  const lineHeightOf = (size) => Math.round(size * 1.35);

  // Font for one run of characters; alphabetic baseline so lines of mixed sizes line up
  function setCharFont(size, css = FONT_FAMILY) {
    ctx.font = `${size}px ${css}`;
    ctx.textBaseline = "alphabetic";
  }

  // Lays out a text or note. maxW = Infinity means no wrapping (lines break only at \n).
  // Words wrap as whole words; each character keeps its own size and background (s.attrs[i]).
  function layoutRich(s, maxW) {
    const text = String(s.text || "");
    const attrs = s.attrs || [];
    const base = sizeOf(s);
    const lines = [];
    let line = { items: [], w: 0, size: base };
    let word = [];
    let maxWordW = 0;
    let maxLineW = 0;

    const endLine = () => {
      lines.push(line);
      maxLineW = Math.max(maxLineW, line.w);
      line = { items: [], w: 0, size: base };
    };
    const flushWord = () => {
      if (!word.length) return;
      const ww = word.reduce((t, it) => t + it.w, 0);
      maxWordW = Math.max(maxWordW, ww);
      if (line.items.length && line.w + ww > maxW) endLine();
      for (const it of word) {
        line.items.push(it);
        line.w += it.w;
        line.size = Math.max(line.size, it.size);
      }
      word = [];
    };

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const a = attrs[i] || {};
      const size = a.size || base;
      if (ch === "\n") {
        flushWord();
        endLine();
        continue;
      }
      setCharFont(size, familyOf(s));
      const item = { t: ch, w: ctx.measureText(ch).width, size, bg: a.bg || null };
      if (ch === " ") {
        flushWord();
        line.items.push(item);
        line.w += item.w;
        line.size = Math.max(line.size, size);
      } else {
        word.push(item);
      }
    }
    flushWord();
    endLine();

    for (const ln of lines) {
      ln.h = lineHeightOf(ln.size);
      ln.base = Math.round(ln.size * 1.05);
    }
    return { lines, maxWordW, maxLineW, height: lines.reduce((t, ln) => t + ln.h, 0) };
  }

  // Keeps per-character formatting aligned when the text is edited: typed characters take the style before them
  function diffAttrs(oldT, newT, oldA = []) {
    let p = 0;
    while (p < oldT.length && p < newT.length && oldT[p] === newT[p]) p++;
    let q = 0;
    while (q < oldT.length - p && q < newT.length - p && oldT[oldT.length - 1 - q] === newT[newT.length - 1 - q]) q++;
    const inherit = p > 0 ? oldA[p - 1] || null : null;
    const head = Array.from({ length: p }, (_, i) => oldA[i] || null);
    const mid = Array.from({ length: newT.length - p - q }, () => (inherit ? { ...inherit } : null));
    const tail = Array.from({ length: q }, (_, i) => oldA[oldT.length - q + i] || null);
    return [...head, ...mid, ...tail];
  }

  // Applies a per-word style (size or background) to the characters selected in the editor
  function applyWordFormat(patch) {
    const r = lastRange;
    if (!r || !selected.has(r.id) || r.from === r.to) return;
    const s = shapesOf().find((x) => x.id === r.id);
    if (!s) return;
    const before = snapshot();
    const attrs = Array.from({ length: (s.text || "").length }, (_, i) => (s.attrs && s.attrs[i]) || null);
    for (let i = r.from; i < r.to; i++) attrs[i] = { ...(attrs[i] || {}), ...patch };
    s.attrs = attrs;
    if (s.type === "text" || s.type === "note") fitTextBox(s);
    lastRange = null;
    commit(before);
    render();
  }

  function setTextFont(size = TEXT_SIZE) {
    ctx.font = `${size}px ${FONT_FAMILY}`;
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
      // Notes start yellow; a Fill colour chosen in the panel replaces it (none = transparent)
      const fill = s.fill === undefined ? NOTE_FILL : s.fill;
      ctx.strokeStyle = NOTE_STROKE;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1, 4);
      if (fill) {
        ctx.fillStyle = withAlpha(fill, 1 - (s.transparency ?? 0) / 100);
        ctx.fill();
      }
      ctx.stroke();
    }
    // The shape being edited is shown by the textarea instead
    if (s.id !== editingId && s.text) {
      const pad = s.type === "note" ? NOTE_PAD : 0;
      const maxW = s.type === "text" && s.autoW !== false ? Infinity : b.x2 - b.x1 - 2 * pad;
      const lay = layoutRich(s, maxW);
      let y = b.y1 + pad;
      for (const line of lay.lines) {
        let x = b.x1 + pad;
        for (const it of line.items) {
          if (it.bg) {
            ctx.fillStyle = it.bg;
            ctx.fillRect(x, y, it.w, line.h);
          }
          setCharFont(it.size, familyOf(s));
          ctx.fillStyle = s.stroke || PALETTE[0];
          ctx.fillText(it.t, x, y + line.base);
          x += it.w;
        }
        y += line.h;
      }
    }
    ctx.restore();
  }

  // A text shape grows to fit its lines. Notes keep the size the user gave them.
  function fitTextBox(s) {
    const b = bounds(s);
    const isNote = s.type === "note";
    const pad = isNote ? NOTE_PAD : 0;
    const probe = layoutRich(s, Infinity);
    const minW = probe.maxWordW + 2 * pad;
    const w = !isNote && s.autoW !== false ? Math.max(8, probe.maxLineW) : Math.max(minW, b.x2 - b.x1);
    const lay = layoutRich(s, w - 2 * pad);
    const h = isNote ? Math.max(NOTE_H, lay.height + 2 * pad) : Math.max(lay.height, lineHeightOf(sizeOf(s)));
    s.x0 = b.x1;
    s.y0 = b.y1;
    s.x1 = b.x1 + w;
    s.y1 = b.y1 + h;
  }

  // After a resize, text shapes keep their new width (no longer auto-sized) and wrap to it
  function refitTexts() {
    for (const s of shapesOf()) {
      if ((s.type !== "text" && s.type !== "note") || !selected.has(s.id)) continue;
      s.autoW = false;
      fitTextBox(s);
    }
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
      y1: p.y + lineHeightOf(currentStyle.fontSize),
      fontSize: currentStyle.fontSize,
      stroke: currentStyle.stroke,
      family: currentStyle.family,
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
    const fixedText = isNote || s.autoW === false;
    editor.style.width = (fixedText ? boxW * z : Math.max(isNote ? 10 : 120, boxW * z + (isNote ? 0 : 12))) + "px";
    const size = sizeOf(s);
    editor.style.fontSize = size * z + "px";
    editor.style.lineHeight = lineHeightOf(size) * z + "px";
    editor.style.whiteSpace = isNote || s.autoW === false ? "pre-wrap" : "pre";
    editor.style.color = s.stroke || PALETTE[0];
    editor.style.fontFamily = familyOf(s);
    editor.style.height = "auto";
    editor.style.height = Math.max(lineHeightOf(size) * z, editor.scrollHeight) + "px";
  }

  function beginEdit(s, before) {
    editingId = s.id;
    editBefore = before;
    lastRange = null;

    editor = document.createElement("textarea");
    editor.className = "editor";
    editor.value = s.text || "";
    editor.spellcheck = false;
    document.body.appendChild(editor);

    editor.addEventListener("input", () => {
      const cur = shapesOf().find((x) => x.id === editingId);
      if (!cur) return;
      cur.attrs = diffAttrs(cur.text || "", editor.value, cur.attrs);
      cur.text = editor.value;
      if (cur.type === "text" || cur.type === "note") fitTextBox(cur);
      positionEditor();
      render();
    });
    // Remember which characters are selected, so a word style can be applied after the editor closes
    const saveRange = () => {
      if (editingId !== null) lastRange = { id: editingId, from: editor.selectionStart, to: editor.selectionEnd };
    };
    editor.addEventListener("select", saveRange);
    editor.addEventListener("keyup", saveRange);
    editor.addEventListener("mouseup", saveRange);
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
        if (s.type === "text" || s.type === "note") fitTextBox(s);
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
    syncBindings();
    const dpr = window.devicePixelRatio || 1;
    const cam = board().camera;
    const z = cam.zoom;

    // Clear in screen space
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const bg = board().bg;
    const transparent = bg === "transparent";
    if (transparent) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    } else {
      ctx.fillStyle = bg || "#ffffff";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    document.documentElement.classList.toggle("board-transparent", transparent);

    // Draw in world space
    ctx.setTransform(dpr * z, 0, 0, dpr * z, dpr * cam.x, dpr * cam.y);
    ctx.strokeStyle = "#1d1b2e";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    drawGrid(z);
    for (const s of shapesOf()) drawWithStyle(s);
    if (drawing) drawWithStyle(drawing);
    drawSelection(z);
    drawEndpoints(z);
    drawPolyDraft(z);
    drawSnapGuides(z);
    drawLaser(z);
    drawMarquee(z);
    drawBindHint(z);
    drawRotateButton(z);
    if (editor) positionEditor();
    renderStyle();
  }

  // Applies the shape's opacity and blur around its normal drawing
  function drawWithStyle(s) {
    ctx.save();
    if (s.angle) {
      const c = centerOf(s);
      ctx.translate(c.x, c.y);
      ctx.rotate(s.angle);
      ctx.translate(-c.x, -c.y);
    }
    ctx.filter = s.blur ? `blur(${s.blur}px)` : "none";
    drawShape(s);
    ctx.restore();
  }

  function drawShape(s) {
    if (s.type === "image") {
      const b = bounds(s);
      const src = IMAGE_STORE.get(s.ref);
      if (!src) return;
      const img = imageFor(src);
      if (img.complete && img.naturalWidth) {
        ctx.drawImage(img, b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1);
      } else {
        ctx.strokeRect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1); // placeholder until the picture has loaded
      }
      return;
    }
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
      case "polyline":
        s.points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        if (s.closed) ctx.closePath();
        break;
      case "pencil":
        s.points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        if (isClosedPencil(s)) ctx.closePath();
        break;
    }
    if (s.fill && (CLOSED.has(s.type) || isClosedPencil(s) || (s.type === "polyline" && s.closed))) {
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
      const c = centerOf(s);
      ctx.save();
      if (s.angle) {
        ctx.translate(c.x, c.y);
        ctx.rotate(s.angle);
        ctx.translate(-c.x, -c.y);
      }
      ctx.strokeRect(b.x1 - pad, b.y1 - pad, b.x2 - b.x1 + 2 * pad, b.y2 - b.y1 + 2 * pad);
      ctx.restore();
    }

    ctx.setLineDash([]);
    const box = selectionBox();
    if (box && !singleLine()) {
      const hs = 8 / z;
      ctx.fillStyle = "#ffffff";
      for (const pt of Object.values(frameHandles(box))) {
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
    if (polyDraft) finishPoly(false);
    tool = id;
    for (const btn of toolbarEl.querySelectorAll(".tool")) {
      btn.setAttribute("aria-pressed", String(btn.dataset.tool === id));
    }
    updateCursor();
    renderStyle();
    showStyle();
    eraserMenuOpen = false;
    renderEraserMenu();
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
    if (tool !== "select" || !topmostAt(p)) hideStyle();
    else showStyle();
    eraserMenuOpen = false;
    renderEraserMenu();
    camMenuOpen = false;
    renderCamMenu();

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
      if (selected.size && nearRotButton(p)) {
        const box = selectionBox();
        const c = { x: (box.x1 + box.x2) / 2, y: (box.y1 + box.y2) / 2 };
        detachSelectedLines();
        gesture = {
          type: "rotate",
          center: c,
          startAng: Math.atan2(p.y - c.y, p.x - c.x),
          orig: cloneSelected(),
          before,
        };
        render();
        return;
      }
      const ep = endpointAt(p);
      if (ep) {
        gesture = { type: "endpoint", id: singleLine().id, which: ep, before };
        return;
      }
      const h = handleAt(p);
      if (h) {
        detachSelectedLines();
        gesture = { type: "resize", handle: h, box: selectionBox(), angle: frameAngle(), orig: cloneSelected(), before };
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
          detachSelectedLines();
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

    // Laser: a trail that fades away; it is not saved to the board
    if (tool === "laser") {
      laserTrail.push({ x: p.x, y: p.y, t: Date.now() });
      startLaserFade();
      gesture = { type: "laser" };
      return;
    }

    // Polyline: each click adds a corner; click the first corner to close the shape
    if (tool === "polyline") {
      if (!polyDraft) polyDraft = { points: [p], before };
      else if (polyDraft.points.length >= 3 && Math.hypot(p.x - polyDraft.points[0].x, p.y - polyDraft.points[0].y) <= 12 / board().camera.zoom) {
        finishPoly(true);
      } else polyDraft.points.push(p);
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
      fill: tool === "note" ? currentStyle.fill || NOTE_FILL : currentStyle.fill,
      fontSize: currentStyle.fontSize,
      family: currentStyle.family,
      transparency: currentStyle.transparency,
      blur: currentStyle.blur,
    };
    gesture = { type: "draw", before };
    if (tool === "arrow" || tool === "line") {
      const t = bindTarget(p);
      if (t) {
        drawing.bindStart = t.id;
        drawing.bindStartSide = nearestSide(t, p);
        const q = anchorOf(t, drawing.bindStartSide);
        drawing.x0 = q.x;
        drawing.y0 = q.y;
      }
    }
    render();
  });

  canvas.addEventListener("pointermove", (e) => {
    const p = eventToWorld(e);
    if (polyDraft) {
      polyCursor = p;
      render();
      return;
    }

    if (!gesture) {
      if (tool === "select") {
        const was = rotHover;
        rotHover = selected.size > 0 && nearRotButton(p);
        if (rotHover !== was) render();
        hoverCursor(p);
      }
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
        let dx = p.x - gesture.start.x;
        let dy = p.y - gesture.start.y;
        if (e.altKey) snapGuides = null;
        else ({ dx, dy } = snapMove(gesture.orig, dx, dy));
        applyToSelected(gesture.orig, (x, y) => ({ x: x + dx, y: y + dy }));
        break;
      }
      case "resize": {
        const r = gesture.box;
        const h = gesture.handle;
        const ang = gesture.angle || 0;
        const cs = Math.cos(ang);
        const sn = Math.sin(ang);
        const C = { x: (r.x1 + r.x2) / 2, y: (r.y1 + r.y2) / 2 };
        const ow = r.x2 - r.x1;
        const oh = r.y2 - r.y1;

        // Pointer relative to the centre, in the frame's own axes
        const dx = p.x - C.x;
        const dy = p.y - C.y;
        const rel = { x: dx * cs + dy * sn, y: -dx * sn + dy * cs };

        // Edges relative to the centre; the edge opposite the dragged handle stays put
        let xA = -ow / 2;
        let xB = ow / 2;
        let yA = -oh / 2;
        let yB = oh / 2;
        if (h.includes("w")) xA = rel.x;
        if (h.includes("e")) xB = rel.x;
        if (h.includes("n")) yA = rel.y;
        if (h.includes("s")) yB = rel.y;

        // Text shapes resize sideways only; their height comes from the wrapped lines
        const textOnly = [...gesture.orig.values()].every((s) => s.type === "text" || s.type === "note");
        if (textOnly) {
          yA = -oh / 2;
          yB = oh / 2;
        }

        const lx1 = Math.min(xA, xB);
        const lx2 = Math.max(xA, xB);
        const ly1 = Math.min(yA, yB);
        const ly2 = Math.max(yA, yB);
        const nw = Math.max(1, lx2 - lx1);
        const nh = Math.max(1, ly2 - ly1);
        const sx = ow >= 1 ? nw / ow : 1;
        const sy = oh >= 1 ? nh / oh : 1;

        // New centre of the frame, in world coordinates
        const nc = { x: (lx1 + lx2) / 2, y: (ly1 + ly2) / 2 };
        const C1 = { x: C.x + nc.x * cs - nc.y * sn, y: C.y + nc.x * sn + nc.y * cs };

        applyToSelected(gesture.orig, (x, y) => {
          const ex = x - C.x;
          const ey = y - C.y;
          const ux = (ex * cs + ey * sn) * sx;
          const uy = (-ex * sn + ey * cs) * sy;
          return { x: C1.x + ux * cs - uy * sn, y: C1.y + ux * sn + uy * cs };
        });
        if (textOnly) refitTexts();
        break;
      }
      case "marquee": {
        gesture.rect.x2 = p.x;
        gesture.rect.y2 = p.y;
        selectInRect(gesture.base);
        break;
      }
      case "laser":
        laserTrail.push({ x: p.x, y: p.y, t: Date.now() });
        startLaserFade();
        break;
      case "endpoint": {
        const s = shapesOf().find((x) => x.id === gesture.id);
        if (s) moveEndpoint(s, gesture.which, p);
        break;
      }
      case "rotate": {
        let d = Math.atan2(p.y - gesture.center.y, p.x - gesture.center.x) - gesture.startAng;
        if (e.shiftKey) d = Math.round(d / (Math.PI / 12)) * (Math.PI / 12);
        board().shapes = shapesOf().map((s) => {
          const o = gesture.orig.get(s.id);
          return o ? { ...o, angle: (o.angle || 0) + d } : s;
        });
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
        if (drawing.type === "arrow" || drawing.type === "line") {
          const t = bindTarget({ x: drawing.x1, y: drawing.y1 });
          if (t) {
            drawing.bindEnd = t.id;
            drawing.bindEndSide = nearestSide(t, { x: drawing.x1, y: drawing.y1 });
            const q = anchorOf(t, drawing.bindEndSide);
            drawing.x1 = q.x;
            drawing.y1 = q.y;
          }
        }
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
    snapGuides = null;
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
    if (polyDraft) {
      finishPoly(false);
      return;
    }
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

    if (presentEl) {
      e.preventDefault();
      if (e.key === "Escape") stopPresentation();
      else if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) presentStep(1);
      else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) presentStep(-1);
      return;
    }
    if (e.key === "F5") {
      e.preventDefault();
      startPresentation();
      return;
    }

    if (e.code === "Space" && !spaceHeld) {
      spaceHeld = true;
      updateCursor();
      e.preventDefault();
      return;
    }

    const k = e.key.toLowerCase();

    if ((e.ctrlKey || e.metaKey) && k === "z") {
      e.preventDefault();
      if (e.shiftKey) redo();
      else undo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "y") {
      e.preventDefault();
      redo();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "a") {
      e.preventDefault();
      selected = new Set(shapesOf().map((s) => s.id));
      render();
      return;
    }
    if (!e.ctrlKey && !e.metaKey && !e.altKey && /^[1-8]$/.test(e.key)) {
      applyColorIndex(Number(e.key));
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "g") {
      e.preventDefault();
      snapOn = !snapOn;
      render();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (k === "c" || k === "x") && selected.size) {
      e.preventDefault();
      if (k === "c") copySelection();
      else cutSelection();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === "v") {
      e.preventDefault();
      pasteClipboard();
      return;
    }
    if (!e.ctrlKey && !e.metaKey && selected.size && e.key.startsWith("Arrow")) {
      e.preventDefault();
      const step = e.shiftKey ? 10 : 1;
      const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
      nudgeSelection(d[0], d[1]);
      return;
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      if (selected.size) {
        e.preventDefault();
        deleteSelected();
      }
      return;
    }
    if ((e.key === "Enter" || e.key === "Escape") && polyDraft) {
      e.preventDefault();
      finishPoly(false);
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

  window.addEventListener("pointermove", (e) => {
    if (e.clientY > window.innerHeight - 110) showStyle();
  });

  window.addEventListener("resize", resize);

  /* ---------- Ribbon & window controls ---------- */

  // A ribbon across the top: tabs on the left, window buttons on the right (desktop overlay only)
  function buildRibbon() {
    const ribbon = document.createElement("div");
    ribbon.id = "ribbon";
    document.body.appendChild(ribbon);

    const ctl = document.createElement("div");
    ctl.id = "winctl";
    ctl.innerHTML =
      '<button data-win="minimize" title="Minimize" aria-label="Minimize">&#8211;</button>' +
      '<button data-win="resize" title="Resize" aria-label="Resize">&#9633;</button>' +
      '<button data-win="close" class="close" title="Close" aria-label="Close">&#215;</button>';
    ctl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b && window.padaDesktop) window.padaDesktop.windowControl(b.dataset.win);
    });
    if (!window.padaDesktop) ctl.style.display = "none";
    document.body.appendChild(ctl);

    // A small grip on the left: drag it to move the window (desktop only)
    const grip = document.createElement("div");
    grip.id = "grip";
    grip.title = "Drag to move the window";
    grip.textContent = "\u22EE";
    if (!window.padaDesktop) grip.style.display = "none";
    document.body.appendChild(grip);

    // Ctrl+Alt+1..8 from the desktop app pick a palette colour, even while Zoom has focus
    if (window.padaDesktop && window.padaDesktop.onColor) {
      window.padaDesktop.onColor((i) => applyColorIndex(i));
    }
  }

  /* ---------- Toolbar visibility & eraser menu ---------- */

  let eraserMenuEl = null;
  let eraserMenuOpen = false;

  // The style panel hides while drawing or clicking empty canvas, and returns when a shape is clicked,
  // a tool is chosen, or the pointer nears the bottom. The toolbar never hides.
  function hideStyle() {
    document.body.classList.add("sp-hidden");
  }

  function showStyle() {
    document.body.classList.remove("sp-hidden");
  }

  function renderEraserMenu() {
    if (eraserMenuEl) eraserMenuEl.style.display = eraserMenuOpen ? "flex" : "none";
  }

  function eraseAll() {
    finishEditing();
    if (!shapesOf().length) return;
    if (!confirm("এই Tab-এর সব shape মুছে ফেলতে চান?")) return;
    const before = snapshot();
    board().shapes = [];
    selected.clear();
    commit(before);
    render();
  }

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
      btn.addEventListener("click", () => {
        setTool(t.id);
        if (t.id === "eraser") {
          eraserMenuOpen = true;
          renderEraserMenu();
        }
      });
      toolbarEl.appendChild(btn);
    });

    // Camera button, with its menu: Show / Off Camera, Start / Off Virtual Camera
    const camSep = document.createElement("span");
    camSep.className = "sep";
    toolbarEl.appendChild(camSep);
    const camBtn = document.createElement("button");
    camBtn.className = "tool";
    camBtn.title = "Camera";
    camBtn.setAttribute("aria-label", "Camera");
    camBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS.camera}</svg>`;
    camBtn.addEventListener("click", () => {
      camMenuOpen = !camMenuOpen;
      renderCamMenu();
    });
    toolbarEl.appendChild(camBtn);

    camMenuEl = document.createElement("div");
    camMenuEl.id = "camera-menu";
    camMenuEl.innerHTML =
      '<div class="tm-item"><div class="tm-label">Show Camera &#9656;</div>' +
      '<div class="tm-sub">' +
      '<button data-cam="show-round">Round shape</button>' +
      '<button data-cam="show-rect">Rectangle shape</button>' +
      "</div></div>" +
      '<button data-cam="off">Off Camera</button>' +
      '<button data-cam="vstart">Start Virtual Camera</button>' +
      '<button data-cam="voff">Off Virtual Camera</button>';
    camMenuEl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      camMenuOpen = false;
      renderCamMenu();
      runCamAction(b.dataset.cam);
    });
    toolbarEl.appendChild(camMenuEl);

    eraserMenuEl = document.createElement("div");
    eraserMenuEl.id = "eraser-menu";
    eraserMenuEl.innerHTML = '<button data-erase="one">Erase</button><button data-erase="all">Erase All</button>';
    eraserMenuEl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      eraserMenuOpen = false;
      renderEraserMenu();
      if (b.dataset.erase === "all") eraseAll();
    });
    toolbarEl.appendChild(eraserMenuEl);
  }

  /* ---------- Tab options menu ---------- */

  let tabMenuEl = null;

  function closeTabMenu() {
    if (tabMenuEl) {
      tabMenuEl.remove();
      tabMenuEl = null;
    }
  }

  function openTabMenu(index, anchor) {
    closeTabMenu();
    const r = anchor.getBoundingClientRect();
    tabMenuEl = document.createElement("div");
    tabMenuEl.id = "tab-menu";
    tabMenuEl.style.left = r.left + "px";
    tabMenuEl.style.top = r.bottom + 6 + "px";
    tabMenuEl.innerHTML = `
      <div class="tm-item"><div class="tm-label">Open File &#9656;</div>
        <div class="tm-sub">
          <button data-act="file" data-kind="pdf">PDF</button>
          <button data-act="file" data-kind="image">Image</button>
          <button data-act="file" data-kind="word">Word</button>
        </div></div>
      <div class="tm-item"><div class="tm-label">Tab bg &#9656;</div>
        <div class="tm-sub">
          <button data-act="bg" data-bg="transparent">Transparent</button>
          <button data-act="bg" data-bg="#ffffff" style="border-left:10px solid #ffffff">White</button>
          <button data-act="bg" data-bg="#ffe3e3" style="border-left:10px solid #ffe3e3">Rose</button>
          <button data-act="bg" data-bg="#fff3bf" style="border-left:10px solid #fff3bf">Lemon</button>
          <button data-act="bg" data-bg="#d3f9d8" style="border-left:10px solid #d3f9d8">Mint</button>
          <button data-act="bg" data-bg="#d0ebff" style="border-left:10px solid #d0ebff">Sky</button>
          <button data-act="bg" data-bg="#eebefa" style="border-left:10px solid #eebefa">Lilac</button>
          <button data-act="bg" data-bg="#000000" style="border-left:10px solid #000000">Black</button>
        </div></div>
      <div class="tm-item"><div class="tm-label">Save as &#9656;</div>
        <div class="tm-sub">
          <button data-act="save-pdf">PDF</button>
          <button data-act="save-image">Image</button>
        </div></div>
      <hr />
      <button data-act="rename">Rename</button>
      <button data-act="duplicate">Duplicate</button>
      <button data-act="close">Close</button>`;
    tabMenuEl.querySelector('[data-act="close"]').disabled = boards.length === 1;
    tabMenuEl.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      const act = b.dataset.act;
      closeTabMenu();
      if (act === "file") openFilePicker(b.dataset.kind);
      else if (act === "bg") setBoardBg(index, b.dataset.bg);
      else if (act === "save-image" || act === "save-pdf") {
        if (index !== active) switchBoard(index);
        saveTabAs(act === "save-image" ? "image" : "pdf");
      }
      else if (act === "rename") renameBoard(index);
      else if (act === "duplicate") duplicateBoard(index);
      else if (act === "close") removeBoard(index);
    });
    document.body.appendChild(tabMenuEl);
  }

  // Opens a PDF, image or Word file chosen from disk in a new browser window
  /* ---------- Files: pictures, PDF pages and Word text open inside the board ---------- */

  const FILE_ACCEPT = { pdf: ".pdf", image: "image/*", word: ".docx" };
  const PDFJS_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  const MAMMOTH_URL = "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js";
  const IMAGE_CACHE = new Map(); // picture source -> decoded image, so each one loads once
  const IMAGE_STORE = new Map(); // picture id -> image data; shapes keep only the id, so undo history stays small

  function imageFor(src) {
    if (!IMAGE_CACHE.has(src)) {
      const img = new Image();
      img.onload = () => render();
      img.src = src;
      IMAGE_CACHE.set(src, img);
    }
    return IMAGE_CACHE.get(src);
  }

  function readFile(file, asDataUrl) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error("file could not be read"));
      if (asDataUrl) r.readAsDataURL(file);
      else r.readAsArrayBuffer(file);
    });
  }

  function loadScript(url, ready) {
    if (ready()) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = resolve;
      s.onerror = () => reject(new Error("the viewer could not be loaded (check the internet connection)"));
      document.head.appendChild(s);
    });
  }

  // Step 1: a picture, downscaled so the saved board stays small
  async function pictureFromFile(file) {
    const img = new Image();
    img.src = await readFile(file, true);
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
    });
    const k = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement("canvas");
    c.width = Math.round(img.naturalWidth * k);
    c.height = Math.round(img.naturalHeight * k);
    c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
    const png = file.type === "image/png";
    return { src: c.toDataURL(png ? "image/png" : "image/jpeg", 0.9), w0: c.width, h0: c.height };
  }

  // Step 2: each PDF page becomes a picture (up to 30 pages)
  async function pagesFromPdf(file) {
    await loadScript(PDFJS_URL, () => window.pdfjsLib);
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_URL.replace("pdf.min.js", "pdf.worker.min.js");
    const pdf = await window.pdfjsLib.getDocument({ data: await readFile(file, false) }).promise;
    const spec = await askPages(pdf.numPages);
    if (spec === null) return [];
    const pages = parsePages(spec, pdf.numPages);
    if (!pages.length) throw new Error("পৃষ্ঠার নম্বর সঠিক নয়");

    const out = [];
    const scale = pages.length > 100 ? 1 : 1.5;
    const pr = progressStart("PDF পৃষ্ঠা");
    try {
      for (let k = 0; k < pages.length; k++) {
        pr.set(k, pages.length);
        const page = await pdf.getPage(pages[k]);
        const vp = page.getViewport({ scale });
        const c = document.createElement("canvas");
        c.width = Math.round(vp.width);
        c.height = Math.round(vp.height);
        await page.render({ canvasContext: c.getContext("2d"), viewport: vp }).promise;
        out.push({ src: c.toDataURL("image/jpeg", 0.9), w0: c.width, h0: c.height });
      }
    } finally {
      pr.end();
    }
    return out;
  }

  // Step 3: the text of a .docx becomes a note (old .doc files are not supported)
  async function textFromWord(file) {
    await loadScript(MAMMOTH_URL, () => window.mammoth);
    const result = await window.mammoth.extractRawText({ arrayBuffer: await readFile(file, false) });
    return result.value.trim() || "(empty document)";
  }

  // Places pictures one below another, starting at the centre of the view
  function insertImages(list) {
    const c = screenToWorld(window.innerWidth / 2, window.innerHeight / 2);
    const before = snapshot();
    const created = [];
    let y = c.y;
    for (const { src, w0, h0 } of list) {
      const w = Math.min(600, w0);
      const h = (h0 * w) / w0;
      const x = c.x - w / 2;
      const ref = newId();
      IMAGE_STORE.set(ref, src);
      const s = { id: newId(), type: "image", ref, x0: x, y0: y, x1: x + w, y1: y + h, transparency: 0, blur: 0 };
      shapesOf().push(s);
      created.push(s.id);
      y += h + 20;
    }
    selected = new Set(created);
    commit(before);
    render();
  }

  function insertNote(text) {
    const c = screenToWorld(window.innerWidth / 2, window.innerHeight / 2);
    const before = snapshot();
    const s = {
      id: newId(),
      type: "note",
      text,
      x0: c.x - 210,
      y0: c.y,
      x1: c.x + 210,
      y1: c.y + NOTE_H,
      stroke: PALETTE[0],
      fill: NOTE_FILL,
      fontSize: 14,
      family: "sans",
      transparency: 0,
      blur: 0,
    };
    shapesOf().push(s);
    fitTextBox(s);
    selected = new Set([s.id]);
    commit(before);
    render();
  }

  async function openIntoBoard(file, kind) {
    try {
      if (kind === "image") insertImages([await pictureFromFile(file)]);
      else if (kind === "pdf") insertImages(await pagesFromPdf(file));
      else if (kind === "word") {
        if (!file.name.toLowerCase().endsWith(".docx")) {
          alert("শুধু .docx ফাইল খোলা যাবে। পুরনো .doc ফাইল সমর্থিত নয়।");
          return;
        }
        insertNote(await textFromWord(file));
      }
    } catch (err) {
      alert("ফাইলটি খোলা যায়নি: " + err.message);
    }
  }

  /* ---------- PDF page choice and progress ---------- */

  // A small box asking which pages to open ("all", or e.g. 1-5, 8, 12)
  function askPages(total) {
    return new Promise((resolve) => {
      const box = document.createElement("div");
      box.id = "pagebox";
      box.innerHTML =
        '<div class="pb-card">' +
        `<div><b>PDF: মোট ${total} পৃষ্ঠা</b></div>` +
        '<label>কোন পৃষ্ঠাগুলো খুলবেন? (যেমন 1-5, 8, 12 বা all)</label>' +
        '<input type="text" value="all" />' +
        '<div class="pb-row"><button data-r="cancel">বাতিল</button><button data-r="ok">খুলুন</button></div>' +
        "</div>";
      document.body.appendChild(box);
      const input = box.querySelector("input");
      input.focus();
      input.select();
      const done = (value) => {
        box.remove();
        resolve(value);
      };
      box.addEventListener("click", (e) => {
        const r = e.target.dataset.r;
        if (r === "cancel") done(null);
        else if (r === "ok") done(input.value);
      });
      input.addEventListener("keydown", (e) => {
        e.stopPropagation();
        if (e.key === "Enter") done(input.value);
        else if (e.key === "Escape") done(null);
      });
    });
  }

  // "1-5, 8" -> [1, 2, 3, 4, 5, 8]; "all" or empty -> every page
  function parsePages(spec, n) {
    const text = spec.trim().toLowerCase();
    if (!text || text === "all") return Array.from({ length: n }, (_, i) => i + 1);
    const out = [];
    for (const part of text.split(",")) {
      const m = part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);
      if (!m) continue;
      const a = Number(m[1]);
      const b = m[2] ? Number(m[2]) : a;
      for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        if (i >= 1 && i <= n && !out.includes(i)) out.push(i);
      }
    }
    return out;
  }

  // Shows "label done / total" with a bar at the bottom-left; returns set(done, total) and end()
  function progressStart(label) {
    let el = document.getElementById("progress");
    if (!el) {
      el = document.createElement("div");
      el.id = "progress";
      el.innerHTML = "<span></span><div class=\"pg\"><i></i></div>";
      document.body.appendChild(el);
    }
    el.style.display = "flex";
    const span = el.querySelector("span");
    const bar = el.querySelector("i");
    return {
      set(done, total) {
        span.textContent = `${label} ${done} / ${total}`;
        bar.style.width = (total ? (done / total) * 100 : 0) + "%";
      },
      end() {
        el.style.display = "none";
      },
    };
  }

  /* ---------- Full-tab export ---------- */

  // Paints every shape of a tab into an offscreen canvas, whatever part is on screen
  function exportScene(shapes, scale, transparent) {
    const bb = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };
    for (const s of shapes) {
      const b = bounds(s);
      bb.x1 = Math.min(bb.x1, b.x1);
      bb.y1 = Math.min(bb.y1, b.y1);
      bb.x2 = Math.max(bb.x2, b.x2);
      bb.y2 = Math.max(bb.y2, b.y2);
    }
    if (!shapes.length) Object.assign(bb, { x1: 0, y1: 0, x2: 800, y2: 600 });
    const pad = 20;
    const x1 = bb.x1 - pad;
    const y1 = bb.y1 - pad;
    const w = bb.x2 - bb.x1 + 2 * pad;
    const h = bb.y2 - bb.y1 + 2 * pad;
    const k = Math.min(scale, 8000 / Math.max(w, h));

    const off = document.createElement("canvas");
    off.width = Math.max(1, Math.round(w * k));
    off.height = Math.max(1, Math.round(h * k));
    const prev = ctx;
    ctx = off.getContext("2d");
    try {
      if (!transparent) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, off.width, off.height);
      }
      ctx.setTransform(k, 0, 0, k, -x1 * k, -y1 * k);
      ctx.strokeStyle = "#1d1b2e";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (const s of shapes) drawWithStyle(s);
    } finally {
      ctx = prev;
    }
    return off;
  }

  // Save as > Image / PDF: the whole current tab
  function saveTabAs(kind) {
    finishEditing();
    const b = board();
    const base = b.name.replace(/\s+/g, "_");
    if (kind === "image") {
      const off = exportScene(shapesOf(), 2, b.bg === "transparent");
      off.toBlob((blob) => download(blob, `${base}.png`), "image/png");
      return;
    }
    const off = exportScene(shapesOf(), 2, false);
    const bin = atob(off.toDataURL("image/jpeg", 0.92).split(",")[1]);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    download(buildPdf(bytes, off.width, off.height), `${base}.pdf`);
  }

  /* ---------- Presentation mode: every tab in order, full screen ---------- */

  let presentEl = null;
  let presentIndex = 0;
  let presentSlides = [];

  function showSlide() {
    presentEl.querySelector("img").src = presentSlides[presentIndex];
    presentEl.querySelector("span").textContent = `${boards[presentIndex].name}  ·  ${presentIndex + 1} / ${boards.length}`;
  }

  function presentStep(d) {
    presentIndex = Math.min(boards.length - 1, Math.max(0, presentIndex + d));
    showSlide();
  }

  // F5 starts from the current tab; → / Space / click go forward, ← goes back, Esc ends
  function startPresentation() {
    if (presentEl) return;
    finishEditing();
    selected = new Set();
    presentSlides = boards.map((b) => exportScene(b.shapes, 2, false).toDataURL("image/png"));
    presentIndex = active;

    presentEl = document.createElement("div");
    presentEl.id = "present";
    presentEl.innerHTML = '<img alt="" /><div class="pres-bar"><span></span><small>← → · Esc: বন্ধ</small></div>';
    presentEl.addEventListener("click", (e) => {
      const half = presentEl.getBoundingClientRect().width / 2;
      presentStep(e.clientX < half ? -1 : 1);
    });
    document.body.appendChild(presentEl);
    showSlide();
  }

  function stopPresentation() {
    if (!presentEl) return;
    presentEl.remove();
    presentEl = null;
    presentSlides = [];
    render();
  }

  // The Tab menu's Open File items: pick a file and place it on this board
  function openFilePicker(kind) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = FILE_ACCEPT[kind] || "";
    input.addEventListener("change", () => {
      const file = input.files[0];
      if (file) openIntoBoard(file, kind);
    });
    input.click();
  }

  function download(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  // Minimal single-page PDF that holds the board image as a JPEG
  function buildPdf(jpegBytes, w, h) {
    const enc = new TextEncoder();
    const parts = [];
    const offsets = [];
    let len = 0;
    const push = (x) => {
      const b = typeof x === "string" ? enc.encode(x) : x;
      parts.push(b);
      len += b.length;
    };
    const obj = (n, body) => {
      offsets[n] = len;
      push(`${n} 0 obj\n${body}\nendobj\n`);
    };

    push("%PDF-1.4\n");
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    obj(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
    obj(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`);
    offsets[4] = len;
    push(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`);
    push(jpegBytes);
    push("\nendstream\nendobj\n");
    const content = `q ${w} 0 0 ${h} 0 0 cm /Im0 Do Q`;
    obj(5, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);

    const xref = len;
    let table = "xref\n0 6\n0000000000 65535 f \n";
    for (let i = 1; i <= 5; i++) table += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
    push(table + `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    return new Blob(parts, { type: "application/pdf" });
  }

  // Saves what is currently on the canvas (the visible part of the board) as an image or a PDF
  function saveBoardAs(kind) {
    finishEditing();
    const prev = selected;
    selected = new Set();
    render();
    // Take the snapshot while the selection outline is hidden
    const base = board().name.replace(/\s+/g, "_");
    const png = kind === "image" ? new Promise((res) => canvas.toBlob(res, "image/png")) : null;
    let jpeg = null;
    if (kind === "pdf") {
      // JPEG has no transparency, so draw the board onto white first
      const flat = document.createElement("canvas");
      flat.width = canvas.width;
      flat.height = canvas.height;
      const fctx = flat.getContext("2d");
      fctx.fillStyle = "#ffffff";
      fctx.fillRect(0, 0, flat.width, flat.height);
      fctx.drawImage(canvas, 0, 0);
      jpeg = flat.toDataURL("image/jpeg", 0.92);
    }
    selected = prev;
    render();

    if (kind === "image") {
      png.then((blob) => download(blob, `${base}.png`));
      return;
    }
    const bin = atob(jpeg.split(",")[1]);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    download(buildPdf(bytes, canvas.width, canvas.height), `${base}.pdf`);
  }

  // Clicking anywhere outside the menu closes it
  document.addEventListener("pointerdown", (e) => {
    if (tabMenuEl && !tabMenuEl.contains(e.target)) closeTabMenu();
  });

  // Renames a tab in place. (window.prompt is not available in the desktop app.)
  function renameBoard(index) {
    const btn = tabsEl.children[index] && tabsEl.children[index].querySelector(".tab");
    if (!btn) return;
    const input = document.createElement("input");
    input.className = "tab-rename";
    input.value = boards[index].name;
    input.maxLength = 20;
    btn.replaceWith(input);
    input.focus();
    input.select();
    let done = false;
    const finish = (save) => {
      if (done) return;
      done = true;
      if (save && input.value.trim()) boards[index].name = input.value.trim().slice(0, 20);
      renderTabs();
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") finish(true);
      else if (e.key === "Escape") finish(false);
    });
    input.addEventListener("blur", () => finish(true));
  }

  // Tab bg: colours the tab and the board behind it; "transparent" lets the desktop show through
  function setBoardBg(index, bg) {
    boards[index].bg = bg;
    if (index !== active) switchBoard(index);
    renderTabs();
    render();
  }

  // Copies a board's shapes with new ids, keeping connections between the copies
  function duplicateBoard(index) {
    finishEditing();
    const src = boards[index];
    const idMap = new Map(src.shapes.map((s) => [s.id, newId()]));
    const shapes = src.shapes.map((s) => {
      const c = JSON.parse(JSON.stringify(s));
      c.id = idMap.get(s.id);
      if (c.bindStart && idMap.has(c.bindStart)) c.bindStart = idMap.get(c.bindStart);
      else {
        delete c.bindStart;
        delete c.bindStartSide;
      }
      if (c.bindEnd && idMap.has(c.bindEnd)) c.bindEnd = idMap.get(c.bindEnd);
      else {
        delete c.bindEnd;
        delete c.bindEndSide;
      }
      return c;
    });
    boards.splice(index + 1, 0, {
      name: nextTabName(),
      shapes,
      camera: { ...src.camera },
      history: [],
    });
    switchBoard(index + 1);
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    boards.forEach((b, i) => {
      const wrap = document.createElement("div");
      wrap.className = "tab-wrap" + (i === active ? " active" : "");
      if (b.bg) {
        wrap.style.setProperty("--tab-bg", b.bg === "transparent" ? "rgba(255, 255, 255, 0.3)" : b.bg);
        wrap.style.setProperty("--tab-fg", b.bg === "#000000" ? "#ffffff" : "#000000");
      }

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

      const menu = document.createElement("button");
      menu.className = "tab-menu-btn";
      menu.title = "Tab options";
      menu.setAttribute("aria-label", `Options for ${b.name}`);
      menu.textContent = "▾";
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
        openTabMenu(i, menu);
      });

      wrap.append(btn, x, menu);
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
  buildRibbon();
  resize();

  // Canvas text is drawn once the font is ready, so redraw after it loads
  if (document.fonts) {
    Promise.all([document.fonts.load(`${TEXT_SIZE}px Virgil`), document.fonts.load(`${TEXT_SIZE}px "PADA Mono"`)])
      .then(render)
      .catch(() => {});
  }
})();
