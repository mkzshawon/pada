# PADA - Play Anything, Draw Anything

A browser whiteboard, inspired by [Excalidraw](https://excalidraw.com/).

## Run it

No build step is needed. Either:

- open `index.html` directly in a browser, or
- run a local server: `npm start` (uses `npx serve`).

## Controls (Step 1)

| Action | How |
| --- | --- |
| Select tool | `V` |
| Hand / pan | `H`, or hold `Space`, or middle-mouse drag |
| Rectangle, Diamond, Ellipse, Arrow, Line, Pencil | `R`, `D`, `O`, `A`, `L`, `P` then drag |
| Eraser | `E`, then click or drag over shapes |
| Zoom | `Ctrl/Cmd` + mouse wheel (or trackpad pinch) |
| Scroll / pan | Mouse wheel or trackpad |
| Undo last shape | `Ctrl/Cmd` + `Z` |
| New board tab | `+` button at the top-left |

## Project layout

```
pada/
├── index.html        # page shell: tabs, canvas, toolbar
├── src/
│   ├── styles.css    # look and feel
│   └── main.js       # whiteboard engine (boards, camera, tools)
├── package.json
└── README.md
```

## Roadmap

- [x] **Step 1:** canvas, tabs, toolbar, pan/zoom, basic shapes, eraser, undo
- [x] **Step 2:** select, move, resize, delete, multi-select (click, Shift+click, drag-select, Ctrl/Cmd+A)
- [ ] **Step 3:** text tool and sticky notes
- [ ] **Step 4:** arrows that connect to shapes, colors, stroke width, fill
- [ ] **Step 5:** redo, keyboard nudges, copy/paste
- [ ] **Step 6:** save and load boards (localStorage, then JSON export/import)
- [ ] **Step 7:** share via link and real-time collaboration
- [ ] **Step 8:** refactor into modules and add tests

## License

MIT (placeholder, to be decided).
