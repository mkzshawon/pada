// Clip art from assets/icons (line art), grouped by subject and folder. Written from the SVG files;
// the app loads this file so it works both in the browser and in the desktop app.
window.PADA_ICONS = {
  "electrical": {
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
  },
  "civil": {
    "Building and Architectural Components": [
      {
        "name": "Residential Building",
        "svg": "<path d=\"M16 46L50 18L84 46\"/><path d=\"M24 40V84H76V40\"/><rect x=\"42\" y=\"62\" width=\"16\" height=\"22\"/>"
      },
      {
        "name": "Commercial Building",
        "svg": "<rect x=\"22\" y=\"16\" width=\"56\" height=\"68\"/><path d=\"M22 84h56\"/><path d=\"M34 30h8M58 30h8M34 46h8M58 46h8M42 84V66h16v18\"/>"
      },
      {
        "name": "Industrial Building",
        "svg": "<path d=\"M14 84V44L34 30V44L54 30V44L74 30V84Z\"/><path d=\"M64 30V12h8v18\"/>"
      },
      {
        "name": "High-Rise Building",
        "svg": "<rect x=\"34\" y=\"8\" width=\"32\" height=\"76\"/><path d=\"M42 18h6M52 18h6M42 30h6M52 30h6M42 42h6M52 42h6M42 54h6M52 54h6M42 66h6M52 66h6\"/><path d=\"M26 84h48\"/>"
      },
      {
        "name": "Office Building",
        "svg": "<rect x=\"20\" y=\"14\" width=\"60\" height=\"72\"/><path d=\"M20 30h60M20 46h60M20 62h60M40 14v72M60 14v72\"/>"
      },
      {
        "name": "Factory Building",
        "svg": "<path d=\"M14 84V54h72v30z\"/><path d=\"M14 54L30 40V54L46 40V54L62 40V54\"/><path d=\"M70 54V20h8v34M80 54V30h4\"/>"
      },
      {
        "name": "Warehouse",
        "svg": "<path d=\"M16 84V46a34 26 0 0 1 68 0v38z\"/><path d=\"M34 84V60h32v24\"/>"
      },
      {
        "name": "Building Floor Plan",
        "svg": "<rect x=\"14\" y=\"14\" width=\"72\" height=\"72\"/><path d=\"M14 50h40M54 14v40M54 60h32M30 50v36\"/>"
      },
      {
        "name": "Building Elevation",
        "svg": "<path d=\"M10 86h80\"/><path d=\"M18 86V32L50 14L82 32V86\"/><rect x=\"36\" y=\"56\" width=\"10\" height=\"30\"/><rect x=\"58\" y=\"48\" width=\"10\" height=\"10\"/><rect x=\"30\" y=\"44\" width=\"8\" height=\"8\"/>"
      },
      {
        "name": "Building Section View",
        "svg": "<path d=\"M10 86h80\"/><path d=\"M20 86V20h60v66\"/><path d=\"M20 50h60M50 20v30\"/>"
      },
      {
        "name": "Architectural Door",
        "svg": "<path d=\"M14 84h72\"/><path d=\"M14 84V20\"/><path d=\"M14 20A64 64 0 0 1 78 84\"/>"
      },
      {
        "name": "Architectural Window",
        "svg": "<rect x=\"18\" y=\"20\" width=\"64\" height=\"60\"/><path d=\"M50 20v60M18 50h64\"/>"
      },
      {
        "name": "Staircase",
        "svg": "<path d=\"M14 86h16V72h14V58h14V44h14V30h14\"/>"
      },
      {
        "name": "Escalator",
        "svg": "<path d=\"M10 84h12v-8h12v-8h12v-8h12v-8\"/><path d=\"M10 84L90 20\"/>"
      },
      {
        "name": "Elevator",
        "svg": "<rect x=\"22\" y=\"14\" width=\"56\" height=\"72\"/><path d=\"M50 14v72\"/><path d=\"M36 42l-6-6 6-6M64 58l6 6-6 6\"/>"
      },
      {
        "name": "Roof Structure",
        "svg": "<path d=\"M10 52L50 14L90 52\"/><path d=\"M22 42V86h56V42\"/><path d=\"M26 52L50 28L74 52\"/>"
      },
      {
        "name": "Truss Structure",
        "svg": "<path d=\"M10 80L30 40L50 80L70 40L90 80\"/><path d=\"M30 40H70\"/><path d=\"M10 80h80\"/>"
      },
      {
        "name": "Balcony",
        "svg": "<rect x=\"34\" y=\"10\" width=\"32\" height=\"74\"/><path d=\"M18 56h64\"/><path d=\"M26 56V46M34 56V46M42 56V46M50 56V46M58 56V46M66 56V46M74 56V46\"/><path d=\"M26 46h48\"/>"
      },
      {
        "name": "Building Foundation Layout",
        "svg": "<path d=\"M20 20h60v60H20z\" stroke-dasharray=\"4 4\"/><rect x=\"14\" y=\"14\" width=\"12\" height=\"12\"/><rect x=\"74\" y=\"14\" width=\"12\" height=\"12\"/><rect x=\"14\" y=\"74\" width=\"12\" height=\"12\"/><rect x=\"74\" y=\"74\" width=\"12\" height=\"12\"/>"
      },
      {
        "name": "Structural Grid Plan",
        "svg": "<path d=\"M20 10v80M50 10v80M80 10v80M10 25h80M10 55h80M10 80h80\"/>"
      }
    ],
    "Structural Engineering Components": [
      {
        "name": "Reinforced Cement Concrete (RCC) Column",
        "svg": "<rect x=\"34\" y=\"10\" width=\"32\" height=\"80\"/><rect x=\"44\" y=\"20\" width=\"12\" height=\"60\"/>"
      },
      {
        "name": "Steel Column",
        "svg": "<path d=\"M30 10h40v8H54v64h16v8H30v-8h16V18H30z\"/>"
      },
      {
        "name": "RCC Beam",
        "svg": "<rect x=\"8\" y=\"36\" width=\"84\" height=\"28\"/><path d=\"M14 46h72M14 54h72\"/>"
      },
      {
        "name": "Steel Beam (I-Beam)",
        "svg": "<path d=\"M10 30h80v8H56v24h34v8H10v-8h34V38H10z\"/>"
      },
      {
        "name": "RCC Slab",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"68\"/><path d=\"M12 33h76M12 50h76M12 67h76M29 16v68M46 16v68M63 16v68M80 16v68\"/>"
      },
      {
        "name": "Reinforced Concrete Wall",
        "svg": "<rect x=\"30\" y=\"8\" width=\"40\" height=\"84\"/><path d=\"M36 8v84M64 8v84\"/>"
      },
      {
        "name": "Retaining Wall",
        "svg": "<path d=\"M26 10h14v58h36v12H26z\"/><path d=\"M68 40h16M68 54h16M68 68h16M68 82h16\"/>"
      },
      {
        "name": "Shear Wall",
        "svg": "<rect x=\"30\" y=\"8\" width=\"40\" height=\"84\"/><path d=\"M30 8L70 92M70 8L30 92\"/>"
      },
      {
        "name": "Concrete Footing",
        "svg": "<path d=\"M38 10v48M62 10v48\"/><path d=\"M22 58h56v10H22z\"/><path d=\"M10 88h80\"/>"
      },
      {
        "name": "Isolated Footing",
        "svg": "<rect x=\"16\" y=\"16\" width=\"68\" height=\"68\"/><rect x=\"38\" y=\"38\" width=\"24\" height=\"24\"/>"
      },
      {
        "name": "Combined Footing",
        "svg": "<path d=\"M26 10v44M74 10v44\"/><path d=\"M12 54h76v14H12z\"/>"
      },
      {
        "name": "Raft Foundation",
        "svg": "<path d=\"M16 10v40M50 10v40M84 10v40\"/><path d=\"M8 50h84v18H8z\"/><path d=\"M8 74h84\"/>"
      },
      {
        "name": "Pile Foundation",
        "svg": "<path d=\"M50 10v48\"/><path d=\"M16 58h68v10H16z\"/><path d=\"M26 68v24M50 68v24M74 68v24\"/>"
      },
      {
        "name": "Pile Cap",
        "svg": "<path d=\"M50 10v40\"/><path d=\"M22 50h56v20H22z\"/><path d=\"M34 70v20M66 70v20\"/>"
      },
      {
        "name": "Reinforcement Bar (Rebar)",
        "svg": "<path d=\"M6 50h88\"/><path d=\"M16 42l6 16M30 42l6 16M44 42l6 16M58 42l6 16M72 42l6 16\"/>"
      },
      {
        "name": "Reinforcement Cage",
        "svg": "<rect x=\"30\" y=\"12\" width=\"40\" height=\"76\"/><path d=\"M30 24h40M30 40h40M30 56h40M30 72h40\"/>"
      },
      {
        "name": "Beam-Column Joint",
        "svg": "<path d=\"M38 8v84M62 8v84\"/><path d=\"M8 38h30M62 38h30M8 62h30M62 62h30\"/>"
      },
      {
        "name": "Steel Truss",
        "svg": "<path d=\"M8 74h84M8 26h84M8 74L28 26L48 74L68 26L88 74M28 26v48M68 26v48\"/>"
      },
      {
        "name": "Steel Connection",
        "svg": "<rect x=\"14\" y=\"16\" width=\"14\" height=\"68\"/><rect x=\"72\" y=\"16\" width=\"14\" height=\"68\"/><path d=\"M28 34h44v32H28z\"/><circle cx=\"50\" cy=\"42\" r=\"3\"/><circle cx=\"50\" cy=\"58\" r=\"3\"/>"
      },
      {
        "name": "Expansion Joint",
        "svg": "<path d=\"M10 66h36v16H10z\"/><path d=\"M54 66h36v16H54z\"/><path d=\"M46 66v16M54 66v16\"/><path d=\"M50 60l-4 6 4 6-4 6\"/>"
      }
    ],
    "Construction Materials": [
      {
        "name": "Cement Bag",
        "svg": "<path d=\"M36 10h28v10l10 8v56H26V28l10-8z\"/><path d=\"M36 40h28\"/>"
      },
      {
        "name": "Concrete Block",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\"/><rect x=\"24\" y=\"40\" width=\"20\" height=\"20\"/><rect x=\"56\" y=\"40\" width=\"20\" height=\"20\"/>"
      },
      {
        "name": "Clay Brick",
        "svg": "<rect x=\"10\" y=\"32\" width=\"80\" height=\"36\"/><path d=\"M50 32v18M30 50v18M70 50v18\"/>"
      },
      {
        "name": "Sand Pile",
        "svg": "<path d=\"M8 80Q50 10 92 80\"/><path d=\"M8 80h84\"/><path d=\"M30 70h4M44 60h4M58 66h4M70 74h4M40 78h4M62 80h4\"/>"
      },
      {
        "name": "Stone Aggregate",
        "svg": "<path d=\"M14 70l10-14 12 4 6-10 14 6-4 14-16 6-14-2z\"/><path d=\"M52 80l8-12 14 2 6 10-10 6-14-2z\"/><path d=\"M28 40l8-6 10 4-2 10-10 2-6-6z\"/>"
      },
      {
        "name": "Ready-Mix Concrete",
        "svg": "<path d=\"M18 74L30 30H70L82 74Z\"/><path d=\"M30 30L26 20H74L70 30\"/>"
      },
      {
        "name": "Reinforcing Steel Bar",
        "svg": "<path d=\"M8 36h84M8 50h84M8 64h84\"/>"
      },
      {
        "name": "Structural Steel Section",
        "svg": "<path d=\"M24 14v72h64V72H38V14z\"/>"
      },
      {
        "name": "Steel Plate",
        "svg": "<rect x=\"12\" y=\"34\" width=\"76\" height=\"32\"/><circle cx=\"24\" cy=\"50\" r=\"3\"/><circle cx=\"50\" cy=\"50\" r=\"3\"/><circle cx=\"76\" cy=\"50\" r=\"3\"/>"
      },
      {
        "name": "Steel Pipe",
        "svg": "<path d=\"M10 36h80M10 64h80\"/><ellipse cx=\"90\" cy=\"50\" rx=\"6\" ry=\"14\"/><ellipse cx=\"10\" cy=\"50\" rx=\"6\" ry=\"14\"/>"
      },
      {
        "name": "Timber / Wooden Plank",
        "svg": "<rect x=\"8\" y=\"38\" width=\"84\" height=\"24\"/><path d=\"M20 46c10-2 16 2 28 0M52 54c10-2 16 2 28 0\"/>"
      },
      {
        "name": "Plywood Sheet",
        "svg": "<path d=\"M14 30h72v44H14z\"/><path d=\"M14 30L26 22h72l-12 8\"/><path d=\"M86 30v44\"/>"
      },
      {
        "name": "Glass Panel",
        "svg": "<rect x=\"20\" y=\"12\" width=\"60\" height=\"76\"/><path d=\"M30 34l20-20M30 54l40-40\"/>"
      },
      {
        "name": "Ceramic Tile",
        "svg": "<rect x=\"16\" y=\"16\" width=\"68\" height=\"68\"/><rect x=\"28\" y=\"28\" width=\"44\" height=\"44\"/>"
      },
      {
        "name": "Marble Slab",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\"/><path d=\"M14 58C28 46 36 62 50 50S70 42 86 52\"/>"
      },
      {
        "name": "Asphalt",
        "svg": "<path d=\"M10 40h80v44H10z\"/><path d=\"M10 56h80M10 72h80\"/>"
      },
      {
        "name": "Bitumen Drum",
        "svg": "<ellipse cx=\"50\" cy=\"20\" rx=\"26\" ry=\"8\"/><path d=\"M24 20v60c0 4 52 4 52 0V20\"/><path d=\"M24 40h52M24 60h52\"/>"
      },
      {
        "name": "Roofing Sheet",
        "svg": "<path d=\"M8 30l10 10 10-10 10 10 10-10 10 10 10-10 10 10 10-10 10 10v40H8z\"/>"
      },
      {
        "name": "Geotextile",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\"/><path d=\"M10 26h80M10 42h80M10 58h80M10 74h80M26 10v80M42 10v80M58 10v80M74 10v80\"/>"
      },
      {
        "name": "Waterproofing Membrane",
        "svg": "<path d=\"M10 36h80v40H10z\"/><path d=\"M10 56c10-8 20 8 30 0s20 8 30 0 14 4 20 0\"/>"
      }
    ],
    "Roads and Transportation Engineering": [
      {
        "name": "Asphalt Road",
        "svg": "<path d=\"M36 10L14 90M64 10L86 90\"/><path d=\"M50 16v8M50 36v10M50 62v12\"/>"
      },
      {
        "name": "Concrete Road",
        "svg": "<path d=\"M36 10L14 90M64 10L86 90\"/><path d=\"M26 30h48M20 52h60M16 74h68\"/>"
      },
      {
        "name": "Highway",
        "svg": "<path d=\"M30 10L12 90M70 10L88 90\"/><path d=\"M50 14v10M50 36v10M50 58v10M50 80v8\"/>"
      },
      {
        "name": "Railway Track",
        "svg": "<path d=\"M34 10L22 90M66 10L78 90\"/><path d=\"M28 24h44M25 44h50M22 64h56M19 84h62\"/>"
      },
      {
        "name": "Railway Bridge",
        "svg": "<path d=\"M8 30h84M8 36h84\"/><path d=\"M14 74c10-40 62-40 72 0\"/><path d=\"M26 56v18M74 56v18\"/><path d=\"M8 74h84\"/>"
      },
      {
        "name": "Road Intersection",
        "svg": "<path d=\"M36 8v34M64 8v34M36 58v34M64 58v34M8 42h34M8 58h34M58 42h34M58 58h34\"/>"
      },
      {
        "name": "Roundabout",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><circle cx=\"50\" cy=\"50\" r=\"12\"/><path d=\"M50 8v14M50 78v14M8 50h14M78 50h14\"/>"
      },
      {
        "name": "Road Divider",
        "svg": "<rect x=\"10\" y=\"44\" width=\"80\" height=\"12\"/><path d=\"M10 36h80M10 64h80\"/>"
      },
      {
        "name": "Footpath",
        "svg": "<path d=\"M8 36h84M8 80h84\"/><path d=\"M28 36v44M48 36v44M68 36v44\"/><path d=\"M8 58h84\"/>"
      },
      {
        "name": "Road Drain",
        "svg": "<path d=\"M8 40h84v30H8z\"/><path d=\"M18 40v30M30 40v30M42 40v30M54 40v30M66 40v30M78 40v30\"/>"
      },
      {
        "name": "Road Cross Section",
        "svg": "<path d=\"M8 40Q50 28 92 40\"/><path d=\"M8 44h84M8 56h84M8 68h84M8 80h84\"/>"
      },
      {
        "name": "Road Pavement Layers",
        "svg": "<rect x=\"8\" y=\"30\" width=\"84\" height=\"50\"/><path d=\"M8 46h84M8 62h84\"/>"
      },
      {
        "name": "Road Signboard",
        "svg": "<path d=\"M50 44v46M38 90h24\"/><path d=\"M18 12h64l8 9-8 9H18z\"/>"
      },
      {
        "name": "Traffic Signal",
        "svg": "<path d=\"M50 60v30M38 90h24\"/><rect x=\"36\" y=\"10\" width=\"28\" height=\"50\" rx=\"4\"/><circle cx=\"50\" cy=\"22\" r=\"5\"/><circle cx=\"50\" cy=\"36\" r=\"5\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/>"
      },
      {
        "name": "Street Light Pole",
        "svg": "<path d=\"M30 90V18h30\"/><path d=\"M52 18v-4h14l-2 4z\"/><path d=\"M22 90h16\"/>"
      },
      {
        "name": "Road Safety Barrier",
        "svg": "<path d=\"M8 38h84M8 48h84\"/><path d=\"M20 38v44M50 38v44M80 38v44\"/>"
      },
      {
        "name": "Highway Overpass",
        "svg": "<path d=\"M8 40h84M8 50h84\"/><path d=\"M20 50v30M80 50v30\"/><path d=\"M14 92h72\"/>"
      },
      {
        "name": "Underpass",
        "svg": "<path d=\"M8 30h84\"/><path d=\"M20 30v8c0 12 10 22 30 22s30-10 30-22v-8\"/><path d=\"M8 90h84\"/>"
      },
      {
        "name": "Pedestrian Crossing",
        "svg": "<rect x=\"18\" y=\"20\" width=\"10\" height=\"60\"/><rect x=\"38\" y=\"20\" width=\"10\" height=\"60\"/><rect x=\"58\" y=\"20\" width=\"10\" height=\"60\"/><rect x=\"78\" y=\"20\" width=\"8\" height=\"60\"/>"
      },
      {
        "name": "Road Roller",
        "svg": "<rect x=\"12\" y=\"50\" width=\"48\" height=\"26\" rx=\"6\"/><path d=\"M60 58h18l10 14v4H60z\"/><circle cx=\"36\" cy=\"84\" r=\"6\"/><circle cx=\"74\" cy=\"84\" r=\"6\"/>"
      }
    ],
    "Bridges and Hydraulic Structures": [
      {
        "name": "RCC Bridge",
        "svg": "<path d=\"M6 40h88M6 52h88\"/><path d=\"M22 52v38M50 52v38M78 52v38\"/><path d=\"M6 90h88\"/>"
      },
      {
        "name": "Steel Bridge",
        "svg": "<path d=\"M6 46h88\"/><path d=\"M6 46L26 22h48l20 24\"/><path d=\"M26 22L50 46L74 22M50 22v24\"/><path d=\"M22 60v30M78 60v30\"/>"
      },
      {
        "name": "Suspension Bridge",
        "svg": "<path d=\"M6 60h88\"/><path d=\"M14 90V20M86 90V20\"/><path d=\"M6 60Q50 110 94 60\"/><path d=\"M14 20Q50 60 86 20\"/><path d=\"M28 42v18M40 50v10M50 50v10M60 50v10M72 42v18\"/>"
      },
      {
        "name": "Cable-Stayed Bridge",
        "svg": "<path d=\"M6 62h88\"/><path d=\"M42 90V14\"/><path d=\"M42 14L92 62M42 14L6 62M42 14L26 62M42 14L70 62\"/><path d=\"M14 90h8M78 90h8\"/>"
      },
      {
        "name": "Arch Bridge",
        "svg": "<path d=\"M6 62h88\"/><path d=\"M8 62Q50 4 92 62\"/><path d=\"M22 62v-20M36 62v-30M50 62v-34M64 62v-30M78 62v-20\"/><path d=\"M6 90h88\"/>"
      },
      {
        "name": "Bridge Pier",
        "svg": "<path d=\"M40 40h20v36H40z\"/><path d=\"M34 76h32v6H34z\"/><path d=\"M34 82h32\"/><path d=\"M6 40h88\"/>"
      },
      {
        "name": "Bridge Abutment",
        "svg": "<path d=\"M6 40h30v44\"/><path d=\"M6 40L6 84h38V40\"/><path d=\"M6 40h88\"/><path d=\"M36 40h58\"/>"
      },
      {
        "name": "Bridge Deck",
        "svg": "<path d=\"M6 40h88M6 52h88\"/><path d=\"M6 40v12M94 40v12\"/><path d=\"M14 52v10M30 52v10M46 52v10M62 52v10M78 52v10\"/><path d=\"M6 80h88\"/>"
      },
      {
        "name": "Bridge Bearing",
        "svg": "<rect x=\"20\" y=\"20\" width=\"60\" height=\"16\"/><path d=\"M30 36h40\"/><path d=\"M34 36v20h32V36\"/><path d=\"M14 56h72v14H14z\"/>"
      },
      {
        "name": "Expansion Joint of Bridge",
        "svg": "<path d=\"M6 46h38v16H6z\"/><path d=\"M56 46h38v16H56z\"/><path d=\"M44 46v16M56 46v16\"/><path d=\"M50 40l-4 6 4 6-4 6\"/>"
      },
      {
        "name": "Concrete Dam",
        "svg": "<path d=\"M6 20h88\"/><path d=\"M14 20L30 90H70L86 20\"/><path d=\"M20 90h60\"/><path d=\"M6 90h88\"/><path d=\"M50 20v70\"/>"
      },
      {
        "name": "Embankment",
        "svg": "<path d=\"M6 80h88\"/><path d=\"M6 80C30 80 36 40 50 40S72 80 94 80\"/><path d=\"M26 66h8M62 66h8\"/>"
      },
      {
        "name": "Flood Protection Wall",
        "svg": "<path d=\"M6 84h88\"/><path d=\"M26 84V22h48v62\"/><path d=\"M26 22h48\"/><path d=\"M14 84V72M86 84V72\"/><path d=\"M20 60c8-6 16 6 24 0s16 6 24 0 8 4 8 4\"/>"
      },
      {
        "name": "River Training Structure",
        "svg": "<path d=\"M6 40h88\"/><path d=\"M6 60h88\"/><path d=\"M24 40v40M50 40v40M76 40v40\"/><path d=\"M6 80h88\"/>"
      },
      {
        "name": "Canal",
        "svg": "<path d=\"M6 30L24 70H76L94 30\"/><path d=\"M6 30h88\"/><path d=\"M14 52h72\"/>"
      },
      {
        "name": "Culvert",
        "svg": "<path d=\"M10 44h80M10 72h80\"/><path d=\"M20 44v28M80 44v28\"/><path d=\"M30 44Q50 22 70 44\"/><path d=\"M30 72Q50 94 70 72\"/>"
      },
      {
        "name": "Sluice Gate",
        "svg": "<path d=\"M20 90V14M80 90V14\"/><path d=\"M20 14h60\"/><rect x=\"30\" y=\"26\" width=\"40\" height=\"22\"/><path d=\"M30 60h40v30H30z\"/><path d=\"M40 48v-4M60 48v-4M50 48v-8\"/>"
      },
      {
        "name": "Spillway",
        "svg": "<path d=\"M6 36h30v54\"/><path d=\"M36 36h20\"/><path d=\"M56 36Q72 46 80 88\"/><path d=\"M80 88H94\"/><path d=\"M6 90h88\"/>"
      },
      {
        "name": "Retaining Structure",
        "svg": "<path d=\"M26 10h14v58h36v12H26z\"/><path d=\"M68 40h16M68 54h16M68 68h16M68 82h16\"/>"
      },
      {
        "name": "River Cross Section",
        "svg": "<path d=\"M6 30h88\"/><path d=\"M6 30Q24 30 30 60T50 80T70 60T94 30\"/><path d=\"M14 46h10M46 58h10M76 46h10\"/>"
      }
    ],
    "Surveying and Geotechnical Equipment": [
      {
        "name": "Total Station",
        "svg": "<rect x=\"36\" y=\"30\" width=\"28\" height=\"22\" rx=\"3\"/><circle cx=\"50\" cy=\"41\" r=\"6\"/><path d=\"M50 30V18h-8\"/><path d=\"M44 52v22M56 52v22M30 74h40\"/>"
      },
      {
        "name": "Theodolite",
        "svg": "<circle cx=\"50\" cy=\"34\" r=\"16\"/><path d=\"M34 34h32M50 18v32\"/><path d=\"M50 50v28M36 90h28M50 78L30 90M50 78L70 90\"/>"
      },
      {
        "name": "Automatic Level",
        "svg": "<rect x=\"34\" y=\"26\" width=\"32\" height=\"24\" rx=\"3\"/><circle cx=\"50\" cy=\"38\" r=\"6\"/><path d=\"M50 26V14\"/><path d=\"M50 50v26M36 90h28M50 76L30 90M50 76L70 90\"/>"
      },
      {
        "name": "Digital Level",
        "svg": "<rect x=\"30\" y=\"20\" width=\"40\" height=\"30\" rx=\"3\"/><rect x=\"38\" y=\"28\" width=\"24\" height=\"12\"/><path d=\"M50 50v26M36 90h28M50 76L30 90M50 76L70 90\"/>"
      },
      {
        "name": "Surveying Tripod",
        "svg": "<path d=\"M50 10v40\"/><path d=\"M50 50L24 90M50 50L76 90M50 50v40\"/><path d=\"M36 60h28\"/>"
      },
      {
        "name": "Levelling Staff",
        "svg": "<rect x=\"42\" y=\"8\" width=\"16\" height=\"84\"/><path d=\"M42 20h8M42 32h8M42 44h8M42 56h8M42 68h8M42 80h8\"/><path d=\"M50 8v84\" stroke-dasharray=\"2 4\"/>"
      },
      {
        "name": "Measuring Tape",
        "svg": "<circle cx=\"34\" cy=\"50\" r=\"20\"/><circle cx=\"34\" cy=\"50\" r=\"8\"/><path d=\"M54 50h36\"/><path d=\"M68 50v-6M76 50v-6M84 50v-6M68 50v6M76 50v6M84 50v6\"/>"
      },
      {
        "name": "Surveying Prism",
        "svg": "<path d=\"M30 32h40l-10 36H40z\"/><path d=\"M40 32L50 18L60 32\"/><path d=\"M50 68v22M38 90h24\"/>"
      },
      {
        "name": "GPS Survey Receiver",
        "svg": "<path d=\"M30 28a24 24 0 0 1 40 0\"/><path d=\"M38 36a12 12 0 0 1 24 0\"/><circle cx=\"50\" cy=\"44\" r=\"4\"/><path d=\"M50 48v42M38 90h24\"/>"
      },
      {
        "name": "Laser Distance Meter",
        "svg": "<rect x=\"16\" y=\"36\" width=\"60\" height=\"28\" rx=\"4\"/><circle cx=\"66\" cy=\"50\" r=\"6\"/><path d=\"M76 50h16M80 44v12\"/><path d=\"M32 64v14M40 64v14\"/>"
      },
      {
        "name": "Plumb Bob",
        "svg": "<path d=\"M50 8v56\"/><path d=\"M42 64h16l-4 8v8h-8v-8z\"/><path d=\"M50 84v6\"/><path d=\"M42 90h16\"/>"
      },
      {
        "name": "Spirit Level",
        "svg": "<rect x=\"8\" y=\"40\" width=\"84\" height=\"20\" rx=\"4\"/><path d=\"M40 40v20M60 40v20\"/><circle cx=\"50\" cy=\"50\" r=\"3\"/>"
      },
      {
        "name": "Surveying Compass",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"34\"/><path d=\"M50 22L58 50L50 78L42 50z\"/><path d=\"M50 16v8\"/>"
      },
      {
        "name": "Soil Sampling Auger",
        "svg": "<path d=\"M50 8v50\"/><path d=\"M36 58h28M38 66h24M42 74h16\"/><path d=\"M42 80L50 92L58 80\"/>"
      },
      {
        "name": "Cone Penetration Test (CPT) Equipment",
        "svg": "<path d=\"M50 8v48\"/><path d=\"M42 56h16v18H42z\"/><path d=\"M50 74L42 92h16z\"/><path d=\"M30 92h40\"/>"
      },
      {
        "name": "Standard Penetration Test (SPT) Equipment",
        "svg": "<path d=\"M50 8v54\"/><circle cx=\"50\" cy=\"20\" r=\"6\"/><path d=\"M40 62h20v20H40z\"/><path d=\"M30 92h40\"/>"
      },
      {
        "name": "Soil Testing Apparatus",
        "svg": "<path d=\"M28 20h44v56H28z\"/><path d=\"M36 20V12h28v8\"/><path d=\"M36 40h28M36 60h28\"/><path d=\"M50 76v10M40 90h20\"/>"
      },
      {
        "name": "Borehole Drilling Rig",
        "svg": "<path d=\"M16 90h68\"/><path d=\"M26 90V26L50 12L74 26v64\"/><path d=\"M50 26v64\"/><path d=\"M42 40h16M42 56h16\"/>"
      },
      {
        "name": "Plate Load Test Apparatus",
        "svg": "<rect x=\"18\" y=\"76\" width=\"64\" height=\"8\"/><path d=\"M50 16v58\"/><path d=\"M38 16h24\"/><path d=\"M42 16V10h16v6\"/><path d=\"M30 60h40\"/>"
      },
      {
        "name": "Soil Compaction Equipment",
        "svg": "<rect x=\"16\" y=\"54\" width=\"48\" height=\"24\" rx=\"6\"/><path d=\"M64 60h16l8 14v6H64z\"/><circle cx=\"34\" cy=\"84\" r=\"6\"/><circle cx=\"76\" cy=\"84\" r=\"6\"/><path d=\"M40 54V36h20v18\"/>"
      }
    ],
    "Construction Machinery and Tools": [
      {
        "name": "Excavator",
        "svg": "<rect x=\"10\" y=\"74\" width=\"56\" height=\"12\" rx=\"6\"/><path d=\"M24 74V56h22l6 18\"/><path d=\"M46 56L74 30L86 46\"/><path d=\"M74 30L84 62\"/><path d=\"M84 62l8 6-4 6h-8\"/>"
      },
      {
        "name": "Bulldozer",
        "svg": "<rect x=\"12\" y=\"74\" width=\"60\" height=\"12\" rx=\"6\"/><path d=\"M24 74V52h30l8 10\"/><path d=\"M8 40h10v34\"/><path d=\"M18 56L24 52\"/>"
      },
      {
        "name": "Wheel Loader",
        "svg": "<circle cx=\"28\" cy=\"78\" r=\"10\"/><circle cx=\"74\" cy=\"78\" r=\"10\"/><path d=\"M18 68h54V44H36L26 56H18z\"/><path d=\"M72 44V30\"/><path d=\"M68 30h18l4 10H68\"/>"
      },
      {
        "name": "Backhoe Loader",
        "svg": "<circle cx=\"26\" cy=\"78\" r=\"9\"/><circle cx=\"74\" cy=\"78\" r=\"9\"/><path d=\"M16 68h60V48H50L40 58H16z\"/><path d=\"M76 48L92 22\"/><path d=\"M92 22l-4 14\"/>"
      },
      {
        "name": "Motor Grader",
        "svg": "<circle cx=\"22\" cy=\"78\" r=\"8\"/><circle cx=\"78\" cy=\"78\" r=\"8\"/><path d=\"M22 70h50V50H40\"/><path d=\"M8 58h70M50 58L60 74\"/>"
      },
      {
        "name": "Tower Crane",
        "svg": "<path d=\"M50 90V14\"/><path d=\"M14 22h72\"/><path d=\"M50 14L84 22\"/><path d=\"M80 22v40\"/><path d=\"M76 62h8v10h-8\"/><rect x=\"18\" y=\"16\" width=\"10\" height=\"10\"/><path d=\"M40 90h20\"/>"
      },
      {
        "name": "Mobile Crane",
        "svg": "<rect x=\"8\" y=\"64\" width=\"34\" height=\"18\"/><circle cx=\"20\" cy=\"84\" r=\"6\"/><circle cx=\"36\" cy=\"84\" r=\"6\"/><path d=\"M42 74h18V64H42\"/><path d=\"M46 64L86 18\"/><path d=\"M86 18v40M80 58h12\"/>"
      },
      {
        "name": "Concrete Mixer",
        "svg": "<path d=\"M22 66L28 30H62L70 66\"/><path d=\"M22 66h48\"/><path d=\"M10 74h14M62 74h18\"/><circle cx=\"24\" cy=\"80\" r=\"6\"/><circle cx=\"60\" cy=\"80\" r=\"6\"/>"
      },
      {
        "name": "Concrete Pump",
        "svg": "<rect x=\"10\" y=\"66\" width=\"36\" height=\"16\"/><circle cx=\"22\" cy=\"86\" r=\"5\"/><circle cx=\"38\" cy=\"86\" r=\"5\"/><path d=\"M46 66V46L80 20\"/><path d=\"M80 20L92 40\"/><path d=\"M60 46L70 40\"/>"
      },
      {
        "name": "Concrete Vibrator",
        "svg": "<path d=\"M50 8v58\"/><path d=\"M42 66h16l-2 22H44z\"/><path d=\"M36 20h28\"/><path d=\"M50 30c-6 6 6 10 0 16\"/>"
      },
      {
        "name": "Road Roller (Drum)",
        "svg": "<circle cx=\"50\" cy=\"62\" r=\"24\"/><path d=\"M50 38V24h18l8 14\"/><path d=\"M26 62h48\"/>"
      },
      {
        "name": "Asphalt Paver",
        "svg": "<rect x=\"10\" y=\"72\" width=\"60\" height=\"12\" rx=\"6\"/><path d=\"M14 72V50h40l16 22\"/><path d=\"M18 50V34h22v16\"/><path d=\"M66 72h22\"/>"
      },
      {
        "name": "Dump Truck",
        "svg": "<path d=\"M12 72L22 36H60L66 72z\"/><path d=\"M66 72V52h16l10 10v10z\"/><circle cx=\"28\" cy=\"80\" r=\"6\"/><circle cx=\"76\" cy=\"80\" r=\"6\"/>"
      },
      {
        "name": "Forklift",
        "svg": "<path d=\"M30 14V84M38 14V84\"/><path d=\"M38 74h32M38 66h32\"/><path d=\"M54 50h30v30H54\"/><circle cx=\"30\" cy=\"86\" r=\"4\"/><circle cx=\"70\" cy=\"86\" r=\"4\"/>"
      },
      {
        "name": "Pile Driving Machine",
        "svg": "<path d=\"M40 8v74M60 8v74\"/><path d=\"M40 8h20\"/><rect x=\"44\" y=\"30\" width=\"12\" height=\"14\"/><path d=\"M50 44v30\"/><rect x=\"34\" y=\"78\" width=\"32\" height=\"8\"/>"
      },
      {
        "name": "Drilling Machine",
        "svg": "<rect x=\"34\" y=\"12\" width=\"32\" height=\"24\" rx=\"4\"/><path d=\"M50 36v44\"/><path d=\"M42 80L50 92L58 80\"/><path d=\"M38 24h24\"/>"
      },
      {
        "name": "Welding Machine",
        "svg": "<rect x=\"16\" y=\"30\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M28 40h24M28 60h24\"/><path d=\"M64 50h14l10-10\"/><path d=\"M64 50h14l10 10\"/>"
      },
      {
        "name": "Scaffolding",
        "svg": "<path d=\"M16 8v84M84 8v84\"/><path d=\"M16 26h68M16 52h68M16 78h68\"/><path d=\"M16 26L84 52M16 52L84 78\"/>"
      },
      {
        "name": "Construction Ladder",
        "svg": "<path d=\"M34 8v84M66 8v84\"/><path d=\"M34 22h32M34 38h32M34 54h32M34 70h32\"/>"
      },
      {
        "name": "Wheelbarrow",
        "svg": "<path d=\"M18 40h60l-8 26H28z\"/><path d=\"M10 30l10 10\"/><path d=\"M78 40L90 30\"/><circle cx=\"50\" cy=\"78\" r=\"7\"/><path d=\"M28 66L50 78M72 66L50 78\"/>"
      }
    ],
    "Water Supply Plumbing and Drainage": [
      {
        "name": "Water Storage Tank",
        "svg": "<ellipse cx=\"50\" cy=\"20\" rx=\"28\" ry=\"8\"/><path d=\"M22 20v56c0 4 56 4 56 0V20\"/><path d=\"M30 84v6M70 84v6\"/>"
      },
      {
        "name": "Underground Water Tank",
        "svg": "<path d=\"M8 36h84\"/><path d=\"M14 36v40h72V36\"/><path d=\"M20 50h10M70 50h10\"/>"
      },
      {
        "name": "Overhead Water Tank",
        "svg": "<ellipse cx=\"50\" cy=\"28\" rx=\"26\" ry=\"8\"/><path d=\"M24 28v26c0 4 52 4 52 0V28\"/><path d=\"M34 58L26 90M66 58L74 90M42 58L40 90M58 58L60 90\"/>"
      },
      {
        "name": "Water Supply Pipeline",
        "svg": "<path d=\"M8 40h84M8 60h84\"/><path d=\"M40 50h20M54 44l6 6-6 6\"/>"
      },
      {
        "name": "PVC Pipe",
        "svg": "<path d=\"M10 42h66M10 58h66\"/><path d=\"M76 36h14v28H76z\"/>"
      },
      {
        "name": "GI Pipe",
        "svg": "<path d=\"M10 42h80M10 58h80\"/><path d=\"M14 42v16M20 42v16M26 42v16\"/>"
      },
      {
        "name": "HDPE Pipe",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><circle cx=\"50\" cy=\"50\" r=\"26\"/><circle cx=\"50\" cy=\"50\" r=\"16\"/>"
      },
      {
        "name": "Pipe Elbow",
        "svg": "<path d=\"M24 90V42Q24 24 42 24H86M36 90V46Q36 36 46 36H86\"/>"
      },
      {
        "name": "Pipe Tee",
        "svg": "<path d=\"M8 40h84M8 60h84\"/><path d=\"M42 60v30h16V60\"/>"
      },
      {
        "name": "Pipe Reducer",
        "svg": "<path d=\"M8 40h34M8 60h34\"/><path d=\"M42 36L70 44V56L42 64\"/><path d=\"M70 44h22M70 56h22\"/>"
      },
      {
        "name": "Pipe Flange",
        "svg": "<path d=\"M10 42h80M10 58h80\"/><path d=\"M46 30h8v40h-8z\"/>"
      },
      {
        "name": "Gate Valve",
        "svg": "<path d=\"M8 50h30M62 50h30\"/><path d=\"M38 40h24v20H38z\"/><path d=\"M50 40V20M36 20h28\"/>"
      },
      {
        "name": "Globe Valve",
        "svg": "<path d=\"M8 50h24M68 50h24\"/><circle cx=\"50\" cy=\"56\" r=\"14\"/><path d=\"M50 42V22M36 22h28\"/>"
      },
      {
        "name": "Butterfly Valve",
        "svg": "<path d=\"M8 50h84\"/><path d=\"M50 30v40\"/><ellipse cx=\"50\" cy=\"50\" rx=\"4\" ry=\"18\"/><path d=\"M50 22V10M42 10h16\"/>"
      },
      {
        "name": "Check Valve",
        "svg": "<path d=\"M8 50h24M68 50h24\"/><path d=\"M32 40h36v20H32z\"/><path d=\"M40 60L60 40\"/>"
      },
      {
        "name": "Water Pump",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M42 36v28l22-14z\"/><path d=\"M8 50h12M80 50h12\"/>"
      },
      {
        "name": "Centrifugal Pump",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><circle cx=\"50\" cy=\"50\" r=\"12\"/><path d=\"M50 38V22M50 62v16M38 50H22M62 50h16\"/>"
      },
      {
        "name": "Water Meter",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M50 50L62 38\"/><path d=\"M8 50h14M78 50h14\"/>"
      },
      {
        "name": "Water Filter",
        "svg": "<rect x=\"34\" y=\"14\" width=\"32\" height=\"72\" rx=\"6\"/><path d=\"M34 40h32M34 62h32\"/><path d=\"M50 14V6M50 86v8\"/>"
      },
      {
        "name": "Water Treatment Plant",
        "svg": "<rect x=\"10\" y=\"50\" width=\"22\" height=\"36\"/><ellipse cx=\"60\" cy=\"50\" rx=\"20\" ry=\"6\"/><path d=\"M40 50v36M80 50v36\"/><path d=\"M80 50h10\"/>"
      },
      {
        "name": "Sewer Pipeline",
        "svg": "<path d=\"M8 40h84M8 62h84\"/><rect x=\"18\" y=\"30\" width=\"10\" height=\"10\"/><rect x=\"72\" y=\"30\" width=\"10\" height=\"10\"/>"
      },
      {
        "name": "Manhole",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><circle cx=\"50\" cy=\"50\" r=\"26\"/><path d=\"M40 44h20M40 56h20\"/>"
      },
      {
        "name": "Inspection Chamber",
        "svg": "<rect x=\"30\" y=\"30\" width=\"40\" height=\"40\"/><path d=\"M30 46h40\"/><path d=\"M8 50h22M70 50h22\"/>"
      },
      {
        "name": "Drainage Channel",
        "svg": "<path d=\"M8 36h84\"/><path d=\"M14 36v34h72V36\"/><path d=\"M26 36v34M42 36v34M58 36v34M74 36v34\"/>"
      },
      {
        "name": "Stormwater Drain",
        "svg": "<path d=\"M8 40h84\"/><rect x=\"30\" y=\"50\" width=\"40\" height=\"30\"/><path d=\"M38 50v30M50 50v30M62 50v30\"/>"
      },
      {
        "name": "Septic Tank",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"48\" rx=\"4\"/><path d=\"M50 30v48\"/><path d=\"M20 30V20h10v10M70 30V20h10v10\"/>"
      },
      {
        "name": "Sewage Treatment Plant",
        "svg": "<rect x=\"8\" y=\"46\" width=\"22\" height=\"34\"/><rect x=\"38\" y=\"46\" width=\"22\" height=\"34\"/><rect x=\"68\" y=\"46\" width=\"22\" height=\"34\"/><path d=\"M30 63h8M60 63h8\"/>"
      },
      {
        "name": "Rainwater Harvesting System",
        "svg": "<path d=\"M10 36L50 12L90 36\"/><path d=\"M78 36v34\"/><rect x=\"26\" y=\"70\" width=\"48\" height=\"16\"/>"
      }
    ],
    "Environmental and Municipal Engineering": [
      {
        "name": "Wastewater Treatment Tank",
        "svg": "<rect x=\"16\" y=\"28\" width=\"68\" height=\"56\" rx=\"4\"/><path d=\"M16 46h68\"/><path d=\"M30 60c6-4 10 4 16 0s10 4 16 0 6 4 8 0\"/>"
      },
      {
        "name": "Sedimentation Tank",
        "svg": "<rect x=\"16\" y=\"28\" width=\"68\" height=\"56\" rx=\"4\"/><path d=\"M28 84L50 62L72 84\"/><path d=\"M28 40h44\"/><path d=\"M50 46v10\"/>"
      },
      {
        "name": "Aeration Tank",
        "svg": "<rect x=\"16\" y=\"28\" width=\"68\" height=\"56\" rx=\"4\"/><circle cx=\"34\" cy=\"70\" r=\"3\"/><circle cx=\"50\" cy=\"66\" r=\"3\"/><circle cx=\"66\" cy=\"72\" r=\"3\"/><path d=\"M34 60c-4-6 4-10 0-16M66 60c-4-6 4-10 0-16\"/>"
      },
      {
        "name": "Clarifier",
        "svg": "<ellipse cx=\"50\" cy=\"40\" rx=\"36\" ry=\"10\"/><path d=\"M14 40v26c0 6 72 6 72 0V40\"/><path d=\"M50 40L50 76M40 62L50 76L60 62\"/>"
      },
      {
        "name": "Sludge Digester",
        "svg": "<path d=\"M30 26h40v58c0 6-40 6-40 0z\"/><path d=\"M30 26c0-8 40-8 40 0\"/><path d=\"M42 40c-6 6 6 10 0 16M58 50c-6 6 6 10 0 16\"/><path d=\"M50 26V14\"/>"
      },
      {
        "name": "Solid Waste Container",
        "svg": "<path d=\"M22 34h56l-6 56H28z\"/><path d=\"M18 34h64\"/><path d=\"M40 26h20v8H40z\"/><path d=\"M40 50h20\"/>"
      },
      {
        "name": "Recycling Bin",
        "svg": "<path d=\"M22 34h56l-6 56H28z\"/><path d=\"M18 34h64\"/><path d=\"M42 58l8-12 8 12M50 46v16\"/>"
      },
      {
        "name": "Landfill Section",
        "svg": "<path d=\"M8 80h84\"/><path d=\"M8 80Q20 40 40 56T70 44Q82 40 92 52\"/><path d=\"M8 80V92M92 80V92\"/><path d=\"M20 66h8M50 60h8M74 56h8\"/>"
      },
      {
        "name": "Rainwater Collection System",
        "svg": "<path d=\"M10 36L50 12L90 36\"/><path d=\"M78 36v34\"/><rect x=\"26\" y=\"70\" width=\"48\" height=\"16\"/><path d=\"M50 26v4\"/>"
      },
      {
        "name": "Groundwater Recharge Pit",
        "svg": "<path d=\"M8 30h84\"/><path d=\"M24 30v50h52V30\"/><path d=\"M34 46h32M34 60h32M34 74h32\"/><path d=\"M50 14v12M44 20l6 6 6-6\"/>"
      },
      {
        "name": "Flood Drainage System",
        "svg": "<path d=\"M8 30Q20 22 30 30T50 30T70 30T92 30\"/><path d=\"M8 50Q20 42 30 50T50 50T70 50T92 50\"/><path d=\"M30 60v30M30 90h40\"/><path d=\"M50 60v30M62 60v30\"/><path d=\"M42 74l8 16\"/>"
      },
      {
        "name": "Environmental Monitoring Station",
        "svg": "<path d=\"M50 90V40\"/><path d=\"M36 90h28\"/><path d=\"M30 30a28 28 0 0 1 40 0\"/><path d=\"M38 40a14 14 0 0 1 24 0\"/><circle cx=\"50\" cy=\"26\" r=\"4\"/>"
      }
    ]
  },
  "computer": {
    "Hardware Components": [
      {
        "name": "Desktop Computer",
        "svg": "<rect x=\"10\" y=\"14\" width=\"56\" height=\"42\" rx=\"3\"/><path d=\"M38 56v10M26 66h24\"/><rect x=\"72\" y=\"30\" width=\"18\" height=\"52\" rx=\"2\"/><path d=\"M76 40h10M76 50h10\"/>"
      },
      {
        "name": "Laptop Computer",
        "svg": "<rect x=\"22\" y=\"18\" width=\"56\" height=\"40\" rx=\"3\"/><path d=\"M10 72h80l-6 8H16z\"/>"
      },
      {
        "name": "Notebook Computer",
        "svg": "<path d=\"M14 24Q30 18 48 26V82Q30 74 14 80z\"/><path d=\"M86 24Q70 18 52 26V82Q70 74 86 80z\"/>"
      },
      {
        "name": "Workstation",
        "svg": "<rect x=\"14\" y=\"10\" width=\"72\" height=\"48\" rx=\"3\"/><path d=\"M50 58v10M36 68h28\"/><path d=\"M28 80h44v8H28z\"/>"
      },
      {
        "name": "Computer Monitor",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/>"
      },
      {
        "name": "LCD Display",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M30 26h40M30 40h40M30 54h40\"/><path d=\"M42 68h16v10H42M30 84h40\"/>"
      },
      {
        "name": "LED Display",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><circle cx=\"30\" cy=\"30\" r=\"2\"/><circle cx=\"50\" cy=\"30\" r=\"2\"/><circle cx=\"70\" cy=\"30\" r=\"2\"/><circle cx=\"30\" cy=\"46\" r=\"2\"/><circle cx=\"50\" cy=\"46\" r=\"2\"/><circle cx=\"70\" cy=\"46\" r=\"2\"/><path d=\"M42 68h16v10H42M30 84h40\"/>"
      },
      {
        "name": "Computer Keyboard",
        "svg": "<rect x=\"8\" y=\"30\" width=\"84\" height=\"40\" rx=\"4\"/><path d=\"M18 40h6M30 40h6M42 40h6M54 40h6M66 40h6M78 40h4M18 50h6M30 50h6M42 50h6M54 50h6M66 50h6M78 50h4M26 60h48\"/>"
      },
      {
        "name": "Computer Mouse",
        "svg": "<rect x=\"32\" y=\"12\" width=\"36\" height=\"76\" rx=\"18\"/><path d=\"M50 12v30M32 42h36\"/>"
      },
      {
        "name": "Touchpad",
        "svg": "<rect x=\"14\" y=\"30\" width=\"72\" height=\"44\" rx=\"4\"/><path d=\"M14 66h72\"/><circle cx=\"40\" cy=\"48\" r=\"8\"/>"
      },
      {
        "name": "CPU / Processor",
        "svg": "<rect x=\"28\" y=\"28\" width=\"44\" height=\"44\"/><rect x=\"40\" y=\"40\" width=\"20\" height=\"20\"/><path d=\"M36 14v14M50 14v14M64 14v14M36 72v14M50 72v14M64 72v14M14 36h14M14 50h14M14 64h14M72 36h14M72 50h14M72 64h14\"/>"
      },
      {
        "name": "Microprocessor Chip",
        "svg": "<rect x=\"22\" y=\"30\" width=\"56\" height=\"40\" rx=\"2\"/><path d=\"M42 30a8 8 0 0 0 16 0\"/><path d=\"M30 30V20M42 30V20M54 30V20M66 30V20M30 70V80M42 70V80M54 70V80M66 70V80\"/>"
      },
      {
        "name": "Motherboard",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"3\"/><rect x=\"26\" y=\"26\" width=\"20\" height=\"20\"/><path d=\"M56 22h26M56 32h26M56 42h26\"/><path d=\"M26 60h46M26 70h46\"/>"
      },
      {
        "name": "RAM Module",
        "svg": "<rect x=\"8\" y=\"36\" width=\"84\" height=\"28\" rx=\"2\"/><path d=\"M18 36v28M30 36v28M42 36v28M54 36v28M66 36v28M78 36v28\"/><path d=\"M14 64v6M86 64v6\"/>"
      },
      {
        "name": "ROM Chip",
        "svg": "<rect x=\"24\" y=\"24\" width=\"52\" height=\"52\"/><path d=\"M42 24a8 8 0 0 0 16 0\"/><path d=\"M34 14v10M50 14v10M66 14v10M34 76v10M50 76v10M66 76v10\"/>"
      },
      {
        "name": "Graphics Processing Unit (GPU)",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\" rx=\"4\"/><circle cx=\"34\" cy=\"50\" r=\"12\"/><circle cx=\"66\" cy=\"50\" r=\"12\"/><path d=\"M28 50h12M60 50h12\"/>"
      },
      {
        "name": "Graphics Card",
        "svg": "<rect x=\"14\" y=\"30\" width=\"72\" height=\"40\" rx=\"3\"/><path d=\"M14 40h-6v22h6\"/><circle cx=\"60\" cy=\"50\" r=\"10\"/><path d=\"M30 70v-6M40 70v-6\"/>"
      },
      {
        "name": "Hard Disk Drive (HDD)",
        "svg": "<rect x=\"12\" y=\"26\" width=\"76\" height=\"48\" rx=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"16\"/><path d=\"M50 50L60 42\"/><path d=\"M76 40h4\"/>"
      },
      {
        "name": "Solid State Drive (SSD)",
        "svg": "<rect x=\"12\" y=\"26\" width=\"76\" height=\"48\" rx=\"4\"/><rect x=\"26\" y=\"38\" width=\"20\" height=\"24\"/><path d=\"M58 38h16M58 48h16M58 58h16\"/>"
      },
      {
        "name": "Optical Disc Drive",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"24\" rx=\"4\"/><circle cx=\"50\" cy=\"52\" r=\"6\"/><path d=\"M76 52h4\"/>"
      },
      {
        "name": "Power Supply Unit (PSU)",
        "svg": "<rect x=\"16\" y=\"20\" width=\"68\" height=\"60\" rx=\"3\"/><circle cx=\"50\" cy=\"50\" r=\"18\"/><path d=\"M50 32v36M32 50h36\"/><path d=\"M84 50h8\"/>"
      },
      {
        "name": "Computer Cooling Fan",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"38\"/><path d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><path transform=\"rotate(120 50 50)\" d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><path transform=\"rotate(240 50 50)\" d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/>"
      },
      {
        "name": "CPU Heat Sink",
        "svg": "<rect x=\"20\" y=\"10\" width=\"60\" height=\"10\"/><path d=\"M26 20v60M36 20v60M46 20v60M56 20v60M66 20v60\"/><rect x=\"20\" y=\"80\" width=\"60\" height=\"6\"/>"
      },
      {
        "name": "Computer Cabinet / Case",
        "svg": "<rect x=\"30\" y=\"8\" width=\"40\" height=\"84\" rx=\"3\"/><path d=\"M30 20h40\"/><circle cx=\"50\" cy=\"40\" r=\"6\"/><path d=\"M40 70h20M40 80h20\"/>"
      },
      {
        "name": "USB Flash Drive",
        "svg": "<rect x=\"34\" y=\"8\" width=\"32\" height=\"34\" rx=\"4\"/><path d=\"M42 42v44h16V42\"/><path d=\"M50 62v8\"/>"
      },
      {
        "name": "Memory Card",
        "svg": "<path d=\"M26 10h36l14 14v66H26z\"/><path d=\"M36 30h20v14H36M36 70h30\"/>"
      },
      {
        "name": "USB Port",
        "svg": "<rect x=\"22\" y=\"34\" width=\"56\" height=\"32\" rx=\"4\"/><rect x=\"36\" y=\"44\" width=\"28\" height=\"12\"/>"
      },
      {
        "name": "HDMI Port",
        "svg": "<path d=\"M18 36h64l-8 28H26z\"/><path d=\"M36 48h4M46 48h8M60 48h4\"/>"
      },
      {
        "name": "Ethernet Port",
        "svg": "<rect x=\"20\" y=\"26\" width=\"60\" height=\"48\" rx=\"3\"/><rect x=\"34\" y=\"40\" width=\"32\" height=\"20\"/><path d=\"M40 60v-6M46 60v-6M52 60v-6M58 60v-6\"/>"
      },
      {
        "name": "Computer Speaker",
        "svg": "<rect x=\"24\" y=\"12\" width=\"52\" height=\"76\" rx=\"6\"/><circle cx=\"50\" cy=\"66\" r=\"14\"/><circle cx=\"50\" cy=\"30\" r=\"6\"/>"
      },
      {
        "name": "Headphone",
        "svg": "<path d=\"M18 62V46a32 32 0 0 1 64 0v16\"/><rect x=\"12\" y=\"58\" width=\"16\" height=\"26\" rx=\"4\"/><rect x=\"72\" y=\"58\" width=\"16\" height=\"26\" rx=\"4\"/>"
      },
      {
        "name": "Microphone",
        "svg": "<rect x=\"38\" y=\"10\" width=\"24\" height=\"44\" rx=\"12\"/><path d=\"M26 44a24 24 0 0 0 48 0\"/><path d=\"M50 68v14M36 86h28\"/>"
      },
      {
        "name": "Webcam",
        "svg": "<circle cx=\"50\" cy=\"36\" r=\"20\"/><circle cx=\"50\" cy=\"36\" r=\"8\"/><path d=\"M50 56v20M36 88h28\"/>"
      },
      {
        "name": "Printer",
        "svg": "<rect x=\"14\" y=\"36\" width=\"72\" height=\"34\" rx=\"3\"/><path d=\"M26 36V14h48v22\"/><path d=\"M26 70v16h48V70\"/><path d=\"M74 50h4\"/>"
      },
      {
        "name": "Scanner",
        "svg": "<rect x=\"12\" y=\"20\" width=\"76\" height=\"60\" rx=\"3\"/><rect x=\"22\" y=\"30\" width=\"56\" height=\"40\"/><path d=\"M22 50h56\"/>"
      },
      {
        "name": "UPS",
        "svg": "<rect x=\"14\" y=\"26\" width=\"72\" height=\"48\" rx=\"4\"/><path d=\"M28 50h8M42 50h8M56 50h8M70 50h4\"/><path d=\"M14 40h-4M86 40h4\"/>"
      },
      {
        "name": "Computer Battery",
        "svg": "<rect x=\"12\" y=\"32\" width=\"70\" height=\"36\" rx=\"4\"/><path d=\"M82 44h6v12h-6\"/><path d=\"M22 44v12M34 44v12M46 44v12\"/>"
      },
      {
        "name": "Motherboard Expansion Slot",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"20\" rx=\"2\"/><path d=\"M20 40v20M28 40v20M34 40v20M40 40v20M46 40v20M52 40v20M58 40v20M64 40v20M70 40v20M76 40v20\"/>"
      },
      {
        "name": "PCI Express Card",
        "svg": "<path d=\"M10 40h60v20H10z\"/><path d=\"M70 44h20v12H70z\"/><path d=\"M30 60v8M38 60v8M46 60v8M54 60v8M62 60v8\"/>"
      },
      {
        "name": "Computer Cable Connector",
        "svg": "<rect x=\"30\" y=\"20\" width=\"40\" height=\"60\" rx=\"4\"/><path d=\"M42 36h16v28H42z\"/><path d=\"M50 80v10\"/>"
      }
    ],
    "Networking and Communication": [
      {
        "name": "Network Router",
        "svg": "<rect x=\"14\" y=\"48\" width=\"72\" height=\"30\" rx=\"4\"/><path d=\"M30 48V20M70 48V20\"/><path d=\"M26 62h8M42 62h8M58 62h8\"/>"
      },
      {
        "name": "Network Switch",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"30\" rx=\"3\"/><rect x=\"18\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"30\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"42\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"54\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"66\" y=\"50\" width=\"8\" height=\"10\"/>"
      },
      {
        "name": "Managed Ethernet Switch",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"30\" rx=\"3\"/><rect x=\"18\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"30\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"42\" y=\"50\" width=\"8\" height=\"10\"/><circle cx=\"72\" cy=\"55\" r=\"5\"/>"
      },
      {
        "name": "Unmanaged Ethernet Switch",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"30\" rx=\"3\"/><rect x=\"18\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"30\" y=\"50\" width=\"8\" height=\"10\"/><rect x=\"42\" y=\"50\" width=\"8\" height=\"10\"/><path d=\"M66 55h14\"/>"
      },
      {
        "name": "Network Hub",
        "svg": "<rect x=\"10\" y=\"40\" width=\"80\" height=\"30\" rx=\"3\"/><circle cx=\"24\" cy=\"55\" r=\"3\"/><circle cx=\"38\" cy=\"55\" r=\"3\"/><circle cx=\"52\" cy=\"55\" r=\"3\"/><circle cx=\"66\" cy=\"55\" r=\"3\"/><path d=\"M76 55h4\"/>"
      },
      {
        "name": "Wireless Router",
        "svg": "<rect x=\"18\" y=\"56\" width=\"64\" height=\"26\" rx=\"4\"/><path d=\"M34 56V30M66 56V30\"/><path d=\"M38 24a14 14 0 0 1 24 0\"/><path d=\"M30 16a24 24 0 0 1 40 0\"/>"
      },
      {
        "name": "Wi-Fi Access Point",
        "svg": "<ellipse cx=\"50\" cy=\"62\" rx=\"32\" ry=\"10\"/><path d=\"M28 62V56M72 62V56\"/><path d=\"M38 40a16 16 0 0 1 24 0\"/><path d=\"M28 30a30 30 0 0 1 44 0\"/>"
      },
      {
        "name": "Modem",
        "svg": "<rect x=\"14\" y=\"44\" width=\"72\" height=\"30\" rx=\"4\"/><path d=\"M28 60h10M46 60h10M64 60h6\"/><path d=\"M30 44V32M70 44V32\"/>"
      },
      {
        "name": "Fiber Optic Modem",
        "svg": "<rect x=\"14\" y=\"44\" width=\"72\" height=\"30\" rx=\"4\"/><path d=\"M28 60h10M46 60h10\"/><path d=\"M70 52c8 0 8 16 0 16\"/>"
      },
      {
        "name": "Optical Network Terminal (ONT)",
        "svg": "<rect x=\"20\" y=\"30\" width=\"60\" height=\"50\" rx=\"4\"/><circle cx=\"34\" cy=\"50\" r=\"5\"/><rect x=\"50\" y=\"46\" width=\"18\" height=\"10\"/><path d=\"M50 70h20\"/>"
      },
      {
        "name": "Firewall Appliance",
        "svg": "<rect x=\"12\" y=\"34\" width=\"76\" height=\"32\" rx=\"3\"/><path d=\"M12 50h76M50 34v16M30 50v16M70 50v16\"/>"
      },
      {
        "name": "Network Gateway",
        "svg": "<rect x=\"38\" y=\"36\" width=\"24\" height=\"28\" rx=\"3\"/><path d=\"M14 50h24M62 50h24\"/><circle cx=\"14\" cy=\"50\" r=\"4\"/><circle cx=\"86\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Network Bridge",
        "svg": "<rect x=\"12\" y=\"40\" width=\"30\" height=\"20\"/><rect x=\"58\" y=\"40\" width=\"30\" height=\"20\"/><path d=\"M42 50h16\"/>"
      },
      {
        "name": "Network Repeater",
        "svg": "<path d=\"M50 90V40\"/><path d=\"M36 90h28\"/><path d=\"M28 36a22 22 0 0 1 44 0\"/><path d=\"M36 36a14 14 0 0 1 28 0\"/><circle cx=\"50\" cy=\"36\" r=\"4\"/>"
      },
      {
        "name": "Network Adapter",
        "svg": "<rect x=\"24\" y=\"16\" width=\"52\" height=\"30\" rx=\"3\"/><path d=\"M36 26h4M46 26h4M56 26h4M36 36h4M46 36h4M56 36h4\"/><path d=\"M50 46v14M38 60h24\"/><path d=\"M42 70h16v14H42z\"/>"
      },
      {
        "name": "Ethernet Network Card",
        "svg": "<path d=\"M10 30h80v50H10z\"/><rect x=\"58\" y=\"44\" width=\"22\" height=\"22\"/><path d=\"M62 52h14M62 58h14\"/><path d=\"M24 80v4M34 80v4M44 80v4\"/>"
      },
      {
        "name": "Fiber Optic Cable",
        "svg": "<rect x=\"8\" y=\"40\" width=\"84\" height=\"20\" rx=\"10\"/><path d=\"M8 50h84\"/>"
      },
      {
        "name": "Ethernet Cable",
        "svg": "<path d=\"M8 44h60M8 56h60\"/><rect x=\"68\" y=\"38\" width=\"22\" height=\"24\" rx=\"2\"/><path d=\"M74 62v-6M80 62v-6M86 62v-6\"/>"
      },
      {
        "name": "RJ45 Connector",
        "svg": "<path d=\"M24 14h52v56H24z\"/><path d=\"M34 70h32v12H34z\"/><path d=\"M34 22v22M42 22v22M50 22v22M58 22v22M66 22v22\"/>"
      },
      {
        "name": "Fiber Optic Connector",
        "svg": "<rect x=\"34\" y=\"14\" width=\"32\" height=\"26\" rx=\"4\"/><path d=\"M42 40h16v28H42z\"/><circle cx=\"50\" cy=\"27\" r=\"4\"/><path d=\"M50 68v20\"/>"
      },
      {
        "name": "Network Patch Panel",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\" rx=\"2\"/><rect x=\"18\" y=\"38\" width=\"8\" height=\"8\"/><rect x=\"30\" y=\"38\" width=\"8\" height=\"8\"/><rect x=\"42\" y=\"38\" width=\"8\" height=\"8\"/><rect x=\"54\" y=\"38\" width=\"8\" height=\"8\"/><rect x=\"66\" y=\"38\" width=\"8\" height=\"8\"/><rect x=\"18\" y=\"52\" width=\"8\" height=\"8\"/><rect x=\"30\" y=\"52\" width=\"8\" height=\"8\"/><rect x=\"42\" y=\"52\" width=\"8\" height=\"8\"/><rect x=\"54\" y=\"52\" width=\"8\" height=\"8\"/><rect x=\"66\" y=\"52\" width=\"8\" height=\"8\"/>"
      },
      {
        "name": "Network Rack",
        "svg": "<rect x=\"26\" y=\"8\" width=\"48\" height=\"84\"/><path d=\"M26 28h48M26 48h48M26 68h48\"/><path d=\"M34 16h6M34 38h6M34 58h6M34 78h6\"/>"
      },
      {
        "name": "Network Cabinet",
        "svg": "<rect x=\"24\" y=\"8\" width=\"52\" height=\"84\" rx=\"3\"/><path d=\"M24 20h52\"/><path d=\"M36 40h28M36 50h28M36 60h28\"/><circle cx=\"68\" cy=\"30\" r=\"2\"/>"
      },
      {
        "name": "Network Antenna",
        "svg": "<path d=\"M50 90V30\"/><path d=\"M36 90h28\"/><path d=\"M34 26L50 10L66 26\"/><path d=\"M42 36h16\"/>"
      },
      {
        "name": "Wireless Communication Tower",
        "svg": "<path d=\"M50 8V26\"/><path d=\"M36 90L50 26L64 90\"/><path d=\"M42 58h16M38 74h24\"/><path d=\"M40 58L56 74M60 58L44 74\"/>"
      },
      {
        "name": "Satellite Dish",
        "svg": "<path d=\"M16 50a34 34 0 0 0 68 0\"/><path d=\"M50 50L64 26\"/><circle cx=\"66\" cy=\"22\" r=\"4\"/><path d=\"M40 84h20M50 84v6\"/>"
      },
      {
        "name": "Network Server Connection",
        "svg": "<rect x=\"10\" y=\"20\" width=\"36\" height=\"16\" rx=\"2\"/><rect x=\"10\" y=\"42\" width=\"36\" height=\"16\" rx=\"2\"/><rect x=\"10\" y=\"64\" width=\"36\" height=\"16\" rx=\"2\"/><path d=\"M46 28h14M46 50h14M46 72h14\"/><path d=\"M60 28v44\"/><rect x=\"68\" y=\"40\" width=\"22\" height=\"20\" rx=\"2\"/>"
      },
      {
        "name": "LAN Network Diagram",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"20\" cy=\"20\" r=\"7\"/><circle cx=\"80\" cy=\"20\" r=\"7\"/><circle cx=\"20\" cy=\"80\" r=\"7\"/><circle cx=\"80\" cy=\"80\" r=\"7\"/><path d=\"M50 42L24 26M50 58L24 74M50 42L76 26M50 58L76 74\"/>"
      },
      {
        "name": "WAN Network Diagram",
        "svg": "<circle cx=\"16\" cy=\"50\" r=\"8\"/><circle cx=\"84\" cy=\"50\" r=\"8\"/><path d=\"M24 50h18M58 50h18\"/><path d=\"M42 34a12 12 0 0 1 16 0 12 12 0 0 1 0 32 12 12 0 0 1-16 0 12 12 0 0 1 0-32z\"/>"
      },
      {
        "name": "Wireless Network Diagram",
        "svg": "<circle cx=\"50\" cy=\"60\" r=\"6\"/><path d=\"M36 46a20 20 0 0 1 28 0\"/><path d=\"M26 34a34 34 0 0 1 48 0\"/><rect x=\"14\" y=\"70\" width=\"20\" height=\"16\" rx=\"2\"/><rect x=\"66\" y=\"70\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M50 66v4M24 70v-6M76 70v-6\"/>"
      }
    ],
    "Server and Data Center": [
      {
        "name": "Rack Server",
        "svg": "<rect x=\"12\" y=\"20\" width=\"76\" height=\"14\" rx=\"2\"/><rect x=\"12\" y=\"38\" width=\"76\" height=\"14\" rx=\"2\"/><rect x=\"12\" y=\"56\" width=\"76\" height=\"14\" rx=\"2\"/><rect x=\"12\" y=\"74\" width=\"76\" height=\"8\" rx=\"2\"/><path d=\"M20 27h4M20 45h4M20 63h4\"/>"
      },
      {
        "name": "Tower Server",
        "svg": "<rect x=\"30\" y=\"8\" width=\"40\" height=\"84\" rx=\"3\"/><path d=\"M30 20h40\"/><path d=\"M40 34h20M40 46h20M40 58h20\"/><circle cx=\"50\" cy=\"78\" r=\"5\"/>"
      },
      {
        "name": "Blade Server",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"3\"/><rect x=\"18\" y=\"18\" width=\"64\" height=\"16\"/><rect x=\"18\" y=\"40\" width=\"64\" height=\"16\"/><rect x=\"18\" y=\"62\" width=\"64\" height=\"16\"/>"
      },
      {
        "name": "Server Rack Cabinet",
        "svg": "<rect x=\"24\" y=\"8\" width=\"52\" height=\"84\" rx=\"3\"/><path d=\"M24 20h52M24 80h52\"/><path d=\"M36 34h28M36 48h28M36 62h28\"/><circle cx=\"68\" cy=\"28\" r=\"2\"/>"
      },
      {
        "name": "Database Server",
        "svg": "<ellipse cx=\"50\" cy=\"20\" rx=\"28\" ry=\"10\"/><path d=\"M22 20v22c0 6 56 6 56 0V20\"/><path d=\"M22 42v22c0 6 56 6 56 0V42\"/><path d=\"M22 64v16c0 6 56 6 56 0V64\"/>"
      },
      {
        "name": "Web Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><circle cx=\"20\" cy=\"22\" r=\"1.5\"/><path d=\"M30 46a20 20 0 0 1 40 0M50 26v40M30 46h40\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Application Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M28 46l-8 6 8 6M72 46l8 6-8 6M56 42l-12 20\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "File Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M26 44h14v22H26zM42 44h14v22H42zM58 44h14v22H58z\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Mail Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><rect x=\"24\" y=\"42\" width=\"52\" height=\"26\"/><path d=\"M24 42l26 16 26-16\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "DNS Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><circle cx=\"50\" cy=\"50\" r=\"14\"/><path d=\"M36 50h28M50 36c-8 6-8 22 0 28M50 36c8 6 8 22 0 28\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "DHCP Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M26 56V44M42 56V44M58 56V44M74 56V44\"/><path d=\"M26 44h48\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Proxy Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M24 50h16M60 50h16\"/><path d=\"M40 44h20v12H40z\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Virtual Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><rect x=\"22\" y=\"38\" width=\"20\" height=\"20\" rx=\"2\"/><rect x=\"58\" y=\"38\" width=\"20\" height=\"20\" rx=\"2\"/><path d=\"M42 48h16\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Storage Server",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M22 36h56M22 46h56M22 56h56\"/><circle cx=\"70\" cy=\"66\" r=\"2\"/><path d=\"M40 84h20M50 76v8\"/>"
      },
      {
        "name": "Network Attached Storage (NAS)",
        "svg": "<rect x=\"12\" y=\"30\" width=\"76\" height=\"40\" rx=\"3\"/><path d=\"M12 42h76M12 58h76\"/><path d=\"M24 36h4M24 52h4M24 66h4\"/><path d=\"M60 36h20M60 52h20\"/>"
      },
      {
        "name": "Storage Area Network (SAN)",
        "svg": "<rect x=\"10\" y=\"14\" width=\"30\" height=\"20\" rx=\"2\"/><rect x=\"60\" y=\"14\" width=\"30\" height=\"20\" rx=\"2\"/><rect x=\"35\" y=\"66\" width=\"30\" height=\"20\" rx=\"2\"/><path d=\"M25 34v18h50V34M50 52v14\"/><path d=\"M40 76h20\"/>"
      },
      {
        "name": "Server Hard Drive",
        "svg": "<rect x=\"12\" y=\"26\" width=\"76\" height=\"48\" rx=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"16\"/><path d=\"M50 50L60 42\"/><path d=\"M76 40h4\"/>"
      },
      {
        "name": "Server Power Supply",
        "svg": "<rect x=\"16\" y=\"20\" width=\"68\" height=\"60\" rx=\"3\"/><circle cx=\"50\" cy=\"50\" r=\"18\"/><path d=\"M50 32v36M32 50h36\"/><path d=\"M84 50h8\"/>"
      },
      {
        "name": "Server Cooling Fan",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"38\"/><path d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><path transform=\"rotate(120 50 50)\" d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><path transform=\"rotate(240 50 50)\" d=\"M50 44C44 34 46 20 52 14C58 30 58 40 50 44Z\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/>"
      },
      {
        "name": "Data Center Building",
        "svg": "<path d=\"M10 90h80\"/><path d=\"M16 90V40L50 18L84 40V90\"/><path d=\"M28 56h8M28 70h8M64 56h8M64 70h8\"/><path d=\"M44 90V74h12v16\"/>"
      },
      {
        "name": "Data Center Server Room",
        "svg": "<rect x=\"8\" y=\"10\" width=\"84\" height=\"80\" rx=\"3\"/><rect x=\"18\" y=\"20\" width=\"14\" height=\"60\"/><rect x=\"36\" y=\"20\" width=\"14\" height=\"60\"/><rect x=\"54\" y=\"20\" width=\"14\" height=\"60\"/><rect x=\"72\" y=\"20\" width=\"10\" height=\"60\"/>"
      },
      {
        "name": "Server Cooling System",
        "svg": "<rect x=\"12\" y=\"20\" width=\"76\" height=\"60\" rx=\"3\"/><path d=\"M50 20v60\"/><path d=\"M22 40c8-8 16 8 24 0M54 60c8-8 16 8 24 0\"/>"
      },
      {
        "name": "Precision Air Conditioning (PAC)",
        "svg": "<rect x=\"16\" y=\"14\" width=\"68\" height=\"72\" rx=\"4\"/><path d=\"M28 30h44\"/><path d=\"M28 44h44M28 58h44\"/><circle cx=\"50\" cy=\"74\" r=\"5\"/>"
      },
      {
        "name": "Data Center UPS System",
        "svg": "<rect x=\"14\" y=\"26\" width=\"72\" height=\"48\" rx=\"4\"/><path d=\"M28 50h8M42 50h8M56 50h8M70 50h4\"/><path d=\"M14 40h-4M86 40h4\"/><path d=\"M48 36l-6 14h8l-6 14\"/>"
      },
      {
        "name": "Data Center Battery Bank",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"44\" rx=\"4\"/><path d=\"M22 40v24M34 40v24M46 40v24M58 40v24M70 40v24\"/><path d=\"M14 52h4M86 52h4\"/>"
      },
      {
        "name": "Raised Floor System",
        "svg": "<path d=\"M8 40L24 24H92L76 40z\"/><path d=\"M8 40v40h68V40\"/><path d=\"M76 40v40L92 64V24\"/><path d=\"M24 40v40M42 40v40M60 40v40\"/>"
      },
      {
        "name": "Server Monitoring Console",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"52\" rx=\"3\"/><path d=\"M22 50l10-10 8 8 10-14 10 12 8-6\"/><path d=\"M42 66h16v10H42M30 84h40\"/>"
      },
      {
        "name": "Backup Storage System",
        "svg": "<path d=\"M26 40L74 40L74 80L26 80Z\"/><path d=\"M26 40L40 20H86L74 40\"/><path d=\"M40 20v60\"/><path d=\"M50 56a8 8 0 1 1 8 8\"/><path d=\"M50 56l-4 4 4 4\"/>"
      },
      {
        "name": "Data Center Network Topology",
        "svg": "<rect x=\"38\" y=\"8\" width=\"24\" height=\"16\" rx=\"2\"/><rect x=\"10\" y=\"42\" width=\"24\" height=\"16\" rx=\"2\"/><rect x=\"38\" y=\"42\" width=\"24\" height=\"16\" rx=\"2\"/><rect x=\"66\" y=\"42\" width=\"24\" height=\"16\" rx=\"2\"/><rect x=\"10\" y=\"76\" width=\"24\" height=\"16\" rx=\"2\"/><rect x=\"66\" y=\"76\" width=\"24\" height=\"16\" rx=\"2\"/><path d=\"M50 24v18M22 42v-8h56v8M22 58v18M78 58v18\"/>"
      },
      {
        "name": "Data Center Infrastructure Diagram",
        "svg": "<rect x=\"12\" y=\"10\" width=\"76\" height=\"20\" rx=\"2\"/><rect x=\"12\" y=\"40\" width=\"34\" height=\"20\" rx=\"2\"/><rect x=\"54\" y=\"40\" width=\"34\" height=\"20\" rx=\"2\"/><rect x=\"12\" y=\"70\" width=\"34\" height=\"20\" rx=\"2\"/><rect x=\"54\" y=\"70\" width=\"34\" height=\"20\" rx=\"2\"/><path d=\"M50 30v10M29 40v-0M71 40v-0M50 50v0M29 60v10M71 60v10\"/>"
      }
    ],
    "Programming and Software": [
      {
        "name": "Programming Code Symbol",
        "svg": "<path d=\"M34 28L14 50l20 22M66 28l20 22-20 22M56 22L44 78\"/>"
      },
      {
        "name": "Source Code Editor",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 26h80\"/><path d=\"M20 38h24M26 50h36M26 62h18M20 74h30\"/>"
      },
      {
        "name": "Integrated Development Environment (IDE)",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 26h80M34 26v60M34 56h56\"/>"
      },
      {
        "name": "Code Brackets",
        "svg": "<path d=\"M36 14H26v72h10M64 14h10v72H64\"/>"
      },
      {
        "name": "HTML Code Symbol",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M42 44l-8 8 8 8M58 44l8 8-8 8\"/>"
      },
      {
        "name": "CSS Code Symbol",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M36 46h28M36 56h18M36 66h24\"/><path d=\"M42 36c0 6 16 6 16 0\"/>"
      },
      {
        "name": "JavaScript Code Symbol",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"4\"/><path d=\"M46 28v34c0 8-4 12-10 12\"/><path d=\"M64 36c-4-4-12-4-12 2 0 8 14 4 14 12 0 6-8 6-12 2\"/>"
      },
      {
        "name": "PHP Code Symbol",
        "svg": "<ellipse cx=\"50\" cy=\"48\" rx=\"40\" ry=\"26\"/><path d=\"M26 48h10M46 48h10M66 48h10\"/>"
      },
      {
        "name": "Python Code Symbol",
        "svg": "<path d=\"M50 14h24c6 0 8 4 8 10v16H42c-6 0-8 4-8 10\"/><path d=\"M50 86H26c-6 0-8-4-8-10V60h40c6 0 8-4 8-10\"/>"
      },
      {
        "name": "Java Code Symbol",
        "svg": "<path d=\"M22 44h48v26a14 14 0 0 1-14 14H36a14 14 0 0 1-14-14z\"/><path d=\"M70 50h6a8 8 0 0 1 0 16h-6\"/><path d=\"M34 22c-4 6 4 8 0 14M50 22c-4 6 4 8 0 14M64 22c-4 6 4 8 0 14\"/>"
      },
      {
        "name": "C Programming Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"38\"/><path d=\"M62 36a18 18 0 1 0 0 28\"/>"
      },
      {
        "name": "C++ Programming Symbol",
        "svg": "<circle cx=\"40\" cy=\"50\" r=\"30\"/><path d=\"M50 38a14 14 0 1 0 0 24\"/><path d=\"M76 36v28M62 50h28\"/>"
      },
      {
        "name": "C# Programming Symbol",
        "svg": "<circle cx=\"40\" cy=\"50\" r=\"30\"/><path d=\"M50 38a14 14 0 1 0 0 24\"/><path d=\"M68 36l-4 28M78 36l-4 28M62 46h24M60 56h24\"/>"
      },
      {
        "name": "SQL Code Symbol",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/>"
      },
      {
        "name": "XML Document",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M40 52l-6 6 6 6M52 52l6 6-6 6\"/><path d=\"M44 48l-4 16\"/>"
      },
      {
        "name": "JSON Document",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M44 42c-4 0-4 4-4 6v4c0 2-2 4-6 4 4 0 6 2 6 4v4c0 2 0 6 4 6M56 42c4 0 4 4 4 6v4c0 2 2 4 6 4-4 0-6 2-6 4v4c0 2 0 6-4 6\"/>"
      },
      {
        "name": "API Integration",
        "svg": "<rect x=\"10\" y=\"36\" width=\"26\" height=\"28\" rx=\"3\"/><rect x=\"64\" y=\"36\" width=\"26\" height=\"28\" rx=\"3\"/><path d=\"M36 50h28\"/><path d=\"M58 44l6 6-6 6M42 44l-6 6 6 6\"/>"
      },
      {
        "name": "REST API",
        "svg": "<path d=\"M10 40h80M58 26l14 14-14 14\"/><path d=\"M90 60H10M42 46l-14 14 14 14\"/>"
      },
      {
        "name": "Web Development",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><ellipse cx=\"50\" cy=\"50\" rx=\"16\" ry=\"36\"/><path d=\"M14 50h72\"/>"
      },
      {
        "name": "Frontend Development",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 28h80\"/><path d=\"M20 40h30v40H20z\"/><path d=\"M58 40h22M58 52h22M58 64h14\"/>"
      },
      {
        "name": "Backend Development",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"22\" rx=\"3\"/><rect x=\"12\" y=\"44\" width=\"76\" height=\"22\" rx=\"3\"/><rect x=\"12\" y=\"72\" width=\"76\" height=\"12\" rx=\"3\"/><path d=\"M22 27h4M22 55h4M22 78h4\"/>"
      },
      {
        "name": "Full Stack Development",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"40\" rx=\"3\"/><path d=\"M10 26h80\"/><rect x=\"10\" y=\"62\" width=\"80\" height=\"24\" rx=\"3\"/><path d=\"M30 40h40\"/>"
      },
      {
        "name": "Software Application",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"4\"/><path d=\"M10 28h80\"/><rect x=\"22\" y=\"40\" width=\"16\" height=\"16\"/><rect x=\"42\" y=\"40\" width=\"16\" height=\"16\"/><rect x=\"62\" y=\"40\" width=\"16\" height=\"16\"/><rect x=\"22\" y=\"62\" width=\"16\" height=\"16\"/><rect x=\"42\" y=\"62\" width=\"16\" height=\"16\"/>"
      },
      {
        "name": "Desktop Application",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M22 26h56v30H22z\"/>"
      },
      {
        "name": "Mobile Application",
        "svg": "<rect x=\"32\" y=\"8\" width=\"36\" height=\"84\" rx=\"6\"/><path d=\"M40 20h20M40 80h20\"/><rect x=\"40\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"52\" y=\"30\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"42\" width=\"8\" height=\"8\"/><rect x=\"52\" y=\"42\" width=\"8\" height=\"8\"/>"
      },
      {
        "name": "Web Application",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 28h80\"/><path d=\"M20 40h60M20 52h60M20 64h30\"/><rect x=\"58\" y=\"60\" width=\"22\" height=\"10\"/>"
      },
      {
        "name": "Software Architecture Diagram",
        "svg": "<rect x=\"36\" y=\"10\" width=\"28\" height=\"14\"/><rect x=\"14\" y=\"42\" width=\"28\" height=\"14\"/><rect x=\"58\" y=\"42\" width=\"28\" height=\"14\"/><rect x=\"36\" y=\"74\" width=\"28\" height=\"14\"/><path d=\"M50 24v8M42 42v-6M58 42v-6M50 56v18\"/>"
      },
      {
        "name": "Flowchart",
        "svg": "<ellipse cx=\"50\" cy=\"16\" rx=\"18\" ry=\"8\"/><rect x=\"34\" y=\"34\" width=\"32\" height=\"14\"/><path d=\"M50 40l16 14-16 14-16-14z\"/><path d=\"M50 24v10M50 80v10\"/>"
      },
      {
        "name": "Algorithm Flow Diagram",
        "svg": "<rect x=\"34\" y=\"8\" width=\"32\" height=\"14\"/><path d=\"M50 22v12\"/><path d=\"M50 34L70 50L50 66L30 50Z\"/><path d=\"M50 66v12\"/><rect x=\"34\" y=\"78\" width=\"32\" height=\"14\"/><path d=\"M30 50H12V16H34\"/>"
      },
      {
        "name": "Debugging Symbol",
        "svg": "<ellipse cx=\"50\" cy=\"56\" rx=\"20\" ry=\"26\"/><path d=\"M50 30V86M30 46H16M30 66H16M70 46h14M70 66h14\"/><path d=\"M38 30c0-8 6-12 12-12s12 4 12 12M36 22L28 12M64 22l8-10\"/>"
      },
      {
        "name": "Bug Tracking",
        "svg": "<rect x=\"14\" y=\"14\" width=\"72\" height=\"72\" rx=\"4\"/><path d=\"M26 34l6 6 10-12M26 60l6 6 10-12M52 34h22M52 60h22\"/>"
      },
      {
        "name": "Software Testing",
        "svg": "<rect x=\"22\" y=\"14\" width=\"56\" height=\"74\" rx=\"3\"/><path d=\"M36 14v-4h28v4\"/><path d=\"M34 40l6 6 12-12M34 62l6 6 12-12\"/>"
      },
      {
        "name": "Unit Testing",
        "svg": "<rect x=\"14\" y=\"30\" width=\"30\" height=\"34\"/><rect x=\"56\" y=\"30\" width=\"30\" height=\"34\"/><path d=\"M22 46l6 6 10-12\"/><path d=\"M64 46l6 6 10-12\"/>"
      },
      {
        "name": "Quality Assurance (QA)",
        "svg": "<circle cx=\"50\" cy=\"40\" r=\"24\"/><path d=\"M40 40l8 8 14-16\"/><path d=\"M36 60L30 90l20-8 20 8-6-30\"/>"
      },
      {
        "name": "Software Deployment",
        "svg": "<path d=\"M16 46L50 30l34 16v34L50 96 16 80z\"/><path d=\"M16 46l34 16 34-16M50 62v30\"/><path d=\"M50 14v22M42 22l8-8 8 8\"/>"
      },
      {
        "name": "Software Update",
        "svg": "<path d=\"M78 50A28 28 0 1 1 68 28\"/><path d=\"M68 14v14H54\"/>"
      },
      {
        "name": "Version Control",
        "svg": "<circle cx=\"28\" cy=\"16\" r=\"6\"/><circle cx=\"28\" cy=\"84\" r=\"6\"/><circle cx=\"72\" cy=\"50\" r=\"6\"/><path d=\"M28 22v56\"/><path d=\"M28 50c0-14 44-6 44 0\"/>"
      },
      {
        "name": "Code Repository",
        "svg": "<path d=\"M10 26h28l8 10h44v48H10z\"/><path d=\"M40 56l-6 6 6 6M60 56l6 6-6 6\"/>"
      },
      {
        "name": "Terminal / Command Prompt",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"4\"/><path d=\"M10 28h80\"/><path d=\"M22 46l10 8-10 8M40 64h22\"/>"
      },
      {
        "name": "Command Line Interface (CLI)",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"4\"/><path d=\"M10 28h80\"/><path d=\"M20 42h10M20 54h30M20 66h14\"/><path d=\"M58 60h14\"/>"
      }
    ],
    "Database and Data Management": [
      {
        "name": "Database Cylinder Symbol",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/>"
      },
      {
        "name": "Relational Database",
        "svg": "<ellipse cx=\"34\" cy=\"22\" rx=\"22\" ry=\"8\"/><path d=\"M12 22v44c0 5 44 5 44 0V22\"/><path d=\"M12 44c0 5 44 5 44 0\"/><path d=\"M56 44h12M68 44v0\"/><ellipse cx=\"78\" cy=\"58\" rx=\"14\" ry=\"6\"/><path d=\"M64 58v20c0 3 28 3 28 0V58\"/><path d=\"M50 56h14\"/>"
      },
      {
        "name": "SQL Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M40 60h20M40 70h14\"/>"
      },
      {
        "name": "MySQL Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M34 62c4-6 8 6 12 0s8 6 12 0\"/>"
      },
      {
        "name": "PostgreSQL Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><circle cx=\"50\" cy=\"66\" r=\"6\"/>"
      },
      {
        "name": "Oracle Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><ellipse cx=\"50\" cy=\"66\" rx=\"12\" ry=\"6\"/>"
      },
      {
        "name": "Microsoft SQL Server",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"72\" rx=\"3\"/><path d=\"M12 28h76\"/><ellipse cx=\"50\" cy=\"56\" rx=\"18\" ry=\"9\"/><path d=\"M32 56v14c0 4 36 4 36 0V56\"/>"
      },
      {
        "name": "SQLite Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M36 62h28\"/>"
      },
      {
        "name": "MongoDB Database",
        "svg": "<path d=\"M50 8c-14 16-16 34-8 52 4 8 6 18 8 28 2-10 4-20 8-28 8-18 6-36-8-52z\"/><path d=\"M50 30v60\"/>"
      },
      {
        "name": "NoSQL Database",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M36 60h28M36 70h28\"/>"
      },
      {
        "name": "Database Table",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"68\" rx=\"2\"/><path d=\"M12 32h76M12 50h76M12 68h76M37 16v68M62 16v68\"/>"
      },
      {
        "name": "Database Record",
        "svg": "<rect x=\"12\" y=\"36\" width=\"76\" height=\"28\" rx=\"2\"/><path d=\"M28 36v28M50 36v28M72 36v28\"/>"
      },
      {
        "name": "Database Field",
        "svg": "<rect x=\"20\" y=\"40\" width=\"60\" height=\"20\" rx=\"2\"/><path d=\"M34 50h32\"/><path d=\"M14 50h4M82 50h4\"/>"
      },
      {
        "name": "Database Schema",
        "svg": "<rect x=\"10\" y=\"14\" width=\"34\" height=\"26\" rx=\"2\"/><rect x=\"56\" y=\"14\" width=\"34\" height=\"26\" rx=\"2\"/><rect x=\"33\" y=\"60\" width=\"34\" height=\"26\" rx=\"2\"/><path d=\"M27 40v8h22M73 40v8h-22M50 60v-12\"/>"
      },
      {
        "name": "Database Relationship",
        "svg": "<rect x=\"10\" y=\"30\" width=\"30\" height=\"40\" rx=\"2\"/><rect x=\"60\" y=\"30\" width=\"30\" height=\"40\" rx=\"2\"/><path d=\"M40 50h20M46 44l-6 6 6 6M54 44l6 6-6 6\"/>"
      },
      {
        "name": "Entity Relationship Diagram (ERD)",
        "svg": "<rect x=\"8\" y=\"34\" width=\"26\" height=\"22\"/><ellipse cx=\"50\" cy=\"20\" rx=\"12\" ry=\"7\"/><ellipse cx=\"50\" cy=\"80\" rx=\"12\" ry=\"7\"/><rect x=\"66\" y=\"34\" width=\"26\" height=\"22\"/><path d=\"M34 45h32M50 27v-0M50 73v0\"/><path d=\"M50 27L50 36M50 64L50 73\"/>"
      },
      {
        "name": "Primary Key",
        "svg": "<circle cx=\"28\" cy=\"50\" r=\"14\"/><path d=\"M42 50h46M76 50v12M86 50v10\"/>"
      },
      {
        "name": "Foreign Key",
        "svg": "<circle cx=\"28\" cy=\"50\" r=\"14\"/><circle cx=\"28\" cy=\"50\" r=\"5\"/><path d=\"M42 50h46M76 50v12M86 50v10\"/><path d=\"M60 40v-8\"/>"
      },
      {
        "name": "Database Query",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M50 56a6 6 0 1 1 0-12 6 6 0 0 1 0 12z\"/>"
      },
      {
        "name": "SQL Query Editor",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 26h80\"/><path d=\"M20 40h24M20 52h36M20 64h20M52 64h22\"/>"
      },
      {
        "name": "Database Connection",
        "svg": "<ellipse cx=\"22\" cy=\"50\" rx=\"10\" ry=\"16\"/><ellipse cx=\"78\" cy=\"50\" rx=\"10\" ry=\"16\"/><path d=\"M32 40h36M32 60h36\"/>"
      },
      {
        "name": "Database Backup",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M40 62l10 10 10-10M50 52v20\"/>"
      },
      {
        "name": "Database Restore",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"30\" ry=\"10\"/><path d=\"M20 22v56c0 6 60 6 60 0V22\"/><path d=\"M20 50c0 6 60 6 60 0\"/><path d=\"M40 74l10-10 10 10M50 64V44\"/>"
      },
      {
        "name": "Database Replication",
        "svg": "<ellipse cx=\"24\" cy=\"24\" rx=\"12\" ry=\"6\"/><path d=\"M12 24v40c0 3 24 3 24 0V24\"/><ellipse cx=\"76\" cy=\"60\" rx=\"12\" ry=\"6\"/><path d=\"M64 60v16c0 3 24 3 24 0V60\"/><path d=\"M36 40L60 52\"/><path d=\"M52 44l8 8-8 4\"/>"
      },
      {
        "name": "Database Synchronization",
        "svg": "<path d=\"M78 50A28 28 0 1 1 68 28\"/><path d=\"M68 14v14H54\"/><path d=\"M22 50A28 28 0 0 1 32 72\"/><path d=\"M32 86v-14H46\"/>"
      },
      {
        "name": "Data Warehouse",
        "svg": "<path d=\"M14 90h72\"/><path d=\"M14 90V36L50 16L86 36V90\"/><path d=\"M28 60h10v30H28zM46 50h10v40H46zM64 66h10v24H64z\"/>"
      },
      {
        "name": "Data Lake",
        "svg": "<path d=\"M8 60c10-14 24-14 34 0s24 14 34 0 12-8 16-4\"/><path d=\"M8 78c10-14 24-14 34 0s24 14 34 0 12-8 16-4\"/><path d=\"M8 42c10-14 24-14 34 0s24 14 34 0 12-8 16-4\"/>"
      },
      {
        "name": "Data Pipeline",
        "svg": "<ellipse cx=\"18\" cy=\"50\" rx=\"8\" ry=\"14\"/><path d=\"M26 50h16M42 36h16v28H42z\"/><path d=\"M58 50h16\"/><ellipse cx=\"82\" cy=\"50\" rx=\"8\" ry=\"14\"/><path d=\"M42 40h-6\"/>"
      },
      {
        "name": "Data Migration",
        "svg": "<ellipse cx=\"18\" cy=\"26\" rx=\"10\" ry=\"5\"/><path d=\"M8 26v44c0 3 20 3 20 0V26\"/><path d=\"M36 50h28M56 44l8 6-8 6\"/><ellipse cx=\"82\" cy=\"74\" rx=\"10\" ry=\"5\"/><path d=\"M72 74v-40\"/>"
      },
      {
        "name": "Database Management System",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><ellipse cx=\"32\" cy=\"50\" rx=\"10\" ry=\"16\"/><path d=\"M50 36h30M50 50h30M50 64h30\"/>"
      }
    ],
    "Cyber and Information Security": [
      {
        "name": "Security Shield",
        "svg": "<path d=\"M50 8L86 20v28c0 22-16 38-36 46C30 86 14 70 14 48V20z\"/><rect x=\"38\" y=\"46\" width=\"24\" height=\"22\" rx=\"2\"/><path d=\"M42 46v-6a8 8 0 0 1 16 0v6\"/>"
      },
      {
        "name": "Digital Padlock",
        "svg": "<rect x=\"26\" y=\"44\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M36 44V32a14 14 0 0 1 28 0v12\"/><path d=\"M36 72V58l-3 3\"/><rect x=\"46\" y=\"58\" width=\"8\" height=\"14\" rx=\"4\"/><path d=\"M64 72V58l-3 3\"/>"
      },
      {
        "name": "Open Padlock",
        "svg": "<rect x=\"26\" y=\"46\" width=\"48\" height=\"38\" rx=\"4\"/><path d=\"M36 46V34a14 14 0 0 1 28-6\"/>"
      },
      {
        "name": "Closed Padlock",
        "svg": "<rect x=\"26\" y=\"44\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M36 44V32a14 14 0 0 1 28 0v12\"/><circle cx=\"50\" cy=\"62\" r=\"4\"/><path d=\"M50 66v8\"/>"
      },
      {
        "name": "Firewall",
        "svg": "<path d=\"M50 10c6 8 12 12 12 22a12 12 0 0 1-24 0c0-6 4-8 6-14 2 4 4 6 6 6-2-6-2-12 0-14z\"/><rect x=\"10\" y=\"44\" width=\"80\" height=\"42\" rx=\"2\"/><path d=\"M10 58h80M10 72h80M30 44v14M70 44v14M20 58v14M50 58v14M80 58v14M30 72v14M70 72v14\"/>"
      },
      {
        "name": "Antivirus Protection",
        "svg": "<path d=\"M50 8L86 20v28c0 22-16 38-36 46C30 86 14 70 14 48V20z\"/><path d=\"M34 50l12 12 22-24\"/>"
      },
      {
        "name": "Malware",
        "svg": "<ellipse cx=\"50\" cy=\"56\" rx=\"18\" ry=\"24\"/><path d=\"M50 32v48M32 46H18M32 66H18M68 46h14M68 66h14\"/><path d=\"M40 32c0-8 4-12 10-12s10 4 10 12M38 24l-8-10M62 24l8-10\"/>"
      },
      {
        "name": "Computer Virus",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"18\"/><path d=\"M50 16V6M50 84v10M16 50H6M84 50h10M26 26l-7-7M74 74l7 7M74 26l7-7M26 74l-7 7\"/>"
      },
      {
        "name": "Trojan Horse",
        "svg": "<path d=\"M34 84L30 56 22 46 36 16 48 22 60 14 76 30 74 42 66 84Z\"/><circle cx=\"60\" cy=\"36\" r=\"2\"/><path d=\"M40 84v-8M60 84v-6\"/>"
      },
      {
        "name": "Ransomware",
        "svg": "<rect x=\"26\" y=\"44\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M36 44V32a14 14 0 0 1 28 0v12\"/><path d=\"M58 56c-2-3-12-3-12 1s12 2 12 6-10 4-12 1M50 52v18\"/>"
      },
      {
        "name": "Phishing Attack",
        "svg": "<rect x=\"56\" y=\"30\" width=\"34\" height=\"24\" rx=\"2\"/><path d=\"M56 30l17 12 17-12\"/><path d=\"M28 14v56a16 16 0 0 1-32 0\"/><path d=\"M28 14l8 8\"/>"
      },
      {
        "name": "Hacker Symbol",
        "svg": "<path d=\"M50 10c-16 0-24 14-24 30v10l-6 26h60l-6-26V40c0-16-8-30-24-30z\"/><path d=\"M40 40h8M52 40h8\"/>"
      },
      {
        "name": "Ethical Hacking",
        "svg": "<path d=\"M50 10c-16 0-24 14-24 30v10l-6 26h60l-6-26V40c0-16-8-30-24-30z\"/><path d=\"M38 58l8 8 16-16\"/>"
      },
      {
        "name": "Penetration Testing",
        "svg": "<circle cx=\"42\" cy=\"42\" r=\"22\"/><path d=\"M58 58l28 28\"/><rect x=\"34\" y=\"40\" width=\"16\" height=\"14\"/><path d=\"M38 40v-4a4 4 0 0 1 8 0v4\"/>"
      },
      {
        "name": "Network Intrusion",
        "svg": "<circle cx=\"20\" cy=\"50\" r=\"8\"/><circle cx=\"80\" cy=\"30\" r=\"8\"/><circle cx=\"80\" cy=\"70\" r=\"8\"/><path d=\"M28 50h30M58 50l14-16M58 50l14 16\"/><path d=\"M48 50h22M62 44l8 6-8 6\"/>"
      },
      {
        "name": "Intrusion Detection System",
        "svg": "<path d=\"M50 8L86 20v28c0 22-16 38-36 46C30 86 14 70 14 48V20z\"/><path d=\"M30 48c10-12 30-12 40 0-10 12-30 12-40 0z\"/><circle cx=\"50\" cy=\"48\" r=\"5\"/>"
      },
      {
        "name": "Intrusion Prevention System",
        "svg": "<path d=\"M50 8L86 20v28c0 22-16 38-36 46C30 86 14 70 14 48V20z\"/><path d=\"M38 38l24 24M62 38L38 62\"/>"
      },
      {
        "name": "Encryption",
        "svg": "<rect x=\"26\" y=\"44\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M36 44V32a14 14 0 0 1 28 0v12\"/><path d=\"M36 58h8M48 58h4M56 58h8M36 70h8M48 70h4M56 70h8\"/>"
      },
      {
        "name": "Decryption",
        "svg": "<rect x=\"26\" y=\"44\" width=\"48\" height=\"40\" rx=\"4\"/><path d=\"M36 44V32a14 14 0 0 1 28-8\"/><path d=\"M36 58h8M48 58h4M56 58h8M36 70h8M48 70h4M56 70h8\"/>"
      },
      {
        "name": "Digital Certificate",
        "svg": "<rect x=\"14\" y=\"14\" width=\"72\" height=\"50\" rx=\"3\"/><path d=\"M26 28h48M26 40h30\"/><circle cx=\"66\" cy=\"66\" r=\"12\"/><path d=\"M58 78L54 92l8-4 4 6 4-12\"/>"
      },
      {
        "name": "Public Key",
        "svg": "<circle cx=\"32\" cy=\"50\" r=\"16\"/><circle cx=\"32\" cy=\"50\" r=\"5\"/><path d=\"M48 50h40M74 50v10M84 50v10\"/>"
      },
      {
        "name": "Private Key",
        "svg": "<circle cx=\"32\" cy=\"50\" r=\"16\"/><rect x=\"26\" y=\"46\" width=\"12\" height=\"10\"/><path d=\"M48 50h40M74 50v10M84 50v10\"/>"
      },
      {
        "name": "Authentication",
        "svg": "<circle cx=\"46\" cy=\"32\" r=\"14\"/><path d=\"M22 84c0-16 11-26 24-26s24 10 24 26\"/><path d=\"M72 30l6 6 12-12\"/>"
      },
      {
        "name": "Two-Factor Authentication",
        "svg": "<rect x=\"30\" y=\"8\" width=\"40\" height=\"84\" rx=\"6\"/><path d=\"M40 80h20\"/><rect x=\"40\" y=\"40\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M44 40v-4a6 6 0 0 1 12 0v4\"/>"
      },
      {
        "name": "Biometric Authentication",
        "svg": "<path d=\"M26 60c0-14 10-26 24-26s24 12 24 26v10\"/><path d=\"M34 62c0-8 4-16 16-16s16 8 16 16v12\"/><path d=\"M42 66c0-4 2-8 8-8s8 4 8 8v22\"/><path d=\"M50 58v22\"/>"
      },
      {
        "name": "Fingerprint Scanner",
        "svg": "<rect x=\"20\" y=\"14\" width=\"60\" height=\"72\" rx=\"4\"/><path d=\"M38 66c0-10 4-18 12-18s12 8 12 18\"/><path d=\"M44 56c0-4 2-6 6-6s6 2 6 6v6\"/><path d=\"M50 46v14\"/>"
      },
      {
        "name": "Face Recognition",
        "svg": "<path d=\"M24 14H14v10M76 14h10v10M14 76v10h10M86 76v10H76\"/><ellipse cx=\"50\" cy=\"46\" rx=\"18\" ry=\"22\"/><circle cx=\"43\" cy=\"42\" r=\"2\"/><circle cx=\"57\" cy=\"42\" r=\"2\"/><path d=\"M42 58c4 4 12 4 16 0\"/>"
      },
      {
        "name": "Secure Network",
        "svg": "<circle cx=\"18\" cy=\"30\" r=\"7\"/><circle cx=\"18\" cy=\"70\" r=\"7\"/><path d=\"M25 30L38 50M25 70L38 50\"/><path d=\"M60 14L82 22v18c0 14-10 24-22 30-12-6-22-16-22-30V22z\"/><path d=\"M52 46l6 6 12-12\"/>"
      },
      {
        "name": "VPN Connection",
        "svg": "<circle cx=\"14\" cy=\"50\" r=\"6\"/><circle cx=\"86\" cy=\"50\" r=\"6\"/><path d=\"M20 50h22M58 50h22\"/><rect x=\"42\" y=\"40\" width=\"16\" height=\"20\" rx=\"2\"/><path d=\"M45 40v-6a5 5 0 0 1 10 0v6\"/>"
      },
      {
        "name": "Security Monitoring Dashboard",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M50 22L62 27v10c0 8-6 14-12 17-6-3-12-9-12-17V27z\"/>"
      }
    ],
    "AI and Machine Learning": [
      {
        "name": "Artificial Intelligence",
        "svg": "<rect x=\"26\" y=\"26\" width=\"48\" height=\"48\" rx=\"6\"/><path d=\"M26 38H14M26 50H14M26 62H14M74 38h12M74 50h12M74 62h12M38 26V14M50 26V14M62 26V14M38 74v12M50 74v12M62 74v12\"/><path d=\"M42 40c-6 0-6 6-3 8-3 2-3 8 3 8M58 40c6 0 6 6 3 8 3 2 3 8-3 8M50 40v28\"/>"
      },
      {
        "name": "Neural Network",
        "svg": "<circle cx=\"18\" cy=\"30\" r=\"6\"/><circle cx=\"18\" cy=\"50\" r=\"6\"/><circle cx=\"18\" cy=\"70\" r=\"6\"/><circle cx=\"50\" cy=\"20\" r=\"6\"/><circle cx=\"50\" cy=\"40\" r=\"6\"/><circle cx=\"50\" cy=\"60\" r=\"6\"/><circle cx=\"50\" cy=\"80\" r=\"6\"/><circle cx=\"82\" cy=\"40\" r=\"6\"/><circle cx=\"82\" cy=\"60\" r=\"6\"/><path d=\"M24 30L44 40M24 30L44 60M24 50L44 20M24 50L44 60M24 70L44 40M24 70L44 80M56 20L76 40M56 40L76 60M56 60L76 40M56 80L76 60\"/>"
      },
      {
        "name": "Artificial Neuron",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"14\"/><path d=\"M8 30L36 46M8 50h28M8 70L36 54M64 50h28\"/>"
      },
      {
        "name": "Machine Learning",
        "svg": "<path d=\"M12 84H88M12 84V14\"/><path d=\"M22 70L40 50L54 60L78 30\"/><circle cx=\"78\" cy=\"30\" r=\"4\"/><circle cx=\"40\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Deep Learning",
        "svg": "<path d=\"M50 14L86 30L50 46L14 30z\"/><path d=\"M14 46L50 62L86 46\"/><path d=\"M14 62L50 78L86 62\"/>"
      },
      {
        "name": "Generative AI",
        "svg": "<path d=\"M40 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4z\"/><path d=\"M70 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z\"/><path d=\"M22 74c10-10 20-10 30 0s20 10 30 0\"/>"
      },
      {
        "name": "Large Language Model",
        "svg": "<path d=\"M14 16h72v52H50L30 84V68H14z\"/><path d=\"M26 30h48M26 42h36M26 54h24\"/>"
      },
      {
        "name": "AI Chatbot",
        "svg": "<rect x=\"22\" y=\"30\" width=\"56\" height=\"44\" rx=\"8\"/><circle cx=\"40\" cy=\"50\" r=\"5\"/><circle cx=\"60\" cy=\"50\" r=\"5\"/><path d=\"M50 30V16M46 16h8\"/><path d=\"M36 64h28\"/>"
      },
      {
        "name": "Natural Language Processing",
        "svg": "<path d=\"M12 14h56v40H34L20 66V54H12z\"/><path d=\"M22 26h36M22 38h22\"/><path d=\"M70 56l10 10-10 10\"/><path d=\"M84 66h6\"/>"
      },
      {
        "name": "Computer Vision",
        "svg": "<path d=\"M14 50c10-16 26-22 36-22s26 6 36 22c-10 16-26 22-36 22S24 66 14 50z\"/><circle cx=\"50\" cy=\"50\" r=\"10\"/><path d=\"M14 30V14h16M86 30V14H70M14 70v16h16M86 70v16H70\"/>"
      },
      {
        "name": "Image Recognition",
        "svg": "<rect x=\"12\" y=\"16\" width=\"76\" height=\"68\" rx=\"3\"/><path d=\"M12 68l22-22 16 16 10-10 28 26\"/><circle cx=\"72\" cy=\"34\" r=\"6\"/><path d=\"M58 24h28v20H58z\"/>"
      },
      {
        "name": "Speech Recognition",
        "svg": "<rect x=\"38\" y=\"12\" width=\"24\" height=\"44\" rx=\"12\"/><path d=\"M26 44a24 24 0 0 0 48 0\"/><path d=\"M50 68v14M36 84h28\"/><path d=\"M14 40v20M86 40v20\"/>"
      },
      {
        "name": "Robotics",
        "svg": "<rect x=\"20\" y=\"82\" width=\"60\" height=\"8\"/><path d=\"M50 82V56L28 34\"/><circle cx=\"50\" cy=\"56\" r=\"4\"/><circle cx=\"28\" cy=\"34\" r=\"4\"/><path d=\"M28 34L64 20\"/><path d=\"M58 14l8 6-6 8\"/>"
      },
      {
        "name": "Intelligent Robot",
        "svg": "<rect x=\"24\" y=\"30\" width=\"52\" height=\"44\" rx=\"8\"/><circle cx=\"40\" cy=\"48\" r=\"5\"/><circle cx=\"60\" cy=\"48\" r=\"5\"/><path d=\"M50 30V16M46 16h8\"/><path d=\"M36 62h28\"/><path d=\"M24 44H12M76 44h12\"/>"
      },
      {
        "name": "AI Processor",
        "svg": "<rect x=\"28\" y=\"28\" width=\"44\" height=\"44\" rx=\"3\"/><circle cx=\"42\" cy=\"42\" r=\"3\"/><circle cx=\"58\" cy=\"42\" r=\"3\"/><circle cx=\"50\" cy=\"58\" r=\"3\"/><path d=\"M42 42L50 58L58 42\"/><path d=\"M36 14v14M50 14v14M64 14v14M36 72v14M50 72v14M64 72v14M14 36h14M14 50h14M14 64h14M72 36h14M72 50h14M72 64h14\"/>"
      },
      {
        "name": "GPU Computing",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\" rx=\"4\"/><path d=\"M22 42v16M30 42v16M38 42v16M46 42v16M54 42v16M62 42v16M70 42v16\"/>"
      },
      {
        "name": "Training Dataset",
        "svg": "<rect x=\"12\" y=\"20\" width=\"76\" height=\"56\" rx=\"3\"/><path d=\"M12 36h76M12 52h76M12 68h76M40 20v56M64 20v56\"/><path d=\"M50 82v8M42 86l8 4 8-4\"/>"
      },
      {
        "name": "Machine Learning Dataset",
        "svg": "<path d=\"M12 14v72h76\"/><circle cx=\"26\" cy=\"66\" r=\"4\"/><circle cx=\"38\" cy=\"52\" r=\"4\"/><circle cx=\"50\" cy=\"60\" r=\"4\"/><circle cx=\"62\" cy=\"38\" r=\"4\"/><circle cx=\"74\" cy=\"28\" r=\"4\"/><circle cx=\"30\" cy=\"34\" r=\"4\"/>"
      },
      {
        "name": "Data Classification",
        "svg": "<path d=\"M12 14v72h76\"/><circle cx=\"24\" cy=\"26\" r=\"4\"/><circle cx=\"34\" cy=\"38\" r=\"4\"/><circle cx=\"26\" cy=\"46\" r=\"4\"/><circle cx=\"64\" cy=\"58\" r=\"4\"/><circle cx=\"76\" cy=\"70\" r=\"4\"/><circle cx=\"72\" cy=\"50\" r=\"4\"/><path d=\"M48 14L44 86\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Decision Tree",
        "svg": "<rect x=\"36\" y=\"10\" width=\"28\" height=\"14\" rx=\"2\"/><rect x=\"12\" y=\"44\" width=\"28\" height=\"14\" rx=\"2\"/><rect x=\"60\" y=\"44\" width=\"28\" height=\"14\" rx=\"2\"/><rect x=\"12\" y=\"78\" width=\"16\" height=\"12\" rx=\"2\"/><rect x=\"72\" y=\"78\" width=\"16\" height=\"12\" rx=\"2\"/><path d=\"M50 24v10M50 34H26v10M50 34h24v10M26 58v20M74 58v20\"/>"
      },
      {
        "name": "Regression Model",
        "svg": "<path d=\"M12 14v72h76\"/><circle cx=\"24\" cy=\"66\" r=\"4\"/><circle cx=\"36\" cy=\"58\" r=\"4\"/><circle cx=\"48\" cy=\"46\" r=\"4\"/><circle cx=\"60\" cy=\"40\" r=\"4\"/><circle cx=\"72\" cy=\"28\" r=\"4\"/><path d=\"M18 72L80 24\"/>"
      },
      {
        "name": "Clustering Model",
        "svg": "<ellipse cx=\"30\" cy=\"40\" rx=\"18\" ry=\"16\" stroke-dasharray=\"4 4\"/><ellipse cx=\"72\" cy=\"36\" rx=\"16\" ry=\"14\" stroke-dasharray=\"4 4\"/><ellipse cx=\"48\" cy=\"74\" rx=\"20\" ry=\"12\" stroke-dasharray=\"4 4\"/><circle cx=\"28\" cy=\"34\" r=\"4\"/><circle cx=\"22\" cy=\"46\" r=\"4\"/><circle cx=\"34\" cy=\"46\" r=\"4\"/><circle cx=\"72\" cy=\"30\" r=\"4\"/><circle cx=\"80\" cy=\"42\" r=\"4\"/><circle cx=\"66\" cy=\"44\" r=\"4\"/><circle cx=\"48\" cy=\"72\" r=\"4\"/><circle cx=\"60\" cy=\"68\" r=\"4\"/><circle cx=\"36\" cy=\"72\" r=\"4\"/>"
      },
      {
        "name": "Predictive Analytics",
        "svg": "<path d=\"M12 84V14M12 84h76\"/><path d=\"M20 70L36 52L52 60\"/><path d=\"M52 60L84 30\" stroke-dasharray=\"5 5\"/><circle cx=\"84\" cy=\"30\" r=\"4\"/>"
      },
      {
        "name": "AI Model Training",
        "svg": "<path d=\"M22 22A28 28 0 0 1 78 22\"/><path d=\"M76 14v8h-8\"/><rect x=\"26\" y=\"40\" width=\"48\" height=\"36\" rx=\"4\"/><path d=\"M34 58h8M46 58h8M58 58h8\"/>"
      },
      {
        "name": "AI Model Deployment",
        "svg": "<rect x=\"12\" y=\"34\" width=\"34\" height=\"32\" rx=\"3\"/><path d=\"M46 50h16M56 44l6 6-6 6\"/><path d=\"M68 40a12 12 0 0 1 22 6 9 9 0 0 1-2 18H70a10 10 0 0 1-2-24z\"/>"
      }
    ],
    "Cloud Computing Virtualization": [
      {
        "name": "Cloud Computing",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><rect x=\"42\" y=\"46\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M46 46v-4M54 46v-4M46 62v4M54 62v4M42 50h-4M42 58h-4M58 50h4M58 58h4\"/>"
      },
      {
        "name": "Public Cloud",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><circle cx=\"50\" cy=\"52\" r=\"10\"/><path d=\"M40 52h20M50 42v20\"/><path d=\"M45 44c3 3 3 13 0 16M55 44c-3 3-3 13 0 16\"/>"
      },
      {
        "name": "Private Cloud",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><rect x=\"42\" y=\"50\" width=\"16\" height=\"14\" rx=\"2\"/><path d=\"M45 50v-4a5 5 0 0 1 10 0v4\"/>"
      },
      {
        "name": "Hybrid Cloud",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><path d=\"M50 30v44\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Cloud Storage",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><path d=\"M40 46h20v16H40z\"/><path d=\"M50 50v8M46 54l4 4 4-4\"/>"
      },
      {
        "name": "Cloud Database",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><ellipse cx=\"50\" cy=\"48\" rx=\"10\" ry=\"4\"/><path d=\"M40 48v12c0 2 20 2 20 0V48\"/><path d=\"M40 54c0 2 20 2 20 0\"/>"
      },
      {
        "name": "Cloud Server",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><rect x=\"40\" y=\"42\" width=\"20\" height=\"8\" rx=\"1\"/><rect x=\"40\" y=\"52\" width=\"20\" height=\"8\" rx=\"1\"/><path d=\"M44 46h4M44 56h4\"/>"
      },
      {
        "name": "Cloud Network",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><circle cx=\"44\" cy=\"50\" r=\"3\"/><circle cx=\"56\" cy=\"46\" r=\"3\"/><circle cx=\"56\" cy=\"58\" r=\"3\"/><path d=\"M44 50L56 46M44 50L56 58M56 46v12\"/>"
      },
      {
        "name": "Cloud Backup",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><path d=\"M56 46a8 8 0 1 0 2 8\"/><path d=\"M58 40v6h-6\"/>"
      },
      {
        "name": "Cloud Security",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><path d=\"M50 40l9 3v7c0 6-4 10-9 12-5-2-9-6-9-12v-7z\"/><path d=\"M46 52l3 3 5-6\"/>"
      },
      {
        "name": "Virtual Machine",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 26h80\"/><rect x=\"22\" y=\"36\" width=\"56\" height=\"40\" rx=\"2\"/><path d=\"M34 52h32\"/><path d=\"M40 60h20\"/>"
      },
      {
        "name": "Hypervisor",
        "svg": "<rect x=\"18\" y=\"16\" width=\"20\" height=\"16\" rx=\"2\"/><rect x=\"42\" y=\"16\" width=\"20\" height=\"16\" rx=\"2\"/><rect x=\"66\" y=\"16\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M8 46h84\"/><path d=\"M8 46v0\"/><rect x=\"8\" y=\"46\" width=\"84\" height=\"8\" rx=\"2\"/><rect x=\"14\" y=\"68\" width=\"72\" height=\"16\" rx=\"2\"/><path d=\"M28 36v10M52 36v10M74 36v10M50 16\"/>"
      },
      {
        "name": "Container",
        "svg": "<rect x=\"10\" y=\"26\" width=\"80\" height=\"48\" rx=\"2\"/><path d=\"M22 26v48M34 26v48M46 26v48M58 26v48M70 26v48M82 26v48\"/>"
      },
      {
        "name": "Docker Container",
        "svg": "<rect x=\"14\" y=\"34\" width=\"16\" height=\"14\"/><rect x=\"34\" y=\"34\" width=\"16\" height=\"14\"/><rect x=\"54\" y=\"34\" width=\"16\" height=\"14\"/><rect x=\"34\" y=\"18\" width=\"16\" height=\"14\"/><rect x=\"54\" y=\"18\" width=\"16\" height=\"14\"/><rect x=\"74\" y=\"34\" width=\"12\" height=\"14\"/><path d=\"M8 58c6 16 60 16 80 0\"/><path d=\"M8 58h80\"/>"
      },
      {
        "name": "Kubernetes Cluster",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"22\"/><circle cx=\"50\" cy=\"50\" r=\"6\"/><path d=\"M50 28V44M50 56v16M28 50h16M56 50h16M34 34l10 10M56 56l10 10M66 34l-10 10M44 56l-10 10\"/><circle cx=\"50\" cy=\"12\" r=\"4\"/><circle cx=\"84\" cy=\"50\" r=\"4\"/><circle cx=\"50\" cy=\"88\" r=\"4\"/><circle cx=\"16\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Virtual Desktop",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M32 52c0 6 8 6 10 2 2 4 10 4 10 0 0-4 6-4 6 0 0 4 4 4 4 0 0-6 10-4 8 0\"/>"
      },
      {
        "name": "Virtual Network",
        "svg": "<circle cx=\"22\" cy=\"30\" r=\"7\"/><circle cx=\"78\" cy=\"30\" r=\"7\"/><circle cx=\"50\" cy=\"70\" r=\"7\"/><circle cx=\"22\" cy=\"70\" r=\"0\"/><path d=\"M29 32L43 64M71 32L57 64M29 30H71\" stroke-dasharray=\"5 5\"/>"
      },
      {
        "name": "Virtual Private Cloud (VPC)",
        "svg": "<rect x=\"8\" y=\"10\" width=\"84\" height=\"80\" rx=\"4\" stroke-dasharray=\"6 5\"/><rect x=\"18\" y=\"26\" width=\"26\" height=\"22\" rx=\"2\"/><rect x=\"56\" y=\"26\" width=\"26\" height=\"22\" rx=\"2\"/><rect x=\"18\" y=\"58\" width=\"26\" height=\"22\" rx=\"2\"/><rect x=\"56\" y=\"58\" width=\"26\" height=\"22\" rx=\"2\"/>"
      },
      {
        "name": "Cloud Application",
        "svg": "<path d=\"M24 72h48a16 16 0 0 0 0-32 24 24 0 0 0-46 4 14 14 0 0 0-2 28z\"/><rect x=\"40\" y=\"40\" width=\"8\" height=\"8\"/><rect x=\"52\" y=\"40\" width=\"8\" height=\"8\"/><rect x=\"40\" y=\"52\" width=\"8\" height=\"8\"/><rect x=\"52\" y=\"52\" width=\"8\" height=\"8\"/>"
      },
      {
        "name": "Cloud Infrastructure Architecture",
        "svg": "<path d=\"M26 40h48a14 14 0 0 0 0-26 20 20 0 0 0-38 4 11 11 0 0 0-10 22z\"/><rect x=\"36\" y=\"52\" width=\"28\" height=\"12\" rx=\"2\"/><rect x=\"36\" y=\"70\" width=\"28\" height=\"12\" rx=\"2\"/><path d=\"M50 52v-12M50 64v6\"/>"
      }
    ],
    "Net Web Digital Communication": [
      {
        "name": "Internet Globe",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><ellipse cx=\"50\" cy=\"50\" rx=\"16\" ry=\"36\"/><path d=\"M14 50h72\"/>"
      },
      {
        "name": "World Wide Web",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><ellipse cx=\"50\" cy=\"50\" rx=\"16\" ry=\"36\"/><path d=\"M14 50h72\"/><path d=\"M50 14v72\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Website",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 28h80\"/><circle cx=\"18\" cy=\"21\" r=\"1.5\"/><circle cx=\"25\" cy=\"21\" r=\"1.5\"/><path d=\"M22 40h56M22 52h36M22 64h24\"/><rect x=\"62\" y=\"58\" width=\"16\" height=\"12\"/>"
      },
      {
        "name": "Web Browser",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M10 28h80\"/><circle cx=\"18\" cy=\"21\" r=\"1.5\"/><circle cx=\"25\" cy=\"21\" r=\"1.5\"/><path d=\"M30 42h40v30H30z\"/><path d=\"M30 42l6-6h28\"/>"
      },
      {
        "name": "Search Engine",
        "svg": "<circle cx=\"42\" cy=\"42\" r=\"26\"/><path d=\"M61 61l26 26\"/><path d=\"M30 42h24M42 30v24\"/>"
      },
      {
        "name": "Domain Name",
        "svg": "<path d=\"M12 40h22v20H12z\"/><path d=\"M34 50h16\"/><path d=\"M50 50h8M58 50h8\"/><rect x=\"66\" y=\"40\" width=\"22\" height=\"20\" rx=\"2\"/><path d=\"M18 50h10\"/>"
      },
      {
        "name": "Domain Name System",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"12\"/><circle cx=\"18\" cy=\"22\" r=\"7\"/><circle cx=\"82\" cy=\"22\" r=\"7\"/><circle cx=\"18\" cy=\"78\" r=\"7\"/><circle cx=\"82\" cy=\"78\" r=\"7\"/><path d=\"M25 26L40 42M75 26L60 42M25 74L40 58M75 74L60 58\"/>"
      },
      {
        "name": "URL Web Address",
        "svg": "<rect x=\"10\" y=\"30\" width=\"80\" height=\"40\" rx=\"6\"/><path d=\"M26 50h24\"/><path d=\"M26 44h14M26 56h14\"/><path d=\"M58 44l-4 0M58 56h10\"/><path d=\"M50 50h-0\"/><path d=\"M68 44a6 6 0 1 1 0 12\"/>"
      },
      {
        "name": "HTTP Protocol",
        "svg": "<path d=\"M14 36h72M14 64h72\"/><path d=\"M26 36V64M74 36V64\"/><path d=\"M36 44l6 12 6-12 6 12 6-12\"/><path d=\"M14 50h12M74 50h12\" stroke-dasharray=\"3 4\"/>"
      },
      {
        "name": "HTTPS Secure Connection",
        "svg": "<rect x=\"26\" y=\"46\" width=\"48\" height=\"36\" rx=\"4\"/><path d=\"M36 46V36a14 14 0 0 1 28 0v10\"/><circle cx=\"50\" cy=\"62\" r=\"4\"/><path d=\"M50 66v6\"/>"
      },
      {
        "name": "Web Hosting",
        "svg": "<rect x=\"16\" y=\"14\" width=\"68\" height=\"18\" rx=\"2\"/><rect x=\"16\" y=\"38\" width=\"68\" height=\"18\" rx=\"2\"/><rect x=\"16\" y=\"62\" width=\"68\" height=\"18\" rx=\"2\"/><circle cx=\"26\" cy=\"23\" r=\"2\"/><circle cx=\"26\" cy=\"47\" r=\"2\"/><circle cx=\"26\" cy=\"71\" r=\"2\"/><path d=\"M40 23h30M40 47h30M40 71h30\"/>"
      },
      {
        "name": "Web Server Connection",
        "svg": "<rect x=\"8\" y=\"30\" width=\"30\" height=\"40\" rx=\"2\"/><path d=\"M14 40h18M14 50h18M14 60h18\"/><path d=\"M38 50h24\"/><circle cx=\"72\" cy=\"50\" r=\"18\"/><path d=\"M54 50h36M72 32c-8 6-8 30 0 36M72 32c8 6 8 30 0 36\"/>"
      },
      {
        "name": "Email",
        "svg": "<rect x=\"12\" y=\"26\" width=\"76\" height=\"50\" rx=\"2\"/><path d=\"M12 26l38 28 38-28\"/>"
      },
      {
        "name": "Email Server",
        "svg": "<rect x=\"16\" y=\"12\" width=\"68\" height=\"20\" rx=\"2\"/><rect x=\"16\" y=\"40\" width=\"68\" height=\"20\" rx=\"2\"/><rect x=\"16\" y=\"68\" width=\"68\" height=\"20\" rx=\"2\"/><path d=\"M26 22h4M26 50h4M26 78h4\"/><path d=\"M50 22h18M50 50h18\"/>"
      },
      {
        "name": "File Transfer Protocol",
        "svg": "<path d=\"M14 40h30v30H14z\"/><path d=\"M14 40l8-8h14\"/><path d=\"M56 30h30v30H56z\"/><path d=\"M56 30l8-8h14\"/><path d=\"M50 40h4M50 52h4M48 46l4-4\"/><path d=\"M44 56h-14M56 62l0 0\"/>"
      },
      {
        "name": "File Download",
        "svg": "<path d=\"M26 60v20h48V60\"/><path d=\"M50 14v46M36 46l14 14 14-14\"/>"
      },
      {
        "name": "File Upload",
        "svg": "<path d=\"M26 60v20h48V60\"/><path d=\"M50 60V14M36 28l14-14 14 14\"/>"
      },
      {
        "name": "Video Conference",
        "svg": "<rect x=\"10\" y=\"22\" width=\"52\" height=\"40\" rx=\"3\"/><path d=\"M62 38l28-14v40l-28-14z\"/><circle cx=\"36\" cy=\"42\" r=\"6\"/><path d=\"M26 56c2-4 18-4 20 0\"/>"
      },
      {
        "name": "Online Meeting",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><circle cx=\"34\" cy=\"38\" r=\"8\"/><circle cx=\"66\" cy=\"38\" r=\"8\"/><path d=\"M22 58c2-6 20-6 24 0M54 58c2-6 20-6 24 0\"/><path d=\"M42 68h16v10H42M30 84h40\"/>"
      },
      {
        "name": "Digital Communication",
        "svg": "<rect x=\"10\" y=\"14\" width=\"34\" height=\"26\" rx=\"4\"/><path d=\"M18 40l-4 6 8-2\"/><rect x=\"56\" y=\"60\" width=\"34\" height=\"26\" rx=\"4\"/><path d=\"M82 86l4-6-8 2\"/><path d=\"M28 26h18M28 32h10M66 68h18M66 74h10\"/>"
      },
      {
        "name": "Instant Messaging",
        "svg": "<path d=\"M12 18h56v38H34l-16 14V56H12z\"/><path d=\"M76 40h14v28H84l-8 8v-8H76z\"/><path d=\"M22 30h36M22 40h22\"/>"
      },
      {
        "name": "Social Network",
        "svg": "<circle cx=\"50\" cy=\"26\" r=\"10\"/><circle cx=\"22\" cy=\"72\" r=\"10\"/><circle cx=\"78\" cy=\"72\" r=\"10\"/><path d=\"M44 33L28 64M56 33L72 64M32 72h36\"/>"
      },
      {
        "name": "QR Code",
        "svg": "<rect x=\"14\" y=\"14\" width=\"26\" height=\"26\"/><rect x=\"60\" y=\"14\" width=\"26\" height=\"26\"/><rect x=\"14\" y=\"60\" width=\"26\" height=\"26\"/><rect x=\"22\" y=\"22\" width=\"10\" height=\"10\"/><rect x=\"68\" y=\"22\" width=\"10\" height=\"10\"/><rect x=\"22\" y=\"68\" width=\"10\" height=\"10\"/><path d=\"M50 14v12M50 34v6M50 50v10M46 56h12M60 46h8M60 60v26M74 60h12M74 74v12M86 60v4M86 82h-4\"/>"
      },
      {
        "name": "Digital Signature",
        "svg": "<rect x=\"14\" y=\"16\" width=\"72\" height=\"68\" rx=\"3\"/><path d=\"M26 34h48M26 46h22\"/><path d=\"M28 74c6-14 10-20 14-14 4 6-4 14 6 10s10-16 16-12c6 4 4 12 14 6\" />"
      },
      {
        "name": "Electronic Document",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M62 10v16h16\"/><path d=\"M32 44h36M32 56h36M32 68h22\"/><path d=\"M52 80l10-10 4 4-10 10-6 2z\"/>"
      }
    ],
    "Operating Systems Administration": [
      {
        "name": "Operating System",
        "svg": "<rect x=\"8\" y=\"12\" width=\"84\" height=\"76\" rx=\"4\"/><path d=\"M8 26h84\"/><path d=\"M18 38h30M18 50h40M18 62h24\"/><circle cx=\"16\" cy=\"19\" r=\"1.5\"/><circle cx=\"22\" cy=\"19\" r=\"1.5\"/>"
      },
      {
        "name": "Windows Computer System",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M22 24h24v20H22zM50 24h24v20H50zM22 48h24v14H22zM50 48h24v14H50z\"/>"
      },
      {
        "name": "Linux Operating System",
        "svg": "<path d=\"M50 10c-10 0-14 10-14 20 0 6-4 10-6 16-4 12-2 26-2 30h40c0-4 2-18-2-30-2-6-6-10-6-16 0-10-4-20-10-20z\"/><circle cx=\"44\" cy=\"26\" r=\"2\"/><circle cx=\"56\" cy=\"26\" r=\"2\"/><path d=\"M34 88h8M58 88h8\"/>"
      },
      {
        "name": "macOS Computer System",
        "svg": "<rect x=\"16\" y=\"14\" width=\"68\" height=\"50\" rx=\"3\"/><path d=\"M42 64h16v10H42M30 84h40\"/><path d=\"M50 22c-4 0-8 4-8 10s4 10 8 10 8-4 8-10-4-10-8-10z\"/><path d=\"M50 16v4\"/>"
      },
      {
        "name": "Android Operating System",
        "svg": "<rect x=\"28\" y=\"8\" width=\"44\" height=\"84\" rx=\"6\"/><path d=\"M36 20h28M36 80h28\"/><path d=\"M38 44a12 12 0 0 1 24 0z\"/><path d=\"M42 38v-4M58 38v-4\"/><path d=\"M38 48v16h24V48\"/><path d=\"M44 64v8M56 64v8\"/>"
      },
      {
        "name": "iOS Operating System",
        "svg": "<rect x=\"28\" y=\"8\" width=\"44\" height=\"84\" rx=\"6\"/><path d=\"M36 20h28M36 80h28\"/><rect x=\"36\" y=\"30\" width=\"10\" height=\"10\" rx=\"2\"/><rect x=\"54\" y=\"30\" width=\"10\" height=\"10\" rx=\"2\"/><rect x=\"36\" y=\"46\" width=\"10\" height=\"10\" rx=\"2\"/><rect x=\"54\" y=\"46\" width=\"10\" height=\"10\" rx=\"2\"/>"
      },
      {
        "name": "File System",
        "svg": "<path d=\"M12 30h30l6 8h40v44H12z\"/><path d=\"M12 42h76\"/><path d=\"M24 54h22M24 64h14\"/>"
      },
      {
        "name": "Folder Directory",
        "svg": "<path d=\"M12 30h30l6 8h40v44H12z\"/><path d=\"M12 42h76\"/><path d=\"M50 52v20M44 66l6 6 6-6\"/>"
      },
      {
        "name": "File Document",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M62 10v16h16\"/><path d=\"M32 44h36M32 56h36M32 68h22\"/>"
      },
      {
        "name": "System Settings",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"14\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/><path d=\"M50 14v10M50 76v10M14 50h10M76 50h10M24 24l7 7M69 69l7 7M76 24l-7 7M31 69l-7 7\"/><circle cx=\"50\" cy=\"50\" r=\"30\"/>"
      },
      {
        "name": "System Configuration",
        "svg": "<path d=\"M14 26h72M14 50h72M14 74h72\"/><circle cx=\"34\" cy=\"26\" r=\"7\" fill=\"none\"/><circle cx=\"62\" cy=\"50\" r=\"7\"/><circle cx=\"42\" cy=\"74\" r=\"7\"/>"
      },
      {
        "name": "Task Manager",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"72\" rx=\"3\"/><path d=\"M12 28h76\"/><path d=\"M22 72V54M36 72V42M50 72V60M64 72V46\"/><path d=\"M74 72V52\"/>"
      },
      {
        "name": "Process Management",
        "svg": "<circle cx=\"34\" cy=\"50\" r=\"18\"/><circle cx=\"34\" cy=\"50\" r=\"6\"/><path d=\"M34 32v-4M34 72v-4M16 50h4M48 50h4M21 37l3 3M44 60l3 3M21 63l3-3M44 40l3-3\"/><circle cx=\"70\" cy=\"34\" r=\"10\"/><circle cx=\"70\" cy=\"66\" r=\"10\"/><path d=\"M52 50h8\"/>"
      },
      {
        "name": "CPU Usage Monitor",
        "svg": "<rect x=\"28\" y=\"28\" width=\"44\" height=\"44\" rx=\"3\"/><rect x=\"40\" y=\"40\" width=\"20\" height=\"20\"/><path d=\"M36 14v14M50 14v14M64 14v14M36 72v14M50 72v14M64 72v14M14 36h14M14 50h14M14 64h14M72 36h14M72 50h14M72 64h14\"/>"
      },
      {
        "name": "RAM Usage Monitor",
        "svg": "<rect x=\"8\" y=\"36\" width=\"84\" height=\"28\" rx=\"2\"/><path d=\"M18 36v28M30 36v28M42 36v28M54 36v28M66 36v28M78 36v28\"/><path d=\"M14 64v6M86 64v6\"/><path d=\"M20 22h60\"/><path d=\"M20 14h36\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Disk Usage Monitor",
        "svg": "<rect x=\"12\" y=\"26\" width=\"76\" height=\"48\" rx=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"16\"/><path d=\"M50 50V34\"/><path d=\"M50 50L62 44\"/><path d=\"M76 40h4\"/>"
      },
      {
        "name": "System Performance Monitor",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M20 56l12-14 10 8 12-18 14 10 10-8\"/>"
      },
      {
        "name": "System Log",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M62 10v16h16\"/><path d=\"M32 40h8M48 40h20M32 52h8M48 52h20M32 64h8M48 64h14\"/><path d=\"M32 78h36\"/>"
      },
      {
        "name": "System Administrator",
        "svg": "<circle cx=\"50\" cy=\"32\" r=\"14\"/><path d=\"M24 86c0-16 12-26 26-26s26 10 26 26\"/><path d=\"M72 14l4 4-10 10M62 24l-4 4\" /><circle cx=\"76\" cy=\"18\" r=\"4\"/>"
      },
      {
        "name": "Remote Desktop Connection",
        "svg": "<rect x=\"8\" y=\"12\" width=\"56\" height=\"42\" rx=\"3\"/><path d=\"M8 24h56\"/><path d=\"M32 54v8M22 62h20\"/><rect x=\"58\" y=\"44\" width=\"34\" height=\"40\" rx=\"3\"/><path d=\"M64 84h22\"/><path d=\"M48 36c-6 6-6 14 0 20 6-6 6-14 0-20z\" stroke-dasharray=\"3 3\"/><path d=\"M52 60h16\"/>"
      }
    ],
    "Data Analytics and Visualization": [
      {
        "name": "Data Analytics",
        "svg": "<path d=\"M12 14v72h76\"/><path d=\"M24 70L40 52L54 60L70 36L84 26\"/><circle cx=\"40\" cy=\"52\" r=\"3\"/><circle cx=\"70\" cy=\"36\" r=\"3\"/>"
      },
      {
        "name": "Data Science",
        "svg": "<path d=\"M14 84h72\"/><path d=\"M14 84V14\"/><path d=\"M26 74v-12M40 74V52M54 74V40M68 74V30\"/><path d=\"M26 58c12-22 30-40 52-44\" />"
      },
      {
        "name": "Data Mining",
        "svg": "<circle cx=\"42\" cy=\"42\" r=\"26\"/><path d=\"M61 61l26 26\"/><path d=\"M30 46l8-8 6 6 10-12\"/><circle cx=\"30\" cy=\"46\" r=\"2\"/><circle cx=\"54\" cy=\"32\" r=\"2\"/>"
      },
      {
        "name": "Bar Chart",
        "svg": "<path d=\"M12 14v72h76\"/><rect x=\"22\" y=\"48\" width=\"12\" height=\"36\"/><rect x=\"42\" y=\"34\" width=\"12\" height=\"50\"/><rect x=\"62\" y=\"20\" width=\"12\" height=\"64\"/>"
      },
      {
        "name": "Line Chart",
        "svg": "<path d=\"M12 14v72h76\"/><path d=\"M22 70L40 50L56 60L80 30\"/><circle cx=\"22\" cy=\"70\" r=\"3\"/><circle cx=\"40\" cy=\"50\" r=\"3\"/><circle cx=\"56\" cy=\"60\" r=\"3\"/><circle cx=\"80\" cy=\"30\" r=\"3\"/>"
      },
      {
        "name": "Pie Chart",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><path d=\"M50 50V14\"/><path d=\"M50 50L82 66\"/>"
      },
      {
        "name": "Area Chart",
        "svg": "<path d=\"M12 14v72h76\"/><path d=\"M14 66L34 46L52 58L76 28V86H14z\"/>"
      },
      {
        "name": "Histogram",
        "svg": "<path d=\"M12 14v72h76\"/><rect x=\"18\" y=\"56\" width=\"12\" height=\"28\"/><rect x=\"32\" y=\"36\" width=\"12\" height=\"48\"/><rect x=\"46\" y=\"22\" width=\"12\" height=\"62\"/><rect x=\"60\" y=\"44\" width=\"12\" height=\"40\"/><rect x=\"74\" y=\"62\" width=\"12\" height=\"22\"/>"
      },
      {
        "name": "Scatter Plot",
        "svg": "<path d=\"M12 14v72h76\"/><circle cx=\"26\" cy=\"66\" r=\"4\"/><circle cx=\"36\" cy=\"50\" r=\"4\"/><circle cx=\"48\" cy=\"58\" r=\"4\"/><circle cx=\"58\" cy=\"36\" r=\"4\"/><circle cx=\"70\" cy=\"42\" r=\"4\"/><circle cx=\"78\" cy=\"24\" r=\"4\"/>"
      },
      {
        "name": "Dashboard Analytics",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"4\"/><rect x=\"20\" y=\"20\" width=\"26\" height=\"22\"/><rect x=\"54\" y=\"20\" width=\"26\" height=\"22\"/><path d=\"M22 72L34 58L46 64L58 50\"/><path d=\"M58 72h22M58 62h22\" />"
      },
      {
        "name": "Business Intelligence",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"4\"/><path d=\"M26 70V50M40 70V38M54 70V56M68 70V32\"/><path d=\"M22 28h56\"/><circle cx=\"76\" cy=\"50\" r=\"0\"/>"
      },
      {
        "name": "Statistical Analysis",
        "svg": "<path d=\"M14 84h72M14 84V14\"/><path d=\"M26 84V58h12v26M42 84V40h12v44M58 84V26h12v58\"/><path d=\"M26 46c10-8 14-10 32-14\"/>"
      },
      {
        "name": "Spreadsheet",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"2\"/><path d=\"M10 34h80M10 54h80M10 74h80M36 14v72M62 14v72\"/>"
      },
      {
        "name": "Excel Workbook",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"2\"/><path d=\"M10 34h80M36 14v72M62 14v72\"/><path d=\"M16 14h14M16 14V6\"/><path d=\"M42 44l12 12M54 44L42 56\"/><path d=\"M68 44l12 12M80 44L68 56\"/>"
      },
      {
        "name": "Pivot Table",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"2\"/><path d=\"M10 34h80M10 54h80M36 14v72M62 14v72\"/><path d=\"M14 22h16M14 42h16M40 22h16M66 22h16\"/><path d=\"M40 64h16M66 60h16M66 70h16\"/>"
      },
      {
        "name": "Data Report",
        "svg": "<path d=\"M22 10h40l16 16v64H22z\"/><path d=\"M62 10v16h16\"/><path d=\"M32 44h10v26H32zM48 56h10v14H48zM64 38h4v32h-4z\"/>"
      },
      {
        "name": "Key Performance Indicator",
        "svg": "<path d=\"M14 66a36 36 0 0 1 72 0\"/><path d=\"M50 66L70 38\"/><circle cx=\"50\" cy=\"66\" r=\"5\"/><path d=\"M14 66h6M80 66h6M24 40l5 5M76 40l-5 5M50 30v6\"/>"
      },
      {
        "name": "Real-Time Data Monitoring",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"54\" rx=\"3\"/><path d=\"M42 68h16v10H42M30 84h40\"/><path d=\"M20 56l10-10 8 6 10-14 10 8 10-6 10 4\"/><circle cx=\"80\" cy=\"22\" r=\"0\"/>"
      },
      {
        "name": "Data Comparison",
        "svg": "<path d=\"M12 14v72h76\"/><path d=\"M22 66L38 40L54 58L78 26\" stroke-dasharray=\"5 4\"/><path d=\"M22 74L38 60L54 70L78 48\"/>"
      },
      {
        "name": "Data Visualization",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"4\"/><circle cx=\"34\" cy=\"60\" r=\"8\"/><rect x=\"50\" y=\"30\" width=\"12\" height=\"40\"/><path d=\"M68 70L78 40\"/><circle cx=\"78\" cy=\"40\" r=\"4\"/>"
      }
    ]
  }
};
