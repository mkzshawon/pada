// Clip art from assets/icons (line art), grouped by folder. Written from the SVG files;
// the app loads this file so it works both in the browser and in the desktop app.
window.PADA_ICONS = {
  electrical: {
  "Basic Electrical Components": [
    {
      "name": "Fixed Resistor",
      "svg": "<path d=\"M5 50h20M75 50h20\"/><rect x=\"25\" y=\"38\" width=\"50\" height=\"24\"/>"
    },
    {
      "name": "Variable Resistor",
      "svg": "<path d=\"M5 50h20M75 50h20\"/><rect x=\"25\" y=\"38\" width=\"50\" height=\"24\"/><path d=\"M18 84L82 16\"/><path d=\"M82 16l-1 10M82 16l-10 1\"/>"
    },
    {
      "name": "Potentiometer",
      "svg": "<path d=\"M5 74h20M75 74h20\"/><rect x=\"25\" y=\"62\" width=\"50\" height=\"24\"/><path d=\"M50 62V14\"/><path d=\"M44 48l6 14 6-14\"/>"
    },
    {
      "name": "Capacitor",
      "svg": "<path d=\"M5 50h40M55 50h40\"/><path d=\"M45 30v40M55 30v40\"/>"
    },
    {
      "name": "Electrolytic Capacitor",
      "svg": "<path d=\"M5 50h40M55 50h40\"/><path d=\"M45 30v40\"/><path d=\"M55 30c-6 8-6 32 0 40\"/><path d=\"M20 30h10M25 25v10\"/>"
    },
    {
      "name": "Ceramic Capacitor",
      "svg": "<path d=\"M5 50h27M68 50h27\"/><rect x=\"32\" y=\"26\" width=\"36\" height=\"48\" rx=\"18\"/><path d=\"M47 38v24M53 38v24\"/>"
    },
    {
      "name": "Inductor / Coil",
      "svg": "<path d=\"M5 50h12\"/><path d=\"M17 50a8 8 0 0 1 16 0a8 8 0 0 1 16 0a8 8 0 0 1 16 0a8 8 0 0 1 16 0\"/><path d=\"M83 50h12\"/>"
    },
    {
      "name": "Transformer",
      "svg": "<path d=\"M30 20a8 8 0 0 0 0 16a8 8 0 0 0 0 16a8 8 0 0 0 0 16a8 8 0 0 0 0 16\"/><path d=\"M70 20a8 8 0 0 1 0 16a8 8 0 0 1 0 16a8 8 0 0 1 0 16a8 8 0 0 1 0 16\"/><path d=\"M46 14v72M54 14v72\"/>"
    },
    {
      "name": "Diode",
      "svg": "<path d=\"M5 50h30M65 50h30\"/><path d=\"M35 30v40l30-20z\"/><path d=\"M65 30v40\"/>"
    },
    {
      "name": "Zener Diode",
      "svg": "<path d=\"M5 50h30M65 50h30\"/><path d=\"M35 30v40l30-20z\"/><path d=\"M65 30v40M58 30h7M65 70h7\"/>"
    },
    {
      "name": "LED",
      "svg": "<path d=\"M5 50h30M65 50h30\"/><path d=\"M35 30v40l30-20z\"/><path d=\"M65 30v40\"/><path d=\"M58 24l10-10M68 14h-6M68 14v6\"/><path d=\"M66 36l10-10M76 26h-6M76 26v6\"/>"
    },
    {
      "name": "Bridge Rectifier",
      "svg": "<path d=\"M50 14l28 26-28 26-28-26z\"/><path d=\"M50 14V4M50 66v30M22 40H6M78 40h16\"/><path d=\"M36 40l14-14M36 40l14 14M64 40L50 26M64 40L50 54\"/>"
    },
    {
      "name": "Transistor (NPN)",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M5 50h30M35 34v32\"/><path d=\"M35 40L65 22M35 60L65 78M65 22V8M65 78V92\"/><path d=\"M53.1 73.5L60 73.6L56.7 67.5\"/>"
    },
    {
      "name": "Transistor (PNP)",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M5 50h30M35 34v32\"/><path d=\"M35 40L65 22M35 60L65 78M65 22V8M65 78V92\"/><path d=\"M48.9 64.1L42 64L45.3 70.1\"/>"
    },
    {
      "name": "MOSFET",
      "svg": "<path d=\"M5 50h35M40 30v40\"/><path d=\"M50 18v24M50 46v8M50 58v24\"/><path d=\"M50 18h30M50 82h30\"/><path d=\"M50 50h10\"/>"
    },
    {
      "name": "IGBT",
      "svg": "<path d=\"M5 50h35M40 30v40\"/><path d=\"M50 18v24M50 46v8M50 58v24\"/><path d=\"M50 18h30M50 82h30\"/><path d=\"M50 50h10\"/><path d=\"M68 82l-6-6M68 82l-1-6M68 82l-6-1\"/>"
    },
    {
      "name": "Fuse",
      "svg": "<path d=\"M5 50h20M75 50h20\"/><rect x=\"25\" y=\"38\" width=\"50\" height=\"24\"/><path d=\"M30 50c5-8 10-8 15 0s10 8 15 0 5-4 5 0\"/>"
    },
    {
      "name": "Electrical Switch",
      "svg": "<path d=\"M5 70h12M83 70h12\"/><circle cx=\"20\" cy=\"70\" r=\"3\"/><circle cx=\"80\" cy=\"70\" r=\"3\"/><path d=\"M23 70h30l27-27\"/>"
    },
    {
      "name": "Push Button",
      "svg": "<path d=\"M5 70h15M80 70h15\"/><circle cx=\"20\" cy=\"70\" r=\"3\"/><circle cx=\"80\" cy=\"70\" r=\"3\"/><path d=\"M23 70h57\"/><path d=\"M38 56h24M50 56V70\"/><path d=\"M50 44V26M44 32l6-6 6 6\"/>"
    },
    {
      "name": "Electrical Lamp",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M32 32l36 36M68 32L32 68M5 50h15M80 50h15\"/>"
    }
  ],
  "Power System Equipment": [],
  "Generator Components": [],
  "Electrical Protection and Control": [],
  "Renewable Energy": [],
  "Electrical Circuit and Drawing Symbols": []
}
};
