# PADA desktop overlay

Runs PADA as a transparent, frameless, always-on-top window over the whole screen, so you can draw on top of Zoom or any other app.

This folder is part of the `pada` repository. It loads the whiteboard from the parent folder (`../index.html`), so it always runs the same code as the browser version.

## Setup (Windows)

1. Install Node.js (LTS) from nodejs.org.
2. In PowerShell:

```powershell
cd $HOME\Documents\pada\pada-desktop
npm install
npm start
```

`node_modules` is ignored by Git (see `.gitignore` in the `pada` folder), so it is not uploaded.

## Hotkeys

| Keys | Action |
| --- | --- |
| Ctrl + Alt + P | Toggle drawing mode and click-through mode |
| Ctrl + Alt + Q | Close the overlay |

In click-through mode, mouse clicks reach Zoom (or any app) underneath. Press Ctrl + Alt + P to draw again.

## Notes

- The window covers the primary screen and cannot be moved or resized.
- Start in drawing mode, then press Ctrl + Alt + P before using Zoom's controls.
- Set a tab's **Tab bg** to **Transparent** to make the board see-through, so only your drawings appear over Zoom.
- Save as PDF / Image and downloads go to your default Downloads folder.
