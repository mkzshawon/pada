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
  "Power System Equipment": [
    {
      "name": "Alternator",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M26 50c6-12 12-12 18 0s12 12 18 0 12-12 12 0\"/>"
    },
    {
      "name": "Electric Motor",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"32\"/><path d=\"M34 62V38l16 16 16-16v24\"/>"
    },
    {
      "name": "Power Transformer",
      "svg": "<circle cx=\"38\" cy=\"50\" r=\"20\"/><circle cx=\"62\" cy=\"50\" r=\"20\"/><path d=\"M4 50h14M82 50h14\"/>"
    },
    {
      "name": "Distribution Transformer",
      "svg": "<circle cx=\"38\" cy=\"44\" r=\"18\"/><circle cx=\"62\" cy=\"44\" r=\"18\"/><path d=\"M50 62v8M50 70v24\"/><path d=\"M42 94h16\"/>"
    },
    {
      "name": "Circuit Breaker (ACB)",
      "svg": "<rect x=\"18\" y=\"18\" width=\"64\" height=\"64\"/><path d=\"M34 70L66 30\"/><circle cx=\"34\" cy=\"70\" r=\"3\"/><circle cx=\"66\" cy=\"30\" r=\"3\"/>"
    },
    {
      "name": "Vacuum Circuit Breaker (VCB)",
      "svg": "<rect x=\"18\" y=\"18\" width=\"64\" height=\"64\"/><ellipse cx=\"50\" cy=\"50\" rx=\"11\" ry=\"20\"/><path d=\"M50 18V8M50 82v10\"/>"
    },
    {
      "name": "MCCB",
      "svg": "<rect x=\"22\" y=\"22\" width=\"56\" height=\"56\" rx=\"4\"/><path d=\"M36 66L64 34\"/><path d=\"M50 22V10M50 78v12\"/>"
    },
    {
      "name": "MCB",
      "svg": "<rect x=\"34\" y=\"20\" width=\"32\" height=\"60\" rx=\"4\"/><path d=\"M44 66L56 34\"/><path d=\"M50 8v12M50 80v12\"/>"
    },
    {
      "name": "Isolator",
      "svg": "<path d=\"M30 30h40\"/><path d=\"M50 70L70 46\"/><path d=\"M50 10v20M50 70v20\"/><circle cx=\"50\" cy=\"70\" r=\"3\"/>"
    },
    {
      "name": "Lightning Arrester",
      "svg": "<path d=\"M50 10v14M50 76v14\"/><path d=\"M36 24h28v52H36z\"/><path d=\"M56 32L44 50h12L44 68\"/>"
    },
    {
      "name": "Current Transformer (CT)",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"24\"/><path d=\"M8 50h18M74 50h18\"/><path d=\"M38 26a14 14 0 0 1 24 0\"/><path d=\"M48 44A6 8 0 1 0 48 56 M52 42H63M57.5 42V58\"/>"
    },
    {
      "name": "Potential Transformer (PT)",
      "svg": "<circle cx=\"50\" cy=\"36\" r=\"20\"/><circle cx=\"50\" cy=\"64\" r=\"20\"/><path d=\"M50 4v12M50 84v12\"/>"
    },
    {
      "name": "Busbar",
      "svg": "<path d=\"M8 40h84v20H8z\"/><path d=\"M24 60v22M50 60v22M76 60v22\"/>"
    },
    {
      "name": "Electrical Insulator",
      "svg": "<path d=\"M50 10v14\"/><path d=\"M30 34a20 9 0 0 0 40 0\"/><path d=\"M26 52a24 9 0 0 0 48 0\"/><path d=\"M22 70a28 9 0 0 0 56 0\"/>"
    },
    {
      "name": "Transmission Tower",
      "svg": "<path d=\"M50 8L30 92M50 8L70 92\"/><path d=\"M38 50h24M34 70h32\"/><path d=\"M40 50L60 70M60 50L40 70\"/>"
    },
    {
      "name": "Electrical Power Pole",
      "svg": "<path d=\"M50 10v80\"/><path d=\"M28 24h44\"/><path d=\"M34 40h32\"/><path d=\"M40 90h20\"/>"
    },
    {
      "name": "Earthing System",
      "svg": "<path d=\"M50 10v40\"/><path d=\"M26 50h48M36 62h28M46 74h8\"/>"
    },
    {
      "name": "Battery Bank",
      "svg": "<rect x=\"16\" y=\"28\" width=\"68\" height=\"44\" rx=\"3\"/><path d=\"M28 50h10M34 44v12M58 50h10M64 44v12\"/>"
    },
    {
      "name": "Power Cable",
      "svg": "<path d=\"M8 38h84M8 62h84\"/><ellipse cx=\"92\" cy=\"50\" rx=\"4\" ry=\"12\"/>"
    },
    {
      "name": "Cable Termination",
      "svg": "<path d=\"M8 40h40M8 60h40\"/><path d=\"M48 30h16v40H48z\"/><path d=\"M64 44h28M64 56h28\"/>"
    }
  ],
  "Generator Components": [
    {
      "name": "Stator",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><circle cx=\"50\" cy=\"50\" r=\"26\" stroke-dasharray=\"6 6\"/>"
    },
    {
      "name": "Rotor",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><rect x=\"42\" y=\"16\" width=\"16\" height=\"22\"/><rect x=\"42\" y=\"62\" width=\"16\" height=\"22\"/><rect x=\"16\" y=\"42\" width=\"22\" height=\"16\"/><rect x=\"62\" y=\"42\" width=\"22\" height=\"16\"/>"
    },
    {
      "name": "Stator Winding",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><rect x=\"42\" y=\"16\" width=\"16\" height=\"10\" rx=\"5\"/><rect x=\"72\" y=\"66\" width=\"16\" height=\"10\" rx=\"5\" transform=\"rotate(60 80 71)\"/><rect x=\"12\" y=\"66\" width=\"16\" height=\"10\" rx=\"5\" transform=\"rotate(-60 20 71)\"/>"
    },
    {
      "name": "Rotor Winding",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><circle cx=\"50\" cy=\"50\" r=\"22\" stroke-dasharray=\"5 5\"/>"
    },
    {
      "name": "Generator Shaft",
      "svg": "<path d=\"M6 42h88M6 58h88\"/><path d=\"M30 42v16M70 42v16\"/><path d=\"M42 42v16M58 42v16\" stroke-dasharray=\"3 3\"/>"
    },
    {
      "name": "Generator Bearing",
      "svg": "<path d=\"M24 74h52\"/><path d=\"M28 74V50a22 22 0 0 1 44 0v24\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/>"
    },
    {
      "name": "Exciter",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M50 70V30M38 42l12-12 12 12\"/>"
    },
    {
      "name": "Slip Ring",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"26\"/><circle cx=\"50\" cy=\"50\" r=\"12\"/><rect x=\"42\" y=\"8\" width=\"16\" height=\"12\"/><path d=\"M50 20v4\"/>"
    },
    {
      "name": "Cooling Fan",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"42\"/><path d=\"M50 44C42 34 42 20 50 12C58 20 58 34 50 44Z\"/><path transform=\"rotate(120 50 50)\" d=\"M50 44C42 34 42 20 50 12C58 20 58 34 50 44Z\"/><path transform=\"rotate(240 50 50)\" d=\"M50 44C42 34 42 20 50 12C58 20 58 34 50 44Z\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/>"
    },
    {
      "name": "Generator Terminal Box",
      "svg": "<rect x=\"18\" y=\"26\" width=\"64\" height=\"48\" rx=\"3\"/><circle cx=\"34\" cy=\"50\" r=\"5\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/><circle cx=\"66\" cy=\"50\" r=\"5\"/><path d=\"M50 26v-10\"/>"
    },
    {
      "name": "Hydrogen Cooling System",
      "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"24\" ry=\"8\"/><path d=\"M26 22v56a24 8 0 0 0 48 0V22\"/><path d=\"M42 44v12M58 44v12M42 50h16\"/>"
    },
    {
      "name": "Brushless Excitation System",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><circle cx=\"50\" cy=\"50\" r=\"12\"/><path d=\"M46 16h8l-4 8z\"/><path transform=\"rotate(90 50 50)\" d=\"M46 16h8l-4 8z\"/><path transform=\"rotate(180 50 50)\" d=\"M46 16h8l-4 8z\"/><path transform=\"rotate(270 50 50)\" d=\"M46 16h8l-4 8z\"/>"
    }
  ],
  "Electrical Protection and Control": [
    {
      "name": "Protective Relay",
      "svg": "<rect x=\"20\" y=\"24\" width=\"60\" height=\"52\" rx=\"4\"/><circle cx=\"32\" cy=\"62\" r=\"3\"/><circle cx=\"68\" cy=\"38\" r=\"3\"/><path d=\"M32 62L68 38\"/><path d=\"M28 46V30H34a4 4 0 0 1 0 8H28M33 38l6 8\"/>"
    },
    {
      "name": "Differential Protection Relay (87G)",
      "svg": "<circle cx=\"34\" cy=\"50\" r=\"18\"/><circle cx=\"66\" cy=\"50\" r=\"18\"/><path d=\"M50 40v20\"/><path d=\"M44 24V8H50a4 4 0 0 1 0 8H44M49 16l6 8\"/>"
    },
    {
      "name": "Overcurrent Relay (50/51)",
      "svg": "<path d=\"M12 16v68h76\"/><path d=\"M18 24C26 24 34 60 52 62S78 70 84 74\"/><path d=\"M62 34V18H68a4 4 0 0 1 0 8H62M67 26l6 8\"/>"
    },
    {
      "name": "Earth Fault Relay",
      "svg": "<rect x=\"22\" y=\"18\" width=\"56\" height=\"44\" rx=\"4\"/><path d=\"M50 62v8M36 70h28M42 78h16M47 86h6\"/><path d=\"M30 40V24H36a4 4 0 0 1 0 8H30M35 32l6 8\"/>"
    },
    {
      "name": "Voltage Transformer",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"32\"/><path d=\"M36 58V42H42a4 4 0 0 1 0 8H36 M49 42H60M54.5 42V58\"/>"
    },
    {
      "name": "Ammeter",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M26 66a32 32 0 0 1 48 0\"/><path d=\"M50 62L66 40\"/><circle cx=\"50\" cy=\"62\" r=\"3\"/><path d=\"M44 38L49.5 22L55 38M46.5 32H52.5\"/>"
    },
    {
      "name": "Voltmeter",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M26 66a32 32 0 0 1 48 0\"/><path d=\"M44 22L49.5 38L55 22\"/>"
    },
    {
      "name": "Wattmeter",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M42 34L46 50L50 38L54 50L58 34\"/>"
    },
    {
      "name": "Energy Meter",
      "svg": "<rect x=\"18\" y=\"20\" width=\"64\" height=\"60\" rx=\"6\"/><circle cx=\"50\" cy=\"60\" r=\"14\"/><path d=\"M50 60L57 52\"/><path d=\"M34 24L38 40L42 28L46 40L50 24 M54 24V40M65 24V40M54 32H65\"/>"
    },
    {
      "name": "Frequency Meter",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M38 42V58M49 42V58M38 50H49 M53 42H62L53 58H62\"/>"
    },
    {
      "name": "Synchronoscope",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M50 50L50 26\"/><path d=\"M50 50L68 66\" stroke-dasharray=\"4 4\"/><circle cx=\"50\" cy=\"50\" r=\"4\"/>"
    },
    {
      "name": "Control Panel",
      "svg": "<rect x=\"14\" y=\"16\" width=\"72\" height=\"68\" rx=\"4\"/><circle cx=\"32\" cy=\"36\" r=\"6\"/><circle cx=\"68\" cy=\"36\" r=\"6\"/><rect x=\"28\" y=\"56\" width=\"44\" height=\"16\" rx=\"2\"/>"
    },
    {
      "name": "Switchgear Panel",
      "svg": "<rect x=\"18\" y=\"12\" width=\"64\" height=\"76\" rx=\"3\"/><path d=\"M18 40h64M18 66h64\"/><rect x=\"30\" y=\"20\" width=\"16\" height=\"12\"/><rect x=\"54\" y=\"48\" width=\"16\" height=\"12\"/><rect x=\"30\" y=\"74\" width=\"16\" height=\"6\"/>"
    },
    {
      "name": "Emergency Stop Button",
      "svg": "<path d=\"M26 66a24 24 0 0 1 48 0z\"/><path d=\"M20 76h60\"/>"
    },
    {
      "name": "Electrical Contactor",
      "svg": "<rect x=\"32\" y=\"12\" width=\"36\" height=\"18\" rx=\"2\"/><path d=\"M50 30v10M40 40h20\"/><path d=\"M28 50v40M50 50v40M72 50v40\"/><path d=\"M22 60h12M44 60h12M66 60h12\"/>"
    },
    {
      "name": "Thermal Overload Relay",
      "svg": "<rect x=\"20\" y=\"20\" width=\"60\" height=\"60\" rx=\"4\"/><path d=\"M30 44h40\"/><path d=\"M30 62c5-10 10-10 15 0s10 10 15 0\"/><path d=\"M28 42V26H34a4 4 0 0 1 0 8H28M33 34l6 8\"/>"
    }
  ],
  "Renewable Energy": [
    {
      "name": "Solar PV Panel",
      "svg": "<rect x=\"14\" y=\"30\" width=\"72\" height=\"42\" rx=\"2\"/><path d=\"M14 51h72M38 30v42M62 30v42\"/><path d=\"M50 8v8M30 12l4 5M70 12l-4 5\"/>"
    },
    {
      "name": "Solar Cell",
      "svg": "<path d=\"M50 6v14M50 80v14\"/><rect x=\"26\" y=\"20\" width=\"48\" height=\"48\"/><path d=\"M26 44h48M50 20v48\"/>"
    },
    {
      "name": "Solar Inverter",
      "svg": "<rect x=\"18\" y=\"26\" width=\"64\" height=\"48\" rx=\"4\"/><path d=\"M26 44h14M26 56h14\"/><path d=\"M50 50c4-8 8-8 12 0s8 8 12 0\"/>"
    },
    {
      "name": "DC Combiner Box",
      "svg": "<rect x=\"34\" y=\"30\" width=\"32\" height=\"40\" rx=\"3\"/><path d=\"M10 34h24M10 44h24M10 56h24M10 66h24\"/><path d=\"M66 50h24\"/>"
    },
    {
      "name": "Solar Charge Controller",
      "svg": "<rect x=\"16\" y=\"24\" width=\"68\" height=\"52\" rx=\"4\"/><circle cx=\"32\" cy=\"50\" r=\"6\"/><path d=\"M42 50h12\"/><path d=\"M60 42v16M68 46v8M74 50h4\"/>"
    },
    {
      "name": "Wind Turbine Generator",
      "svg": "<path d=\"M50 44v48M40 92h20\"/><circle cx=\"50\" cy=\"44\" r=\"4\"/><path d=\"M50 44C46 34 46 16 50 6C54 16 54 34 50 44Z\"/><path transform=\"rotate(120 50 44)\" d=\"M50 44C46 34 46 16 50 6C54 16 54 34 50 44Z\"/><path transform=\"rotate(240 50 44)\" d=\"M50 44C46 34 46 16 50 6C54 16 54 34 50 44Z\"/>"
    },
    {
      "name": "Grid Connection Diagram",
      "svg": "<rect x=\"6\" y=\"38\" width=\"22\" height=\"24\" rx=\"2\"/><path d=\"M28 50h14\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/><path d=\"M58 50h14\"/><path d=\"M72 30v40M72 36h12M72 50h12M72 64h12\"/>"
    },
    {
      "name": "Battery Energy Storage System",
      "svg": "<rect x=\"14\" y=\"26\" width=\"72\" height=\"48\" rx=\"4\"/><path d=\"M24 44h12M30 38v12M24 56h12M60 44h12M66 38v12M60 56h12\"/>"
    }
  ],
  "Electrical Circuit and Drawing Symbols": [
    {
      "name": "Single Phase AC Source",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M50 6v14M50 80v14\"/><path d=\"M35 50c5-8 10-8 15 0s10 8 15 0\"/>"
    },
    {
      "name": "Three Phase AC Source",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M50 6v14M36 80v14M64 80v14\"/><path d=\"M35 50c5-8 10-8 15 0s10 8 15 0\"/>"
    },
    {
      "name": "DC Voltage Source",
      "svg": "<path d=\"M50 6v14M50 80v14\"/><circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M38 44h24M44 56h12\"/>"
    },
    {
      "name": "Ground Symbol",
      "svg": "<path d=\"M50 6v30\"/><path d=\"M30 36h40L50 70Z\"/>"
    },
    {
      "name": "Earth Symbol",
      "svg": "<path d=\"M50 6v44M24 50h52M34 62h32M44 74h12\"/>"
    },
    {
      "name": "Electrical Connection Point",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"5\"/><path d=\"M50 10v35M50 55v35M10 50h35M55 50h35\"/>"
    },
    {
      "name": "Open Circuit",
      "svg": "<circle cx=\"20\" cy=\"50\" r=\"3\"/><circle cx=\"80\" cy=\"50\" r=\"3\"/><path d=\"M23 50h28M55 50h22\"/>"
    },
    {
      "name": "Closed Circuit",
      "svg": "<rect x=\"18\" y=\"26\" width=\"64\" height=\"48\" rx=\"2\"/>"
    },
    {
      "name": "Arrow / Current Direction",
      "svg": "<path d=\"M12 50h70\"/><path d=\"M72 50l-12-8M72 50l-12 8\"/>"
    },
    {
      "name": "Voltage Measurement Symbol",
      "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M44 36h12M50 30v12\"/><path d=\"M44 64h12\"/>"
    },
    {
      "name": "Electrical Junction",
      "svg": "<circle cx=\"50\" cy=\"44\" r=\"5\"/><path d=\"M10 44h35M55 44h35M50 49v37\"/>"
    },
    {
      "name": "Three Phase Connection",
      "svg": "<path d=\"M20 36h60M20 48h60M20 60h60\"/><path d=\"M42 68l8-8\"/>"
    },
    {
      "name": "Star Connection",
      "svg": "<circle cx=\"50\" cy=\"16\" r=\"4\"/><circle cx=\"24\" cy=\"74\" r=\"4\"/><circle cx=\"76\" cy=\"74\" r=\"4\"/><path d=\"M50 20V50M28 71L50 50M72 71L50 50\"/>"
    },
    {
      "name": "Delta Connection",
      "svg": "<path d=\"M50 14L84 80H16Z\"/><circle cx=\"50\" cy=\"14\" r=\"4\"/><circle cx=\"84\" cy=\"80\" r=\"4\"/><circle cx=\"16\" cy=\"80\" r=\"4\"/>"
    }
  ]
}
};
