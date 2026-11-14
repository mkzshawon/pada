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
    ],
    "Digital Electronics and Embedded Systems": [
      {
        "name": "Microcontroller",
        "svg": "<rect x=\"26\" y=\"26\" width=\"48\" height=\"48\" rx=\"3\"/><rect x=\"40\" y=\"40\" width=\"20\" height=\"20\"/><path d=\"M36 14v12M50 14v12M64 14v12M36 74v12M50 74v12M64 74v12M14 36h12M14 50h12M14 64h12M74 36h12M74 50h12M74 64h12\"/>"
      },
      {
        "name": "Arduino Board",
        "svg": "<rect x=\"10\" y=\"22\" width=\"80\" height=\"56\" rx=\"6\"/><path d=\"M26 50c-6-8-14-8-14 0s8 8 14 0 14-8 22 0-8 8-14 0\"/><path d=\"M60 38v24M70 38v24\"/>"
      },
      {
        "name": "Raspberry Pi Board",
        "svg": "<rect x=\"10\" y=\"22\" width=\"80\" height=\"56\" rx=\"4\"/><rect x=\"18\" y=\"32\" width=\"36\" height=\"36\" rx=\"2\"/><path d=\"M62 30h18M62 40h18M62 50h18M62 60h18M62 70h18\"/><circle cx=\"34\" cy=\"46\" r=\"4\"/><circle cx=\"44\" cy=\"58\" r=\"4\"/>"
      },
      {
        "name": "Embedded System",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"6\"/><rect x=\"36\" y=\"36\" width=\"28\" height=\"28\"/><path d=\"M26 26h8M66 26h8M26 74h8M66 74h8\"/>"
      },
      {
        "name": "Sensor Module",
        "svg": "<rect x=\"28\" y=\"34\" width=\"44\" height=\"30\" rx=\"3\"/><circle cx=\"50\" cy=\"49\" r=\"6\"/><path d=\"M50 34V18M28 46H12M72 46h16M38 64v14M62 64v14\"/>"
      },
      {
        "name": "Temperature Sensor",
        "svg": "<path d=\"M42 62V20a8 8 0 0 1 16 0v42a14 14 0 1 1-16 0z\"/><path d=\"M50 30v40\"/><circle cx=\"50\" cy=\"72\" r=\"5\"/><path d=\"M60 30h6M60 42h4M60 54h6\"/>"
      },
      {
        "name": "Humidity Sensor",
        "svg": "<path d=\"M50 14c-14 18-22 30-22 42a22 22 0 0 0 44 0c0-12-8-24-22-42z\"/><path d=\"M40 60a10 10 0 0 0 10 10\"/>"
      },
      {
        "name": "Pressure Sensor",
        "svg": "<circle cx=\"50\" cy=\"54\" r=\"34\"/><path d=\"M50 54L70 36\"/><circle cx=\"50\" cy=\"54\" r=\"4\"/><path d=\"M22 66A34 34 0 0 1 36 24M50 20v6M78 66A34 34 0 0 0 64 24\"/>"
      },
      {
        "name": "Motion Sensor",
        "svg": "<circle cx=\"40\" cy=\"30\" r=\"8\"/><path d=\"M28 86V58l8-10 4-14 10 2 2 12 6 12v26\"/><path d=\"M72 40a16 16 0 0 1 0 20M82 30a30 30 0 0 1 0 40\"/>"
      },
      {
        "name": "Ultrasonic Sensor",
        "svg": "<circle cx=\"34\" cy=\"50\" r=\"18\"/><circle cx=\"34\" cy=\"50\" r=\"6\"/><path d=\"M60 36a20 20 0 0 1 0 28M70 26a32 32 0 0 1 0 48M80 16a44 44 0 0 1 0 68\"/>"
      },
      {
        "name": "Light Sensor",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"14\"/><path d=\"M50 16v8M50 76v8M16 50h8M76 50h8M26 26l6 6M68 68l6 6M74 26l-6 6M26 74l6-6\"/>"
      },
      {
        "name": "Relay Module",
        "svg": "<rect x=\"12\" y=\"30\" width=\"30\" height=\"40\" rx=\"2\"/><path d=\"M18 40l4-4 4 4-4 4 4 4-4 4\"/><path d=\"M4 40h8M4 60h8\"/><path d=\"M42 60h10\"/><path d=\"M52 60l16-14\"/><path d=\"M68 60h22\"/>"
      },
      {
        "name": "LCD Module",
        "svg": "<rect x=\"10\" y=\"26\" width=\"80\" height=\"48\" rx=\"3\"/><rect x=\"20\" y=\"36\" width=\"60\" height=\"28\"/><path d=\"M28 44h4M38 44h4M48 44h4M58 44h4M68 44h4\"/><path d=\"M14 80v6M86 80v6\"/>"
      },
      {
        "name": "LED Display Module",
        "svg": "<rect x=\"14\" y=\"14\" width=\"72\" height=\"72\" rx=\"3\"/><path d=\"M34 26h32M34 50h32M34 74h32M28 30v16M72 30v16M28 56v16M72 56v16\"/>"
      },
      {
        "name": "Breadboard",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M22 14v72M78 14v72\"/><circle cx=\"36\" cy=\"30\" r=\"1.5\"/><circle cx=\"50\" cy=\"30\" r=\"1.5\"/><circle cx=\"64\" cy=\"30\" r=\"1.5\"/><circle cx=\"36\" cy=\"44\" r=\"1.5\"/><circle cx=\"50\" cy=\"44\" r=\"1.5\"/><circle cx=\"64\" cy=\"44\" r=\"1.5\"/><circle cx=\"36\" cy=\"58\" r=\"1.5\"/><circle cx=\"50\" cy=\"58\" r=\"1.5\"/><circle cx=\"64\" cy=\"58\" r=\"1.5\"/><circle cx=\"36\" cy=\"72\" r=\"1.5\"/><circle cx=\"50\" cy=\"72\" r=\"1.5\"/><circle cx=\"64\" cy=\"72\" r=\"1.5\"/>"
      },
      {
        "name": "Electronic Circuit Board",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><path d=\"M22 30h30v20h26M22 70h18V50\"/><circle cx=\"22\" cy=\"30\" r=\"3\"/><circle cx=\"78\" cy=\"50\" r=\"3\"/><rect x=\"58\" y=\"62\" width=\"14\" height=\"10\"/>"
      },
      {
        "name": "Printed Circuit Board",
        "svg": "<rect x=\"10\" y=\"14\" width=\"80\" height=\"72\" rx=\"3\"/><circle cx=\"28\" cy=\"28\" r=\"4\"/><circle cx=\"72\" cy=\"28\" r=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"4\"/><circle cx=\"28\" cy=\"72\" r=\"4\"/><circle cx=\"72\" cy=\"72\" r=\"4\"/><path d=\"M28 28h22L50 50M72 28v16M50 54v12M28 72h44\"/>"
      },
      {
        "name": "Integrated Circuit",
        "svg": "<rect x=\"22\" y=\"28\" width=\"56\" height=\"44\" rx=\"2\"/><path d=\"M42 28a8 8 0 0 0 16 0\"/><path d=\"M30 28V16M42 28V16M58 28V16M70 28V16M30 72V84M42 72V84M58 72V84M70 72V84\"/>"
      },
      {
        "name": "Logic Gate AND",
        "svg": "<path d=\"M14 30h30M14 70h30M70 50h16\"/><path d=\"M44 24h10a26 26 0 0 1 0 52H44z\"/>"
      },
      {
        "name": "Logic Gate OR",
        "svg": "<path d=\"M14 30h20M14 70h20M70 50h16\"/><path d=\"M34 24Q52 50 34 76Q64 80 80 50Q64 20 34 24z\"/>"
      },
      {
        "name": "Logic Gate NOT",
        "svg": "<path d=\"M24 24v52l44-26z\"/><circle cx=\"74\" cy=\"50\" r=\"5\"/><path d=\"M14 50h10M79 50h7\"/>"
      },
      {
        "name": "Logic Gate NAND",
        "svg": "<path d=\"M14 30h30M14 70h30\"/><path d=\"M44 24h10a26 26 0 0 1 0 52H44z\"/><circle cx=\"76\" cy=\"50\" r=\"4\"/><path d=\"M80 50h12\"/>"
      },
      {
        "name": "Logic Gate NOR",
        "svg": "<path d=\"M14 30h20M14 70h20\"/><path d=\"M34 24Q52 50 34 76Q64 80 76 50Q64 20 34 24z\"/><circle cx=\"80\" cy=\"50\" r=\"4\"/><path d=\"M84 50h10\"/>"
      },
      {
        "name": "Logic Gate XOR",
        "svg": "<path d=\"M14 30h20M14 70h20M70 50h16\"/><path d=\"M34 24Q52 50 34 76Q64 80 80 50Q64 20 34 24z\"/><path d=\"M26 24Q40 50 26 76\"/>"
      },
      {
        "name": "Digital Signal Processor",
        "svg": "<rect x=\"30\" y=\"30\" width=\"40\" height=\"40\" rx=\"3\"/><path d=\"M8 50c6-12 12-12 18 0s12 12 18 0\"/><path d=\"M72 50c6-12 12-12 18 0\"/>"
      },
      {
        "name": "Analog-to-Digital Converter",
        "svg": "<path d=\"M8 50c8-18 16-18 24 0s16 18 24 0\"/><path d=\"M62 66h8V34h8V66h8V34h8\"/>"
      },
      {
        "name": "Digital-to-Analog Converter",
        "svg": "<path d=\"M8 66h8V34h8V66h8V34h8\"/><path d=\"M62 50c8-18 16-18 24 0\"/>"
      },
      {
        "name": "Internet of Things Device",
        "svg": "<rect x=\"30\" y=\"30\" width=\"40\" height=\"44\" rx=\"6\"/><path d=\"M42 62h16\"/><path d=\"M38 46a16 16 0 0 1 24 0\"/><path d=\"M32 40a24 24 0 0 1 36 0\"/>"
      },
      {
        "name": "IoT Gateway",
        "svg": "<rect x=\"38\" y=\"38\" width=\"24\" height=\"24\" rx=\"3\"/><circle cx=\"16\" cy=\"30\" r=\"6\"/><circle cx=\"16\" cy=\"70\" r=\"6\"/><circle cx=\"84\" cy=\"50\" r=\"6\"/><path d=\"M22 30L38 44M22 70L38 56M62 50H78\"/><path d=\"M50 38V16M46 16h8\"/>"
      },
      {
        "name": "Smart Home Controller",
        "svg": "<path d=\"M14 48L50 18l36 30v38H14z\"/><circle cx=\"50\" cy=\"62\" r=\"10\"/><path d=\"M50 52v-2M50 72v2M40 62h2M58 62h2\"/>"
      }
    ]
  },
  "chemistry": {
    "Laboratory Glassware and Equipment": [
      {
        "name": "Beaker",
        "svg": "<path d=\"M24 14v72h52V14\"/><path d=\"M18 14h12M70 14h12\"/>"
      },
      {
        "name": "Graduated Beaker",
        "svg": "<path d=\"M24 14v72h52V14\"/><path d=\"M18 14h12M70 14h12\"/><path d=\"M24 34h10M24 50h6M24 66h10\"/>"
      },
      {
        "name": "Conical Flask (Erlenmeyer Flask)",
        "svg": "<path d=\"M40 12h20M42 12v26L18 80a6 6 0 0 0 5 8h54a6 6 0 0 0 5-8L58 38V12\"/>"
      },
      {
        "name": "Volumetric Flask",
        "svg": "<path d=\"M40 8h20M42 8v32M58 8v32\"/><path d=\"M42 40C26 46 18 58 18 72a22 22 0 0 0 44 0c0-14-8-26-20-32\"/>"
      },
      {
        "name": "Round Bottom Flask",
        "svg": "<rect x=\"38\" y=\"8\" width=\"24\" height=\"8\"/><path d=\"M42 16v22M58 16v22\"/><circle cx=\"50\" cy=\"66\" r=\"24\"/>"
      },
      {
        "name": "Flat Bottom Flask",
        "svg": "<path d=\"M42 10v24L24 80h52L58 34V10\"/><path d=\"M36 10h28\"/>"
      },
      {
        "name": "Florence Flask",
        "svg": "<path d=\"M44 8v40M56 8v40\"/><path d=\"M44 48C30 52 22 62 22 74a28 28 0 0 0 56 0c0-12-8-22-22-26\"/>"
      },
      {
        "name": "Distillation Flask",
        "svg": "<path d=\"M40 10h20M42 10v26L24 70a18 18 0 0 0 16 16h20a18 18 0 0 0 16-16L58 36V10\"/><path d=\"M58 30h22l8-8\"/>"
      },
      {
        "name": "Test Tube",
        "svg": "<path d=\"M38 10v64a8 8 0 0 0 16 0V10\"/><path d=\"M34 10h32\"/>"
      },
      {
        "name": "Boiling Tube",
        "svg": "<path d=\"M34 10v60a12 12 0 0 0 32 0V10\"/>"
      },
      {
        "name": "Test Tube Rack",
        "svg": "<path d=\"M10 50h80M10 82h80\"/><path d=\"M14 50v32M86 50v32\"/><path d=\"M30 50V22M50 50V22M70 50V22\"/><path d=\"M26 22h8M46 22h8M66 22h8\"/>"
      },
      {
        "name": "Measuring Cylinder",
        "svg": "<path d=\"M34 12v72h32V12\"/><path d=\"M30 12h40\"/><path d=\"M34 84h32\"/><path d=\"M34 26h10M34 40h6M34 54h10M34 68h6\"/>"
      },
      {
        "name": "Graduated Cylinder",
        "svg": "<path d=\"M38 12v64L30 86h40L62 76V12\"/><path d=\"M34 12h32\"/><path d=\"M38 26h8M38 40h8M38 54h8\"/>"
      },
      {
        "name": "Burette",
        "svg": "<path d=\"M38 8h24M42 8v64M58 8v64\"/><rect x=\"44\" y=\"76\" width=\"12\" height=\"6\"/><path d=\"M50 82v8\"/>"
      },
      {
        "name": "Pipette",
        "svg": "<path d=\"M42 8h16M44 8v50M56 8v50\"/><circle cx=\"50\" cy=\"70\" r=\"12\"/>"
      },
      {
        "name": "Volumetric Pipette",
        "svg": "<path d=\"M44 8h12M45 8v30M55 8v30\"/><path d=\"M44 38c-6 0-14 10-14 18s12 18 20 18 20-10 20-18-8-18-14-18z\"/><path d=\"M50 74v12\"/>"
      },
      {
        "name": "Pasteur Pipette",
        "svg": "<path d=\"M50 30v56\"/><path d=\"M42 30h16\"/><path d=\"M42 30c0-16 16-16 16 0\"/><path d=\"M47 86h6\"/>"
      },
      {
        "name": "Dropper",
        "svg": "<rect x=\"40\" y=\"10\" width=\"20\" height=\"24\" rx=\"8\"/><path d=\"M46 34v38M54 34v38\"/><path d=\"M50 84c-4 6-4 8 0 8s4-2 0-8z\"/>"
      },
      {
        "name": "Glass Funnel",
        "svg": "<path d=\"M16 16h68L58 52v34h-16V52z\"/>"
      },
      {
        "name": "Separating Funnel",
        "svg": "<path d=\"M18 14h64l-20 42v12H38V56z\"/><path d=\"M32 8h36\"/><path d=\"M50 68v20M44 88h12\"/>"
      },
      {
        "name": "Thistle Funnel",
        "svg": "<path d=\"M22 24h56C78 42 60 50 56 58v32H44V58C40 50 22 42 22 24z\"/>"
      },
      {
        "name": "Watch Glass",
        "svg": "<ellipse cx=\"50\" cy=\"50\" rx=\"40\" ry=\"18\"/><path d=\"M22 50a28 10 0 0 0 56 0\"/>"
      },
      {
        "name": "Petri Dish",
        "svg": "<ellipse cx=\"50\" cy=\"56\" rx=\"38\" ry=\"10\"/><path d=\"M12 56v6a38 10 0 0 0 76 0v-6\"/><path d=\"M12 56V40a38 10 0 0 1 76 0v16\"/>"
      },
      {
        "name": "Glass Stirring Rod",
        "svg": "<rect x=\"46\" y=\"8\" width=\"8\" height=\"84\" rx=\"4\"/>"
      },
      {
        "name": "Glass Condenser",
        "svg": "<rect x=\"36\" y=\"18\" width=\"28\" height=\"60\"/><path d=\"M44 18v60M56 18v60\"/><path d=\"M48 8v10M52 78v10\"/>"
      },
      {
        "name": "Reagent Bottle",
        "svg": "<rect x=\"38\" y=\"8\" width=\"24\" height=\"10\" rx=\"2\"/><path d=\"M42 18v8C26 32 24 40 24 52v30a4 4 0 0 0 4 4h44a4 4 0 0 0 4-4V52c0-12-2-20-18-26v-8\"/><rect x=\"32\" y=\"50\" width=\"36\" height=\"22\"/>"
      },
      {
        "name": "Wash Bottle",
        "svg": "<path d=\"M40 36c-6 0-10 4-10 10v34a6 6 0 0 0 6 6h28a6 6 0 0 0 6-6V46c0-6-4-10-10-10\"/><path d=\"M44 36v-8h12v8M50 28V16l16-6\"/>"
      },
      {
        "name": "Glass Vial",
        "svg": "<rect x=\"40\" y=\"26\" width=\"20\" height=\"10\" rx=\"2\"/><path d=\"M42 36v40a8 8 0 0 0 16 0V36\"/>"
      },
      {
        "name": "Crucible",
        "svg": "<path d=\"M18 40h64l-8 40H26z\"/><path d=\"M18 40a32 6 0 0 1 64 0\"/>"
      },
      {
        "name": "Evaporating Dish",
        "svg": "<path d=\"M16 40h68c0 20-14 34-34 34S16 60 16 40z\"/><path d=\"M16 40c0-6 10-10 34-10s34 4 34 10\"/>"
      }
    ],
    "Laboratory and Measuring Instruments": [
      {
        "name": "Analytical Balance",
        "svg": "<path d=\"M14 34h72\"/><path d=\"M50 14v20\"/><path d=\"M50 14h-8M50 14h8\"/><path d=\"M26 34L16 56h20z\"/><path d=\"M74 34L64 56h20z\"/><path d=\"M28 72h44v8H28z\"/>"
      },
      {
        "name": "Digital Laboratory Balance",
        "svg": "<rect x=\"18\" y=\"20\" width=\"64\" height=\"18\" rx=\"3\"/><rect x=\"30\" y=\"26\" width=\"18\" height=\"6\"/><path d=\"M18 38h64v40H18z\"/><path d=\"M34 58h32\"/><path d=\"M50 38v-4\"/>"
      },
      {
        "name": "Triple Beam Balance",
        "svg": "<path d=\"M14 36h72\"/><path d=\"M50 22v14\"/><path d=\"M34 14h32\"/><path d=\"M28 36L18 56h20zM72 36L62 56h20z\"/><path d=\"M36 88h28M50 36v52\"/><path d=\"M42 36v10M58 36v6\"/>"
      },
      {
        "name": "pH Meter",
        "svg": "<rect x=\"16\" y=\"30\" width=\"68\" height=\"40\" rx=\"4\"/><rect x=\"26\" y=\"38\" width=\"48\" height=\"16\"/><path d=\"M34 46h4M44 46h4M54 46h4M64 46h4\"/><path d=\"M50 70v20\"/>"
      },
      {
        "name": "pH Electrode",
        "svg": "<path d=\"M42 10h16v56a8 8 0 0 1-16 0z\"/><path d=\"M42 30h16\"/><path d=\"M50 74v10\"/><circle cx=\"50\" cy=\"86\" r=\"4\"/><path d=\"M42 10v-0\"/>"
      },
      {
        "name": "Conductivity Meter",
        "svg": "<rect x=\"16\" y=\"30\" width=\"68\" height=\"40\" rx=\"4\"/><rect x=\"26\" y=\"38\" width=\"48\" height=\"16\"/><path d=\"M30 46h10l4-4 4 8 4-8 4 4h10\"/><path d=\"M50 70v20\"/>"
      },
      {
        "name": "Digital Thermometer",
        "svg": "<rect x=\"30\" y=\"10\" width=\"40\" height=\"30\" rx=\"3\"/><rect x=\"38\" y=\"18\" width=\"24\" height=\"14\"/><path d=\"M50 40v34a10 10 0 1 1-6 0\"/><path d=\"M40 70h8\"/>"
      },
      {
        "name": "Laboratory Thermometer",
        "svg": "<path d=\"M42 8h16v64a12 12 0 1 1-16 0z\"/><path d=\"M42 8h0\"/><path d=\"M50 62V22\"/><path d=\"M58 20h6M58 30h4M58 40h6M58 50h4\"/><circle cx=\"50\" cy=\"78\" r=\"6\"/>"
      },
      {
        "name": "Hydrometer",
        "svg": "<path d=\"M42 10h16\"/><path d=\"M50 10v30\"/><path d=\"M42 40h16v10l-6 26h-4l-6-26z\"/><path d=\"M44 52h12\"/><path d=\"M44 60h12\" stroke-dasharray=\"2 3\"/>"
      },
      {
        "name": "Barometer",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><circle cx=\"50\" cy=\"50\" r=\"28\" stroke-dasharray=\"3 5\"/><path d=\"M50 50L70 34\"/><circle cx=\"50\" cy=\"50\" r=\"4\"/><path d=\"M28 66A28 28 0 0 1 36 30\"/>"
      },
      {
        "name": "Hygrometer",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><path d=\"M50 50L64 40\"/><path d=\"M50 14v8M86 50h-8M14 50h8\"/><path d=\"M42 66c0-6 2-8 8-8s8 2 8 8\"/>"
      },
      {
        "name": "Stopwatch",
        "svg": "<circle cx=\"50\" cy=\"56\" r=\"30\"/><path d=\"M50 56V38\"/><path d=\"M50 56l12 6\"/><path d=\"M42 10h16M50 10v16\"/><path d=\"M76 30l6-6\"/>"
      },
      {
        "name": "Spectrophotometer",
        "svg": "<rect x=\"12\" y=\"50\" width=\"76\" height=\"30\" rx=\"3\"/><path d=\"M28 50V34h44v16\"/><path d=\"M50 34V14\"/><path d=\"M40 14h20\"/><path d=\"M26 62h10M60 62h14\"/>"
      },
      {
        "name": "Colorimeter",
        "svg": "<rect x=\"20\" y=\"30\" width=\"60\" height=\"44\" rx=\"3\"/><path d=\"M34 30V16h32v14\"/><path d=\"M28 52h8M64 52h8\"/><path d=\"M42 74h16\"/><path d=\"M50 74v12\"/>"
      },
      {
        "name": "UV-Visible Spectrometer",
        "svg": "<rect x=\"12\" y=\"48\" width=\"76\" height=\"32\" rx=\"3\"/><path d=\"M26 48V30h48v18\"/><path d=\"M50 30V12\"/><path d=\"M26 64h12M62 64h12\"/><path d=\"M34 22c6 0 8 4 16 4s10-4 16-4\"/>"
      },
      {
        "name": "Infrared Spectrometer",
        "svg": "<rect x=\"12\" y=\"48\" width=\"76\" height=\"32\" rx=\"3\"/><path d=\"M26 48V30h48v18\"/><path d=\"M26 64h12M62 64h12\"/><path d=\"M26 22c8-8 14 8 22 0s14 8 26 0\" stroke-dasharray=\"3 3\"/>"
      },
      {
        "name": "Chromatography Instrument",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"72\" rx=\"4\"/><path d=\"M12 30h76\"/><path d=\"M24 70L36 46L48 60L60 40L76 70\"/><path d=\"M24 80h52\"/>"
      },
      {
        "name": "Gas Chromatograph",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"72\" rx=\"4\"/><path d=\"M12 30h76\"/><path d=\"M26 66h10v-14h10v20h10v-26h10v32\"/><path d=\"M24 80h52\"/>"
      },
      {
        "name": "HPLC Instrument",
        "svg": "<rect x=\"12\" y=\"14\" width=\"76\" height=\"72\" rx=\"4\"/><path d=\"M12 30h76\"/><path d=\"M24 40h52M24 52h52M24 64h52\" stroke-dasharray=\"6 4\"/><circle cx=\"72\" cy=\"22\" r=\"2\"/>"
      },
      {
        "name": "Centrifuge",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"36\"/><circle cx=\"50\" cy=\"50\" r=\"6\"/><path d=\"M50 50L30 30M50 50L70 30M50 50L30 70M50 50L70 70\"/><circle cx=\"30\" cy=\"30\" r=\"0\"/><path d=\"M36 14h28\"/>"
      },
      {
        "name": "Magnetic Stirrer",
        "svg": "<rect x=\"12\" y=\"66\" width=\"76\" height=\"20\" rx=\"3\"/><circle cx=\"50\" cy=\"66\" r=\"3\"/><path d=\"M26 52a24 24 0 0 0 48 0\"/><path d=\"M50 50v4\"/><path d=\"M26 32h48\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Hot Plate",
        "svg": "<rect x=\"12\" y=\"62\" width=\"76\" height=\"22\" rx=\"3\"/><path d=\"M22 52a8 8 0 0 1 16 0M42 46a8 8 0 0 1 16 0M62 52a8 8 0 0 1 16 0\"/><path d=\"M26 42c-2-4 2-6 0-10M50 36c-2-4 2-6 0-10M74 42c-2-4 2-6 0-10\"/>"
      },
      {
        "name": "Heating Mantle",
        "svg": "<path d=\"M22 46h56v8a28 28 0 0 1-56 0z\"/><path d=\"M28 46V30a22 22 0 0 1 44 0v16\"/><path d=\"M50 16V8\"/><path d=\"M34 62h32\"/>"
      },
      {
        "name": "Laboratory Oven",
        "svg": "<rect x=\"12\" y=\"12\" width=\"76\" height=\"76\" rx=\"4\"/><rect x=\"22\" y=\"24\" width=\"56\" height=\"44\" rx=\"2\"/><path d=\"M22 76h56\"/><path d=\"M30 34h16M30 44h16M30 54h16\"/><circle cx=\"72\" cy=\"30\" r=\"2\"/>"
      },
      {
        "name": "Muffle Furnace",
        "svg": "<rect x=\"12\" y=\"20\" width=\"76\" height=\"60\" rx=\"6\"/><path d=\"M26 34h48v32H26z\"/><path d=\"M26 80h48\"/><path d=\"M26 50c4-6 8 6 12 0s8 6 12 0 8 6 12 0\"/>"
      },
      {
        "name": "Water Bath",
        "svg": "<path d=\"M12 40h76v38a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6z\"/><path d=\"M12 40c6-4 6-8 0-12\"/><path d=\"M26 60c4-4 8 4 12 0s8 4 12 0 8 4 12 0\"/><path d=\"M26 72c4-4 8 4 12 0s8 4 12 0 8 4 12 0\"/>"
      },
      {
        "name": "Autoclave",
        "svg": "<rect x=\"10\" y=\"26\" width=\"80\" height=\"48\" rx=\"24\"/><path d=\"M26 26V16h48v10\"/><circle cx=\"72\" cy=\"50\" r=\"6\"/><path d=\"M26 74v8M74 74v8\"/>"
      },
      {
        "name": "Fume Hood",
        "svg": "<rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" rx=\"3\"/><path d=\"M10 24h80\"/><rect x=\"22\" y=\"34\" width=\"56\" height=\"40\"/><path d=\"M22 54h56\"/><path d=\"M36 60v-6M50 60v-6M64 60v-6\"/>"
      },
      {
        "name": "Laboratory Refrigerator",
        "svg": "<rect x=\"24\" y=\"8\" width=\"52\" height=\"84\" rx=\"4\"/><path d=\"M24 40h52\"/><path d=\"M34 22v8M34 50v14\"/><path d=\"M34 66v4\"/>"
      },
      {
        "name": "Laboratory Freezer",
        "svg": "<rect x=\"24\" y=\"8\" width=\"52\" height=\"84\" rx=\"4\"/><path d=\"M24 40h52\"/><path d=\"M50 16v16M42 22l8 4 8-4M42 26l8-4 8 4\"/><path d=\"M34 58v14\"/>"
      }
    ],
    "Heating Cooling and Separation Apparatus": [
      {
        "name": "Bunsen Burner",
        "svg": "<path d=\"M36 90h28\"/><path d=\"M50 90V58\"/><rect x=\"42\" y=\"36\" width=\"16\" height=\"22\"/><path d=\"M42 36V26h16v10\"/><path d=\"M50 26c-6-6-4-12 0-16 4 4 6 10 0 16\"/><path d=\"M42 80h16\"/>"
      },
      {
        "name": "Alcohol Burner",
        "svg": "<path d=\"M30 90h40\"/><path d=\"M34 90V70h32v20\"/><path d=\"M34 70h32\"/><path d=\"M50 70V50\"/><path d=\"M50 50c-6-6-4-12 0-16 4 4 6 10 0 16\"/><path d=\"M42 20v10h16V20\"/>"
      },
      {
        "name": "Laboratory Gas Burner",
        "svg": "<path d=\"M30 90h40\"/><path d=\"M50 90V60\"/><rect x=\"40\" y=\"46\" width=\"20\" height=\"14\"/><path d=\"M50 46c-8-8-4-16 0-22 4 6 8 14 0 22\"/><path d=\"M36 60h28\"/>"
      },
      {
        "name": "Tripod Stand",
        "svg": "<path d=\"M14 36h72\"/><path d=\"M50 36V14\"/><path d=\"M50 36L24 90M50 36L76 90M50 36v54\"/><path d=\"M50 36l0 0\"/><path d=\"M34 60h32\"/>"
      },
      {
        "name": "Wire Gauze",
        "svg": "<rect x=\"16\" y=\"22\" width=\"68\" height=\"56\"/><path d=\"M16 36h68M16 50h68M16 64h68M30 22v56M44 22v56M58 22v56M72 22v56\"/>"
      },
      {
        "name": "Retort Stand",
        "svg": "<path d=\"M30 90h40\"/><path d=\"M50 90V12\"/><path d=\"M50 26H76M50 26h-6\"/><rect x=\"66\" y=\"26\" width=\"0\" height=\"0\"/><path d=\"M40 40h22v12H40z\"/><path d=\"M62 32v12\"/>"
      },
      {
        "name": "Clamp Holder",
        "svg": "<path d=\"M50 90V20\"/><path d=\"M50 20H26v10\"/><path d=\"M26 30h6\"/><path d=\"M50 40h18v10\"/><path d=\"M68 50l-6 6\"/><path d=\"M36 90h28\"/>"
      },
      {
        "name": "Test Tube Holder",
        "svg": "<path d=\"M16 50h30\"/><path d=\"M46 40h30v20H46\"/><path d=\"M76 40l8 10-8 10\"/><path d=\"M26 42v16M34 42v16\"/>"
      },
      {
        "name": "Crucible Tongs",
        "svg": "<path d=\"M30 14L70 84\"/><path d=\"M40 14L80 84\"/><path d=\"M22 30L38 14M78 84L62 90\"/><path d=\"M52 82l8 8\"/>"
      },
      {
        "name": "Laboratory Tongs",
        "svg": "<path d=\"M34 12L54 74\"/><path d=\"M48 12L66 74\"/><path d=\"M26 22h14M56 74h14\"/><path d=\"M54 74c4 6 10 8 14 4\"/><circle cx=\"40\" cy=\"20\" r=\"0\"/>"
      },
      {
        "name": "Condenser",
        "svg": "<rect x=\"30\" y=\"30\" width=\"40\" height=\"40\"/><path d=\"M42 30V12M58 30V12M42 70v18M58 70v18\"/><path d=\"M36 42h28M36 58h28\"/>"
      },
      {
        "name": "Liebig Condenser",
        "svg": "<rect x=\"36\" y=\"30\" width=\"28\" height=\"44\" rx=\"3\"/><path d=\"M44 30V16M56 30V16M44 74v12M56 74v12\"/><path d=\"M50 30V74\"/><path d=\"M30 46h-10M70 46h10\"/>"
      },
      {
        "name": "Graham Condenser",
        "svg": "<rect x=\"36\" y=\"30\" width=\"28\" height=\"44\" rx=\"3\"/><path d=\"M42 30V16M58 30V16M42 74v12M58 74v12\"/><path d=\"M42 40c4 4 8-4 8 4s4-4 8 4\"/><path d=\"M42 56c4 4 8-4 8 4s4-4 8 4\"/>"
      },
      {
        "name": "Reflux Apparatus",
        "svg": "<path d=\"M30 90h40\"/><path d=\"M42 84V66c0-14 0-14 0-26h16c0 12 0 12 0 26v18\"/><path d=\"M42 40h16\"/><path d=\"M50 14v12M46 14h8\"/><path d=\"M26 78h10M64 78h10\"/><path d=\"M42 76h16\"/>"
      },
      {
        "name": "Distillation Apparatus",
        "svg": "<path d=\"M16 84h30l-8-24H24z\"/><path d=\"M28 60V36h14v24\"/><path d=\"M42 42h20l16-8\"/><path d=\"M62 34h18\"/><path d=\"M76 34v40\"/><path d=\"M68 74h16\"/>"
      },
      {
        "name": "Fractional Distillation Column",
        "svg": "<rect x=\"40\" y=\"10\" width=\"20\" height=\"78\" rx=\"3\"/><path d=\"M40 24h20M40 38h20M40 52h20M40 66h20\"/><path d=\"M50 10V0\"/><path d=\"M60 40h18\"/>"
      },
      {
        "name": "Simple Distillation Setup",
        "svg": "<path d=\"M14 84h30l-8-24H22z\"/><path d=\"M26 60V36h14v24\"/><path d=\"M40 42h18l12-8\"/><path d=\"M70 34h16\"/><path d=\"M80 34v46\"/><path d=\"M72 80h16\"/>"
      },
      {
        "name": "Vacuum Distillation Setup",
        "svg": "<path d=\"M14 84h30l-8-24H22z\"/><path d=\"M26 60V36h14v24\"/><path d=\"M40 42h18l12-8\"/><path d=\"M70 34h16\"/><path d=\"M80 34v46\"/><path d=\"M72 80h16\"/><path d=\"M84 26h-10\"/><path d=\"M88 14v4\"/>"
      },
      {
        "name": "Rotary Evaporator",
        "svg": "<rect x=\"40\" y=\"10\" width=\"20\" height=\"36\" rx=\"2\"/><path d=\"M50 46v10\"/><ellipse cx=\"50\" cy=\"66\" rx=\"14\" ry=\"14\"/><path d=\"M36 66h28\"/><path d=\"M30 88h40\"/>"
      },
      {
        "name": "Soxhlet Extractor",
        "svg": "<rect x=\"36\" y=\"30\" width=\"28\" height=\"36\" rx=\"2\"/><path d=\"M50 30V12\"/><path d=\"M42 12h16\"/><path d=\"M36 42h28\"/><path d=\"M50 66v12\"/><path d=\"M40 78h20l-6 12h-8z\"/><path d=\"M48 12V24\"/><path d=\"M30 36h6M64 36h6\"/>"
      },
      {
        "name": "Filtration Apparatus",
        "svg": "<path d=\"M30 20h40l-6 16H36z\"/><path d=\"M36 36L50 66L64 36\"/><path d=\"M50 66v16\"/><path d=\"M40 82h20\"/><path d=\"M42 24h16\"/>"
      },
      {
        "name": "Vacuum Filtration Apparatus",
        "svg": "<path d=\"M26 20h48l-8 20H34z\"/><path d=\"M34 40L50 66L66 40\"/><path d=\"M50 66v10\"/><path d=\"M26 82h48\"/><path d=\"M76 50h12v14\"/><path d=\"M80 64l4 14\"/>"
      },
      {
        "name": "Buchner Funnel",
        "svg": "<path d=\"M20 22h60l-14 30H34z\"/><path d=\"M34 52h32\"/><path d=\"M50 52v20\"/><path d=\"M42 72h16\"/><path d=\"M26 30h48\" stroke-dasharray=\"2 4\"/>"
      },
      {
        "name": "Filter Paper",
        "svg": "<path d=\"M16 16h68L50 86z\"/><path d=\"M26 30h48\"/>"
      },
      {
        "name": "Separatory Funnel Setup",
        "svg": "<path d=\"M26 14h48l-18 34v14H44V48z\"/><path d=\"M30 8h40\"/><path d=\"M50 62v22M42 88h16\"/><path d=\"M14 40h10M76 40h10\"/><path d=\"M14 28h10M76 28h10\"/>"
      },
      {
        "name": "Crystallization Dish",
        "svg": "<ellipse cx=\"50\" cy=\"50\" rx=\"38\" ry=\"14\"/><path d=\"M12 50v10a38 14 0 0 0 76 0V50\"/><path d=\"M36 46l8 4 6-6 8 6 6-4\"/>"
      },
      {
        "name": "Desiccator",
        "svg": "<ellipse cx=\"50\" cy=\"22\" rx=\"32\" ry=\"8\"/><path d=\"M18 22v38a32 14 0 0 0 64 0V22\"/><path d=\"M18 22c0 14 0 14 0 14\"/><path d=\"M34 52h32\"/><circle cx=\"50\" cy=\"16\" r=\"4\"/>"
      },
      {
        "name": "Drying Oven",
        "svg": "<rect x=\"12\" y=\"12\" width=\"76\" height=\"76\" rx=\"4\"/><rect x=\"22\" y=\"24\" width=\"56\" height=\"48\" rx=\"2\"/><path d=\"M22 80h56\"/><path d=\"M30 36h40M30 48h40M30 60h40\"/><circle cx=\"74\" cy=\"20\" r=\"2\"/>"
      },
      {
        "name": "Freeze Dryer",
        "svg": "<rect x=\"12\" y=\"12\" width=\"76\" height=\"76\" rx=\"4\"/><rect x=\"22\" y=\"22\" width=\"56\" height=\"40\" rx=\"2\"/><path d=\"M30 42l8-8M46 42l8-8M62 42l8-8\"/><path d=\"M50 62l-6 8M50 62l6 8M50 62v12\"/><path d=\"M22 76h56\"/>"
      },
      {
        "name": "Extraction Apparatus",
        "svg": "<rect x=\"30\" y=\"20\" width=\"40\" height=\"38\" rx=\"2\"/><path d=\"M50 20V10\"/><path d=\"M38 40h24\"/><path d=\"M50 58v10\"/><path d=\"M40 68h20l-6 14h-8z\"/><path d=\"M26 30h4M70 30h4\"/>"
      }
    ],
    "Atomic Structure and Molecular": [
      {
        "name": "Atomic Model",
        "svg": "<ellipse cx=\"50\" cy=\"50\" rx=\"42\" ry=\"16\"/><ellipse cx=\"50\" cy=\"50\" rx=\"42\" ry=\"16\" transform=\"rotate(60 50 50)\"/><ellipse cx=\"50\" cy=\"50\" rx=\"42\" ry=\"16\" transform=\"rotate(-60 50 50)\"/><circle cx=\"50\" cy=\"50\" r=\"6\"/>"
      },
      {
        "name": "Bohr Atomic Model",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"6\"/><circle cx=\"50\" cy=\"50\" r=\"18\"/><circle cx=\"50\" cy=\"50\" r=\"34\"/><circle cx=\"68\" cy=\"50\" r=\"3\"/><circle cx=\"50\" cy=\"16\" r=\"3\"/><circle cx=\"24\" cy=\"66\" r=\"3\"/>"
      },
      {
        "name": "Electron Shell Diagram",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"6\"/><circle cx=\"50\" cy=\"50\" r=\"18\" stroke-dasharray=\"4 4\"/><circle cx=\"50\" cy=\"50\" r=\"34\" stroke-dasharray=\"4 4\"/><circle cx=\"50\" cy=\"32\" r=\"3\"/><circle cx=\"66\" cy=\"66\" r=\"3\"/><circle cx=\"16\" cy=\"50\" r=\"3\"/>"
      },
      {
        "name": "Proton Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M50 36v28M36 50h28\"/>"
      },
      {
        "name": "Neutron Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M38 40v20M38 40l12 20M50 40v20\"/>"
      },
      {
        "name": "Electron Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"30\"/><path d=\"M38 38h24M38 50h18M38 62h24M38 38v24\"/>"
      },
      {
        "name": "Atomic Nucleus",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"10\"/><circle cx=\"44\" cy=\"46\" r=\"4\"/><circle cx=\"56\" cy=\"46\" r=\"4\"/><circle cx=\"50\" cy=\"56\" r=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"34\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Isotope Representation",
        "svg": "<path d=\"M14 50h72\"/><circle cx=\"30\" cy=\"50\" r=\"8\"/><circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"70\" cy=\"50\" r=\"8\"/><path d=\"M26 36v-10M74 36v-10M50 26v-6\"/>"
      },
      {
        "name": "Ion Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"30\" stroke-dasharray=\"4 4\"/><path d=\"M76 24h10M81 19v10\"/>"
      },
      {
        "name": "Cation Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M42 50h16M50 42v16\"/><path d=\"M76 20v-0\"/><path d=\"M80 14h10M85 9v10\"/>"
      },
      {
        "name": "Anion Symbol",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><path d=\"M42 50h16\"/><path d=\"M80 14h10\"/>"
      },
      {
        "name": "Chemical Bond",
        "svg": "<circle cx=\"28\" cy=\"50\" r=\"12\"/><circle cx=\"72\" cy=\"50\" r=\"12\"/><path d=\"M40 50h20\"/>"
      },
      {
        "name": "Single Covalent Bond",
        "svg": "<circle cx=\"24\" cy=\"50\" r=\"10\"/><circle cx=\"76\" cy=\"50\" r=\"10\"/><path d=\"M34 50h32\"/>"
      },
      {
        "name": "Double Covalent Bond",
        "svg": "<circle cx=\"24\" cy=\"50\" r=\"10\"/><circle cx=\"76\" cy=\"50\" r=\"10\"/><path d=\"M34 46h32M34 54h32\"/>"
      },
      {
        "name": "Triple Covalent Bond",
        "svg": "<circle cx=\"24\" cy=\"50\" r=\"10\"/><circle cx=\"76\" cy=\"50\" r=\"10\"/><path d=\"M34 44h32M34 50h32M34 56h32\"/>"
      },
      {
        "name": "Ionic Bond",
        "svg": "<circle cx=\"24\" cy=\"50\" r=\"12\"/><circle cx=\"76\" cy=\"50\" r=\"12\"/><path d=\"M36 50h28\" stroke-dasharray=\"3 4\"/><path d=\"M50 40v0\"/><path d=\"M48 38l4 4-4 4\"/>"
      },
      {
        "name": "Metallic Bond",
        "svg": "<circle cx=\"24\" cy=\"30\" r=\"8\"/><circle cx=\"50\" cy=\"30\" r=\"8\"/><circle cx=\"76\" cy=\"30\" r=\"8\"/><circle cx=\"24\" cy=\"66\" r=\"8\"/><circle cx=\"50\" cy=\"66\" r=\"8\"/><circle cx=\"76\" cy=\"66\" r=\"8\"/><path d=\"M14 46h72M14 54h72\" stroke-dasharray=\"2 4\"/>"
      },
      {
        "name": "Hydrogen Bond",
        "svg": "<circle cx=\"24\" cy=\"50\" r=\"10\"/><circle cx=\"76\" cy=\"50\" r=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/><path d=\"M34 50h10M56 50h10\" stroke-dasharray=\"3 4\"/>"
      },
      {
        "name": "Polar Molecule",
        "svg": "<circle cx=\"34\" cy=\"50\" r=\"12\"/><circle cx=\"66\" cy=\"50\" r=\"12\"/><path d=\"M46 50h8\"/><path d=\"M14 22l-6 0M86 22h6\"/><path d=\"M18 12h-0\"/><path d=\"M24 22h4M76 22h4\"/><path d=\"M22 14l0 0\"/><path d=\"M14 10v8M86 10v8\"/>"
      },
      {
        "name": "Nonpolar Molecule",
        "svg": "<circle cx=\"34\" cy=\"50\" r=\"12\"/><circle cx=\"66\" cy=\"50\" r=\"12\"/><path d=\"M46 50h8\"/><path d=\"M22 20h56\" stroke-dasharray=\"3 4\"/>"
      },
      {
        "name": "Molecular Orbital",
        "svg": "<ellipse cx=\"50\" cy=\"50\" rx=\"36\" ry=\"14\"/><ellipse cx=\"50\" cy=\"50\" rx=\"10\" ry=\"30\"/><path d=\"M14 50h72\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Electron Pair",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"28\"/><circle cx=\"40\" cy=\"44\" r=\"3\"/><circle cx=\"60\" cy=\"56\" r=\"3\"/><path d=\"M50 22v12\" stroke-dasharray=\"0\"/><path d=\"M50 68v-0\"/>"
      },
      {
        "name": "Lewis Dot Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"12\"/><circle cx=\"50\" cy=\"20\" r=\"3\"/><circle cx=\"50\" cy=\"80\" r=\"3\"/><circle cx=\"20\" cy=\"50\" r=\"3\"/><circle cx=\"80\" cy=\"50\" r=\"3\"/><path d=\"M50 14v0\"/>"
      },
      {
        "name": "Molecular Geometry",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"50\" cy=\"14\" r=\"6\"/><circle cx=\"82\" cy=\"70\" r=\"6\"/><circle cx=\"18\" cy=\"70\" r=\"6\"/><path d=\"M50 42V20M54 46L78 66M46 46L22 66\"/>"
      },
      {
        "name": "Linear Molecular Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"10\"/><circle cx=\"16\" cy=\"50\" r=\"8\"/><circle cx=\"84\" cy=\"50\" r=\"8\"/><path d=\"M24 50h16M60 50h16\"/>"
      },
      {
        "name": "Bent Molecular Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"10\"/><circle cx=\"20\" cy=\"30\" r=\"8\"/><circle cx=\"80\" cy=\"30\" r=\"8\"/><path d=\"M42 46L26 36M58 46L74 36\"/>"
      },
      {
        "name": "Trigonal Planar Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"10\"/><circle cx=\"50\" cy=\"14\" r=\"7\"/><circle cx=\"18\" cy=\"72\" r=\"7\"/><circle cx=\"82\" cy=\"72\" r=\"7\"/><path d=\"M50 40V21M45 55L24 68M55 55L76 68\"/>"
      },
      {
        "name": "Tetrahedral Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"50\" cy=\"16\" r=\"6\"/><circle cx=\"18\" cy=\"70\" r=\"6\"/><circle cx=\"82\" cy=\"70\" r=\"6\"/><circle cx=\"50\" cy=\"84\" r=\"6\" stroke-dasharray=\"3 3\"/><path d=\"M50 42V22M45 54L22 66M55 54L78 66M50 58V78\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Octahedral Structure",
        "svg": "<circle cx=\"50\" cy=\"50\" r=\"8\"/><circle cx=\"50\" cy=\"16\" r=\"6\"/><circle cx=\"50\" cy=\"84\" r=\"6\"/><circle cx=\"16\" cy=\"50\" r=\"6\"/><circle cx=\"84\" cy=\"50\" r=\"6\"/><path d=\"M50 42V22M50 58V78M42 50H22M58 50H78\"/><path d=\"M28 28L72 72M72 28L28 72\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Ball and Stick Molecular Model",
        "svg": "<circle cx=\"50\" cy=\"26\" r=\"10\"/><circle cx=\"26\" cy=\"72\" r=\"10\"/><circle cx=\"74\" cy=\"72\" r=\"10\"/><path d=\"M45 33L31 64M55 33L69 64M36 72h28\"/>"
      }
    ],
    "Organic Structures and Compounds": [
      {
        "name": "Methane Molecule",
        "svg": "<path d=\"M50.0 50.0L50.0 16.0 M50.0 50.0L50.0 84.0 M50.0 50.0L16.0 50.0 M50.0 50.0L84.0 50.0\"/><circle cx=\"50\" cy=\"16\" r=\"4\"/><circle cx=\"50\" cy=\"84\" r=\"4\"/><circle cx=\"16\" cy=\"50\" r=\"4\"/><circle cx=\"84\" cy=\"50\" r=\"4\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/>"
      },
      {
        "name": "Ethane Molecule",
        "svg": "<path d=\"M34.0 50.0L66.0 50.0 M34.0 50.0L14.0 32.0 M34.0 50.0L14.0 68.0 M66.0 50.0L86.0 32.0 M66.0 50.0L86.0 68.0\"/>"
      },
      {
        "name": "Propane Molecule",
        "svg": "<path d=\"M14 62L34 38L54 62 M54.0 62.0L74.0 38.0 M54.0 62.0L74.0 80.0\"/>"
      },
      {
        "name": "Butane Molecule",
        "svg": "<path d=\"M12 60L30 40L48 60L66 40 M66.0 40.0L86.0 60.0\"/>"
      },
      {
        "name": "Ethene Molecule",
        "svg": "<path d=\"M34.0 53.0L66.0 53.0 M34.0 47.0L66.0 47.0 M34.0 50.0L24.0 34.0 M34.0 50.0L24.0 66.0 M66.0 50.0L76.0 34.0 M66.0 50.0L76.0 66.0\"/>"
      },
      {
        "name": "Ethyne Molecule",
        "svg": "<path d=\"M34.0 50.0L66.0 50.0 M34.0 56.0L66.0 56.0 M34.0 44.0L66.0 44.0 M34.0 50.0L14.0 50.0 M66.0 50.0L86.0 50.0\"/><circle cx=\"14\" cy=\"50\" r=\"4\"/><circle cx=\"86\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Benzene Ring",
        "svg": "<path d=\"M50.0 78.0L25.8 64.0L25.8 36.0L50.0 22.0L74.2 36.0L74.2 64.0Z\"/><circle cx=\"50\" cy=\"50\" r=\"16\"/>"
      },
      {
        "name": "Cyclohexane Ring",
        "svg": "<path d=\"M50.0 78.0L25.8 64.0L25.8 36.0L50.0 22.0L74.2 36.0L74.2 64.0Z\"/>"
      },
      {
        "name": "Toluene Structure",
        "svg": "<path d=\"M42.0 72.0L22.9 61.0L22.9 39.0L42.0 28.0L61.1 39.0L61.1 61.0Z M64.0 50.0L84.0 50.0\"/><circle cx=\"86\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Phenol Structure",
        "svg": "<path d=\"M40.0 72.0L20.9 61.0L20.9 39.0L40.0 28.0L59.1 39.0L59.1 61.0Z M62.0 50.0L80.0 36.0\"/><circle cx=\"84\" cy=\"32\" r=\"5\"/>"
      },
      {
        "name": "Ethanol Structure",
        "svg": "<path d=\"M14 62L34 40L54 62 M54.0 62.0L72.0 40.0\"/><circle cx=\"74\" cy=\"40\" r=\"5\"/>"
      },
      {
        "name": "Methanol Structure",
        "svg": "<path d=\"M20.0 62.0L46.0 42.0 M46.0 42.0L70.0 30.0\"/><circle cx=\"46\" cy=\"42\" r=\"5\"/>"
      },
      {
        "name": "Acetic Acid Structure",
        "svg": "<path d=\"M42.0 50.0L18.0 64.0 M42.0 50.0L68.0 64.0 M68.0 64.0L88.0 50.0\"/><path d=\"M45.0 50.0L45.0 22.0 M39.0 50.0L39.0 22.0\"/><circle cx=\"88\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Formic Acid Structure",
        "svg": "<path d=\"M42.0 50.0L16.0 50.0 M42.0 50.0L70.0 50.0 M70.0 50.0L88.0 36.0\"/><path d=\"M45.0 50.0L45.0 22.0 M39.0 50.0L39.0 22.0\"/><circle cx=\"88\" cy=\"36\" r=\"4\"/>"
      },
      {
        "name": "Formaldehyde Structure",
        "svg": "<path d=\"M40.0 53.0L76.0 53.0 M40.0 47.0L76.0 47.0 M40.0 50.0L22.0 32.0 M40.0 50.0L22.0 68.0\"/>"
      },
      {
        "name": "Acetone Structure",
        "svg": "<path d=\"M53.0 50.0L53.0 22.0 M47.0 50.0L47.0 22.0 M50.0 50.0L20.0 66.0 M50.0 50.0L80.0 66.0\"/>"
      },
      {
        "name": "Glucose Structure",
        "svg": "<path d=\"M46.0 74.0L26.9 63.0L26.9 41.0L46.0 30.0L65.1 41.0L65.1 63.0Z M68.0 52.0L86.0 38.0 M46.0 30.0L46.0 12.0 M68.0 62.0L86.0 70.0\"/><circle cx=\"86\" cy=\"38\" r=\"4\"/><circle cx=\"46\" cy=\"12\" r=\"4\"/><circle cx=\"86\" cy=\"70\" r=\"4\"/>"
      },
      {
        "name": "Fructose Structure",
        "svg": "<path d=\"M50.0 78.0L27.2 61.4L35.9 34.6L64.1 34.6L72.8 61.4Z M50.0 30.0L50.0 10.0 M74.0 44.0L90.0 36.0 M35.0 78.0L24.0 90.0\"/><circle cx=\"50\" cy=\"10\" r=\"4\"/>"
      },
      {
        "name": "Sucrose Structure",
        "svg": "<path d=\"M32.0 74.0L16.4 65.0L16.4 47.0L32.0 38.0L47.6 47.0L47.6 65.0Z M72.0 62.0L56.8 50.9L62.6 33.1L81.4 33.1L87.2 50.9Z M50.0 56.0L54.0 46.0\"/><circle cx=\"52\" cy=\"50\" r=\"4\"/>"
      },
      {
        "name": "Amino Acid Structure",
        "svg": "<path d=\"M50.0 50.0L24.0 36.0 M50.0 50.0L50.0 80.0 M50.0 50.0L72.0 36.0 M72.0 36.0L72.0 14.0\"/><path d=\"M72.0 36.0L72.0 14.0 M72.0 36.0L72.0 14.0\"/><circle cx=\"24\" cy=\"36\" r=\"5\"/><path d=\"M72.0 36.0L88.0 46.0\"/>"
      },
      {
        "name": "Protein Structure",
        "svg": "<path d=\"M12 50c10-18 20-18 26 0s16 18 26 0 16-18 24 0\"/>"
      },
      {
        "name": "Peptide Bond",
        "svg": "<path d=\"M12 60L30 40L50 60L70 40L88 60\"/><path d=\"M47.0 60.0L47.0 86.0 M53.0 60.0L53.0 86.0\"/><circle cx=\"30\" cy=\"40\" r=\"5\"/><circle cx=\"70\" cy=\"40\" r=\"5\"/>"
      },
      {
        "name": "Polymer Chain",
        "svg": "<path d=\"M22 46L38 58L54 46L70 58 M12.0 30.0L12.0 74.0 M12.0 30.0L16.0 30.0 M12.0 74.0L16.0 74.0 M88.0 30.0L88.0 74.0 M88.0 30.0L84.0 30.0 M88.0 74.0L84.0 74.0\"/>"
      },
      {
        "name": "Polyethylene Structure",
        "svg": "<path d=\"M22 46L38 58L54 46L70 58 M12.0 30.0L12.0 74.0 M12.0 30.0L16.0 30.0 M12.0 74.0L16.0 74.0 M88.0 30.0L88.0 74.0 M88.0 30.0L84.0 30.0 M88.0 74.0L84.0 74.0\"/>"
      },
      {
        "name": "Polypropylene Structure",
        "svg": "<path d=\"M22 46L38 58L54 46L70 58 M38.0 58.0L38.0 74.0 M70.0 58.0L70.0 74.0 M12.0 30.0L12.0 74.0 M12.0 30.0L16.0 30.0 M12.0 74.0L16.0 74.0 M88.0 30.0L88.0 74.0 M88.0 30.0L84.0 30.0 M88.0 74.0L84.0 74.0\"/>"
      },
      {
        "name": "PVC Polymer Structure",
        "svg": "<path d=\"M22 46L38 58L54 46L70 58 M38.0 58.0L38.0 74.0 M70.0 58.0L70.0 74.0 M12.0 30.0L12.0 74.0 M12.0 30.0L16.0 30.0 M12.0 74.0L16.0 74.0 M88.0 30.0L88.0 74.0 M88.0 30.0L84.0 30.0 M88.0 74.0L84.0 74.0\"/><circle cx=\"38\" cy=\"78\" r=\"4\"/><circle cx=\"70\" cy=\"78\" r=\"4\"/>"
      },
      {
        "name": "Nylon Polymer Structure",
        "svg": "<path d=\"M12 58L30 40L48 58L66 40L84 58 M48.0 58.0L48.0 84.0 M4.0 28.0L4.0 74.0 M4.0 28.0L8.0 28.0 M4.0 74.0L8.0 74.0 M94.0 28.0L94.0 74.0 M94.0 28.0L90.0 28.0 M94.0 74.0L90.0 74.0\"/><circle cx=\"30\" cy=\"40\" r=\"4\"/><circle cx=\"66\" cy=\"40\" r=\"4\"/>"
      },
      {
        "name": "Ester Functional Group",
        "svg": "<path d=\"M14.0 64.0L38.0 48.0 M62.0 48.0L86.0 64.0\"/><path d=\"M41.0 48.0L41.0 20.0 M35.0 48.0L35.0 20.0\"/><circle cx=\"62\" cy=\"48\" r=\"5\"/>"
      },
      {
        "name": "Aldehyde Functional Group",
        "svg": "<path d=\"M16.0 64.0L50.0 50.0 M50.0 50.0L80.0 64.0\"/><path d=\"M53.0 50.0L53.0 22.0 M47.0 50.0L47.0 22.0\"/><circle cx=\"80\" cy=\"64\" r=\"4\"/>"
      },
      {
        "name": "Ketone Functional Group",
        "svg": "<path d=\"M20.0 64.0L50.0 50.0 M50.0 50.0L80.0 64.0\"/><path d=\"M53.0 50.0L53.0 22.0 M47.0 50.0L47.0 22.0\"/>"
      },
      {
        "name": "Carboxylic Acid Functional Group",
        "svg": "<path d=\"M16.0 64.0L42.0 50.0 M42.0 50.0L68.0 50.0 M68.0 50.0L88.0 36.0\"/><path d=\"M45.0 50.0L45.0 22.0 M39.0 50.0L39.0 22.0\"/><circle cx=\"16\" cy=\"64\" r=\"5\"/><circle cx=\"88\" cy=\"36\" r=\"4\"/>"
      },
      {
        "name": "Alcohol Functional Group",
        "svg": "<path d=\"M16.0 64.0L50.0 40.0 M50.0 40.0L80.0 28.0\"/><circle cx=\"50\" cy=\"40\" r=\"5\"/><circle cx=\"80\" cy=\"28\" r=\"4\"/>"
      },
      {
        "name": "Amine Functional Group",
        "svg": "<path d=\"M18.0 66.0L50.0 50.0 M50.0 50.0L34.0 30.0 M50.0 50.0L66.0 30.0\"/><circle cx=\"50\" cy=\"50\" r=\"5\"/><circle cx=\"34\" cy=\"30\" r=\"4\"/><circle cx=\"66\" cy=\"30\" r=\"4\"/>"
      },
      {
        "name": "Ether Functional Group",
        "svg": "<path d=\"M16.0 64.0L44.0 50.0 M56.0 50.0L84.0 64.0\"/><circle cx=\"50\" cy=\"50\" r=\"6\"/>"
      },
      {
        "name": "Organic Reaction Mechanism",
        "svg": "<path d=\"M32 46Q50 14 68 46 M61 40L68 46L66 54\"/><circle cx=\"20\" cy=\"62\" r=\"8\"/><circle cx=\"80\" cy=\"62\" r=\"8\"/><path d=\"M50.0 66.0L50.0 84.0 M44 78L50 86L56 78\"/><circle cx=\"50\" cy=\"94\" r=\"6\"/>"
      }
    ],
    "Inorganic and Chemical Compounds": [
      {
        "name": "Water Molecule (H2O)",
        "svg": "<path d=\"M43.5 56.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M19.0 25.0V39.0M29.0 25.0V39.0M19.0 32.0H29.0 M71.0 25.0V39.0M81.0 25.0V39.0M71.0 32.0H81.0\"/><path d=\"M41.5 48.2L32.5 39.8 M58.5 48.2L67.5 39.8\"/>"
      },
      {
        "name": "Hydrogen Gas (H2)",
        "svg": "<path d=\"M29.0 43.0V57.0M39.0 43.0V57.0M29.0 50.0H39.0 M61.0 43.0V57.0M71.0 43.0V57.0M61.0 50.0H71.0\"/><path d=\"M42.5 50.0L57.5 50.0\"/>"
      },
      {
        "name": "Oxygen Gas (O2)",
        "svg": "<path d=\"M27.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M59.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M42.5 46.5L57.5 46.5 M42.5 53.5L57.5 53.5\"/>"
      },
      {
        "name": "Nitrogen Gas (N2)",
        "svg": "<path d=\"M29.0 57.0V43.0L39.0 57.0V43.0 M61.0 57.0V43.0L71.0 57.0V43.0\"/><path d=\"M42.5 45.5L57.5 45.5 M42.5 50.0L57.5 50.0 M42.5 54.5L57.5 54.5\"/>"
      },
      {
        "name": "Carbon Dioxide (CO2)",
        "svg": "<path d=\"M9.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M55.0 44.0A7.0 7.0 0 1 0 55.0 56.0 M77.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M24.5 46.5L41.5 46.5 M24.5 53.5L41.5 53.5 M58.5 46.5L75.5 46.5 M58.5 53.5L75.5 53.5\"/>"
      },
      {
        "name": "Carbon Monoxide (CO)",
        "svg": "<path d=\"M41.0 44.0A7.0 7.0 0 1 0 41.0 56.0 M59.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M44.5 45.5L57.5 45.5 M44.5 50.0L57.5 50.0 M44.5 54.5L57.5 54.5\"/>"
      },
      {
        "name": "Ammonia (NH3)",
        "svg": "<path d=\"M45.0 57.0V43.0L55.0 57.0V43.0 M45.0 11.0V25.0M55.0 11.0V25.0M45.0 18.0H55.0 M17.0 63.0V77.0M27.0 63.0V77.0M17.0 70.0H27.0 M73.0 63.0V77.0M83.0 63.0V77.0M73.0 70.0H83.0\"/><path d=\"M50.0 41.5L50.0 26.5 M41.5 56.1L30.5 63.9 M58.5 56.1L69.5 63.9\"/>"
      },
      {
        "name": "Methane (CH4)",
        "svg": "<path d=\"M55.0 44.0A7.0 7.0 0 1 0 55.0 56.0 M45.0 9.0V23.0M55.0 9.0V23.0M45.0 16.0H55.0 M11.0 43.0V57.0M21.0 43.0V57.0M11.0 50.0H21.0 M79.0 43.0V57.0M89.0 43.0V57.0M79.0 50.0H89.0 M45.0 77.0V91.0M55.0 77.0V91.0M45.0 84.0H55.0\"/><path d=\"M50.0 41.5L50.0 24.5 M41.5 50.0L24.5 50.0 M58.5 50.0L75.5 50.0 M50.0 58.5L50.0 75.5\"/>"
      },
      {
        "name": "Hydrochloric Acid (HCl)",
        "svg": "<path d=\"M25.0 43.0V57.0M35.0 43.0V57.0M25.0 50.0H35.0 M70.5 44.0A7.0 7.0 0 1 0 70.5 56.0 M76.5 43.0V57.0\"/><path d=\"M38.5 50.0L57.0 50.0\"/>"
      },
      {
        "name": "Sulfuric Acid (H2SO4)",
        "svg": "<path d=\"M55.0 40.0A5.0 4.0 0 1 0 45.0 44.0A5.0 4.0 0 0 1 55.0 51.0A5.0 4.0 0 1 1 45.0 52.0 M43.5 14.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M77.5 46.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M9.5 46.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M11.0 13.0V27.0M21.0 13.0V27.0M11.0 20.0H21.0 M43.5 80.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M46.5 37.5L46.5 22.5 M53.5 37.5L53.5 22.5 M58.5 42.5L75.5 42.5 M58.5 49.5L75.5 49.5 M41.5 46.0L24.5 46.0 M16.0 37.5L16.0 28.5 M50.0 54.5L50.0 71.5\"/>"
      },
      {
        "name": "Nitric Acid (HNO3)",
        "svg": "<path d=\"M45.0 53.0V39.0L55.0 53.0V39.0 M43.5 14.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M11.5 76.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M75.5 76.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M81.0 39.0V53.0M91.0 39.0V53.0M81.0 46.0H91.0\"/><path d=\"M46.5 37.5L46.5 22.5 M53.5 37.5L53.5 22.5 M41.5 54.0L26.5 68.0 M58.5 54.0L73.5 68.0 M83.1 67.5L84.9 54.5\"/>"
      },
      {
        "name": "Sodium Hydroxide (NaOH)",
        "svg": "<path d=\"M11.6 57.0V43.0L21.6 57.0V43.0 M23.1 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M30.1 49.0V56.0 M32.7 43.0H36.3M34.5 41.2V44.8 M56.6 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M70.2 43.0H73.8 M83.0 23.0V37.0M93.0 23.0V37.0M83.0 30.0H93.0\"/><path d=\"M75.3 41.5L79.5 37.7\"/>"
      },
      {
        "name": "Potassium Hydroxide (KOH)",
        "svg": "<path d=\"M14.1 43.0V57.0M24.1 43.0L15.1 50.0M15.1 50.0L24.1 57.0 M26.2 43.0H29.8M28.0 41.2V44.8 M56.6 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M70.2 43.0H73.8 M83.0 23.0V37.0M93.0 23.0V37.0M83.0 30.0H93.0\"/><path d=\"M75.3 41.5L79.5 37.7\"/>"
      },
      {
        "name": "Sodium Chloride (NaCl)",
        "svg": "<path d=\"M10.5 29.0V15.0L20.5 29.0V15.0 M22.0 24.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M29.0 21.0V28.0 M50.5 16.0A7.0 7.0 0 1 0 50.5 28.0 M56.5 15.0V29.0 M70.5 29.0V15.0L80.5 29.0V15.0 M82.0 24.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M89.0 21.0V28.0 M20.5 44.0A7.0 7.0 0 1 0 20.5 56.0 M26.5 43.0V57.0 M40.5 57.0V43.0L50.5 57.0V43.0 M52.0 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M59.0 49.0V56.0 M80.5 44.0A7.0 7.0 0 1 0 80.5 56.0 M86.5 43.0V57.0 M10.5 85.0V71.0L20.5 85.0V71.0 M22.0 80.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M29.0 77.0V84.0 M50.5 72.0A7.0 7.0 0 1 0 50.5 84.0 M56.5 71.0V85.0 M70.5 85.0V71.0L80.5 85.0V71.0 M82.0 80.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M89.0 77.0V84.0\"/><path d=\"M33.0 22.0L37.0 22.0 M63.0 22.0L67.0 22.0 M33.0 50.0L37.0 50.0 M63.0 50.0L67.0 50.0 M33.0 78.0L37.0 78.0 M63.0 78.0L67.0 78.0\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Calcium Carbonate (CaCO3)",
        "svg": "<path d=\"M18.5 44.0A7.0 7.0 0 1 0 18.5 56.0 M20.0 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M27.0 49.0V56.0 M65.0 44.0A7.0 7.0 0 1 0 65.0 56.0 M53.5 18.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M29.5 70.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M77.5 70.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M56.5 41.5L56.5 26.5 M63.5 41.5L63.5 26.5 M51.5 57.1L44.5 62.9 M68.5 57.1L75.5 62.9\"/>"
      },
      {
        "name": "Sodium Bicarbonate (NaHCO3)",
        "svg": "<path d=\"M1.6 57.0V43.0L11.6 57.0V43.0 M13.1 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M20.1 49.0V56.0 M22.7 43.0H26.3M24.5 41.2V44.8 M63.0 44.0A7.0 7.0 0 1 0 63.0 56.0 M51.5 18.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M27.5 70.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M73.5 70.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M83.0 83.0V97.0M93.0 83.0V97.0M83.0 90.0H93.0\"/><path d=\"M54.5 41.5L54.5 26.5 M61.5 41.5L61.5 26.5 M49.5 57.1L42.5 62.9 M66.5 57.7L71.5 62.3 M83.4 78.5L84.6 81.5\"/>"
      },
      {
        "name": "Calcium Hydroxide (Ca(OH)2)",
        "svg": "<path d=\"M50.5 44.0A7.0 7.0 0 1 0 50.5 56.0 M52.0 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M59.0 49.0V56.0 M11.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M75.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M9.0 17.0V31.0M19.0 17.0V31.0M9.0 24.0H19.0 M81.0 17.0V31.0M91.0 17.0V31.0M81.0 24.0H91.0\"/><path d=\"M16.7 41.5L15.3 32.5 M83.3 41.5L84.7 32.5\"/><path d=\"M37.0 50.0L26.5 50.0 M63.0 50.0L73.5 50.0\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Copper Sulfate (CuSO4)",
        "svg": "<path d=\"M11.6 44.0A7.0 7.0 0 1 0 11.6 56.0 M12.6 47.0V52.0A5.0 5.0 0 0 0 22.6 52.0M22.6 47.0V57.0 M22.7 43.0H26.3M24.5 41.2V44.8 M71.0 44.0A5.0 4.0 0 1 0 61.0 48.0A5.0 4.0 0 0 1 71.0 55.0A5.0 4.0 0 1 1 61.0 56.0 M59.5 16.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M33.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M85.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M59.5 84.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M62.5 41.5L62.5 24.5 M69.5 41.5L69.5 24.5 M57.5 50.0L48.5 50.0 M74.5 50.0L83.5 50.0 M69.5 58.5L69.5 75.5 M62.5 58.5L62.5 75.5\"/>"
      },
      {
        "name": "Potassium Permanganate (KMnO4)",
        "svg": "<path d=\"M4.1 43.0V57.0M14.1 43.0L5.1 50.0M5.1 50.0L14.1 57.0 M16.2 43.0H19.8M18.0 41.2V44.8 M50.5 57.0V43.0L57.5 53.0L64.5 43.0V57.0 M63.5 57.0V47.0M63.5 51.0A5.0 4.0 0 0 1 73.5 51.0V57.0 M55.5 16.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M29.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M81.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M55.5 84.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M58.5 41.5L58.5 24.5 M65.5 41.5L65.5 24.5 M49.0 50.0L44.5 50.0 M75.0 46.5L79.5 46.5 M75.0 53.5L79.5 53.5 M62.0 58.5L62.0 75.5\"/>"
      },
      {
        "name": "Sodium Carbonate (Na2CO3)",
        "svg": "<path d=\"M1.6 37.0V23.0L11.6 37.0V23.0 M13.1 32.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M20.1 29.0V36.0 M22.7 23.0H26.3M24.5 21.2V24.8 M1.6 77.0V63.0L11.6 77.0V63.0 M13.1 72.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M20.1 69.0V76.0 M22.7 63.0H26.3M24.5 61.2V64.8 M65.0 44.0A7.0 7.0 0 1 0 65.0 56.0 M53.5 16.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M29.5 66.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M77.5 66.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M56.5 41.5L56.5 24.5 M63.5 41.5L63.5 24.5 M51.5 55.7L44.5 60.3 M68.5 55.7L75.5 60.3\"/>"
      },
      {
        "name": "Hydrogen Peroxide (H2O2)",
        "svg": "<path d=\"M13.0 23.0V37.0M23.0 23.0V37.0M13.0 30.0H23.0 M31.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M55.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M77.0 63.0V77.0M87.0 63.0V77.0M77.0 70.0H87.0\"/><path d=\"M26.5 38.5L29.5 41.5 M46.5 50.0L53.5 50.0 M70.5 58.5L73.5 61.5\"/>"
      },
      {
        "name": "Calcium Oxide (CaO)",
        "svg": "<path d=\"M27.6 44.0A7.0 7.0 0 1 0 27.6 56.0 M29.1 52.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M36.1 49.0V56.0 M38.7 43.0H42.3M40.5 41.2V44.8 M60.6 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M74.2 43.0H77.8\"/><path d=\"M45.9 50.0L58.6 50.0\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Magnesium Oxide (MgO)",
        "svg": "<path d=\"M15.6 57.0V43.0L22.6 53.0L29.6 43.0V57.0 M30.1 49.0a3.5 3.5 0 1 0 7.0 0a3.5 3.5 0 1 0 -7.0 0M37.1 46.0V55.0A4.0 4.0 0 0 1 29.6 56.0 M38.7 43.0H42.3M40.5 41.2V44.8 M60.6 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M74.2 43.0H77.8\"/><path d=\"M45.9 50.0L58.6 50.0\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Iron Oxide (Fe2O3)",
        "svg": "<path d=\"M30.5 23.0H20.5V37.0M20.5 30.0H28.5 M31.5 30.0H41.5A5.0 5.0 0 1 0 32.5 34.0 M70.5 23.0H60.5V37.0M60.5 30.0H68.5 M71.5 30.0H81.5A5.0 5.0 0 1 0 72.5 34.0 M13.5 72.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M43.5 72.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M73.5 72.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M28.0 38.5L22.0 63.5 M34.0 38.5L46.0 63.5 M66.0 38.5L54.0 63.5 M72.0 38.5L78.0 63.5 M28.5 72.0L41.5 72.0 M58.5 72.0L71.5 72.0\"/>"
      },
      {
        "name": "Silica (SiO2)",
        "svg": "<path d=\"M50.5 44.0A5.0 4.0 0 1 0 40.5 48.0A5.0 4.0 0 0 1 50.5 55.0A5.0 4.0 0 1 1 40.5 56.0 M56.5 47.0V57.0M56.5 43.0V44.0 M9.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M77.5 50.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M43.5 14.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0 M43.5 86.0a6.5 6.5 0 1 0 13.0 0a6.5 6.5 0 1 0 -13.0 0\"/><path d=\"M37.0 53.5L24.5 53.5 M37.0 46.5L24.5 46.5 M63.0 46.5L75.5 46.5 M63.0 53.5L75.5 53.5 M46.5 41.5L46.5 22.5 M53.5 41.5L53.5 22.5 M53.5 58.5L53.5 77.5 M46.5 58.5L46.5 77.5\"/>"
      }
    ],
    "Periodic Table and Elements": [
      {
        "name": "Periodic Table",
        "svg": "<path d=\"\"/><path d=\"M10.0 12V88 M18.9 12V88 M27.8 12V88 M36.7 12V88 M45.6 12V88 M54.4 12V88 M63.3 12V88 M72.2 12V88 M81.1 12V88 M90.0 12V88 M10 12.0H90 M10 22.9H90 M10 33.7H90 M10 44.6H90 M10 55.4H90 M10 66.3H90 M10 77.1H90 M10 88.0H90\"/>"
      },
      {
        "name": "Hydrogen Element Tile",
        "svg": "<path d=\"M41.5 41.1V64.9M58.5 41.1V64.9M41.5 53.0H58.5 M19.2 15.2V24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Helium Element Tile",
        "svg": "<path d=\"M33.9 41.1V64.9M50.9 41.1V64.9M33.9 53.0H50.9 M52.5 53.0H69.5A8.5 8.5 0 1 0 54.2 59.8 M16.0 16.8A3.2 3.2 0 0 1 22.4 19.2L16.0 25.6H22.4\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Carbon Element Tile",
        "svg": "<path d=\"M58.5 42.8A11.9 11.9 0 1 0 58.5 63.2 M21.6 15.2L16.0 20.0M16.4 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Nitrogen Element Tile",
        "svg": "<path d=\"M41.5 64.9V41.1L58.5 64.9V41.1 M16.0 15.2H22.4L17.6 24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Oxygen Element Tile",
        "svg": "<path d=\"M39.0 53.0a11.0 11.0 0 1 0 22.1 0a11.0 11.0 0 1 0 -22.1 0 M16.8 17.6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M16.4 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Sodium Element Tile",
        "svg": "<path d=\"M33.9 64.9V41.1L50.9 64.9V41.1 M53.4 56.4a6.0 6.0 0 1 0 11.9 0a6.0 6.0 0 1 0 -11.9 0M65.3 51.3V63.2 M19.2 15.2V24.8 M25.6 15.2V24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Magnesium Element Tile",
        "svg": "<path d=\"M30.5 64.9V41.1L42.4 58.1L54.2 41.1V64.9 M55.1 51.3a6.0 6.0 0 1 0 11.9 0a6.0 6.0 0 1 0 -11.9 0M67.0 46.2V61.5A6.8 6.8 0 0 1 54.2 63.2 M19.2 15.2V24.8 M22.4 16.8A3.2 3.2 0 0 1 28.8 19.2L22.4 25.6H28.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Aluminium Element Tile",
        "svg": "<path d=\"M33.0 64.9L42.4 41.1L51.7 64.9M37.2 56.4H47.5 M61.0 41.1V64.9 M19.2 15.2V24.8 M22.4 16.0H28.8L24.8 19.2A3.2 3.2 0 0 1 28.8 23.2A3.2 3.2 0 0 1 22.4 24.0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Silicon Element Tile",
        "svg": "<path d=\"M50.9 42.8A8.5 6.8 0 1 0 33.9 49.6A8.5 6.8 0 0 1 50.9 61.5A8.5 6.8 0 1 1 33.9 63.2 M61.0 47.9V64.9M61.0 41.1V42.8 M19.2 15.2V24.8 M28.0 25.6V14.4L21.6 22.4H29.6\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Phosphorus Element Tile",
        "svg": "<path d=\"M41.5 64.9V41.1H53.4A6.0 6.0 0 1 1 53.4 54.7H41.5 M19.2 15.2V24.8 M28.8 15.2H22.4V20.0A3.2 2.8 0 1 1 23.2 24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Sulfur Element Tile",
        "svg": "<path d=\"M58.5 42.8A8.5 6.8 0 1 0 41.5 49.6A8.5 6.8 0 0 1 58.5 61.5A8.5 6.8 0 1 1 41.5 63.2 M19.2 15.2V24.8 M28.0 15.2L22.4 20.0M22.8 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Chlorine Element Tile",
        "svg": "<path d=\"M50.9 42.8A11.9 11.9 0 1 0 50.9 63.2 M61.0 41.1V64.9 M19.2 15.2V24.8 M22.4 15.2H28.8L24.0 24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Potassium Element Tile",
        "svg": "<path d=\"M41.5 41.1V64.9M58.5 41.1L43.2 53.0M43.2 53.0L58.5 64.9 M19.2 15.2V24.8 M22.8 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0M28.4 17.6V24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Calcium Element Tile",
        "svg": "<path d=\"M50.9 42.8A11.9 11.9 0 1 0 50.9 63.2 M53.4 56.4a6.0 6.0 0 1 0 11.9 0a6.0 6.0 0 1 0 -11.9 0M65.3 51.3V63.2 M16.0 16.8A3.2 3.2 0 0 1 22.4 19.2L16.0 25.6H22.4 M22.8 20.0a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Iron Element Tile",
        "svg": "<path d=\"M50.9 41.1H33.9V64.9M33.9 53.0H47.5 M52.5 53.0H69.5A8.5 8.5 0 1 0 54.2 59.8 M16.0 16.8A3.2 3.2 0 0 1 22.4 19.2L16.0 25.6H22.4 M28.0 15.2L22.4 20.0M22.8 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Copper Element Tile",
        "svg": "<path d=\"M50.9 42.8A11.9 11.9 0 1 0 50.9 63.2 M52.5 47.9V56.4A8.5 8.5 0 0 0 69.5 56.4M69.5 47.9V64.9 M16.0 16.8A3.2 3.2 0 0 1 22.4 19.2L16.0 25.6H22.4 M22.8 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0M28.4 17.6V24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Zinc Element Tile",
        "svg": "<path d=\"M33.9 41.1H50.9L33.9 64.9H50.9 M52.5 64.9V47.9M52.5 54.7A8.5 6.8 0 0 1 69.5 54.7V64.9 M16.0 16.0H22.4L18.4 19.2A3.2 3.2 0 0 1 22.4 23.2A3.2 3.2 0 0 1 16.0 24.0 M22.8 20.0a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Silver Element Tile",
        "svg": "<path d=\"M33.0 64.9L42.4 41.1L51.7 64.9M37.2 56.4H47.5 M55.1 51.3a6.0 6.0 0 1 0 11.9 0a6.0 6.0 0 1 0 -11.9 0M67.0 46.2V61.5A6.8 6.8 0 0 1 54.2 63.2 M21.6 25.6V14.4L15.2 22.4H23.2 M22.4 15.2H28.8L24.0 24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Gold Element Tile",
        "svg": "<path d=\"M33.0 64.9L42.4 41.1L51.7 64.9M37.2 56.4H47.5 M52.5 47.9V56.4A8.5 8.5 0 0 0 69.5 56.4M69.5 47.9V64.9 M16.0 15.2H22.4L17.6 24.8 M22.8 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0M28.4 17.6V24.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Mercury Element Tile",
        "svg": "<path d=\"M33.9 41.1V64.9M50.9 41.1V64.9M33.9 53.0H50.9 M55.1 51.3a6.0 6.0 0 1 0 11.9 0a6.0 6.0 0 1 0 -11.9 0M67.0 46.2V61.5A6.8 6.8 0 0 1 54.2 63.2 M16.8 17.6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M16.4 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0 M22.8 20.0a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Lead Element Tile",
        "svg": "<path d=\"M33.9 64.9V41.1H45.8A6.0 6.0 0 1 1 45.8 54.7H33.9 M52.5 41.1V64.9M54.2 56.4a6.8 6.8 0 1 0 13.6 0a6.8 6.8 0 1 0 -13.6 0 M16.8 17.6a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M16.4 22.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0 M22.4 16.8A3.2 3.2 0 0 1 28.8 19.2L22.4 25.6H28.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Uranium Element Tile",
        "svg": "<path d=\"M41.5 41.1V58.1A8.5 8.5 0 0 0 58.5 58.1M58.5 41.1V64.9 M16.4 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0M22.0 17.6V24.8 M22.4 16.8A3.2 3.2 0 0 1 28.8 19.2L22.4 25.6H28.8\"/><path d=\"M10 10H90V90H10Z\"/>"
      },
      {
        "name": "Noble Gas Group",
        "svg": "<path d=\"M37.7 62.1V43.9L50.7 62.1V43.9 M52.0 53.0H65.0A6.5 6.5 0 1 0 53.3 58.2 M29.2 25.2V34.8 M32.8 30.0a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M20 20H80V80H20Z M10 10H70 M10 10V70\"/>"
      },
      {
        "name": "Alkali Metal Group",
        "svg": "<path d=\"M37.7 62.1V43.9L50.7 62.1V43.9 M52.6 55.6a4.5 4.5 0 1 0 9.1 0a4.5 4.5 0 1 0 -9.1 0M61.7 51.7V60.8 M29.2 25.2V34.8 M35.6 25.2V34.8\"/><path d=\"M20 20H80V80H20Z M10 10H70 M10 10V70\"/>"
      },
      {
        "name": "Alkaline Earth Metal Group",
        "svg": "<path d=\"M35.1 62.1V43.9L44.2 56.9L53.3 43.9V62.1 M53.9 51.7a4.5 4.5 0 1 0 9.1 0a4.5 4.5 0 1 0 -9.1 0M63.0 47.8V59.5A5.2 5.2 0 0 1 53.3 60.8 M29.2 25.2V34.8 M32.4 26.8A3.2 3.2 0 0 1 38.8 29.2L32.4 35.6H38.8\"/><path d=\"M20 20H80V80H20Z M10 10H70 M10 10V70\"/>"
      },
      {
        "name": "Transition Metal Group",
        "svg": "<path d=\"M50.7 43.9H37.7V62.1M37.7 53.0H48.1 M52.0 53.0H65.0A6.5 6.5 0 1 0 53.3 58.2 M26.0 26.8A3.2 3.2 0 0 1 32.4 29.2L26.0 35.6H32.4 M38.0 25.2L32.4 30.0M32.8 32.4a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0\"/><path d=\"M20 20H80V80H20Z M10 10H70 M10 10V70\"/>"
      },
      {
        "name": "Halogen Group",
        "svg": "<path d=\"M50.7 45.2A9.1 9.1 0 1 0 50.7 60.8 M58.5 43.9V62.1 M29.2 25.2V34.8 M32.4 25.2H38.8L34.0 34.8\"/><path d=\"M20 20H80V80H20Z M10 10H70 M10 10V70\"/>"
      },
      {
        "name": "Lanthanide Series",
        "svg": "<path d=\"M3.9 41.7V54.3H12.9 M14.3 49.8a3.1 3.1 0 1 0 6.3 0a3.1 3.1 0 1 0 -6.3 0M20.6 47.1V53.4\"/><path d=\"M6 38H19V58H6Z M20 38H33V58H20Z M34 38H47V58H34Z M48 38H61V58H48Z M62 38H75V58H62Z M76 38H89V58H76Z\"/>"
      },
      {
        "name": "Actinide Series",
        "svg": "<path d=\"M8.0 41.7V50.7A4.5 4.5 0 0 0 17.0 50.7M17.0 41.7V54.3\"/><path d=\"M6 38H19V58H6Z M20 38H33V58H20Z M34 38H47V58H34Z M48 38H61V58H48Z M62 38H75V58H62Z M76 38H89V58H76Z\"/>"
      }
    ],
    "Analytical and Laboratory Testing": [
      {
        "name": "Acid-Base Titration Setup",
        "svg": "<path d=\"M12 12L12 92\"/><path d=\"M12 26L34 26\"/><path d=\"M42 14H54V60H42Z\"/><path d=\"M48 60L48 66\"/><path d=\"M44.0 70V96L30.0 92H66.0L52.0 96V70\"/>"
      },
      {
        "name": "Redox Titration Setup",
        "svg": "<path d=\"M12 12L12 92\"/><path d=\"M12 26L34 26\"/><path d=\"M42 14H54V60H42Z\"/><path d=\"M48 60L48 66\"/><path d=\"M44.0 70V96L30.0 92H66.0L52.0 96V70\"/><path d=\"M70 38L90 38\"/><path d=\"M84 33L90 38L84 43\"/><path d=\"M90 56L70 56\"/><path d=\"M76 51L70 56L76 61\"/>"
      },
      {
        "name": "Complexometric Titration Setup",
        "svg": "<path d=\"M12 12L12 92\"/><path d=\"M12 26L34 26\"/><path d=\"M42 14H54V60H42Z\"/><path d=\"M48 60L48 66\"/><path d=\"M40.0 70V96L29.0 92H59.0L48.0 96V70\"/><path d=\"M72 60l8-4 8 4v8l-8 4-8-4z\"/>"
      },
      {
        "name": "Indicator Dropper",
        "svg": "<path d=\"M48 8H52A8 8 0 0 1 60 16V24A8 8 0 0 1 52 32H48A8 8 0 0 1 40 24V16A8 8 0 0 1 48 8Z\"/><path d=\"M46 32L46 58\"/><path d=\"M54 32L54 58\"/><path d=\"M50 66c-4 6-4 9 0 9s4-3 0-9z\"/><path d=\"M38 72v14a6 6 0 0 0 12 0V72\"/><path d=\"M32 72L56 72\"/>"
      },
      {
        "name": "Titration Burette Setup",
        "svg": "<path d=\"M12 12L12 92\"/><path d=\"M12 26L36 26\"/><path d=\"M40 10H54V72H40Z\"/><path d=\"M40 20L46 20\"/><path d=\"M40 32L46 32\"/><path d=\"M40 44L46 44\"/><path d=\"M40 56L46 56\"/><path d=\"M40 72L54 72\"/><path d=\"M47 72L47 80\"/><path d=\"M47 80L50 88\"/>"
      },
      {
        "name": "pH Indicator Scale",
        "svg": "<path d=\"M10 40H90V70H10Z M10.0 58L10.0 70 M21.4 58L21.4 70 M32.8 58L32.8 70 M44.2 58L44.2 70 M55.6 58L55.6 70 M67.0 58L67.0 70 M78.4 58L78.4 70 M89.8 58L89.8 70 M50 20V34 M44 28L50 34L56 28 M11 18V30M11 22a4 4 0 1 0 0 8 M24 18V30M34 18V30M24 24H34\"/>"
      },
      {
        "name": "Universal Indicator Chart",
        "svg": "<path d=\"M12 16H22V28H12Z\"/><path d=\"M24 16H34V28H24Z\"/><path d=\"M36 16H46V28H36Z\"/><path d=\"M48 16H58V28H48Z\"/><path d=\"M60 16H70V28H60Z\"/><path d=\"M72 16H82V28H72Z\"/><path d=\"M84 16H94V28H84Z\"/><path d=\"M12 34H22V46H12Z\"/><path d=\"M24 34H34V46H24Z\"/><path d=\"M36 34H46V46H36Z\"/><path d=\"M48 34H58V46H48Z\"/><path d=\"M60 34H70V46H60Z\"/><path d=\"M72 34H82V46H72Z\"/><path d=\"M84 34H94V46H84Z\"/><path d=\"M12 52H22V64H12Z\"/><path d=\"M24 52H34V64H24Z\"/><path d=\"M36 52H46V64H36Z\"/><path d=\"M48 52H58V64H48Z\"/><path d=\"M60 52H70V64H60Z\"/><path d=\"M72 52H82V64H72Z\"/><path d=\"M84 52H94V64H84Z\"/><path d=\"M12 70H22V82H12Z\"/><path d=\"M24 70H34V82H24Z\"/><path d=\"M36 70H46V82H36Z\"/><path d=\"M48 70H58V82H48Z\"/><path d=\"M60 70H70V82H60Z\"/><path d=\"M72 70H82V82H72Z\"/><path d=\"M84 70H94V82H84Z\"/>"
      },
      {
        "name": "Litmus Paper",
        "svg": "<path d=\"M22 16H78V84H22Z\"/><path d=\"M50 16L50 84\"/><path d=\"M36 36L36 46\"/><path d=\"M64 60L64 70\"/>"
      },
      {
        "name": "Filter Paper Testing",
        "svg": "<path d=\"M14 62H86V80H14Z\"/><path d=\"M50 14c-4 6-6 9-6 12a6 6 0 0 0 12 0c0-3-2-6-6-12z\"/><path d=\"M30 62q20-8 40 0\"/><path d=\"M22 50L78 50\"/>"
      },
      {
        "name": "Gravimetric Analysis Setup",
        "svg": "<path d=\"M14 30L86 30\"/><path d=\"M50 16L50 30\"/><path d=\"M50 16L40 16\"/><path d=\"M20 30L14 50\"/><path d=\"M20 30L26 50\"/><path d=\"M14 50L26 50\"/><path d=\"M74 30L68 50\"/><path d=\"M74 30L80 50\"/><path d=\"M68 50L80 50\"/><path d=\"M40 66H60V90H40Z\"/><path d=\"M40 78L60 78\"/><path d=\"M38 66L62 66\"/>"
      },
      {
        "name": "Volumetric Analysis Setup",
        "svg": "<path d=\"M42 10V36L22 74a10 10 0 0 0 9 14h38a10 10 0 0 0 9-14L58 36V10\"/><path d=\"M38 10L62 10\"/><path d=\"M40 30L60 30\"/><path d=\"M46 28L54 28\"/>"
      },
      {
        "name": "Sample Collection Bottle",
        "svg": "<path d=\"M38 20H62V28H38Z\"/><path d=\"M42 28L42 38\"/><path d=\"M58 28L58 38\"/><path d=\"M38 38H62A8 8 0 0 1 70 46V80A8 8 0 0 1 62 88H38A8 8 0 0 1 30 80V46A8 8 0 0 1 38 38Z\"/><path d=\"M40 56H60V74H40Z\"/><path d=\"M50 6L50 18\"/><path d=\"M44 12L50 18L56 12\"/>"
      },
      {
        "name": "Chemical Sample Container",
        "svg": "<path d=\"M26 12H74V24H26Z\"/><path d=\"M34 24H66A6 6 0 0 1 72 30V82A6 6 0 0 1 66 88H34A6 6 0 0 1 28 82V30A6 6 0 0 1 34 24Z\"/><path d=\"M34 44H66V68H34Z\"/><path d=\"M38 50L62 50\"/><path d=\"M38 58L54 58\"/>"
      },
      {
        "name": "Laboratory Sample Rack",
        "svg": "<path d=\"M18 26V66a6 6 0 0 0 12 0V26\"/><path d=\"M36 26V66a6 6 0 0 0 12 0V26\"/><path d=\"M54 26V66a6 6 0 0 0 12 0V26\"/><path d=\"M72 26V66a6 6 0 0 0 12 0V26\"/><path d=\"M12 66H88V74H12Z\"/><path d=\"M12 28L88 28\"/>"
      },
      {
        "name": "Test Tube Sample",
        "svg": "<path d=\"M40 14H60V22H40Z\"/><path d=\"M42 22v56a10 10 0 0 0 16 0V22\"/><path d=\"M42 56L58 56\"/>"
      },
      {
        "name": "Centrifuge Tube",
        "svg": "<path d=\"M38 8H62V16H38Z\"/><path d=\"M40 16V66L50 90L60 66V16\"/><path d=\"M40 36L46 36\"/><path d=\"M40 52L46 52\"/><path d=\"M40 66L60 66\"/>"
      },
      {
        "name": "Spectral Analysis Chart",
        "svg": "<path d=\"M12 14L12 88L88 88\"/><path d=\"M14 70c8-4 10-40 16-40s8 36 14 36 8-30 14-30 8 26 14 26 8-18 14-18 8 12 12 12\"/>"
      },
      {
        "name": "Chromatogram",
        "svg": "<path d=\"M12 14L12 88L88 88\"/><path d=\"M14 78L26 78L30 40L34 78L44 78L50 22L56 78L68 78L74 52L78 78L86 78\"/>"
      },
      {
        "name": "Calibration Curve",
        "svg": "<path d=\"M12 14L12 88L88 88\"/><path d=\"M18 76L80 22\"/><path d=\"M19 72a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M31 62a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M45 50a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M57 40a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M71 26a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/>"
      },
      {
        "name": "Standard Solution Bottle",
        "svg": "<path d=\"M38 14H62V22H38Z\"/><path d=\"M42 22L42 32\"/><path d=\"M58 22L58 32\"/><path d=\"M38 32H62A8 8 0 0 1 70 40V80A8 8 0 0 1 62 88H38A8 8 0 0 1 30 80V40A8 8 0 0 1 38 32Z\"/><path d=\"M30 52L70 52\"/><path d=\"M42 68L48 74L60 62\"/>"
      },
      {
        "name": "Reference Solution",
        "svg": "<path d=\"M12 30H36V40H12Z\"/><path d=\"M16 40H32A4 4 0 0 1 36 44V82A4 4 0 0 1 32 86H16A4 4 0 0 1 12 82V44A4 4 0 0 1 16 40Z\"/><path d=\"M64 30H88V40H64Z\"/><path d=\"M68 40H84A4 4 0 0 1 88 44V82A4 4 0 0 1 84 86H68A4 4 0 0 1 64 82V44A4 4 0 0 1 68 40Z\"/><path d=\"M42 46L58 46\"/><path d=\"M42 58L58 58\"/>"
      },
      {
        "name": "Pipette Calibration Apparatus",
        "svg": "<path d=\"M38 8H54V16H38Z\"/><path d=\"M42 16V40a8 8 0 0 0 0 0\"/><path d=\"M36 40H56V64H36Z\"/><path d=\"M46 64V84L50 92L54 84V64\"/><path d=\"M70 10L70 90\"/><path d=\"M70 20L76 20\"/><path d=\"M70 40L76 40\"/><path d=\"M70 60L76 60\"/><path d=\"M70 80L76 80\"/>"
      },
      {
        "name": "Analytical Testing Bench",
        "svg": "<path d=\"M8 70L92 70\"/><path d=\"M16 70L16 90\"/><path d=\"M84 70L84 90\"/><path d=\"M30.0 36V62L20.0 70H48.0L38.0 62V36\"/><path d=\"M58 50H80V70H58Z\"/><path d=\"M58 50L80 50\"/><path d=\"M50 28L50 36\"/>"
      },
      {
        "name": "Laboratory Data Recording Sheet",
        "svg": "<path d=\"M16 12H78V88H16Z\"/><path d=\"M16 30L78 30\"/><path d=\"M16 46L78 46\"/><path d=\"M16 62L78 62\"/><path d=\"M16 78L78 78\"/><path d=\"M36 12L36 88\"/><path d=\"M58 12L58 88\"/><path d=\"M80 30L90 12L94 16L84 34\"/>"
      },
      {
        "name": "Chemical Quality Control Testing",
        "svg": "<path d=\"M45.0 12V38L28.0 84H72.0L55.0 38V12\"/><path d=\"M36 62L46 72L64 50\"/>"
      }
    ],
    "Industrial and Processing Equipment": [
      {
        "name": "Chemical Reactor",
        "svg": "<path d=\"M28 36Q28 30 50.0 30Q72 30 72 36V80Q72 86 50.0 86Q28 86 28 80Z\"/><path d=\"M50 12L50 30\"/><path d=\"M38 6H62V12H38Z\"/><path d=\"M50 46L50 70\"/><path d=\"M40 60L50 70L60 60\"/><path d=\"M18 58L28 58\"/><path d=\"M72 58L82 58\"/>"
      },
      {
        "name": "Batch Reactor",
        "svg": "<path d=\"M30 34Q30 28 50.0 28Q70 28 70 34V78Q70 84 50.0 84Q30 84 30 78Z\"/><path d=\"M50 12L50 28\"/><path d=\"M42 12L58 12\"/><path d=\"M50 84L50 94\"/><path d=\"M44 94L56 94\"/><path d=\"M36 50L64 50\"/>"
      },
      {
        "name": "Continuous Stirred Tank Reactor",
        "svg": "<path d=\"M32 34Q32 28 50.0 28Q68 28 68 34V78Q68 84 50.0 84Q32 84 32 78Z\"/><path d=\"M50 14L50 28\"/><path d=\"M50 50L50 70\"/><path d=\"M40 62L50 70L60 62\"/><path d=\"M8 40L30 40 M25.0 43.0L30 40L25.0 37.0\"/><path d=\"M92 62L72 62 M77.0 59.0L72 62L77.0 65.0\"/>"
      },
      {
        "name": "Plug Flow Reactor",
        "svg": "<path d=\"M10 30L60 30\"/><path d=\"M60 30a10 10 0 0 1 0 20\"/><path d=\"M60 50L20 50\"/><path d=\"M20 50a10 10 0 0 0 0 20\"/><path d=\"M20 70L90 70\"/><path d=\"M10 20L24 20 M19.0 23.0L24 20L19.0 17.0\"/>"
      },
      {
        "name": "Industrial Mixing Tank",
        "svg": "<path d=\"M18 38L18 84L82 84L82 38\"/><path d=\"M50 12L50 60\"/><path d=\"M36 64L64 64\"/><path d=\"M36 64L36 72\"/><path d=\"M64 64L64 72\"/><path d=\"M18 38L82 38\"/>"
      },
      {
        "name": "Agitator",
        "svg": "<path d=\"M40 8H60V22H40Z\"/><path d=\"M50 22L50 92\"/><path d=\"M32 70L68 70\"/><path d=\"M34 62L34 78\"/><path d=\"M66 62L66 78\"/><path d=\"M30 92L70 92\"/>"
      },
      {
        "name": "Industrial Storage Tank",
        "svg": "<path d=\"M26 30Q50 8 74 30V84H26Z\"/><path d=\"M26 84L20 94\"/><path d=\"M74 84L80 94\"/><path d=\"M26 58L74 58\"/><path d=\"M26 42L74 42\"/>"
      },
      {
        "name": "Pressure Vessel",
        "svg": "<path d=\"M28 34H72A16 16 0 0 1 88 50V50A16 16 0 0 1 72 66H28A16 16 0 0 1 12 50V50A16 16 0 0 1 28 34Z\"/><path d=\"M38 66L30 80\"/><path d=\"M62 66L70 80\"/><path d=\"M30 80L70 80\"/><path d=\"M44 22a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M50 28L50 34\"/>"
      },
      {
        "name": "Chemical Storage Drum",
        "svg": "<path d=\"M30 18Q50 12 70 18Q76 50 70 82Q50 88 30 82Q24 50 30 18Z\"/><path d=\"M26 34L74 34\"/><path d=\"M25 66L75 66\"/>"
      },
      {
        "name": "Industrial Boiler",
        "svg": "<path d=\"M40 44H60A20 20 0 0 1 80 64V64A20 20 0 0 1 60 84H40A20 20 0 0 1 20 64V64A20 20 0 0 1 40 44Z\"/><path d=\"M49.99 30a0.01 0.01 0 1 0 0.02 0a0.01 0.01 0 1 0 -0.02 0\"/><path d=\"M44 24H56A6 6 0 0 1 62 30V32A6 6 0 0 1 56 38H44A6 6 0 0 1 38 32V30A6 6 0 0 1 44 24Z\"/><path d=\"M70 44L70 14L80 14L80 40\"/><path d=\"M26 58H46V74H26Z\"/><path d=\"M62 82q-4-6 0-12q4 6 0 12z\"/><path d=\"M10 84L90 84\"/>"
      },
      {
        "name": "Heat Exchanger",
        "svg": "<path d=\"M20 30H80V70H20Z\"/><path d=\"M8 50L20 50\"/><path d=\"M80 50L92 50\"/><path d=\"M30 30L30 70\"/><path d=\"M50 30L50 70\"/><path d=\"M70 30L70 70\"/><path d=\"M32 40L48 60L52 40L68 60\"/>"
      },
      {
        "name": "Shell and Tube Heat Exchanger",
        "svg": "<path d=\"M36 32H64A18 18 0 0 1 82 50V50A18 18 0 0 1 64 68H36A18 18 0 0 1 18 50V50A18 18 0 0 1 36 32Z\"/><path d=\"M8 50L18 50\"/><path d=\"M82 50L92 50\"/><path d=\"M30 40L70 40\"/><path d=\"M30 50L70 50\"/><path d=\"M30 60L70 60\"/><path d=\"M50 24L50 32\"/><path d=\"M50 68L50 76\"/>"
      },
      {
        "name": "Plate Heat Exchanger",
        "svg": "<path d=\"M18 20L18 80\"/><path d=\"M30 20L30 80\"/><path d=\"M42 20L42 80\"/><path d=\"M54 20L54 80\"/><path d=\"M66 20L66 80\"/><path d=\"M18 30L24 36L30 30L36 36L42 30L48 36L54 30L60 36L66 30\"/><path d=\"M18 70L24 64L30 70L36 64L42 70L48 64L54 70L60 64L66 70\"/><path d=\"M66 50L90 50\"/><path d=\"M8 40L18 40\"/><path d=\"M8 60L18 60\"/>"
      },
      {
        "name": "Cooling Tower",
        "svg": "<path d=\"M30 16Q42 40 36 90\"/><path d=\"M70 16Q58 40 64 90\"/><path d=\"M30 16Q50 10 70 16\"/><path d=\"M36 90L64 90\"/><path d=\"M40 30L60 30\"/><path d=\"M38 44L62 44\"/><path d=\"M40 64L46 70\"/><path d=\"M54 64L60 70\"/><path d=\"M24 94L76 94\"/>"
      },
      {
        "name": "Industrial Condenser",
        "svg": "<path d=\"M36 14H64V84H36Z\"/><path d=\"M40 24L60 74\"/><path d=\"M60 24L40 74\"/><path d=\"M50 6L50 14\"/><path d=\"M50 84L50 94\"/><path d=\"M36 36L24 36\"/><path d=\"M64 70L76 70\"/>"
      },
      {
        "name": "Industrial Pump",
        "svg": "<path d=\"M20 56a24 24 0 1 0 48 0a24 24 0 1 0 -48 0\"/><path d=\"M20 56L10 56\"/><path d=\"M64 56L84 56L84 38\"/><path d=\"M36 36L44 44\"/><path d=\"M46 56a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Chemical Dosing Pump",
        "svg": "<path d=\"M20 40H56V70H20Z\"/><path d=\"M56 50L78 50\"/><path d=\"M78 50L78 20\"/><path d=\"M80 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M48 25a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M36 30L36 40\"/><path d=\"M46 30L46 40\"/>"
      },
      {
        "name": "Industrial Compressor",
        "svg": "<path d=\"M24 40H64V68H24Z\"/><path d=\"M64 54L84 54\"/><path d=\"M12 54L24 54\"/><path d=\"M40 40L40 20\"/><path d=\"M30 20L50 20\"/><path d=\"M40 68L40 84\"/><path d=\"M30 84L50 84\"/><path d=\"M70 74a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Distillation Column",
        "svg": "<path d=\"M48 10H52A12 12 0 0 1 64 22V78A12 12 0 0 1 52 90H48A12 12 0 0 1 36 78V22A12 12 0 0 1 48 10Z\"/><path d=\"M36 24L64 24\"/><path d=\"M36 38L64 38\"/><path d=\"M36 52L64 52\"/><path d=\"M36 66L64 66\"/><path d=\"M36 80L64 80\"/><path d=\"M64 30L84 30\"/><path d=\"M64 72L84 72\"/><path d=\"M50 90L50 96\"/>"
      },
      {
        "name": "Absorption Column",
        "svg": "<path d=\"M48 10H52A12 12 0 0 1 64 22V78A12 12 0 0 1 52 90H48A12 12 0 0 1 36 78V22A12 12 0 0 1 48 10Z\"/><path d=\"M42 22L58 30L42 38L58 46L42 54L58 62L42 70L58 78\"/><path d=\"M64 30L84 30\"/><path d=\"M16 80L36 80\"/><path d=\"M50 96L50 88 M53.0 93.0L50 88L47.0 93.0\"/>"
      },
      {
        "name": "Stripping Column",
        "svg": "<path d=\"M48 10H52A12 12 0 0 1 64 22V78A12 12 0 0 1 52 90H48A12 12 0 0 1 36 78V22A12 12 0 0 1 48 10Z\"/><path d=\"M42 22L58 30L42 38L58 46L42 54L58 62L42 70L58 78\"/><path d=\"M20 64L36 64 M31.0 67.0L36 64L31.0 61.0\"/><path d=\"M64 30L80 30 M75.0 33.0L80 30L75.0 27.0\"/><path d=\"M50 96L50 90\"/>"
      },
      {
        "name": "Fractionation Tower",
        "svg": "<path d=\"M50 10H50A10 10 0 0 1 60 20V82A10 10 0 0 1 50 92H50A10 10 0 0 1 40 82V20A10 10 0 0 1 50 10Z\"/><path d=\"M40 26L30 26\"/><path d=\"M40 44L30 44\"/><path d=\"M40 62L30 62\"/><path d=\"M60 34L70 34\"/><path d=\"M60 54L70 54\"/><path d=\"M60 74L70 74\"/>"
      },
      {
        "name": "Industrial Filter",
        "svg": "<path d=\"M14 32H86V68H14Z\"/><path d=\"M30 32L30 68\"/><path d=\"M50 32L50 68\"/><path d=\"M70 32L70 68\"/><path d=\"M10 50L14 50\"/><path d=\"M86 50L90 50\"/><path d=\"M30 20L30 32\"/><path d=\"M70 20L70 32\"/><path d=\"M50 68L50 88\"/>"
      },
      {
        "name": "Industrial Centrifuge",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M26 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0\"/><path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M72 18L84 12 M81.49560386520024 15.93547964039963L84 12L79.34897860680043 11.642229123600034\"/><path d=\"M50 86L50 94\"/>"
      },
      {
        "name": "Industrial Dryer",
        "svg": "<path d=\"M12 36H88V76H12Z\"/><path d=\"M22 52L78 52\"/><path d=\"M22 64L78 64\"/><path d=\"M26 26q-4-6 0-10M50 26q-4-6 0-10M74 26q-4-6 0-10\"/><path d=\"M22 76L20 86\"/><path d=\"M78 76L80 86\"/>"
      },
      {
        "name": "Spray Dryer",
        "svg": "<path d=\"M34 12H66V62H34Z\"/><path d=\"M34 62L50 90L66 62\"/><path d=\"M50 12L50 4\"/><path d=\"M30 40L20 40\"/><path d=\"M34 30L24 24\"/><path d=\"M44 74q2 3 0 5M50 76q2 3 0 5M56 74q2 3 0 5\"/><path d=\"M10 60L24 60 M19.0 63.0L24 60L19.0 57.0\"/>"
      },
      {
        "name": "Crystallizer",
        "svg": "<path d=\"M26 30H74V82H26Z\"/><path d=\"M26 40L74 40\"/><path d=\"M40 56L44 62L40 68L36 62Z\"/><path d=\"M56 64L60 70L56 76L52 70Z\"/><path d=\"M26 30L26 20\"/><path d=\"M74 30L74 20\"/>"
      },
      {
        "name": "Evaporator",
        "svg": "<path d=\"M30 36Q30 30 50.0 30Q70 30 70 36V74Q70 80 50.0 80Q30 80 30 74Z\"/><path d=\"M50 12L50 30\"/><path d=\"M36 52q4-6 8 0t8 0 8 0 8 0\"/><path d=\"M50 88L50 98\"/><path d=\"M50 22L50 10 M52.4 14.0L50 10L47.6 14.0\"/>"
      },
      {
        "name": "Industrial Furnace",
        "svg": "<path d=\"M16 44H84V86H16Z\"/><path d=\"M30 74q-4-8 0-14q4 6 4 0q4 8-4 14z\"/><path d=\"M30 44L30 20\"/><path d=\"M46 44L46 14\"/><path d=\"M46 14L68 14L68 44\"/><path d=\"M10 86L90 86\"/>"
      },
      {
        "name": "Industrial Scrubber",
        "svg": "<path d=\"M48 20H52A12 12 0 0 1 64 32V78A12 12 0 0 1 52 90H48A12 12 0 0 1 36 78V32A12 12 0 0 1 48 20Z\"/><path d=\"M50 20L50 8\"/><path d=\"M42 28L58 28\"/><path d=\"M42 42L58 42\"/><path d=\"M10 60L36 60\"/><path d=\"M36 60L30 56\"/><path d=\"M36 60L30 64\"/><path d=\"M64 80L88 80\"/>"
      },
      {
        "name": "Industrial Pipeline",
        "svg": "<path d=\"M6 50L40 50\"/><path d=\"M60 50L94 50\"/><path d=\"M40 40H60V60H40Z\"/><path d=\"M40 44L60 44\"/><path d=\"M40 56L60 56\"/><path d=\"M6 42L6 58\"/><path d=\"M94 42L94 58\"/>"
      },
      {
        "name": "Chemical Process Control Panel",
        "svg": "<path d=\"M14 14H86V86H14Z\"/><path d=\"M24 36a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M60 36a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M32 36L36 32\"/><path d=\"M30 64L44 64\"/><path d=\"M56 60L70 60\"/><path d=\"M56 68L70 68\"/>"
      },
      {
        "name": "Process Flow Diagram (PFD)",
        "svg": "<path d=\"M8 36H30V64H8Z\"/><path d=\"M38 20H60V40H38Z\"/><path d=\"M38 60H60V80H38Z\"/><path d=\"M68 36H92V64H68Z\"/><path d=\"M30 50L38 30L38 30\"/><path d=\"M30 50L38 70\"/><path d=\"M60 30L68 50\"/><path d=\"M60 70L68 50\"/>"
      },
      {
        "name": "Piping and Instrumentation Diagram",
        "svg": "<path d=\"M14 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M42 36H62V64H42Z\"/><path d=\"M66 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M34 50L42 50\"/><path d=\"M62 50L66 50\"/><path d=\"M24 20L24 40\"/><path d=\"M76 30L76 40\"/><path d=\"M24 60L24 80\"/><path d=\"M76 60L76 80\"/><path d=\"M50 20L50 36\"/>"
      },
      {
        "name": "Chemical Plant Layout",
        "svg": "<path d=\"M10 10H40V40H10Z\"/><path d=\"M60 10H90V40H60Z\"/><path d=\"M10 60H40V90H10Z\"/><path d=\"M60 60H90V90H60Z\"/><path d=\"M40 25L60 25\"/><path d=\"M40 75L60 75\"/><path d=\"M25 40L25 60\"/><path d=\"M75 40L75 60\"/><path d=\"M40 50L60 50\"/>"
      }
    ],
    "Flow and Process Symbols": [
      {
        "name": "Chemical Process Flow Arrow",
        "svg": "<path d=\"M10 50L90 50 M81.0 54.95L90 50L81.0 45.05\"/><path d=\"M10 30L10 70\"/>"
      },
      {
        "name": "Material Flow Arrow",
        "svg": "<path d=\"M10 40H50V60H10Z\"/><path d=\"M50 50L90 50\"/><path d=\"M80.0 55.5L90 50L80.0 44.5\"/>"
      },
      {
        "name": "Liquid Flow Arrow",
        "svg": "<path d=\"M10 40q8-8 16 0t16 0 16 0 16 0\"/><path d=\"M10 60q8-8 16 0t16 0\"/><path d=\"M10 40L10 40\"/><path d=\"M10 70L84 70 M76.0 74.4L84 70L76.0 65.6\"/>"
      },
      {
        "name": "Gas Flow Arrow",
        "svg": "<path d=\"M10 50L90 50 M81.0 54.95L90 50L81.0 45.05\" stroke-dasharray=\"4 4\"/>"
      },
      {
        "name": "Steam Flow Arrow",
        "svg": "<path d=\"M10 70L90 70 M82.0 74.4L90 70L82.0 65.6\"/><path d=\"M30 48q-5-6 0-12t0-12\"/><path d=\"M50 48q-5-6 0-12t0-12\"/><path d=\"M70 48q-5-6 0-12t0-12\"/>"
      },
      {
        "name": "Pipeline Connection",
        "svg": "<path d=\"M6 50L40 50\"/><path d=\"M60 50L94 50\"/><path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M46 50L54 50\"/>"
      },
      {
        "name": "Pipe Elbow",
        "svg": "<path d=\"M20 88L20 44\"/><path d=\"M56 88L56 58\"/><path d=\"M20 44a36 36 0 0 1 36 36\"/>"
      },
      {
        "name": "Pipe Tee",
        "svg": "<path d=\"M6 40L94 40\"/><path d=\"M6 60L94 60\"/><path d=\"M40 40L40 94\"/><path d=\"M60 40L60 94\"/>"
      },
      {
        "name": "Pipe Reducer",
        "svg": "<path d=\"M6 40L36 40\"/><path d=\"M6 60L36 60\"/><path d=\"M36 40L64 30\"/><path d=\"M36 60L64 70\"/><path d=\"M64 30L94 30\"/><path d=\"M64 70L94 70\"/><path d=\"M64 30L64 70\"/>"
      },
      {
        "name": "Pipe Flange",
        "svg": "<path d=\"M6 40L94 40\"/><path d=\"M6 60L94 60\"/><path d=\"M40 28H48V72H40Z\"/><path d=\"M60 28H68V72H60Z\"/><path d=\"M48 40L60 40\"/><path d=\"M48 60L60 60\"/>"
      },
      {
        "name": "Gate Valve",
        "svg": "<path d=\"M6 50L30 50\"/><path d=\"M70 50L94 50\"/><path d=\"M30 36L50 50L30 64Z\"/><path d=\"M70 36L50 50L70 64Z\"/><path d=\"M50 50L50 24\"/><path d=\"M36 22L64 22\"/>"
      },
      {
        "name": "Globe Valve",
        "svg": "<path d=\"M6 50L30 50\"/><path d=\"M70 50L94 50\"/><path d=\"M36 54a14 14 0 1 0 28 0a14 14 0 1 0 -28 0\"/><path d=\"M50 40L50 22\"/><path d=\"M36 22L64 22\"/>"
      },
      {
        "name": "Ball Valve",
        "svg": "<path d=\"M6 50L24 50\"/><path d=\"M76 50L94 50\"/><path d=\"M24 50a26 26 0 1 0 52 0a26 26 0 1 0 -52 0\"/><path d=\"M26 50L74 50\"/>"
      },
      {
        "name": "Butterfly Valve",
        "svg": "<path d=\"M6 50L24 50\"/><path d=\"M76 50L94 50\"/><path d=\"M24 50a26 26 0 1 0 52 0a26 26 0 1 0 -52 0\"/><path d=\"M50 24L50 76\"/><path d=\"M50 20L50 10\"/>"
      },
      {
        "name": "Check Valve",
        "svg": "<path d=\"M6 50L30 50\"/><path d=\"M70 50L94 50\"/><path d=\"M30 36L30 64L70 50Z\"/><path d=\"M70 36L70 64\"/>"
      },
      {
        "name": "Control Valve",
        "svg": "<path d=\"M6 60L30 60\"/><path d=\"M70 60L94 60\"/><path d=\"M36 62a14 14 0 1 0 28 0a14 14 0 1 0 -28 0\"/><path d=\"M50 48L50 38\"/><path d=\"M32 38h36a4 4 0 0 1 0 8H32a4 4 0 0 1 0-8z\"/><path d=\"M50 30L50 18\"/>"
      },
      {
        "name": "Pressure Gauge",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M50 50L66 36\"/><path d=\"M50 86L50 94\"/>"
      },
      {
        "name": "Temperature Gauge",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M46 60V26a4 4 0 0 1 8 0V60a7 7 0 1 1-8 0z\"/><path d=\"M56 34L60 34\"/><path d=\"M56 46L60 46\"/>"
      },
      {
        "name": "Flow Meter",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M30 60q5-8 10 0t10 0 10 0 10 0\"/>"
      },
      {
        "name": "Level Indicator",
        "svg": "<path d=\"M26 24H74V92H26Z\"/><path d=\"M26 50L74 50\"/><path d=\"M78 24L78 92\"/><path d=\"M74 50L82 50\"/>"
      },
      {
        "name": "Pressure Transmitter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M20 50L80 50\"/><path d=\"M36 58a14 14 0 0 1 28 0\"/><path d=\"M50 58L60 46\"/>"
      },
      {
        "name": "Temperature Transmitter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M20 50L80 50\"/><path d=\"M46 60V40a4 4 0 0 1 8 0V60a6 6 0 1 1-8 0z\"/>"
      },
      {
        "name": "Flow Transmitter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M20 50L80 50\"/><path d=\"M34 60q5-8 10 0t10 0 10 0\"/>"
      },
      {
        "name": "Level Transmitter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M20 50L80 50\"/><path d=\"M36 56L64 56\"/><path d=\"M36 62L64 62\"/>"
      },
      {
        "name": "Process Pump Symbol",
        "svg": "<path d=\"M26 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0\"/><path d=\"M38 38L62 50L38 62Z\"/><path d=\"M6 50L26 50\"/><path d=\"M74 50L94 50\"/>"
      },
      {
        "name": "Process Compressor Symbol",
        "svg": "<path d=\"M26 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0\"/><path d=\"M36 60L44 40L52 60L60 40L68 60\"/><path d=\"M6 50L26 50\"/><path d=\"M74 50L94 50\"/>"
      },
      {
        "name": "Heat Exchanger Symbol",
        "svg": "<path d=\"M28 30H72A4 4 0 0 1 76 34V66A4 4 0 0 1 72 70H28A4 4 0 0 1 24 66V34A4 4 0 0 1 28 30Z\"/><path d=\"M30 38L38 62L46 38L54 62L62 38L70 62\"/><path d=\"M6 50L24 50\"/><path d=\"M76 50L94 50\"/>"
      },
      {
        "name": "Reactor Symbol",
        "svg": "<path d=\"M46 22H54A16 16 0 0 1 70 38V68A16 16 0 0 1 54 84H46A16 16 0 0 1 30 68V38A16 16 0 0 1 46 22Z\"/><path d=\"M50 10L50 40\"/><path d=\"M38 44L62 44\"/><path d=\"M6 52L30 52\"/><path d=\"M70 52L94 52\"/>"
      },
      {
        "name": "Storage Tank Symbol",
        "svg": "<path d=\"M26 34Q50 14 74 34V88H26Z\"/><path d=\"M26 60L74 60\"/><path d=\"M6 60L26 60\"/><path d=\"M74 60L94 60\"/>"
      },
      {
        "name": "Distillation Column Symbol",
        "svg": "<path d=\"M48 10H52A12 12 0 0 1 64 22V78A12 12 0 0 1 52 90H48A12 12 0 0 1 36 78V22A12 12 0 0 1 48 10Z\"/><path d=\"M36 28L64 28\"/><path d=\"M36 46L64 46\"/><path d=\"M36 64L64 64\"/><path d=\"M64 36L84 36\"/><path d=\"M64 72L84 72\"/><path d=\"M50 90L50 96\"/>"
      }
    ],
    "Safety and Protection Equipment": [
      {
        "name": "Laboratory Safety Goggles",
        "svg": "<path d=\"M14 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0\"/><path d=\"M54 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0\"/><path d=\"M46 46L54 46\"/><path d=\"M14 44L6 40\"/><path d=\"M86 44L94 40\"/><path d=\"M22 54q8 8 16 0\"/><path d=\"M62 54q8 8 16 0\"/>"
      },
      {
        "name": "Safety Face Shield",
        "svg": "<path d=\"M48 12H52A22 22 0 0 1 74 34V34A22 22 0 0 1 52 56H48A22 22 0 0 1 26 34V34A22 22 0 0 1 48 12Z\"/><path d=\"M32 40Q50 56 68 40\"/><path d=\"M50 56L50 66\"/><path d=\"M30 66Q50 96 70 66\"/><path d=\"M26 30L74 30\"/>"
      },
      {
        "name": "Laboratory Coat",
        "svg": "<path d=\"M34 12L14 22V86H86V22L66 12\"/><path d=\"M34 12L42 26L50 20L58 26L66 12\"/><path d=\"M50 20L50 86\"/><path d=\"M44 40L44 44\"/><path d=\"M44 62L44 66\"/><path d=\"M56 40L56 44\"/><path d=\"M56 62L56 66\"/>"
      },
      {
        "name": "Chemical Resistant Gloves",
        "svg": "<path d=\"M30 92V46\"/><path d=\"M30 46V24Q30 14 38 14T46 24V40\"/><path d=\"M46 40V16Q46 6 54 6T62 16V40\"/><path d=\"M62 40V22Q62 14 70 14T78 22V52Q78 80 60 92H36Q30 92 30 86\"/>"
      },
      {
        "name": "Respirator Mask",
        "svg": "<path d=\"M42 32H58A18 18 0 0 1 76 50V54A18 18 0 0 1 58 72H42A18 18 0 0 1 24 54V50A18 18 0 0 1 42 32Z\"/><path d=\"M36 62L64 62\"/><path d=\"M17 38H21A3 3 0 0 1 24 41V59A3 3 0 0 1 21 62H17A3 3 0 0 1 14 59V41A3 3 0 0 1 17 38Z\"/><path d=\"M79 38H83A3 3 0 0 1 86 41V59A3 3 0 0 1 83 62H79A3 3 0 0 1 76 59V41A3 3 0 0 1 79 38Z\"/><path d=\"M36 42L64 42\"/>"
      },
      {
        "name": "Safety Helmet",
        "svg": "<path d=\"M14 60Q14 16 50 16Q86 16 86 60\"/><path d=\"M6 60L94 60\"/><path d=\"M14 60L14 66\"/><path d=\"M86 60L86 66\"/><path d=\"M30 40Q50 30 70 40\"/>"
      },
      {
        "name": "Safety Shoes",
        "svg": "<path d=\"M14 30V70Q14 80 26 80H84Q90 80 90 72V66Q90 60 80 60H58Q52 60 48 50L40 30Z\"/><path d=\"M14 70L90 70\"/><path d=\"M40 30L40 44\"/>"
      },
      {
        "name": "Chemical Spill Kit",
        "svg": "<path d=\"M18 40H82A4 4 0 0 1 86 44V80A4 4 0 0 1 82 84H18A4 4 0 0 1 14 80V44A4 4 0 0 1 18 40Z\"/><path d=\"M14 56L86 56\"/><path d=\"M30 22L40 14L50 22V40\"/><path d=\"M56 26q6-8 14 0q-8 8-14 0\"/><path d=\"M30 70L38 64L46 70\"/>"
      },
      {
        "name": "Emergency Shower",
        "svg": "<path d=\"M50 6L50 36\"/><path d=\"M36 36L64 36\"/><path d=\"M30 40q-4 8 0 16M42 40q-4 8 0 16M58 40q-4 8 0 16M70 40q-4 8 0 16\"/><path d=\"M28 20L18 20\"/><path d=\"M18 20L18 90\"/><path d=\"M12 90L40 90\"/><path d=\"M50 64v20\"/>"
      },
      {
        "name": "Eyewash Station",
        "svg": "<path d=\"M16 60H84A6 6 0 0 1 90 66V82A6 6 0 0 1 84 88H16A6 6 0 0 1 10 82V66A6 6 0 0 1 16 60Z\"/><path d=\"M50 60L50 40\"/><path d=\"M50 40L40 40\"/><path d=\"M50 40L60 40\"/><path d=\"M34 40q-4 6 0 12M66 40q4 6 0 12\"/><path d=\"M26 30L26 46\"/><path d=\"M74 30L74 46\"/><path d=\"M22 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M70 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Fire Extinguisher",
        "svg": "<path d=\"M46 30H54A12 12 0 0 1 66 42V80A12 12 0 0 1 54 92H46A12 12 0 0 1 34 80V42A12 12 0 0 1 46 30Z\"/><path d=\"M50 30L50 20\"/><path d=\"M38 20L62 20\"/><path d=\"M50 20Q72 16 74 34\"/><path d=\"M74 34L74 44\"/><path d=\"M34 46L66 46\"/>"
      },
      {
        "name": "Fire Blanket",
        "svg": "<path d=\"M20 14H80V64H20Z\"/><path d=\"M30 26q0 8 6 8t4 10\"/><path d=\"M46 62q-8-8 0-16q6 8 2 16\"/><path d=\"M58 62q-8-8 0-16q6 8 2 16\"/><path d=\"M14 74L86 74\"/>"
      },
      {
        "name": "Fume Extraction System",
        "svg": "<path d=\"M14 20L86 20\"/><path d=\"M14 20L30 54H70L86 20\"/><path d=\"M50 54L50 70\"/><path d=\"M40 82a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M46 78l4-4 4 4\"/>"
      },
      {
        "name": "Chemical Waste Container",
        "svg": "<path d=\"M30 30Q50 26 70 30V84Q50 90 30 84Z\"/><path d=\"M26 30L74 30\"/><path d=\"M26 20L74 20\"/><path d=\"M38 44H62V64H38Z\"/>"
      },
      {
        "name": "Hazardous Waste Bin",
        "svg": "<path d=\"M28 30L72 30\"/><path d=\"M34 30L38 86H62L66 30\"/><path d=\"M30 20L70 20\"/><path d=\"M50 40L50 50\"/><path d=\"M50 60L50 64\"/>"
      },
      {
        "name": "Chemical Warning Symbol",
        "svg": "<path d=\"M50 12L90 84L10 84Z\"/><path d=\"M50 36L50 58\"/><path d=\"M48 70a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/>"
      },
      {
        "name": "Corrosive Material Symbol",
        "svg": "<path d=\"M14 80L86 80\"/><path d=\"M30 80L30 64L40 60L46 68L54 60L62 68L70 64V80\"/><path d=\"M50 14q-6 10 0 16q6-6 0-16z\"/><path d=\"M48 46a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/>"
      },
      {
        "name": "Toxic Material Symbol",
        "svg": "<path d=\"M28 40a22 22 0 1 0 44 0a22 22 0 1 0 -44 0\"/><path d=\"M40 40L44 44\"/><path d=\"M60 40L56 44\"/><path d=\"M42 62V72H58V62\"/><path d=\"M46 72L46 80\"/><path d=\"M54 72L54 80\"/><path d=\"M22 68L78 92\"/><path d=\"M78 68L22 92\"/>"
      },
      {
        "name": "Flammable Material Symbol",
        "svg": "<path d=\"M50 10Q64 30 62 46Q74 40 74 28Q88 46 84 62Q80 86 50 90Q20 86 16 62Q12 46 26 36Q28 50 36 52Q32 32 50 10Z\"/>"
      },
      {
        "name": "Explosive Material Symbol",
        "svg": "<path d=\"M50.0 10.0L56.8 29.1L73.5 17.6L67.8 37.1L88.0 37.6L72.0 50.0L88.0 62.4L67.8 62.9L73.5 82.4L56.8 70.9L50.0 90.0L43.2 70.9L26.5 82.4L32.2 62.9L12.0 62.4L28.0 50.0L12.0 37.6L32.2 37.1L26.5 17.6L43.2 29.1Z\"/><path d=\"M44 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Oxidizing Material Symbol",
        "svg": "<path d=\"M50 10Q62 30 60 46Q70 40 70 28Q84 44 80 60Q76 80 50 82Q24 80 20 60Q16 44 30 36Q32 48 38 50Q34 32 50 10Z\"/><path d=\"M40 68a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Environmental Hazard Symbol",
        "svg": "<path d=\"M50 60L50 88\"/><path d=\"M50 70L36 56\"/><path d=\"M50 62L62 48\"/><path d=\"M36 56L30 50\"/><path d=\"M62 48L70 42\"/><path d=\"M14 90L86 90\"/><path d=\"M14 80q9-6 18 0t18 0 18 0 18 0 18 0\"/>"
      },
      {
        "name": "Biohazard Symbol",
        "svg": "<path d=\"M38 30a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/><path d=\"M20 62a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/><path d=\"M56 62a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/><path d=\"M44 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Radiation Warning Symbol",
        "svg": "<path d=\"M50 44Q36 36 26 46Q34 26 50 30\"/><path d=\"M56 56Q70 60 74 74Q58 78 52 62\"/><path d=\"M44 56Q30 62 24 76Q42 86 52 60\"/><path d=\"M50 44L50 44\"/>"
      },
      {
        "name": "Laboratory Emergency Exit",
        "svg": "<path d=\"M20 10H60V90H20Z\"/><path d=\"M50 50L76 50\"/><path d=\"M66 40L76 50L66 60\"/><path d=\"M20 90L60 90\"/>"
      }
    ],
    "Environmental and Water Treatment": [
      {
        "name": "Water Treatment Plant",
        "svg": "<path d=\"M14 40V86H40V40\"/><path d=\"M14 40L40 40\"/><path d=\"M14 40L27 32L40 40\"/><path d=\"M52 28V86H78V28\"/><path d=\"M40 64L52 64\"/><path d=\"M20 15.6C16.8 20.4 15.2 23.6 20 26.8C24.8 23.6 23.2 20.4 20 15.6Z\"/><path d=\"M20 20L20 30\"/>"
      },
      {
        "name": "Wastewater Treatment Plant",
        "svg": "<path d=\"M12 36V86H42V36\"/><path d=\"M58 36V86H88V36\"/><path d=\"M42 60L58 60\"/><path d=\"M14 70q4.0 -3 8 0q4.0 3 8 0q4.0 -3 8 0q4.0 3 8 0\"/><path d=\"M60 70q4.0 -3 8 0q4.0 3 8 0q4.0 -3 8 0q4.0 3 8 0\"/><path d=\"M74 24L74 12\"/><path d=\"M68 18L74 12L80 18\"/>"
      },
      {
        "name": "Sedimentation Tank",
        "svg": "<path d=\"M26 20V70L50.0 84L74 70V20\"/><path d=\"M22 20L78 20\"/><path d=\"M38 46a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M54 52a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M46 60a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M58 40a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M50 88L50 96\"/>"
      },
      {
        "name": "Clarifier",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M50 50L50 18\"/><path d=\"M50 50L70 64\"/><path d=\"M50 50L50 50\"/><path d=\"M50 86L50 94\"/><path d=\"M46 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Aeration Tank",
        "svg": "<path d=\"M24 22V90H76V22\"/><path d=\"M18 22L82 22\"/><path d=\"M30 80L70 80\"/><path d=\"M37 48a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M53 40a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M43 64a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M59 62a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M42 74q4-4 0-8\"/><path d=\"M58 74q4-4 0-8\"/><path d=\"M46 30L46 36\"/><path d=\"M54 28L54 36\"/>"
      },
      {
        "name": "Filtration Tank",
        "svg": "<path d=\"M24 16V86H76V16\"/><path d=\"M18 16L82 16\"/><path d=\"M24 40L76 40\"/><path d=\"M24 52L76 52\"/><path d=\"M24 64L76 64\"/><path d=\"M50 86L50 96\"/>"
      },
      {
        "name": "Activated Carbon Filter",
        "svg": "<path d=\"M42 14H58A10 10 0 0 1 68 24V76A10 10 0 0 1 58 86H42A10 10 0 0 1 32 76V24A10 10 0 0 1 42 14Z\"/><path d=\"M40 36a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M56 36a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M48 46a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M40 56a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M56 56a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M48 66a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M40 76a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M56 76a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M14 30L32 30\"/><path d=\"M68 70L86 70\"/>"
      },
      {
        "name": "Reverse Osmosis System",
        "svg": "<path d=\"M40 20H60V80H40Z\"/><path d=\"M50 20L50 80\"/><path d=\"M30 50L40 50\"/><path d=\"M60 50L70 50\"/><path d=\"M16 30L36 30\"/><path d=\"M16 62.8C12.4 68.2 10.6 71.8 16 75.4C21.4 71.8 19.6 68.2 16 62.8Z\"/><path d=\"M80 62.8C76.4 68.2 74.6 71.8 80 75.4C85.4 71.8 83.6 68.2 80 62.8Z\"/><path d=\"M14 88L86 88\"/>"
      },
      {
        "name": "Membrane Filtration System",
        "svg": "<path d=\"M10 50L90 50\"/><path d=\"M20 40a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M36 40a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M52 40a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M68 40a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M20 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M36 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M52 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M68 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M10 30L10 70\"/><path d=\"M90 30L90 70\"/>"
      },
      {
        "name": "Ion Exchange Column",
        "svg": "<path d=\"M46 12H54A12 12 0 0 1 66 24V76A12 12 0 0 1 54 88H46A12 12 0 0 1 34 76V24A12 12 0 0 1 46 12Z\"/><path d=\"M44 36a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M36 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M52 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M36 64a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M52 64a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M14 30L34 30\"/><path d=\"M66 70L86 70\"/>"
      },
      {
        "name": "Water Softener",
        "svg": "<path d=\"M42 20H58A8 8 0 0 1 66 28V74A8 8 0 0 1 58 82H42A8 8 0 0 1 34 74V28A8 8 0 0 1 42 20Z\"/><path d=\"M46 46a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M38 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M54 60a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M50 80.8C46.4 86.2 44.6 89.8 50 93.4C55.4 89.8 53.6 86.2 50 80.8Z\"/><path d=\"M50 82L50 76\"/>"
      },
      {
        "name": "Chlorination System",
        "svg": "<path d=\"M24 36H28A8 8 0 0 1 36 44V68A8 8 0 0 1 28 76H24A8 8 0 0 1 16 68V44A8 8 0 0 1 24 36Z\"/><path d=\"M26 36L26 26\"/><path d=\"M20 26L32 26\"/><path d=\"M36 56L54 56\"/><path d=\"M54 46V86H84V46\"/><path d=\"M58 70a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M70 74a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M64 80a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M70 29.6C66.8 34.4 65.2 37.6 70 40.8C74.8 37.6 73.2 34.4 70 29.6Z\"/>"
      },
      {
        "name": "Chemical Dosing System",
        "svg": "<path d=\"M14 40V90H50V40\"/><path d=\"M50 62L64 62\"/><path d=\"M64 50H86V74H64Z\"/><path d=\"M75 50L75 36\"/><path d=\"M20 27.6C16.8 32.4 15.2 35.6 20 38.8C24.8 35.6 23.2 32.4 20 27.6Z\"/><path d=\"M30 24L30 36\"/>"
      },
      {
        "name": "pH Adjustment System",
        "svg": "<path d=\"M16 50a34 34 0 1 0 68 0a34 34 0 1 0 -68 0\"/><path d=\"M50 50L66 38\"/><path d=\"M50 50L50 50\"/><path d=\"M47 50a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M24 68L36 58\"/><path d=\"M76 68L64 58\"/>"
      },
      {
        "name": "Sludge Treatment System",
        "svg": "<path d=\"M16 22V66L36.0 80L56 66V22\"/><path d=\"M25 40a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M37 50a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M29 60a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M41 64a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M21 70a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M64 40H88V76H64Z\"/><path d=\"M76 40L76 30\"/><path d=\"M70 50L82 50\"/><path d=\"M70 60L82 60\"/><path d=\"M20 88L56 88\"/>"
      },
      {
        "name": "Biological Treatment Reactor",
        "svg": "<path d=\"M20 28V84H80V28\"/><path d=\"M30 44a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M46 56a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M62 44a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M38 70a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M56 70a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/><path d=\"M47 36a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M16 22L84 22\"/><path d=\"M30 84q4-4 0-8\"/><path d=\"M50 84q4-4 0-8\"/><path d=\"M70 84q4-4 0-8\"/>"
      },
      {
        "name": "Air Pollution Monitoring Equipment",
        "svg": "<path d=\"M46 36L46 90\"/><path d=\"M54 36L54 90\"/><path d=\"M36 90L64 90\"/><path d=\"M58 24H88V46H58Z\"/><path d=\"M64 46L82 46\"/><path d=\"M20 30q-6-8 0-16q6-8 0-16\"/><path d=\"M10 52h16\"/><path d=\"M10 60h12\"/>"
      },
      {
        "name": "Gas Analyzer",
        "svg": "<path d=\"M18 30H82V70H18Z\"/><path d=\"M28 40H44V60H28Z\"/><path d=\"M52 46L74 46\"/><path d=\"M52 56L74 56\"/><path d=\"M40 70L40 84\"/><path d=\"M60 70L60 84\"/><path d=\"M32 84L68 84\"/>"
      },
      {
        "name": "Smoke Analyzer",
        "svg": "<path d=\"M40 40H60V90H40Z\"/><path d=\"M36 40L64 40\"/><path d=\"M24 30a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M36 22a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M54 18a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M18 84L82 84\"/><path d=\"M44 48H56V48H44Z\"/>"
      },
      {
        "name": "Industrial Emission Monitoring System",
        "svg": "<path d=\"M40 46H60V86H40Z\"/><path d=\"M30 46L70 46\"/><path d=\"M14 14H46V36H14Z\"/><path d=\"M22 24L38 24\"/><path d=\"M30 36L30 46\"/><path d=\"M60 20L86 20\"/><path d=\"M74 20L74 10\"/><path d=\"M14 86L86 86\"/>"
      },
      {
        "name": "Water Quality Testing Kit",
        "svg": "<path d=\"M18 40H82V86H18Z\"/><path d=\"M32 28L32 40\"/><path d=\"M46 28L46 40\"/><path d=\"M60 28L60 40\"/><path d=\"M28 20L64 20\"/><path d=\"M76 15.6C72.8 20.4 71.2 23.6 76 26.8C80.8 23.6 79.2 20.4 76 15.6Z\"/><path d=\"M30 58L70 58\"/>"
      },
      {
        "name": "Dissolved Oxygen Meter",
        "svg": "<path d=\"M18 20H82A4 4 0 0 1 86 24V46A4 4 0 0 1 82 50H18A4 4 0 0 1 14 46V24A4 4 0 0 1 18 20Z\"/><path d=\"M44 36a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/><path d=\"M50 50L50 70\"/><path d=\"M46 70H54A4 4 0 0 1 58 74V80A4 4 0 0 1 54 84H46A4 4 0 0 1 42 80V74A4 4 0 0 1 46 70Z\"/><path d=\"M10 90q10-6 20 0t20 0 20 0 20 0\"/><path d=\"M69 62a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/><path d=\"M58 74a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/>"
      },
      {
        "name": "Turbidity Meter",
        "svg": "<path d=\"M34 14H66V84H34Z\"/><path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M40 36a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M56 44a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M42 62a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M58 70a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/><path d=\"M14 50L34 50\"/><path d=\"M66 50L86 50\"/>"
      },
      {
        "name": "Total Dissolved Solids Meter",
        "svg": "<path d=\"M18 20H82V52H18Z\"/><path d=\"M30 36L54 36\"/><path d=\"M30 44L44 44\"/><path d=\"M60 66.4C55.2 73.6 52.8 78.4 60 83.2C67.2 78.4 64.8 73.6 60 66.4Z\"/><path d=\"M52 70a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M60 66a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M64 78a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M54 82a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"/>"
      },
      {
        "name": "Environmental Laboratory",
        "svg": "<path d=\"M14 88L86 88\"/><path d=\"M22 88L22 36L50 22L78 36L78 88\"/><path d=\"M40 88L40 64L60 64L60 88\"/><path d=\"M30 52q8-8 16 0t16 0\"/><path d=\"M46 36a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      }
    ]
  },
  "physics": {
    "Basic Components Laboratory": [
      {
        "name": "Laboratory Table",
        "svg": "<path d=\"M8 38L92 38 M18 38L18 88 M82 38L82 88 M18 72L82 72\"/>"
      },
      {
        "name": "Physics Laboratory Setup",
        "svg": "<path d=\"M8 88L92 88 M24 88L24 14 M24 14L36 14 M24 30L60 30 M60 30L60 58 M52 66a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Retort Stand",
        "svg": "<path d=\"M18 88L82 88 M50 88L50 12 M50 30L76 30 M76 30L76 40 M70 40L82 40\"/>"
      },
      {
        "name": "Clamp Stand",
        "svg": "<path d=\"M18 88L82 88 M40 88L40 12 M40 28L70 28 M70 28L70 40 M64 40L76 40 M64 40L64 50 M76 40L76 50\"/>"
      },
      {
        "name": "Laboratory Tripod",
        "svg": "<path d=\"M22 36A28 8 0 1 0 78 36A28 8 0 1 0 22 36 M22 36L50 88 M78 36L50 88 M50 44L50 88\"/>"
      },
      {
        "name": "Spring Balance",
        "svg": "<path d=\"M50 6L50 16 M36 30a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M50 44L50 56 M50 56L56 58.2L44 60.5L56 62.8L44 65.0L56 67.2L44 69.5L56 71.8L44 74.0L50 74 M50 74L50 82 M44 88a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M50 16L62 24\"/>"
      },
      {
        "name": "Digital Weighing Scale",
        "svg": "<path d=\"M14 80L86 80 M14 80L14 70 M86 80L86 70 M14 70L86 70 M50 70L50 52 M30 22H70V52H30Z\"/>"
      },
      {
        "name": "Measuring Cylinder",
        "svg": "<path d=\"M34 12L34 86 M66 12L66 86 M34 86L66 86 M34 12L38 12 M62 12L66 12 M34 30L42 30 M34 46L42 46 M34 62L42 62 M34 74L42 74\"/>"
      },
      {
        "name": "Stopwatch",
        "svg": "<path d=\"M18 56a32 32 0 1 0 64 0a32 32 0 1 0 -64 0 M50 24L50 12 M42 12L58 12 M50 56L50 24 M50 56L66 68\"/>"
      },
      {
        "name": "Vernier Caliper",
        "svg": "<path d=\"M8 46L92 46 M8 38L8 54 M30 38L30 54 M30 46L30 28 M30 28L70 28 M70 28L70 38 M70 38L92 38\"/>"
      },
      {
        "name": "Micrometer Screw Gauge",
        "svg": "<path d=\"M14 40L14 60 M14 40L40 40 M14 60L40 60 M40 40L40 60 M40 50L60 50 M60 38L60 62 M60 38L86 38 M60 62L86 62 M86 38L86 62 M76 38L76 62 M14 40L6 40\"/>"
      },
      {
        "name": "Measuring Tape",
        "svg": "<path d=\"M12 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0 M48 50L90 50 M90 50L90 58 M80 50L80 58 M70 50L70 58 M90 58L80 58\"/>"
      },
      {
        "name": "Meter Scale",
        "svg": "<path d=\"M6 40L94 40 M6 40L6 60 M94 40L94 60 M6 60L94 60 M6.0 60L6.0 50 M14.8 60L14.8 50 M23.6 60L23.6 50 M32.4 60L32.4 50 M41.2 60L41.2 50 M50.0 60L50.0 50 M58.8 60L58.8 50 M67.6 60L67.6 50 M76.4 60L76.4 50 M85.2 60L85.2 50 M94.0 60L94.0 50\"/>"
      },
      {
        "name": "Laboratory Thermometer",
        "svg": "<path d=\"M42 60V16A8 8 0 0 1 58 16V60A14 14 0 1 1 42 60Z M58 30L66 30 M58 44L66 44\"/>"
      },
      {
        "name": "Digital Thermometer",
        "svg": "<path d=\"M30 8H70V36H30Z M50 36L50 70 M50 70Q56 80 50 88Q44 80 50 70Z M40 18L60 18\"/>"
      },
      {
        "name": "Digital Multimeter",
        "svg": "<path d=\"M26 14H74V64H26Z M40 64A10 10 0 0 1 60 64 M50 64L50 50 M50 64L50 76 M38 76L62 76 M38 76L38 90 M62 76L62 90 M26 22L16 22\"/>"
      },
      {
        "name": "Analog Meter",
        "svg": "<path d=\"M14 56a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 56L66 36 M50 92L38 92 M50 20L50 28 M50 92L62 92\"/>"
      },
      {
        "name": "Scientific Calculator",
        "svg": "<path d=\"M20 6H80V94H20Z M20 18L80 18 M20 32L80 32 M20 46L80 46 M20 60L80 60 M20 74L80 74 M20 88L80 88 M40 18L40 88 M60 18L60 88\"/>"
      },
      {
        "name": "Laboratory Power Supply",
        "svg": "<path d=\"M20 40H80V84H20Z M40 40L40 30 M34 24a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M60 36a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M20 50L8 50 M8 50L8 92 M8 92L20 92 M80 50L92 50\"/>"
      }
    ],
    "Classical Mechanics and Motion": [
      {
        "name": "Moving Object",
        "svg": "<path d=\"M30 40H60V70H30Z M6 70L94 70 M60 55L90 55 M84.0 58.6L90 55L84.0 51.4\"/>"
      },
      {
        "name": "Falling Object",
        "svg": "<path d=\"M38 14H62V38H38Z M50 38L50 82 M46.4 76.0L50 82L53.6 76.0\"/>"
      },
      {
        "name": "Inclined Plane",
        "svg": "<path d=\"M8 80L92 80L92 30Z M40.0 61.0L57.2 50.7L49.0 37.0L31.8 47.2Z\"/>"
      },
      {
        "name": "Pulley System",
        "svg": "<path d=\"M38 30a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M50 18L50 6 M30 6L70 6 M38 30L38 50 M26 50H50V70H26Z M62 30L62 60 M56 60H76V80H56Z\"/>"
      },
      {
        "name": "Fixed Pulley",
        "svg": "<path d=\"M36 36a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M50 22L50 6 M30 6L70 6 M64 36L64 60 M54 60H74V82H54Z\"/>"
      },
      {
        "name": "Movable Pulley",
        "svg": "<path d=\"M36 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M50 36L50 12 M30 12L70 12 M50 64L50 80 M40 80H60V94H40Z\"/>"
      },
      {
        "name": "Compound Pulley",
        "svg": "<path d=\"M24 40a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M56 40a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M34 30L66 30 M34 50L66 50 M50 30L50 12 M30 12L70 12 M50 50L50 64 M40 64H60V82H40Z\"/>"
      },
      {
        "name": "Lever",
        "svg": "<path d=\"M8 40L92 40 M50 40L38 70H62Z M14 24H32V40H14Z M84 40L84 58 M80.4 52.0L84 58L87.6 52.0\"/>"
      },
      {
        "name": "Fulcrum",
        "svg": "<path d=\"M8 40L92 40 M50 40L38 70H62Z M30 70L70 70 M46 40a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Wheel and Axle",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M44 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M56 50L80 50 M50 56L50 80\"/>"
      },
      {
        "name": "Spring and Mass System",
        "svg": "<path d=\"M20 10L80 10 M50 10L50 22 M50 22L56 25.5L44 29.0L56 32.5L44 36.0L56 39.5L44 43.0L56 46.5L44 50.0L50 50 M38 50H62V70H38Z\"/>"
      },
      {
        "name": "Simple Pendulum",
        "svg": "<path d=\"M30 12L70 12 M50 12L50 50 M38 62a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/>"
      },
      {
        "name": "Compound Pendulum",
        "svg": "<path d=\"M34 12L66 12 M50 12L66 74 M56 84a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Ballistic Pendulum",
        "svg": "<path d=\"M20 12L56 12 M30 12L30 44 M48 12L48 44 M26 44H52V62H26Z M84 53L52 53 M58.0 49.4L52 53L58.0 56.6\"/>"
      },
      {
        "name": "Projectile Motion",
        "svg": "<path d=\"M10 80Q50 -20 90 80 M6 80L94 80 M10 80L24 62\"/>"
      },
      {
        "name": "Circular Motion",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M50 50L80 50 M50 20L64 12 M60.6 18.1L64 12L57.0 11.9\"/>"
      },
      {
        "name": "Rotating Disc",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M50 20L50 80 M80 50A30 30 0 0 0 66 24 M72.0 27.6L66 24L65.7 31.0\"/>"
      },
      {
        "name": "Flywheel",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M58 50L80 50 M50 58L50 80 M42 50L20 50 M50 42L50 20\"/>"
      },
      {
        "name": "Gear Mechanism",
        "svg": "<path d=\"M18 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M50 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M34 34L34 26 M34 66L34 74 M66 34L66 26 M66 66L66 74\"/>"
      },
      {
        "name": "Friction Block",
        "svg": "<path d=\"M30 50H60V80H30Z M6 80L94 80 M30 65L12 65 M18.0 61.4L12 65L18.0 68.6 M60 65L82 65 M76.0 68.6L82 65L76.0 61.4\"/>"
      },
      {
        "name": "Collision of Two Objects",
        "svg": "<path d=\"M14 56H36V78H14Z M64 56H86V78H64Z M6 78L94 78 M36 67L48 67 M42.0 70.6L48 67L42.0 63.4 M64 67L52 67 M58.0 63.4L52 67L58.0 70.6\"/>"
      },
      {
        "name": "Newton's Cradle",
        "svg": "<path d=\"M14 12L86 12 M22 12L22 42 M14 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M38 12L38 42 M30 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M54 12L54 42 M46 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M70 12L70 42 M62 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M86 12L86 42 M78 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Force Diagram",
        "svg": "<path d=\"M38 38H62V62H38Z M50 38L50 12 M53.6 18.0L50 12L46.4 18.0 M50 62L50 88 M46.4 82.0L50 88L53.6 82.0 M62 50L88 50 M82.0 53.6L88 50L82.0 46.4 M38 50L12 50 M18.0 46.4L12 50L18.0 53.6\"/>"
      },
      {
        "name": "Free-Body Diagram",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M50 42L50 14 M53.6 20.0L50 14L46.4 20.0 M50 58L50 86 M46.4 80.0L50 86L53.6 80.0 M58 50L86 50 M80.0 53.6L86 50L80.0 46.4 M42 50L14 50 M20.0 46.4L14 50L20.0 53.6\"/>"
      },
      {
        "name": "Centripetal Force Illustration",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M75 50a5 5 0 1 0 10 0a5 5 0 1 0 -10 0 M75 50L56 50 M62.0 46.4L56 50L62.0 53.6\"/>"
      },
      {
        "name": "Torque Illustration",
        "svg": "<path d=\"M24 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M36 50L84 50 M84 50L84 76 M80.4 70.0L84 76L87.6 70.0\"/>"
      },
      {
        "name": "Angular Momentum Illustration",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M75 50a5 5 0 1 0 10 0a5 5 0 1 0 -10 0 M50 20L50 6 M53.6 12.0L50 6L46.4 12.0\"/>"
      },
      {
        "name": "Rolling Motion",
        "svg": "<path d=\"M30 60a20 20 0 1 0 40 0a20 20 0 1 0 -40 0 M6 80L94 80 M50 60L50 40 M50 60L70 60 M30 60L12 60 M18.0 56.4L12 60L18.0 63.6\"/>"
      },
      {
        "name": "Harmonic Oscillator",
        "svg": "<path d=\"M14 20L14 80 M6 58L94 58 M14 47L19.8 53L25.5 41L31.2 53L37.0 41L42.8 53L48.5 41L54.2 53L60.0 41L60 47 M60 36H82V58H60Z\"/>"
      },
      {
        "name": "Damped Oscillator",
        "svg": "<path d=\"M14 20L14 80 M6 58L94 58 M14 47L19.8 53L25.5 41L31.2 53L37.0 41L42.8 53L48.5 41L54.2 53L60.0 41L60 47 M60 36H82V58H60Z M56 8H84V22H56Z M70 22L70 36\"/>"
      }
    ],
    "Matter and Fluid Mechanics": [
      {
        "name": "Hydraulic Press",
        "svg": "<path d=\"M14 30H38V80H14Z M62 20H86V80H62Z M14 80L86 80 M26 30L26 6 M74 20L74 6\"/>"
      },
      {
        "name": "Hydraulic Lift",
        "svg": "<path d=\"M30 40L70 40 M50 40L50 48 M44 48H56V80H44Z M8 80L92 80 M14 60H28V82H14Z M28 70L44 70\"/>"
      },
      {
        "name": "Hydraulic Brake",
        "svg": "<path d=\"M14 34H36V64H14Z M14 49L4 49 M36 49L58 49 M58 36H78V62H58Z M78 49a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M26 34L26 64\"/>"
      },
      {
        "name": "Hydraulic Jack",
        "svg": "<path d=\"M38 40H62V78H38Z M50 40L50 20 M38 14H62V20H38Z M16 78L84 78 M62 58L86 40 M30 78L30 82\"/>"
      },
      {
        "name": "Pascal's Law Apparatus",
        "svg": "<path d=\"M18 44H82V80H18Z M22 20H34V44H22Z M28 20L28 12 M56 14H84V44H56Z M56 20L84 20\"/>"
      },
      {
        "name": "Archimedes' Principle Apparatus",
        "svg": "<path d=\"M24 40L24 90 M24 90L76 90 M76 90L76 40 M24 40L76 40 M24 56L76 56 M30 10L70 10 M50 10L50 46 M42 46H58V62H42Z M30 10L30 40\"/>"
      },
      {
        "name": "Floating Body",
        "svg": "<path d=\"M8 60L92 60 M8 60V90H92V60 M34 36H66V60H34Z\"/>"
      },
      {
        "name": "Submerged Body",
        "svg": "<path d=\"M8 40V90H92V40 M8 40L92 40 M38 56H62V76H38Z M50 56L50 20 M30 20L70 20 M30 20L30 40\"/>"
      },
      {
        "name": "U-Tube Manometer",
        "svg": "<path d=\"M18 20V78Q18 86 26 86H74Q82 86 82 78V20 M18 56L82 56 M18 40L12 40 M82 62L88 62\"/>"
      },
      {
        "name": "Barometer",
        "svg": "<path d=\"M40 10H60V70H40Z M40 40L60 40 M24 70H76L70 88H30Z\"/>"
      },
      {
        "name": "Pressure Gauge",
        "svg": "<path d=\"M20 46a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M50 46L71 25 M50 76L50 92 M40 92L60 92\"/>"
      },
      {
        "name": "Pitot Tube",
        "svg": "<path d=\"M10 24H64V70 M6 70L94 70 M88.0 73.6L94 70L88.0 66.4\"/>"
      },
      {
        "name": "Venturi Meter",
        "svg": "<path d=\"M6 36H34L44 46H56L66 36H94V64H66L56 54H44L34 64H6Z M50 46L50 22 M44 22L56 22\"/>"
      },
      {
        "name": "Orifice Meter",
        "svg": "<path d=\"M6 40L94 40 M6 60L94 60 M50 40L50 46 M50 54L50 60 M30 40L30 14 M30 14L70 14 M70 14L70 40\"/>"
      },
      {
        "name": "Bernoulli's Principle Apparatus",
        "svg": "<path d=\"M6 40H30L40 52H60L70 40H94V64H70L60 52H40L30 64H6Z M20 40L20 16 M50 52L50 22 M80 40L80 16 M20 16L80 16\"/>"
      },
      {
        "name": "Water Tank",
        "svg": "<path d=\"M18 20V84H82V20 M12 20L88 20 M18 50L82 50 M82 70L94 70\"/>"
      },
      {
        "name": "Flowing Liquid Pipe",
        "svg": "<path d=\"M6 38H94V62H6Z M6 50L94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Laminar Flow",
        "svg": "<path d=\"M6 34H94V66H6Z M6 42L94 42 M6 50L94 50 M6 58L94 58\"/>"
      },
      {
        "name": "Turbulent Flow",
        "svg": "<path d=\"M6 34H94V66H6Z M6 42q15-10 30 0t30 0t28 0 M6 50q15 10 30 0t30 0t28 0 M6 58q15-10 30 0t30 0t28 0\"/>"
      },
      {
        "name": "Capillary Tube",
        "svg": "<path d=\"M40 10L40 90 M60 10L60 90 M40 44L60 44 M24 90L76 90 M24 90L24 60 M76 90L76 60\"/>"
      },
      {
        "name": "Surface Tension Apparatus",
        "svg": "<path d=\"M16 30H84V70H16Z M16 50L84 50\"/>"
      },
      {
        "name": "Viscosity Experiment Apparatus",
        "svg": "<path d=\"M30 10V90H70V10 M26 10L74 10 M50 10L50 34 M44 40a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Hydrometer",
        "svg": "<path d=\"M42 10H58V60A14 14 0 1 1 42 60Z M58 30L66 30 M58 44L66 44\"/>"
      },
      {
        "name": "Density Measurement Apparatus",
        "svg": "<path d=\"M12 30L88 30 M50 30L50 14 M36 14L64 14 M12 30L12 50 M2 50L22 50 M88 30L88 50 M78 50L98 50 M6 38H18V50H6Z\"/>"
      },
      {
        "name": "Fluid Pressure Diagram",
        "svg": "<path d=\"M20 10V90H80V10 M20 30L80 30 M20 90L80 90 M20 44L36 44 M30.0 47.6L36 44L30.0 40.4 M20 60L46 60 M40.0 63.6L46 60L40.0 56.4 M20 76L56 76 M50.0 79.6L56 76L50.0 72.4 M80 44L64 44 M70.0 40.4L64 44L70.0 47.6 M80 60L54 60 M60.0 56.4L54 60L60.0 63.6 M80 76L44 76 M50.0 72.4L44 76L50.0 79.6\"/>"
      }
    ],
    "Heat and Thermodynamics": [
      {
        "name": "Heat Source",
        "svg": "<path d=\"M20 84L80 84 M50 84Q34 74 38 58Q44 66 46 58Q48 42 50 30Q60 46 58 58Q66 52 64 42Q74 60 62 74Q56 80 50 84Z\"/>"
      },
      {
        "name": "Bunsen Burner",
        "svg": "<path d=\"M24 88L76 88 M44 40H56V88H44Z M50 40Q40 30 44 18Q48 26 50 22Q54 30 56 24Q60 32 50 40Z M44 70L56 70\"/>"
      },
      {
        "name": "Electric Heater",
        "svg": "<path d=\"M14 40H86V70H14Z M14 55L23.0 61L32.0 49L41.0 61L50.0 49L59.0 61L68.0 49L77.0 61L86.0 49L86 55 M30 70L30 84 M70 70L70 84\"/>"
      },
      {
        "name": "Thermometer",
        "svg": "<path d=\"M42 60V16A8 8 0 0 1 58 16V60A14 14 0 1 1 42 60Z M58 30L66 30 M58 44L66 44\"/>"
      },
      {
        "name": "Temperature Sensor",
        "svg": "<path d=\"M20 14H80V42H20Z M50 42L50 72 M42 80a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Heat Conduction Apparatus",
        "svg": "<path d=\"M20 44H80V56H20Z M20 30L20 70 M80 36L80 64 M8 50L20 50 M80 50L92 50\"/>"
      },
      {
        "name": "Convection Apparatus",
        "svg": "<path d=\"M16 16H84V84H16Z M16 40C40 30 60 30 84 40 M78.0 43.6L84 40L78.0 36.4 M84 60C60 70 40 70 16 60 M22.0 56.4L16 60L22.0 63.6\"/>"
      },
      {
        "name": "Radiation Apparatus",
        "svg": "<path d=\"M14 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M42 50L72 50 M38.7 41L68 26 M38.7 59L68 74\"/>"
      },
      {
        "name": "Calorimeter",
        "svg": "<path d=\"M24 40V84Q24 90 30 90H70Q76 90 76 84V40 M18 40L82 40 M50 40L50 67 M45 72a5 5 0 1 0 10 0a5 5 0 1 0 -10 0\"/>"
      },
      {
        "name": "Specific Heat Capacity Experiment",
        "svg": "<path d=\"M24 36V90H76V36 M24 50L76 50 M40 74H60V90H40Z M24 36L76 36\"/>"
      },
      {
        "name": "Latent Heat Experiment",
        "svg": "<path d=\"M36 44H64V70H36Z M14 70L86 70 M30 70L30 88 M70 70L70 88 M20 88L80 88\"/>"
      },
      {
        "name": "Thermal Expansion Apparatus",
        "svg": "<path d=\"M14 30L14 70 M14 46H84V54H14Z M84 46L84 30 M84 30L94 22\"/>"
      },
      {
        "name": "Linear Expansion Apparatus",
        "svg": "<path d=\"M14 30L14 70 M86 30L86 70 M14 46H86V54H14Z M86 50L96 50 M90.0 53.6L96 50L90.0 46.4\"/>"
      },
      {
        "name": "Bimetallic Strip",
        "svg": "<path d=\"M14 60Q50 30 86 60Q50 38 14 68Z M86 60L86 68\"/>"
      },
      {
        "name": "Heat Exchanger",
        "svg": "<path d=\"M14 34H86V66H14Z M14 50L86 50 M14 42L4 42 M86 58L96 58\"/>"
      },
      {
        "name": "Steam Engine",
        "svg": "<path d=\"M10 44H40V84H10Z M22 44L22 22 M40 50L48 50 M48 40H78V64H48Z M78 52L88 52 M88 52L88 60 M78 70a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M6 84L94 84 M60 64L60 84\"/>"
      },
      {
        "name": "Stirling Engine",
        "svg": "<path d=\"M16 30H40V70H16Z M60 30H84V70H60Z M40 40H60V60H40 M8 70L92 70 M50 70L50 76 M42 84a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Internal Combustion Engine",
        "svg": "<path d=\"M30 20H66V64H30Z M48 8L48 20 M30 46L66 46 M48 46L48 70 M38 80a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Refrigerator",
        "svg": "<path d=\"M24 8H76V92H24Z M24 40L76 40 M68 40L68 30 M68 40L68 52\"/>"
      },
      {
        "name": "Air Conditioner",
        "svg": "<path d=\"M10 28H90V58H10Z M10 40L90 40 M30 58L30 82 M26.4 76.0L30 82L33.6 76.0 M50 58L50 82 M46.4 76.0L50 82L53.6 76.0 M70 58L70 82 M66.4 76.0L70 82L73.6 76.0\"/>"
      },
      {
        "name": "Heat Pump",
        "svg": "<path d=\"M30 30H70V70H30Z M4 50L30 50 M24.0 53.6L30 50L24.0 46.4 M70 50L96 50 M90.0 53.6L96 50L90.0 46.4 M50 30L50 14 M50 14L70 14 M70 14L70 30\"/>"
      },
      {
        "name": "Thermodynamic Piston-Cylinder",
        "svg": "<path d=\"M24 14V90H76V14 M24 50L76 50 M40 20L60 20 M50 50L50 20\"/>"
      },
      {
        "name": "Gas Law Apparatus",
        "svg": "<path d=\"M16 36H66V86H16Z M66 62L92 62 M74 50H88V62H74Z M66 36L66 62\"/>"
      },
      {
        "name": "Pressure-Volume Experiment",
        "svg": "<path d=\"M14 14V86H88 M14 30Q30 78 86 72\"/>"
      },
      {
        "name": "Carnot Engine Diagram",
        "svg": "<path d=\"M30 30C40 20 60 20 70 30C80 40 80 60 70 70C60 80 40 80 30 70C20 60 20 40 30 30Z M64.0 33.6L70 30L64.0 26.4\"/>"
      },
      {
        "name": "Entropy Illustration",
        "svg": "<path d=\"M54.0 50.0L54.3 50.8L54.5 51.6L54.5 52.6L54.2 53.6L53.8 54.5L53.2 55.5L52.3 56.3L51.2 57.0L50.0 57.5L48.6 57.7L47.2 57.7L45.7 57.5L44.2 56.9L42.8 56.0L41.5 54.9L40.5 53.5L39.6 51.8L39.1 50.0L38.9 48.0L39.0 46.0L39.6 44.0L40.5 42.0L41.8 40.2L43.4 38.6L45.3 37.2L47.6 36.2L50.0 35.6L52.6 35.5L55.2 35.8L57.8 36.6L60.2 37.8L62.5 39.5L64.4 41.7L66.0 44.2L67.2 47.0L67.8 50.0L67.9 53.2L67.5 56.4L66.4 59.5L64.8 62.4L62.7 65.1L60.1 67.4L57.0 69.3L53.6 70.6L50.0 71.3L46.2 71.3L42.5 70.7L38.8 69.4L35.3 67.5L32.2 64.9L29.6 61.8L27.5 58.2L26.0 54.2L25.3 50.0L25.3 45.6L26.0 41.3L27.6 37.1L29.9 33.1L32.9 29.6L36.5 26.6L40.6 24.2L45.2 22.6L50.0 21.8L55.0 21.9L59.9 22.8L64.7 24.6L69.1 27.2L73.1 30.6L76.4 34.8L79.0 39.4L80.8 44.6L81.6 50.0 M77.2 44.6L81.6 50.0L84.3 43.5\"/>"
      },
      {
        "name": "Temperature Distribution Diagram",
        "svg": "<path d=\"M10 44H90V56H10Z M26 44L26 56 M42 44L42 56 M58 44L58 56 M74 44L74 56 M16 30L16 44 M12.4 38.0L16 44L19.6 38.0\"/>"
      },
      {
        "name": "Thermal Insulation",
        "svg": "<path d=\"M14 20H86V80H14Z M30 20L30 80 M50 20L50 80 M70 20L70 80 M4 40L14 40 M8.0 43.6L14 40L8.0 36.4 M4 60L14 60 M8.0 63.6L14 60L8.0 56.4\"/>"
      },
      {
        "name": "Cooling Tower",
        "svg": "<path d=\"M26 10Q34 40 30 90H70Q66 40 74 10 M26 10L74 10 M6 60L30 60 M24.0 63.6L30 60L24.0 56.4 M94 60L70 60 M76.0 56.4L70 60L76.0 63.6\"/>"
      },
      {
        "name": "Thermocouple",
        "svg": "<path d=\"M30 12H70V26H30Z M34 26L50 85 M66 26L50 85 M47 88a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/>"
      }
    ],
    "Waves Sound & Acoustics": [
      {
        "name": "Transverse Wave",
        "svg": "<path d=\"M6 50Q18 18 30 50T54 50T78 50T94 50\"/>"
      },
      {
        "name": "Longitudinal Wave",
        "svg": "<path d=\"M6 86L94 86 M10 86L10 50 M22 86L22 38 M32 86L32 52 M44 86L44 30 M54 86L54 54 M64 86L64 36 M74 86L74 50 M86 86L86 40\"/>"
      },
      {
        "name": "Sine Wave",
        "svg": "<path d=\"M8 10L8 90 M8 50L94 50 M8 50C20 10 32 10 40 50S72 90 80 50\"/>"
      },
      {
        "name": "Standing Wave",
        "svg": "<path d=\"M10 30L10 70 M90 30L90 70 M10 50Q25 14 40 50Q55 86 70 50Q80 30 90 50\"/>"
      },
      {
        "name": "Progressive Wave",
        "svg": "<path d=\"M8 50Q20 22 32 50T56 50T80 50 M80 50L94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Wave Reflection",
        "svg": "<path d=\"M70 8L70 92 M18 30L70 60 M70 60L18 90 M77.0 59.9L70 60L73.4 66.1 M21.4 83.9L18 90L25.0 90.1\"/>"
      },
      {
        "name": "Wave Refraction",
        "svg": "<path d=\"M6 50L94 50 M20 14L50 50 M50 50L70 88\"/>"
      },
      {
        "name": "Wave Diffraction",
        "svg": "<path d=\"M50 6L50 40 M50 60L50 94 M50 40A22 22 0 0 1 50 60 M50 40A40 40 0 0 1 50 60\"/>"
      },
      {
        "name": "Wave Interference",
        "svg": "<path d=\"M6 10L6 90 M6 35Q20 15 34 35T62 35T90 35 M6 65Q20 45 34 65T62 65T90 65\"/>"
      },
      {
        "name": "Superposition of Waves",
        "svg": "<path d=\"M6 50L94 50 M6 50Q14 26 22 50T38 50T54 50T70 50T86 50 M6 50Q14 74 22 50T38 50T54 50T70 50T86 50\"/>"
      },
      {
        "name": "Wave Propagation",
        "svg": "<path d=\"M6 50Q18 26 30 50T54 50T78 50 M78 50L94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Ripple Tank",
        "svg": "<path d=\"M6 6H94V94H6Z M50 6L50 26 M50 26A16 16 0 0 0 34 42 M50 26A34 34 0 0 0 16 60 M50 26A16 16 0 0 1 66 42 M50 26A34 34 0 0 1 84 60\"/>"
      },
      {
        "name": "Tuning Fork",
        "svg": "<path d=\"M36 10V54A14 14 0 0 0 64 54V10 M50 68L50 90\"/>"
      },
      {
        "name": "Resonance Tube",
        "svg": "<path d=\"M38 40V90H62V40 M34 40L66 40 M38 66L62 66 M44 6V18A6 6 0 0 0 56 18V6 M50 24L50 40\"/>"
      },
      {
        "name": "Sound Wave Generator",
        "svg": "<path d=\"M14 40H30L56 20V80L30 60H14Z M56 34Q66 50 56 66 M56 26Q78 50 56 74 M56 22Q90 50 56 78\"/>"
      },
      {
        "name": "Loudspeaker",
        "svg": "<path d=\"M16 8H84V92H16Z M50 8L50 16 M44 16a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M16 58a34 34 0 1 0 68 0a34 34 0 1 0 -68 0\"/>"
      },
      {
        "name": "Microphone",
        "svg": "<path d=\"M40 14A10 10 0 0 1 60 14V46A10 10 0 0 1 40 46Z M30 40A20 20 0 0 0 70 40 M50 46L50 86 M34 86L66 86\"/>"
      },
      {
        "name": "Ear Model",
        "svg": "<path d=\"M40 84C20 84 14 68 16 50C18 24 36 14 54 16C76 18 84 40 80 56C78 66 70 70 66 74C62 80 56 84 40 84 M54 16C44 30 44 46 56 56\"/>"
      },
      {
        "name": "Echo Illustration",
        "svg": "<path d=\"M6 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M18 50L88 60 M88 60L18 70 M88 8L88 92\"/>"
      },
      {
        "name": "Doppler Effect",
        "svg": "<path d=\"M22 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M38 50L90 50 M84.0 53.6L90 50L84.0 46.4 M70 50Q78 34 70 18 M84 50Q92 34 84 18\"/>"
      },
      {
        "name": "Sonar System",
        "svg": "<path d=\"M14 70H86L76 82H24Z M50 70L50 56 M30 70A20 20 0 0 0 70 70 M18 70A32 32 0 0 0 82 70\"/>"
      },
      {
        "name": "Ultrasound Transducer",
        "svg": "<path d=\"M38 10H62V34H38Z M50 34L55 39.6L45 45.2L55 50.8L45 56.4L55 62.0L45 67.6L55 73.2L45 78.8L55 84.4L45 90.0L50 90\"/>"
      },
      {
        "name": "Oscilloscope Waveform",
        "svg": "<path d=\"M8 14H92V76H8Z M8 45Q20 20 32 45T56 45T80 45T92 45 M50 76L50 86 M34 86L66 86\"/>"
      },
      {
        "name": "Musical String Vibration",
        "svg": "<path d=\"M8 30L8 70 M92 30L92 70 M8 50Q26 14 50 50Q74 86 92 50\"/>"
      },
      {
        "name": "Organ Pipe",
        "svg": "<path d=\"M36 12H64V88H36Z M36 46L50 40L64 46\"/>"
      },
      {
        "name": "Acoustic Resonance Apparatus",
        "svg": "<path d=\"M38 40V90H62V40 M34 40L66 40 M38 66L62 66 M44 6V18A6 6 0 0 0 56 18V6 M50 24L50 40\"/>"
      },
      {
        "name": "Decibel Meter",
        "svg": "<path d=\"M14 14H86V86H14Z M30 86A20 20 0 0 1 70 86 M50 86L62 72\"/>"
      },
      {
        "name": "Soundproof Chamber",
        "svg": "<path d=\"M10 10H90V90H10Z M10 26L20 26 M10 46L20 46 M10 66L20 66 M80 26L90 26 M80 46L90 46 M80 66L90 66 M30 10L30 20 M50 10L50 20 M70 10L70 20 M2 50L10 50 M4.0 53.6L10 50L4.0 46.4\"/>"
      },
      {
        "name": "Frequency Measurement Setup",
        "svg": "<path d=\"M6 50Q16 22 26 50T46 50T66 50T86 50 M6 50L6 76 M6 76L94 76 M24 76L24 68 M42 76L42 68 M60 76L60 68 M78 76L78 68\"/>"
      },
      {
        "name": "Wave Generator",
        "svg": "<path d=\"M10 30H60V70H10Z M22 30L22 20 M16 14a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M60 50Q68 26 76 50T92 50\"/>"
      }
    ],
    "Optics and Light": [
      {
        "name": "Convex Lens",
        "svg": "<path d=\"M50 8C62 30 62 70 50 92C38 70 38 30 50 8Z M6 50L42 50 M58 50L94 50\"/>"
      },
      {
        "name": "Concave Lens",
        "svg": "<path d=\"M22 8H78Q62 50 78 92H22Q38 50 22 8Z M6 50L38 50 M62 50L94 50\"/>"
      },
      {
        "name": "Convex Mirror",
        "svg": "<path d=\"M40 10Q74 50 40 90 M50.9 26.0L38.9 26.0 M57.0 50.0L45.0 50.0 M50.9 74.0L38.9 74.0\"/>"
      },
      {
        "name": "Concave Mirror",
        "svg": "<path d=\"M60 10Q26 50 60 90 M49.1 26.0L61.1 26.0 M43.0 50.0L55.0 50.0 M49.1 74.0L61.1 74.0\"/>"
      },
      {
        "name": "Plane Mirror",
        "svg": "<path d=\"M50 8L50 92 M50 16L62 8 M50 30L62 22 M50 44L62 36 M50 58L62 50 M50 72L62 64 M50 86L62 78\"/>"
      },
      {
        "name": "Prism",
        "svg": "<path d=\"M50 14L84 82H16Z M6 60L27 60 M73 60L94 40 M73 60L94 52 M73 60L94 66 M73 60L94 78\"/>"
      },
      {
        "name": "Glass Slab",
        "svg": "<path d=\"M20 28H80V72H20Z M6 20L20 40 M20 40L80 58 M80 58L94 70\"/>"
      },
      {
        "name": "Optical Bench",
        "svg": "<path d=\"M6 60L94 60 M20 60L20 80 M70 60L70 80 M12 80L28 80 M62 80L78 80 M40 44H48V60H40Z\"/>"
      },
      {
        "name": "Ray Box",
        "svg": "<path d=\"M10 30H60V70H10Z M60 40L94 30 M60 50L94 50 M60 60L94 70\"/>"
      },
      {
        "name": "Light Source",
        "svg": "<path d=\"M28 38a22 22 0 1 0 44 0a22 22 0 1 0 -44 0 M40 58H60V72H40Z M28 38L10 38 M72 38L90 38 M34 22L22 10 M66 22L78 10\"/>"
      },
      {
        "name": "Laser Source",
        "svg": "<path d=\"M10 40H54V60H10Z M54 50L94 50 M28 60L32 72\"/>"
      },
      {
        "name": "Optical Fiber",
        "svg": "<path d=\"M6 80C30 80 30 20 60 20S90 50 94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Periscope",
        "svg": "<path d=\"M34 20H66V80H34Z M34 20L54 8 M66 80L46 92 M54 8L66 4 M46 92L34 96\"/>"
      },
      {
        "name": "Microscope",
        "svg": "<path d=\"M42 10H58V54H42Z M50 54L50 64 M26 64L60 64 M30 64L30 88 M20 88L76 88 M58 30Q80 50 74 88\"/>"
      },
      {
        "name": "Telescope",
        "svg": "<path d=\"M16 40L70 22L76 36L22 54Z M22 54L12 62 M49 45L34 88 M49 45L64 88 M30 88L66 88\"/>"
      },
      {
        "name": "Astronomical Telescope",
        "svg": "<path d=\"M20 36H78V64H20Z M20 36Q32 50 20 64Q8 50 20 36Z M78 38Q86 50 78 62\"/>"
      },
      {
        "name": "Camera Lens",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0 M24 50a26 26 0 1 0 52 0a26 26 0 1 0 -52 0 M76 50L90 50 M50 24L50 10 M24 50L10 50 M50 76L50 90\"/>"
      },
      {
        "name": "Magnifying Glass",
        "svg": "<path d=\"M14 40a26 26 0 1 0 52 0a26 26 0 1 0 -52 0 M58.4 58.4L86 86\"/>"
      },
      {
        "name": "Spectrometer",
        "svg": "<path d=\"M24 74L40 40L56 74Z M6 60L31 60 M49 60L90 40 M49 60L90 60 M49 60L90 76\"/>"
      },
      {
        "name": "Interference Apparatus",
        "svg": "<path d=\"M40 8L40 42 M40 58L40 92 M40 42L80 30 M40 58L80 70 M80 8L80 92 M80 30L90 30 M80 70L90 70\"/>"
      },
      {
        "name": "Diffraction Grating",
        "svg": "<path d=\"M26 20L74 20 M26 80L74 80 M30 20L30 80 M40 20L40 80 M50 20L50 80 M60 20L60 80 M70 20L70 80 M6 50L30 50 M50 50L90 30 M50 50L90 70\"/>"
      },
      {
        "name": "Young's Double-Slit Experiment",
        "svg": "<path d=\"M40 8L40 42 M40 58L40 92 M6 50L40 42 M6 50L40 58 M40 42L80 30 M40 58L80 70 M80 8L80 92\"/>"
      },
      {
        "name": "Newton's Rings Apparatus",
        "svg": "<path d=\"M6 80L94 80 M30 80Q50 40 70 80 M34 80A16 16 0 0 1 66 80 M22 80A28 28 0 0 1 78 80\"/>"
      },
      {
        "name": "Polarimeter",
        "svg": "<path d=\"M6 50L20 50 M20 40H80V60H20Z M80 30H88V70H80Z M88 50L94 50 M32 60L32 80 M60 60L60 80 M22 80L70 80\"/>"
      },
      {
        "name": "Polarization Apparatus",
        "svg": "<path d=\"M20 20H34V80H20Z M66 20H80V80H66Z M24 20L24 80 M72 20L72 80 M6 50L20 50 M34 50L66 50 M80 50L94 50\"/>"
      },
      {
        "name": "Refraction Diagram",
        "svg": "<path d=\"M6 50L94 50 M24 16L50 50 M50 50L70 88 M50 10L50 50\"/>"
      },
      {
        "name": "Reflection Diagram",
        "svg": "<path d=\"M6 80L94 80 M24 20L50 80 M50 80L76 20 M50 80L50 22\"/>"
      },
      {
        "name": "Total Internal Reflection",
        "svg": "<path d=\"M6 50L94 50 M6 50L6 94 M94 50L94 94 M6 94L94 94 M30 88L50 50 M50 50L70 88\"/>"
      },
      {
        "name": "Dispersion of Light",
        "svg": "<path d=\"M50 14L84 82H16Z M6 60L27 60 M73 60L94 30 M73 60L94 42 M73 60L94 54 M73 60L94 66 M73 60L94 78\"/>"
      },
      {
        "name": "Electromagnetic Spectrum",
        "svg": "<path d=\"M6.0 50.0L7.5 55.4L8.9 59.1L10.4 59.8L11.9 56.6L13.3 50.4L14.8 43.7L16.3 40.1L17.7 42.4L19.2 50.1L20.7 58.1L22.1 59.3L23.6 51.5L25.1 41.7L26.5 41.7L28.0 52.8L29.5 60.0L30.9 51.2L32.4 40.2L33.9 48.0L35.3 59.9L36.8 49.6L38.3 40.4L39.7 55.9L41.2 54.9L42.7 40.0L44.1 55.9L45.6 52.2L47.1 41.7L48.5 60.0L50.0 41.9L51.5 54.7L52.9 48.5L54.4 49.1L55.9 52.2L57.3 47.6L58.8 51.5L60.3 50.5L61.7 46.4L63.2 57.2L64.7 40.2L66.1 58.9L67.6 47.0L69.1 44.2L70.5 60.0L72.0 46.9L73.5 41.7L74.9 56.7L76.4 57.3L77.9 44.0L79.3 40.8L80.8 50.1L82.3 58.7L83.7 59.2L85.2 53.7L86.7 47.4L88.1 43.1L89.6 41.0L91.1 40.3L92.5 40.1L94.0 40.3 M87.6 43.1L94.0 40.3L88.5 35.9\"/>"
      }
    ],
    "Electricity and Magnetism": [
      {
        "name": "Positive and Negative Electric Charges",
        "svg": "<path d=\"M12 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M12 50L40 50 M26 36L26 64 M60 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M60 50L88 50 M40 50L60 50\"/>"
      },
      {
        "name": "Electric Field Lines",
        "svg": "<path d=\"M14 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M66 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M31 43Q50 8 69 43 M31 57Q50 92 69 57 M34 50L66 50\"/>"
      },
      {
        "name": "Electric Dipole",
        "svg": "<path d=\"M20 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M60 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M30 40Q50 14 70 40 M30 60Q50 86 70 60 M20 50L40 50 M60 50L80 50\"/>"
      },
      {
        "name": "Capacitor",
        "svg": "<path d=\"M46 34H54A16 16 0 0 1 54 66H46A16 16 0 0 1 46 34Z M6 50L30 50 M70 50L94 50\"/>"
      },
      {
        "name": "Parallel Plate Capacitor",
        "svg": "<path d=\"M8 50L38 50 M62 50L92 50 M38 24L38 76 M62 24L62 76\"/>"
      },
      {
        "name": "Charging and Discharging Capacitor",
        "svg": "<path d=\"M8 50L36 50 M64 50L92 50 M36 28L36 72 M64 28L64 72 M8 50L8 88 M8 88L40 88 M40 88L40 72 M50 88L80 88 M74.0 91.6L80 88L74.0 84.4\"/>"
      },
      {
        "name": "Resistor",
        "svg": "<path d=\"M6 50L13.3 58L20.7 42L28.0 58L35.3 42L42.7 58L50.0 42L57.3 58L64.7 42L72.0 58L79.3 42L86.7 58L94.0 42L94 50\"/>"
      },
      {
        "name": "Inductor",
        "svg": "<path d=\"M20 38H80V62H20Z M28 38C28 18 40 18 40 38C40 18 52 18 52 38C52 18 64 18 64 38C64 18 76 18 76 38 M6 50L20 50 M80 50L94 50\"/>"
      },
      {
        "name": "Solenoid",
        "svg": "<path d=\"M20 30L84 30 M20 70L84 70 M20 30a6 20 0 0 0 0 40 M84 30a6 20 0 0 1 0 40 M28 30a6 20 0 0 0 0 40 M40 30a6 20 0 0 0 0 40 M6 50L14 50\"/>"
      },
      {
        "name": "Electromagnet",
        "svg": "<path d=\"M24 14V60Q24 84 50 84Q76 84 76 60V14 M14 14L24 14 M76 14L86 14 M24 30H14M76 30H86\"/>"
      },
      {
        "name": "Bar Magnet",
        "svg": "<path d=\"M10 38H90V62H10Z M50 38L50 62\"/>"
      },
      {
        "name": "Horseshoe Magnet",
        "svg": "<path d=\"M22 14V58Q22 86 50 86Q78 86 78 58V14H66V58Q66 72 50 72Q34 72 34 58V14Z\"/>"
      },
      {
        "name": "Magnetic Field Lines",
        "svg": "<path d=\"M38 40H62V60H38Z M38 50Q14 50 14 22Q14 6 40 12 M62 50Q86 50 86 22Q86 6 60 12 M38 50Q14 50 14 78Q14 94 40 88 M62 50Q86 50 86 78Q86 94 60 88\"/>"
      },
      {
        "name": "Magnetic Compass",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 14L50 86\"/>"
      },
      {
        "name": "Galvanometer",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 50L77.6 26.9 M42 50L58 50 M50 86L50 94 M30 94L70 94\"/>"
      },
      {
        "name": "Ammeter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M6 50L20 50 M80 50L94 50 M50 50L50 20\"/>"
      },
      {
        "name": "Voltmeter",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M6 50L20 50 M80 50L94 50 M28.8 28.8L50 80L71.2 28.8\"/>"
      },
      {
        "name": "Wheatstone Bridge",
        "svg": "<path d=\"M50 10L86 50L50 90L14 50Z M50 10L50 90 M14 50L86 50 M44 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Potentiometer",
        "svg": "<path d=\"M10 70L20.0 76L30.0 64L40.0 76L50.0 64L60.0 76L70.0 64L80.0 76L90.0 64L90 70 M50 64L50 40 M40 30L50 40L60 30\"/>"
      },
      {
        "name": "Electric Circuit",
        "svg": "<path d=\"M14 20H86V80H14Z M30 20L30 14 M50 80L50 62 M50 52L50 46 M50 20L50 40 M42 52L58 52 M42 46L58 46\"/>"
      },
      {
        "name": "Battery and Cell",
        "svg": "<path d=\"M6 50L40 50 M40 30L40 70 M52 40L52 60 M52 50L94 50 M40 30L52 30\"/>"
      },
      {
        "name": "Electric Switch",
        "svg": "<path d=\"M12 70a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M80 70a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M6 70L12 70 M20 70L80 70 M88 70L94 70\"/>"
      },
      {
        "name": "Electric Bulb",
        "svg": "<path d=\"M24 40a26 26 0 1 0 52 0a26 26 0 1 0 -52 0 M40 64H60V78H40Z M50 64L50 54 M50 54L42 46L58 38\"/>"
      },
      {
        "name": "Electric Motor",
        "svg": "<path d=\"M24 24H76V76H24Z M50 24L50 8 M50 76L50 92 M24 50L76 50\"/>"
      },
      {
        "name": "Electric Generator",
        "svg": "<path d=\"M16 50a34 34 0 1 0 68 0a34 34 0 1 0 -68 0 M50 16L50 50 M50 50L79.4 33 M50 84L50 94 M36 94L64 94\"/>"
      },
      {
        "name": "Transformer",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 14Q30 50 50 86 M50 14Q70 50 50 86 M50 6L50 14 M50 86L50 94\"/>"
      },
      {
        "name": "Electromagnetic Induction Apparatus",
        "svg": "<path d=\"M24 30H76V80H24Z M24 50L76 50 M50 30L50 50 M50 80L50 92 M24 30L24 10 M24 10L44 10 M24 62L44 62 M38.0 65.6L44 62L38.0 58.4\"/>"
      },
      {
        "name": "Faraday's Law Experiment",
        "svg": "<path d=\"M30 50H70V86H30Z M44 30H56V54H44Z M30 60L14 60 M70 60L86 60\"/>"
      },
      {
        "name": "Lenz's Law Experiment",
        "svg": "<path d=\"M30 50H70V86H30Z M44 30H56V54H44Z M30 70L14 70 M14 70L30 70 M24.0 73.6L30 70L24.0 66.4 M70 70L86 70\"/>"
      },
      {
        "name": "Magnetic Flux Illustration",
        "svg": "<path d=\"M16 20H84V80H16Z M16 20L40 6 M40 6L94 6 M94 6L84 20 M4 40L16 40 M10.0 43.6L16 40L10.0 36.4 M4 58L16 58 M10.0 61.6L16 58L10.0 54.4 M4 76L16 76 M10.0 79.6L16 76L10.0 72.4\"/>"
      },
      {
        "name": "Hall Effect Apparatus",
        "svg": "<path d=\"M20 30H80V70H20Z M4 50L20 50 M80 50L96 50 M50 30L50 14 M46 14L54 14 M50 70L50 86 M46 86L54 86\"/>"
      },
      {
        "name": "Cathode Ray Tube",
        "svg": "<path d=\"M20 40L8 60H92L80 40Z M20 40L40 20 M80 40L60 20 M40 20L60 20 M50 20L50 60\"/>"
      },
      {
        "name": "Van de Graaff Generator",
        "svg": "<path d=\"M32 42Q32 14 50 14T68 42 M32 42L40 88 M68 42L60 88 M30 88L70 88 M35.1 60L64.9 60\"/>"
      },
      {
        "name": "Electroscope",
        "svg": "<path d=\"M30 70H70V82H30Z M30 70V30H70V70 M46 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M50 20L50 70 M50 40L40 62 M50 40L60 62\"/>"
      },
      {
        "name": "Electrostatic Generator",
        "svg": "<path d=\"M16 50a34 34 0 1 0 68 0a34 34 0 1 0 -68 0 M50 16L50 84 M16 50L84 50\"/>"
      }
    ],
    "Atomic and Quantum Mechanics": [
      {
        "name": "Basic Atomic Model",
        "svg": "<path d=\"M32 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0 M8 50A42 14 0 1 0 92 50A42 14 0 1 0 8 50 M88 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Bohr Atomic Model",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M26 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0 M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0 M58 50L90 50 M74 40L74 30 M26 46L26 36\"/>"
      },
      {
        "name": "Rutherford Atomic Model",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M6 36Q44 40 42 50 M6 64Q44 60 42 50 M58 50Q80 40 94 20\"/>"
      },
      {
        "name": "Electron Orbit Illustration",
        "svg": "<path d=\"M28 50a22 22 0 1 0 44 0a22 22 0 1 0 -44 0 M50 14A36 36 0 0 1 86 50 M82.4 44.0L86 50L89.6 44.0 M58 50L86 50\"/>"
      },
      {
        "name": "Proton",
        "svg": "<path d=\"M41 24a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M19 64a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M63 64a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M45.7 31.9L32.3 56.1 M37.0 64.0L63.0 64.0 M67.7 56.1L54.3 31.9\"/>"
      },
      {
        "name": "Neutron",
        "svg": "<path d=\"M11 50a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M41 50a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M71 50a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M29 50L41 50 M59 50L71 50\"/>"
      },
      {
        "name": "Electron",
        "svg": "<path d=\"M20 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M40 50q5.0 -8 10 0q5.0 8 10 0q5.0 -8 10 0q5.0 8 10 0q5.0 -8 10 0q5.0 8 10 0\"/>"
      },
      {
        "name": "Atomic Nucleus",
        "svg": "<path d=\"M24 42a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M48 42a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M36 58a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M36 28a14 14 0 1 0 28 0a14 14 0 1 0 -28 0\"/>"
      },
      {
        "name": "Hydrogen Atom",
        "svg": "<path d=\"M44 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M56 50L86 50 M46 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Energy Level Diagram",
        "svg": "<path d=\"M10 86L10 10 M10 20L90 20 M10 50L90 50 M10 80L90 80 M70 80L70 50 M73.6 56.0L70 50L66.4 56.0\"/>"
      },
      {
        "name": "Electron Transition",
        "svg": "<path d=\"M10 70L90 70 M10 20L90 20 M40 70Q60 45 40 20 M46.2 23.3L40 20L40.0 27.0\"/>"
      },
      {
        "name": "Photon Emission",
        "svg": "<path d=\"M16 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M40 50q8-10 16 0t16 0t16 0 M88 50L94 50\"/>"
      },
      {
        "name": "Photon Absorption",
        "svg": "<path d=\"M6 50q6.33-10 12.67 0t12.67 0t12.67 0 M44 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0\"/>"
      },
      {
        "name": "Photoelectric Effect Apparatus",
        "svg": "<path d=\"M60 16L60 84 M8 36L60 36 M54.0 39.6L60 36L54.0 32.4 M8 58L60 58 M54.0 61.6L60 58L54.0 54.4 M60 30L86 14 M82.8 20.2L86 14L79.0 14.1\"/>"
      },
      {
        "name": "Compton Scattering Illustration",
        "svg": "<path d=\"M38 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M6 50L38 50 M60.4 44L90 22 M56 60.4L80 84\"/>"
      },
      {
        "name": "Wave-Particle Duality",
        "svg": "<path d=\"M16 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M40 50q8-14 16 0t16 0t16 0\"/>"
      },
      {
        "name": "de Broglie Wavelength Illustration",
        "svg": "<path d=\"M6 50L6 22L26 22L26 50 M6 50q5-12 10 0t10 0t10 0t10 0t10 0\"/>"
      },
      {
        "name": "Heisenberg Uncertainty Illustration",
        "svg": "<path d=\"M8 90C30 90 36 20 50 20S70 90 92 90 M6 90L94 90\"/>"
      },
      {
        "name": "Quantum Tunneling Illustration",
        "svg": "<path d=\"M6 80L94 80 M40 40H60V80H40Z M6 50q5.67-10 11.33 0t11.33 0t11.33 0 M60 50q5.67-6 11.33 0t11.33 0t11.33 0\"/>"
      },
      {
        "name": "Quantum Harmonic Oscillator",
        "svg": "<path d=\"M10 20Q50 100 90 20 M10 30L90 30 M10 42L90 42 M10 52L90 52\"/>"
      },
      {
        "name": "Electron Diffraction Apparatus",
        "svg": "<path d=\"M6 50L50 50 M50 10L50 90 M82 10Q96 50 82 90 M50 50L86.5 26 M50 50L86.5 74\"/>"
      },
      {
        "name": "Stern-Gerlach Experiment",
        "svg": "<path d=\"M30 20L44 32V68L30 80Z M70 20L56 32V68L70 80Z M30 20L70 20 M30 50L50 50 M50 50L94 30 M50 50L94 70\"/>"
      },
      {
        "name": "Franck-Hertz Experiment",
        "svg": "<path d=\"M20 20H80V80H20Z M20 50L27.5 58L35.0 42L42.5 58L50.0 42L57.5 58L65.0 42L72.5 58L80.0 42L80 50 M40 20L40 80 M60 20L60 80\"/>"
      },
      {
        "name": "X-ray Tube",
        "svg": "<path d=\"M30 30H70L84 40V60L70 70H30Z M6 50L30 50 M30 50L34.0 54L38.0 46L42.0 54L46.0 46L46 50 M60 30L60 70 M84 50L96 50 M90.0 53.6L96 50L90.0 46.4\"/>"
      },
      {
        "name": "X-ray Diffraction Apparatus",
        "svg": "<path d=\"M20 30L90 30 M20 50L90 50 M20 70L90 70 M20 30L20 70 M6 6L50 50 M50 50L94 6\"/>"
      },
      {
        "name": "Atomic Orbital Shapes",
        "svg": "<path d=\"M50 50C40 30 22 30 22 50C22 70 40 70 50 50C60 30 78 30 78 50C78 70 60 70 50 50Z\"/>"
      },
      {
        "name": "Probability Density Illustration",
        "svg": "<path d=\"M6 84L94 84 M8 84C18 84 22 30 34 30S44 84 50 84S70 30 80 30S88 84 92 84\"/>"
      },
      {
        "name": "Laser Energy Transition",
        "svg": "<path d=\"M10 30L60 30 M10 70L60 70 M35 30L35 70 M31.4 64.0L35 70L38.6 64.0 M35 70q4.5 -6 9 0q4.5 6 9 0q4.5 -6 9 0q4.5 6 9 0q4.5 -6 9 0q4.5 6 9 0\"/>"
      },
      {
        "name": "Spectral Emission Diagram",
        "svg": "<path d=\"M6 80L94 80 M16 80L16 50 M28 80L28 30 M40 80L40 60 M52 80L52 20 M64 80L64 56 M76 80L76 40 M88 80L88 64\"/>"
      },
      {
        "name": "Quantum Energy States",
        "svg": "<path d=\"M10 20V80H90V20 M10 36L90 36 M10 52L90 52 M10 68L90 68\"/>"
      }
    ],
    "Nuclear Physics and Radiation": [
      {
        "name": "Nuclear Fission",
        "svg": "<path d=\"M14 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M64 28a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M64 72a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M40.6 44.0L65.0 32.3 M40.6 56.0L65.0 67.7\"/>"
      },
      {
        "name": "Nuclear Fusion",
        "svg": "<path d=\"M21 50a15 15 0 1 0 30 0a15 15 0 1 0 -30 0 M49 50a15 15 0 1 0 30 0a15 15 0 1 0 -30 0 M6 50L21 50 M15.0 53.6L21 50L15.0 46.4 M94 50L79 50 M85.0 46.4L79 50L85.0 53.6\"/>"
      },
      {
        "name": "Nuclear Reactor",
        "svg": "<path d=\"M24 88V44Q24 14 50 14Q76 14 76 44V88 M10 88L90 88 M38 58H62V88H38Z M50 14L50 4\"/>"
      },
      {
        "name": "Nuclear Reactor Cross-Section",
        "svg": "<path d=\"M20 10H80V90H20Z M35 10L35 90 M50 10L50 90 M65 10L65 90\"/>"
      },
      {
        "name": "Nuclear Fuel Rod",
        "svg": "<path d=\"M14 38H86V62H14Z M26 38L26 62 M38 38L38 62 M50 38L50 62 M62 38L62 62 M74 38L74 62 M14 50L6 50 M86 50L94 50\"/>"
      },
      {
        "name": "Control Rod",
        "svg": "<path d=\"M50 28L50 70 M42 70H58V90H42Z M34 28L66 28 M50 28L50 10 M38 10L62 10\"/>"
      },
      {
        "name": "Moderator",
        "svg": "<path d=\"M24 30H76V70H24Z M4 50L24 50 M18.0 53.6L24 50L18.0 46.4 M92 44L76 44 M82.0 40.4L76 44L82.0 47.6\"/>"
      },
      {
        "name": "Coolant System",
        "svg": "<path d=\"M14 20H86V80H14Z M24 20a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M60 80L40 80 M46.0 76.4L40 80L46.0 83.6 M50 20L50 34\"/>"
      },
      {
        "name": "Radiation Detector",
        "svg": "<path d=\"M30 30H70V70H30Z M6 50L30 50 M24.0 53.6L30 50L24.0 46.4 M70 50L76 40L82 60L88 50L94 50\"/>"
      },
      {
        "name": "Geiger-Muller Counter",
        "svg": "<path d=\"M20 40H80A10 10 0 0 1 80 60H20A10 10 0 0 1 20 40Z M6 50L94 50\"/>"
      },
      {
        "name": "Scintillation Detector",
        "svg": "<path d=\"M14 36H54V64H14Z M54 30H86V70H54Z M30 36L30 22 M20 22L40 22\"/>"
      },
      {
        "name": "Cloud Chamber",
        "svg": "<path d=\"M14 20H86V80H14Z M14 40Q50 36 86 50 M14 66L60 76\"/>"
      },
      {
        "name": "Bubble Chamber",
        "svg": "<path d=\"M14 20H86V80H14Z M14 50L86 50 M26 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M51 50a5 5 0 1 0 10 0a5 5 0 1 0 -10 0 M71 50a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"/>"
      },
      {
        "name": "Particle Accelerator",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 14A36 36 0 0 1 86 50 M82.4 44.0L86 50L89.6 44.0\"/>"
      },
      {
        "name": "Cyclotron",
        "svg": "<path d=\"M50 14A36 36 0 0 0 50 86Z M50 14A36 36 0 0 1 50 86Z M50 14L50 86\"/>"
      },
      {
        "name": "Linear Accelerator",
        "svg": "<path d=\"M18 36H34V64H18Z M42 36H58V64H42Z M66 36H82V64H66Z M6 50L94 50\"/>"
      },
      {
        "name": "Radioactive Decay",
        "svg": "<path d=\"M12 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M66 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M36.0 50.0L66.0 50.0 M60.0 53.6L66.0 50.0L60.0 46.4\"/>"
      },
      {
        "name": "Alpha Radiation",
        "svg": "<path d=\"M9 50a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M21 50a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M39 50L94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Beta Radiation",
        "svg": "<path d=\"M7 50a11 11 0 1 0 22 0a11 11 0 1 0 -22 0 M29 50q3.08-6 6.17 0t6.17 0t6.17 0t6.17 0t6.17 0t6.17 0 M66 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Gamma Radiation",
        "svg": "<path d=\"M7 50a11 11 0 1 0 22 0a11 11 0 1 0 -22 0 M29 50q2.5 -5 5 0q2.5 5 5 0q2.5 -5 5 0q2.5 5 5 0q2.5 -5 5 0q2.5 5 5 0q2.5 -5 5 0q2.5 5 5 0q2.5 -5 5 0q2.5 5 5 0q2.5 -5 5 0q2.5 5 5 0 M89 50L94 50 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Half-Life Illustration",
        "svg": "<path d=\"M10 14L10 90L94 90 M10.0 20.0L12.0 23.5L14.0 26.9L16.0 30.1L18.0 33.1L20.0 36.0L22.0 38.8L24.0 41.4L26.0 43.8L28.0 46.2L30.0 48.4L32.0 50.5L34.0 52.5L36.0 54.4L38.0 56.2L40.0 57.9L42.0 59.5L44.0 61.1L46.0 62.5L48.0 63.9L50.0 65.3L52.0 66.5L54.0 67.7L56.0 68.8L58.0 69.9L60.0 70.9L62.0 71.9L64.0 72.8L66.0 73.7L68.0 74.5L70.0 75.3L72.0 76.0L74.0 76.7L76.0 77.4L78.0 78.0L80.0 78.7L82.0 79.2L84.0 79.8L86.0 80.3L88.0 80.8L90.0 81.2 M36.7 55L36.7 90 M63.3 72.5L63.3 90\"/>"
      },
      {
        "name": "Nuclear Chain Reaction",
        "svg": "<path d=\"M6 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M42 26a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M42 74a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M78 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M20.7 45.6L43.3 30.4 M20.7 54.4L43.3 69.6 M56.7 30.4L79.3 45.6 M56.7 69.6L79.3 54.4\"/>"
      },
      {
        "name": "Radiation Shielding",
        "svg": "<path d=\"M62 10H78V90H62Z M6 30L62 30 M56.0 33.6L62 30L56.0 26.4 M6 50L62 50 M56.0 53.6L62 50L56.0 46.4 M6 70L62 70 M56.0 73.6L62 70L56.0 66.4\"/>"
      },
      {
        "name": "Lead Shielding Container",
        "svg": "<path d=\"M20 30H80V80H20Z M14 22H86V30H14Z M44 22L44 14 M44 14L56 14 M56 14L56 22\"/>"
      },
      {
        "name": "Dosimeter",
        "svg": "<path d=\"M16 40H76A10 10 0 0 1 76 60H16A10 10 0 0 1 16 40Z M30 40L30 20 M30 20L40 20 M50 40L50 60 M62 40L62 60\"/>"
      },
      {
        "name": "X-ray Radiation",
        "svg": "<path d=\"M14 14L86 86 M86 14L14 86 M46 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Neutron Source",
        "svg": "<path d=\"M14 36H44V64H14Z M44 40L90 24 M85.5 29.4L90 24L83.2 22.6 M44 50L94 50 M88.0 53.6L94 50L88.0 46.4 M44 60L90 76 M83.2 77.4L90 76L85.5 70.6\"/>"
      },
      {
        "name": "Neutron Detector",
        "svg": "<path d=\"M40 20H70V80H40Z M6 50L40 50 M34.0 53.6L40 50L34.0 46.4 M70 50L76 40L82 60L88 50L94 50\"/>"
      },
      {
        "name": "Mass Spectrometer",
        "svg": "<path d=\"M6 30L30 30 M30 30A40 40 0 0 1 70 70 M70 70L94 70 M70 60L70 80\"/>"
      }
    ],
    "Modern and Particle Physics": [
      {
        "name": "Standard Model Particle Chart",
        "svg": "<path d=\"M10 10H90V90H10Z M10 36L90 36 M10 62L90 62 M36 10L36 90 M62 10L62 90\"/>"
      },
      {
        "name": "Quark Structure",
        "svg": "<path d=\"M12 20H88V46H12Z M12 54H88V80H12Z M50 20L50 80 M12 33L88 33 M12 67L88 67\"/>"
      },
      {
        "name": "Proton Structure",
        "svg": "<path d=\"M40 8H60V28H40Z M12 70H32V90H12Z M68 70H88V90H68Z M50 28L22 70 M28 70L68 70 M78 70L60 28\"/>"
      },
      {
        "name": "Neutron Structure",
        "svg": "<path d=\"M8 40H28V60H8Z M40 40H60V60H40Z M72 40H92V60H72Z M28 50L40 50 M60 50L72 50\"/>"
      },
      {
        "name": "Electron Cloud",
        "svg": "<path d=\"M24 72C10 72 8 52 20 46C16 30 32 22 42 30C48 16 70 16 74 30C88 26 94 44 84 54C94 60 90 74 78 72C74 80 58 82 52 76C44 82 30 80 24 72Z\"/>"
      },
      {
        "name": "Particle Collision",
        "svg": "<path d=\"M14 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M62 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M38 50L62 50 M50 50L50 16 M50 50L50 84 M50 50L84 24 M50 50L16 76\"/>"
      },
      {
        "name": "Particle Detector",
        "svg": "<path d=\"M14 14H86V86H14Z M30 30H70V70H30Z M14 14L30 30 M86 14L70 30 M14 86L30 70 M86 86L70 70 M6 50L94 50\"/>"
      },
      {
        "name": "Bubble Chamber Particle Tracks",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0 M52.0 50.0L52.3 50.4L52.5 50.8L52.6 51.3L52.6 51.9L52.5 52.5L52.3 53.2L51.9 53.8L51.4 54.3L50.8 54.8L50.0 55.2L49.1 55.4L48.2 55.5L47.2 55.4L46.2 55.2L45.2 54.8L44.3 54.2L43.4 53.4L42.7 52.4L42.1 51.3L41.7 50.0L41.5 48.6L41.5 47.2L41.7 45.8L42.2 44.4L43.0 43.0L44.0 41.7L45.2 40.6L46.6 39.7L48.3 39.0L50.0 38.5L51.8 38.3L53.7 38.5L55.7 38.9L57.5 39.7L59.3 40.7L60.8 42.1L62.2 43.8L63.3 45.7L64.2 47.8L64.7 50.0L64.8 52.3L64.6 54.7L63.9 57.1L62.9 59.4L61.5 61.5L59.7 63.4L57.7 65.0L55.3 66.4L52.7 67.3L50.0 67.8L47.2 67.9L44.3 67.6L41.5 66.7L38.8 65.5L36.3 63.7L34.0 61.6L32.1 59.1L30.6 56.3L29.6 53.2L29.0 50.0L28.9 46.7L29.4 43.3L30.4 40.0L32.0 36.9L34.0 34.0L36.5 31.5L39.5 29.3L42.7 27.6L46.3 26.4L50.0 25.8L53.8 25.8L57.7 26.4L61.4 27.6L64.9 29.4L68.2 31.8L71.1 34.7L73.5 38.0L75.4 41.7L76.7 45.8L77.3 50.0L77.3 54.3L76.6 58.6L75.2 62.8L73.1 66.8L70.4 70.4L67.2 73.7L63.4 76.3L59.2 78.4L54.7 79.8L50.0 80.5L45.2 80.4L40.4 79.6L35.7 78.0L31.3 75.7L27.3 72.7L23.8 69.0L20.8 64.9L18.6 60.2L17.1 55.2L16.3 50.0L16.4 44.7L17.4 39.4L19.2 34.3L21.7 29.5L25.1 25.1L29.1 21.2L33.7 18.0L38.8 15.6L44.3 13.9L50.0 13.2L55.8 13.3L61.6 14.4L67.2 16.3L72.4 19.2L77.2 22.8L81.3 27.2L84.8 32.3L87.4 37.8L89.2 43.8L90.0 50.0\"/>"
      },
      {
        "name": "Feynman Diagram",
        "svg": "<path d=\"M10 20L50 50 M50 50L10 80 M50 50q5.0 -5 10 0q5.0 5 10 0q5.0 -5 10 0q5.0 5 10 0 M90 50L94 40 M90 50L94 60\"/>"
      },
      {
        "name": "Higgs Boson Illustration",
        "svg": "<path d=\"M8 14C26 72 36 74 50 74C64 74 74 72 92 14 M44 74a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Antimatter Illustration",
        "svg": "<path d=\"M12 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M68 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M32 50L68 50 M32 50L38.0 55L44.0 45L50.0 55L56.0 45L62.0 55L68.0 45L68 50\"/>"
      },
      {
        "name": "Positron",
        "svg": "<path d=\"M32 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0 M32 50L68 50 M50 32L50 68\"/>"
      },
      {
        "name": "Muon",
        "svg": "<path d=\"M6 70L50 50L94 66 M46 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Neutrino",
        "svg": "<path d=\"M6 50c10-12 20 12 30 0s20 12 30 0s20-12 28 0 M88.0 53.6L94 50L88.0 46.4\"/>"
      },
      {
        "name": "Particle Accelerator Tunnel",
        "svg": "<path d=\"M26 30L74 30 M26 70L74 70 M74 30A20 20 0 0 1 74 70 M26 30A20 20 0 0 0 26 70 M6 50L26 50\"/>"
      },
      {
        "name": "Synchrotron",
        "svg": "<path d=\"M16 50a34 34 0 1 0 68 0a34 34 0 1 0 -68 0 M44 6H56V14H44Z M44 84H56V92H44Z M6 44H14V56H6Z M84 44H92V56H84Z\"/>"
      },
      {
        "name": "Plasma Chamber",
        "svg": "<path d=\"M14 24H86V76H14Z M14 50C30 20 50 80 86 50\"/>"
      },
      {
        "name": "Superconducting Magnet",
        "svg": "<path d=\"M14 14H86V86H14Z M32 32H68V68H32Z M14 14L32 32 M86 14L68 32 M14 86L32 68 M86 86L68 68\"/>"
      },
      {
        "name": "Superconductivity Experiment",
        "svg": "<path d=\"M30 70H70V84H30Z M14 84L86 84 M20 20L20 84 M80 20L80 84 M20 46L38 46 M62 46L80 46 M38 40H62V52H38Z\"/>"
      },
      {
        "name": "Quantum Computing Concept",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M14 50A36 10 0 0 0 86 50A36 10 0 0 0 14 50 M50 14L50 86 M50 50L78 28 M75.9 33.4L78 28L72.2 28.7\"/>"
      },
      {
        "name": "Magnetic Resonance Apparatus",
        "svg": "<path d=\"M38 14H62V86H38Z M30 34L70 34 M30 52L70 52 M30 70L70 70\"/>"
      },
      {
        "name": "Nuclear Magnetic Resonance (NMR)",
        "svg": "<path d=\"M14 70A36 12 0 1 0 86 70A36 12 0 1 0 14 70 M50 70L50 22 M53.6 28.0L50 22L46.4 28.0\"/>"
      },
      {
        "name": "Magnetic Resonance Imaging (MRI) Scanner",
        "svg": "<path d=\"M14 20H86V80H14Z M50 20A20 30 0 0 0 50 80A20 30 0 0 0 50 20Z M6 70L94 70\"/>"
      },
      {
        "name": "Scanning Electron Microscope",
        "svg": "<path d=\"M40 6H60V38H40Z M20 50H80V86H20Z M50 38L50 50 M50 6L50 38\"/>"
      },
      {
        "name": "Transmission Electron Microscope",
        "svg": "<path d=\"M42 6H58V76H42Z M30 50L70 50 M50 76L50 88 M28 88L72 88\"/>"
      },
      {
        "name": "Atomic Force Microscope",
        "svg": "<path d=\"M6 8H26V30H6Z M26 20L70 20 M70 20L70 70 M6 70q8.0 -5 16 0q8.0 5 16 0q8.0 -5 16 0q8.0 5 16 0q8.0 -5 16 0 M86 70L94 70\"/>"
      },
      {
        "name": "Nanotechnology Illustration",
        "svg": "<path d=\"M14 36L86 36 M14 64L86 64 M86 36A4 14 0 0 1 86 64 M14 36A4 14 0 0 0 14 64 M30 36L30 64 M50 36L50 64 M70 36L70 64\"/>"
      },
      {
        "name": "Semiconductor Band Diagram",
        "svg": "<path d=\"M6 28L94 28 M6 72L94 72 M30 72L30 28 M33.6 34.0L30 28L26.4 34.0\"/>"
      },
      {
        "name": "Energy Band Structure",
        "svg": "<path d=\"M12 8L12 90L92 90 M12 80Q50 16 88 80 M12 40Q50 80 88 40\"/>"
      },
      {
        "name": "Modern Physics Laboratory Setup",
        "svg": "<path d=\"M6 80L94 80 M14 80L14 94 M86 80L86 94 M20 46H44V80H20Z M58 62H82V80H58Z M44 70L58 70\"/>"
      }
    ],
    "Electronics and Semiconductor Physics": [
      {
        "name": "PN Junction Diode",
        "svg": "<path d=\"M50 6L50 30 M34 30H66L50 56 M34 62L66 62 M50 56L50 94\"/>"
      },
      {
        "name": "Zener Diode",
        "svg": "<path d=\"M50 6L50 30 M34 30H66L50 56 M34 56V62H66V68 M50 56L50 94\"/>"
      },
      {
        "name": "LED",
        "svg": "<path d=\"M50 6L50 30 M34 30H66L50 56 M34 62L66 62 M50 56L50 94 M60 40L84 18 M82.0 24.7L84 18L77.1 19.4 M52.5 52L76 36 M73.1 42.4L76 36L69.0 36.4\"/>"
      },
      {
        "name": "Photodiode",
        "svg": "<path d=\"M50 6L50 30 M34 30H66L50 56 M34 62L66 62 M50 56L50 94 M86 24L62 36 M65.8 30.1L62 36L69.0 36.5 M86 44L56 46 M61.7 42.0L56 46L62.2 49.2\"/>"
      },
      {
        "name": "Solar Cell",
        "svg": "<path d=\"M20 30H80V70H20Z M35 30L35 70 M50 30L50 70 M65 30L65 70 M50 70L50 90 M84 8L70 30 M70.2 23.0L70 30L76.3 26.9\"/>"
      },
      {
        "name": "Bipolar Junction Transistor",
        "svg": "<path d=\"M40 20L40 80 M40 36L70 14 M40 64L70 86 M63.0 85.4L70 86L67.3 79.5 M6 50L40 50\"/>"
      },
      {
        "name": "MOSFET",
        "svg": "<path d=\"M26 24L26 76 M36 20L36 80 M36 24L70 24L70 8 M36 76L70 76L70 92 M6 50L26 50 M26 24L36 24\"/>"
      },
      {
        "name": "JFET",
        "svg": "<path d=\"M40 10L40 90 M6 50L40 50 M34.0 53.6L40 50L34.0 46.4 M40 20L70 20L70 6 M40 80L70 80L70 94\"/>"
      },
      {
        "name": "Integrated Circuit",
        "svg": "<path d=\"M20 20H80V80H20Z M44 20A6 6 0 0 0 56 20 M32 20L32 8 M50 20L50 8 M68 20L68 8 M32 80L32 92 M50 80L50 92 M68 80L68 92\"/>"
      },
      {
        "name": "Operational Amplifier",
        "svg": "<path d=\"M20 14L86 50L20 86Z M6 36L20 36 M6 64L20 64 M86 50L94 50\"/>"
      },
      {
        "name": "Logic Gate Symbols",
        "svg": "<path d=\"M20 20H44A30 30 0 0 1 44 80H20Z M6 36L20 36 M6 64L20 64 M74 50L94 50\"/>"
      },
      {
        "name": "Rectifier Circuit",
        "svg": "<path d=\"M14 20L40 20 M40 12V28L56 20 M56 12L56 28 M56 20L86 20 M86 20L86 44 M76 44L96 44 M76 56L96 56 M86 56L86 80 M86 80L14 80 M14 80L14 42 M6 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M14 58L14 80\"/>"
      },
      {
        "name": "Half-Wave Rectifier",
        "svg": "<path d=\"M14 20L40 20 M40 12V28L56 20 M56 12L56 28 M56 20L86 20 M86 20L86 40 M86 40L91 43.3L81 46.7L91 50.0L81 53.3L91 56.7L81 60.0L86 60 M86 60L86 80 M86 80L14 80 M14 80L14 42 M6 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M14 58L14 20\"/>"
      },
      {
        "name": "Full-Wave Rectifier",
        "svg": "<path d=\"M50 6L50 94 M34 40L50 30L66 40 M34 40L34 20 M66 40L66 20 M34 20L66 20 M34 60L34 80 M66 60L66 80 M34 80L66 80 M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Bridge Rectifier",
        "svg": "<path d=\"M50 14L86 50L50 86L14 50Z M50 14L50 4 M50 86L50 96 M14 50L4 50 M86 50L96 50 M60 26L68 34 M32 26L40 34 M60 74L68 66 M32 74L40 66\"/>"
      },
      {
        "name": "Oscillator Circuit",
        "svg": "<path d=\"M14 20L86 20 M86 20L86 80 M86 80L14 80 M14 80L14 20 M44 8L44 32 M52 8L52 32 M30 80a6 6 0 0 1 12 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0\"/>"
      },
      {
        "name": "Amplifier Circuit",
        "svg": "<path d=\"M30 20L80 50L30 80Z M6 50q4-6 8 0t8 0t8 0 M80 50q7-14 14 0\"/>"
      },
      {
        "name": "RC Circuit",
        "svg": "<path d=\"M14 20L86 20 M86 20L86 80 M86 80L14 80 M14 80L14 20 M30 20L35.0 25L40.0 15L45.0 25L50.0 15L55.0 25L60.0 15L60 20 M78 44L94 44 M78 56L94 56\"/>"
      },
      {
        "name": "RL Circuit",
        "svg": "<path d=\"M14 20L86 20 M86 20L86 80 M86 80L14 80 M14 80L14 20 M30 20L35.0 25L40.0 15L45.0 25L50.0 15L55.0 25L60.0 15L60 20 M86 30a6 6 0 0 0 0 12a6 6 0 0 0 0 12a6 6 0 0 0 0 12a6 6 0 0 0 0 12\"/>"
      },
      {
        "name": "RLC Circuit",
        "svg": "<path d=\"M14 20L86 20 M86 20L86 80 M86 80L14 80 M14 80L14 20 M30 20L35.0 25L40.0 15L45.0 25L50.0 15L55.0 25L60.0 15L60 20 M44 8L44 32 M52 8L52 32 M86 30a6 6 0 0 0 0 12a6 6 0 0 0 0 12\"/>"
      },
      {
        "name": "Semiconductor Wafer",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M14 50L86 50 M50 14L50 86 M30 30L70 30 M30 70L70 70 M44 86L56 86\"/>"
      },
      {
        "name": "Silicon Crystal Lattice",
        "svg": "<path d=\"M14 14H86V86H14Z M14 38L86 38 M14 62L86 62 M38 14L38 86 M62 14L62 86\"/>"
      },
      {
        "name": "PN Junction Depletion Region",
        "svg": "<path d=\"M10 30H90V70H10Z M50 30L50 70 M38 30L38 70 M62 30L62 70 M18 30L18 40 M26 30L26 40 M34 30L34 40 M66 70L66 60 M74 70L74 60 M82 70L82 60\"/>"
      },
      {
        "name": "Electron-Hole Pair",
        "svg": "<path d=\"M6 28L94 28 M6 72L94 72 M34 22a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M54 78a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M46 22L54 22\"/>"
      },
      {
        "name": "Hall Effect Sensor",
        "svg": "<path d=\"M30 6V36H70V6 M30 36H70V66H30Z M38 66L38 94 M50 66L50 94 M62 66L62 94\"/>"
      },
      {
        "name": "Thermistor",
        "svg": "<path d=\"M30 36H70V64H30Z M6 50L30 50 M70 50L94 50 M22 74L78 26\"/>"
      },
      {
        "name": "Photovoltaic Effect Apparatus",
        "svg": "<path d=\"M14 50H64V78H14Z M30 8L30 50 M26.4 44.0L30 50L33.6 44.0 M50 6L50 50 M46.4 44.0L50 50L53.6 44.0 M64 64L78 64 M78 64L78 52 M66 40a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/>"
      },
      {
        "name": "Solar Panel Cell Structure",
        "svg": "<path d=\"M14 20L86 20 M14 80L86 80 M14 20L14 80 M86 20L86 80 M14 30L86 30 M14 44L86 44 M14 58L86 58 M14 72L86 72 M50 4L50 20 M46.4 14.0L50 20L53.6 14.0\"/>"
      },
      {
        "name": "Oscilloscope",
        "svg": "<path d=\"M14 14H86V74H14Z M30 14L30 4 M70 14L70 4 M24 74L24 94 M76 74L76 94 M14 44q6-16 12 0t12 0t12 0t12 0t12 0t12 0\"/>"
      },
      {
        "name": "Function Generator",
        "svg": "<path d=\"M14 50L28 50L28 40L44 40L44 60L60 60L60 40L76 40L76 50L86 50 M86 50L94 50 M14 30L86 30 M14 76L86 76 M14 30L14 76 M86 30L86 76 M30 30L30 22 M50 30L50 22 M70 30L70 22\"/>"
      }
    ],
    "Astronomy, Space and Astrophysics": [
      {
        "name": "Solar System",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M26 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0 M8 50a42 42 0 1 0 84 0a42 42 0 1 0 -84 0 M58 50L92 50 M70 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M46 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Sun",
        "svg": "<path d=\"M36 50a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M64.0 50.0L76.0 50.0 M59.9 59.9L68.4 68.4 M50.0 64.0L50.0 76.0 M40.1 59.9L31.6 68.4 M36.0 50.0L24.0 50.0 M40.1 40.1L31.6 31.6 M50.0 36.0L50.0 24.0 M59.9 40.1L68.4 31.6\"/>"
      },
      {
        "name": "Earth",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M14 50L86 50 M50 14A18 36 0 0 1 50 86 M50 14A18 36 0 0 0 50 86\"/>"
      },
      {
        "name": "Moon",
        "svg": "<path d=\"M50 14A36 36 0 0 0 50 86A26 36 0 0 1 50 14Z\"/>"
      },
      {
        "name": "Planets",
        "svg": "<path d=\"M6 72L94 72 M10 62a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M36 58a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M70 62a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Solar Eclipse",
        "svg": "<path d=\"M14 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0 M44 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/>"
      },
      {
        "name": "Lunar Eclipse",
        "svg": "<path d=\"M10 50a24 24 0 1 0 48 0a24 24 0 1 0 -48 0 M66 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M58 50L66 50\"/>"
      },
      {
        "name": "Earth Rotation",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0 M50 6L50 94 M50 6A44 44 0 0 1 94 50 M90.4 44.0L94 50L97.6 44.0\"/>"
      },
      {
        "name": "Earth Revolution",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M50 26A44 26 0 1 0 50 74A44 26 0 1 0 50 26 M58 50L94 50 M44 26a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\"/>"
      },
      {
        "name": "Telescope",
        "svg": "<path d=\"M16 30H84V46H16Z M84 38L94 38 M50 46L50 66 M50 66L30 92 M50 66L70 92\"/>"
      },
      {
        "name": "Radio Telescope",
        "svg": "<path d=\"M14 36Q50 96 86 36 M50 66L50 20 M42 20L58 20 M50 66L34 92 M50 66L66 92 M26 92L74 92\"/>"
      },
      {
        "name": "Space Telescope",
        "svg": "<path d=\"M40 20H60V70H40Z M40 20L30 8H70L60 20 M4 44L40 44 M60 44L96 44 M4 38H24V50H4Z M76 38H96V50H76Z M50 70L50 82\"/>"
      },
      {
        "name": "Satellite",
        "svg": "<path d=\"M38 38H62V62H38Z M6 44H32V56H6Z M32 50L38 50 M68 44H94V56H68Z M62 50L68 50 M50 38L50 22 M46 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Artificial Satellite Orbit",
        "svg": "<path d=\"M24 50a26 26 0 1 0 52 0a26 26 0 1 0 -52 0 M6 50a44 26 0 1 0 88 0a44 26 0 1 0 -88 0 M90 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Space Station",
        "svg": "<path d=\"M4 50L96 50 M4 36H22V64H4Z M78 36H96V64H78Z M40 38H60V62H40Z M50 20L50 38 M50 62L50 80\"/>"
      },
      {
        "name": "Rocket",
        "svg": "<path d=\"M50 6C60 18 62 40 62 62H38C38 40 40 18 50 6Z M38 56L26 76L38 72 M62 56L74 76L62 72 M44 62L50 88L56 62\"/>"
      },
      {
        "name": "Space Probe",
        "svg": "<path d=\"M40 40H60V60H40Z M40 40A10 10 0 0 1 60 40 M50 40L50 28 M6 38H14V62H6Z M40 50L14 50 M86 38H94V62H86Z M60 50L86 50\"/>"
      },
      {
        "name": "Asteroid",
        "svg": "<path d=\"M18 40L34 16L58 22L76 14L86 40L74 60L84 78L58 86L36 80L16 66Z\"/>"
      },
      {
        "name": "Comet",
        "svg": "<path d=\"M24 62a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M41 55L92 18 M44 62L94 44\"/>"
      },
      {
        "name": "Meteor",
        "svg": "<path d=\"M88 14L40 62 M28 66a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Meteorite",
        "svg": "<path d=\"M22 74L26 52L44 42L62 46L76 58L72 74Z M6 74L94 74\"/>"
      },
      {
        "name": "Galaxy",
        "svg": "<path d=\"M10 50a40 18 0 1 0 80 0a40 18 0 1 0 -80 0 M30 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/>"
      },
      {
        "name": "Spiral Galaxy",
        "svg": "<path d=\"M50 50L52.5 50.6L52.8 51.5L52.8 52.6L52.4 53.7L51.6 54.7L50.4 55.6L48.9 56.1L47.2 56.2L45.4 55.8L43.6 54.8L42.1 53.3L40.9 51.3L40.3 48.9L40.3 46.4L41.0 43.7L42.4 41.2L44.6 39.1L47.3 37.5L50.5 36.6L54.0 36.6L57.5 37.5L60.8 39.3L63.6 42.0L65.7 45.4L67.0 49.4L67.2 53.8L66.3 58.2L64.2 62.4L61.0 66.0L56.9 68.8L52.1 70.5L46.9 71.0L41.6 70.1L36.5 67.9L32.0 64.4L28.5 59.7L26.2 54.2L25.3 48.1L25.9 41.9L28.2 35.9L32.0 30.5L37.1 26.1L43.2 23.0L50.1 21.6L57.3 21.9L64.3 24.1L70.7 28.0L76.0 33.5L79.8 40.2L81.9 47.9L82.1 56.0L80.1 63.9L76.2 71.3L70.5 77.7L63.2 82.4L54.9 85.3L45.9 86.0L36.9 84.4L28.5 80.6L21.1 74.7L15.4 67.1L11.6 58.1L10.2 48.3L11.3 38.4L14.9 28.8L20.8 20.4L28.7 13.6L38.2 8.9L48.8 6.6L59.7 7.1L70.2 10.3L79.8 16.1L87.8 24.2L93.6 34.1L96.8 45.3L97.1 57.1L94.4 68.8L88.8 79.6L80.7 88.7 M50 50L47.5 49.4L47.2 48.5L47.2 47.4L47.6 46.3L48.4 45.3L49.6 44.4L51.1 43.9L52.8 43.8L54.6 44.2L56.4 45.2L57.9 46.7L59.1 48.7L59.7 51.1L59.7 53.6L59.0 56.3L57.6 58.8L55.4 60.9L52.7 62.5L49.5 63.4L46.0 63.4L42.5 62.5L39.2 60.7L36.4 58.0L34.3 54.6L33.0 50.6L32.8 46.2L33.7 41.8L35.8 37.6L39.0 34.0L43.1 31.2L47.9 29.5L53.1 29.0L58.4 29.9L63.5 32.1L68.0 35.6L71.5 40.3L73.8 45.8L74.7 51.9L74.1 58.1L71.8 64.1L68.0 69.5L62.9 73.9L56.8 77.0L49.9 78.4L42.7 78.1L35.7 75.9L29.3 72.0L24.0 66.5L20.2 59.8L18.1 52.1L17.9 44.0L19.9 36.1L23.8 28.7L29.5 22.3L36.8 17.6L45.1 14.7L54.1 14.0L63.1 15.6L71.5 19.4L78.9 25.3L84.6 32.9L88.4 41.9L89.8 51.7L88.7 61.6L85.1 71.2L79.2 79.6L71.3 86.4L61.8 91.1L51.2 93.4L40.3 92.9L29.8 89.7L20.2 83.9L12.2 75.8L6.4 65.9L3.2 54.7L2.9 42.9L5.6 31.2L11.2 20.4L19.3 11.3\"/>"
      },
      {
        "name": "Black Hole",
        "svg": "<path d=\"M34 50a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M8 50a42 10 0 1 0 84 0a42 10 0 1 0 -84 0\"/>"
      },
      {
        "name": "Neutron Star",
        "svg": "<path d=\"M38 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M50 38L50 6 M50 62L50 94 M44 40L20 22 M56 60L80 78\"/>"
      },
      {
        "name": "White Dwarf",
        "svg": "<path d=\"M32 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0 M6 50L94 50 M50 6L50 94\"/>"
      },
      {
        "name": "Supernova",
        "svg": "<path d=\"M40 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M60.0 50.0L88.0 50.0 M57.7 56.4L79.1 74.4 M51.7 59.8L56.6 87.4 M45.0 58.7L31.0 82.9 M40.6 53.4L14.3 63.0 M40.6 46.6L14.3 37.0 M45.0 41.3L31.0 17.1 M51.7 40.2L56.6 12.6 M57.7 43.6L79.1 25.6\"/>"
      },
      {
        "name": "Nebula",
        "svg": "<path d=\"M20 60C4 60 6 36 22 36C24 20 46 14 54 28C64 14 88 24 84 42C98 46 94 70 80 68C78 84 52 86 48 74C40 86 20 82 20 60Z\"/>"
      },
      {
        "name": "Hubble Telescope",
        "svg": "<path d=\"M20 40H80A11 11 0 0 1 80 62H20A11 11 0 0 1 20 40Z M10 16H90V24H10Z M30 24L30 40 M70 24L70 40 M20 51L6 51\"/>"
      },
      {
        "name": "Gravitational Lensing",
        "svg": "<path d=\"M38 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0 M6 50Q30 38 50 38Q70 38 94 50 M6 50Q30 62 50 62Q70 62 94 50\"/>"
      },
      {
        "name": "Gravitational Wave Illustration",
        "svg": "<path d=\"M6 20L6 80 M94 20L94 80 M6 20Q50 38 94 20 M6 40Q50 58 94 40 M6 60Q50 78 94 60 M6 80Q50 98 94 80\"/>"
      },
      {
        "name": "Cosmic Microwave Background",
        "svg": "<path d=\"M6 6H94V94H6Z M6 24q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0 M6 44q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0 M6 64q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0 M6 82q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0q5.5 -4 11 0q5.5 4 11 0\"/>"
      },
      {
        "name": "Orbital Mechanics",
        "svg": "<path d=\"M6 50a44 26 0 1 0 88 0a44 26 0 1 0 -88 0 M14 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M26 50L6 50 M90 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M50 24L72 24 M66.0 27.6L72 24L66.0 20.4\"/>"
      },
      {
        "name": "Escape Velocity Illustration",
        "svg": "<path d=\"M16 70a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M40 60Q70 40 94 14 M92.3 20.8L94 14L87.2 15.7\"/>"
      },
      {
        "name": "Planetary Motion",
        "svg": "<path d=\"M6 50a44 26 0 1 0 88 0a44 26 0 1 0 -88 0 M14 50a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M26 50L94 50 M68 27.5a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M26 50L72 27.5\"/>"
      }
    ],
    "Experimental and Measurement Instruments": [
      {
        "name": "Oscilloscope",
        "svg": "<path d=\"M14 14H86V86H14Z M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/>"
      },
      {
        "name": "Digital Storage Oscilloscope",
        "svg": "<path d=\"M14 10H86V90H14Z M22 18H78V62H22Z M14 10L22 18 M86 10L78 18 M26 90L26 80 M40 90L40 80 M60 90L60 80 M74 90L74 80\"/>"
      },
      {
        "name": "Signal Generator",
        "svg": "<path d=\"M14 24H86V82H14Z M36 52a14 14 0 1 0 28 0a14 14 0 1 0 -28 0 M50 66L50 82 M86 52L94 52\"/>"
      },
      {
        "name": "Function Generator",
        "svg": "<path d=\"M14 22H86V78H14Z M30 22L30 10 M50 22L50 10 M70 22L70 10 M24 10L36 10 M44 10L56 10 M64 10L76 10 M50 78L50 64 M40 54a10 10 0 1 0 20 0a10 10 0 1 0 -20 0 M86 50L94 50\"/>"
      },
      {
        "name": "Frequency Counter",
        "svg": "<path d=\"M14 30H86V70H14Z M34 30L34 70 M54 30L54 70 M74 30L74 70 M86 50L94 50\"/>"
      },
      {
        "name": "Spectrum Analyzer",
        "svg": "<path d=\"M14 14H86V86H14Z M14 80L30 80L36 40L42 80L60 80L66 60L72 80L86 80\"/>"
      },
      {
        "name": "Digital Multimeter",
        "svg": "<path d=\"M26 14H74V86H26Z M34 14L34 4 M66 14L66 4 M50 14L50 4 M26 64L74 64 M40 86L40 96 M60 86L60 96\"/>"
      },
      {
        "name": "LCR Meter",
        "svg": "<path d=\"M14 20H86V70H14Z M30 70L30 88 M50 70L50 88 M70 70L70 88 M14 44L86 44\"/>"
      },
      {
        "name": "Power Meter",
        "svg": "<path d=\"M14 24H86V68H14Z M36 68L36 82 M64 68L64 82 M14 40L86 40\"/>"
      },
      {
        "name": "Gauss Meter",
        "svg": "<path d=\"M18 14H82V58H18Z M18 40L82 40 M50 58L50 72 M40 72H60V92H40Z\"/>"
      },
      {
        "name": "Tesla Meter",
        "svg": "<path d=\"M18 14H82V58H18Z M18 40L82 40 M50 58L50 72 M40 82a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Lux Meter",
        "svg": "<path d=\"M20 62H80V88H20Z M30 62A20 20 0 0 1 70 62 M26 20L40 44.7 M33.9 41.3L40 44.7L40.2 37.7 M50 8L50 42 M46.4 36.0L50 42L53.6 36.0 M74 20L60 44.6 M59.8 37.6L60 44.6L66.1 41.2\"/>"
      },
      {
        "name": "Light Meter",
        "svg": "<path d=\"M14 34H70V66H14Z M14 50L70 50 M70 50L74 50 M74 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Radiation Survey Meter",
        "svg": "<path d=\"M20 40H76V76H20Z M34 40L34 20 M26 20L42 20 M26 20L14 10 M42 20L54 10 M20 58L76 58\"/>"
      },
      {
        "name": "Data Acquisition System",
        "svg": "<path d=\"M20 30H80V70H20Z M20 40L8 40 M20 50L8 50 M20 60L8 60 M80 50L94 50\"/>"
      },
      {
        "name": "Photogate Timer",
        "svg": "<path d=\"M30 20V70H70V20 M30 40L70 40 M50 70L50 84 M36 84H64V94H36Z\"/>"
      },
      {
        "name": "Optical Sensor",
        "svg": "<path d=\"M30 30H70V70H30Z M6 40L30 40 M24.0 43.6L30 40L24.0 36.4 M6 60L30 60 M24.0 63.6L30 60L24.0 56.4 M40 70L40 86 M50 70L50 86 M60 70L60 86\"/>"
      },
      {
        "name": "Force Sensor",
        "svg": "<path d=\"M6 20H20V80H6Z M20 42H90V54H20Z M70 8L70 42 M66.4 36.0L70 42L73.6 36.0\"/>"
      },
      {
        "name": "Motion Detector",
        "svg": "<path d=\"M14 40H42V60H14Z M42 40A16 16 0 0 1 42 60 M42 40A26 26 0 0 1 42 60 M14 50L6 50\"/>"
      },
      {
        "name": "Accelerometer",
        "svg": "<path d=\"M14 14H86V86H14Z M38 38H62V62H38Z M14 50L20.0 55L26.0 45L32.0 55L38.0 45L38 50 M62 50L68.0 55L74.0 45L80.0 55L86.0 45L86 50\"/>"
      },
      {
        "name": "Gyroscope",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M14 50A36 14 0 1 0 86 50A36 14 0 1 0 14 50 M50 14L50 86 M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/>"
      },
      {
        "name": "Pressure Sensor",
        "svg": "<path d=\"M20 40H80V80H20Z M20 40q7.5 -6 15 0q7.5 6 15 0q7.5 -6 15 0q7.5 6 15 0 M50 4L50 40 M46.4 34.0L50 40L53.6 34.0 M50 80L50 94\"/>"
      },
      {
        "name": "Temperature Controller",
        "svg": "<path d=\"M20 44H80V84H20Z M50 44L50 20 M44 14a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M20 64L8 64 M20 54L80 54\"/>"
      },
      {
        "name": "Digital Balance",
        "svg": "<path d=\"M22 14H78V84H22Z M22 40L78 40 M50 40L50 60 M36 60L64 60\"/>"
      },
      {
        "name": "Laboratory Data Logger",
        "svg": "<path d=\"M20 22H80V62H20Z M30 22L30 10 M50 22L50 10 M70 22L70 10 M20 50L34 36L48 50L62 36L80 50\"/>"
      },
      {
        "name": "Experimental Circuit Board",
        "svg": "<path d=\"M10 14H90V86H10Z M40 36H60V64H40Z M10 50L40 50 M60 40L90 40 M46 36L46 24 M66 64L66 76\"/>"
      },
      {
        "name": "Optical Experiment Bench",
        "svg": "<path d=\"M6 40H94V50H6Z M12 50L12 88 M88 50L88 88 M50 40Q56 25 50 10Q44 25 50 40Z M70 40L80 28 M6 25L50 25\"/>"
      },
      {
        "name": "Magnetic Field Measurement Setup",
        "svg": "<path d=\"M12 40H46V60H12Z M46 50L62 50 M62 44H70V56H62Z M70 50L74 50 M74 30H94V70H74Z M74 40L94 40\"/>"
      },
      {
        "name": "Vibration Measurement Setup",
        "svg": "<path d=\"M6 34H22V66H6Z M22 46Q46 30 70 46 M70 36H90V56H70Z M80 36L80 14 M83.6 20.0L80 14L76.4 20.0\"/>"
      },
      {
        "name": "Physics Laboratory Workstation",
        "svg": "<path d=\"M6 84L94 84 M30 18H70V48H30Z M50 48L50 84 M8 64H28V84H8Z M72 70H92V84H72Z\"/>"
      }
    ],
    "Diagrams, Graphs and Scientific Symbols": [
      {
        "name": "Position-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 88Q40 88 86 14\"/>"
      },
      {
        "name": "Velocity-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 86L86 22\"/>"
      },
      {
        "name": "Acceleration-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 40L88 40\"/>"
      },
      {
        "name": "Displacement-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 80C30 80 36 20 50 20S70 60 88 60\"/>"
      },
      {
        "name": "Force-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M22 88L44 22L66 88\"/>"
      },
      {
        "name": "Momentum-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 88Q30 20 88 30\"/>"
      },
      {
        "name": "Energy-Time Graph",
        "svg": "<path d=\"M12 10V88H92 M12 80H30V62H50V44H70V26H88\"/>"
      },
      {
        "name": "Current-Voltage Graph",
        "svg": "<path d=\"M12 10V88H92 M12 88Q60 88 88 14\"/>"
      },
      {
        "name": "Resistance-Temperature Graph",
        "svg": "<path d=\"M12 10V88H92 M12 68L88 28\"/>"
      },
      {
        "name": "Pressure-Volume Graph",
        "svg": "<path d=\"M12 10V88H92 M16 16C22 58 40 80 86 84\"/>"
      },
      {
        "name": "Temperature-Entropy Graph",
        "svg": "<path d=\"M12 10V88H92 M12 30H52V70H12\"/>"
      },
      {
        "name": "Waveform Graph",
        "svg": "<path d=\"M12 10V88H92 M12 50q9-30 18 0t18 0t18 0t18 0\"/>"
      },
      {
        "name": "Frequency Spectrum",
        "svg": "<path d=\"M12 10V88H92 M24 88L24 30 M46 88L46 46 M68 88L68 62\"/>"
      },
      {
        "name": "Ray Diagram",
        "svg": "<path d=\"M6 50L94 50 M20 50L20 30 M20 30L60 30 M20 30L60 50 M60 20L60 80 M60 30L90 62 M60 50L90 70\"/>"
      },
      {
        "name": "Free-Body Diagram",
        "svg": "<path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M50 42L50 12 M53.6 18.0L50 12L46.4 18.0 M58 54L82 78 M75.2 76.3L82 78L80.3 71.2 M42 54L18 78 M19.7 71.2L18 78L24.8 76.3\"/>"
      },
      {
        "name": "Electric Field Diagram",
        "svg": "<path d=\"M20 20L20 80 M80 20L80 80 M20 34L80 34 M74.0 37.6L80 34L74.0 30.4 M20 50L80 50 M74.0 53.6L80 50L74.0 46.4 M20 66L80 66 M74.0 69.6L80 66L74.0 62.4\"/>"
      },
      {
        "name": "Magnetic Field Diagram",
        "svg": "<path d=\"M50 6L50 94 M32 50a18 40 0 1 0 36 0a18 40 0 1 0 -36 0 M14 50a36 46 0 1 0 72 0a36 46 0 1 0 -72 0\"/>"
      },
      {
        "name": "Circuit Diagram",
        "svg": "<path d=\"M10 20L90 20 M10 80L90 80 M10 20L10 80 M90 20L90 80 M40 20L40 40 M40 60L40 80 M34 40H46V60H34Z M66 20L66 40 M66 60L66 80 M60 40H72V60H60Z\"/>"
      },
      {
        "name": "Atomic Energy Level Diagram",
        "svg": "<path d=\"M44 88a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M10 66A40 40 0 0 1 90 66 M18 52A32 32 0 0 1 82 52 M26 40A24 24 0 0 1 74 40 M50 82L50 16\"/>"
      },
      {
        "name": "Nuclear Decay Graph",
        "svg": "<path d=\"M12 10V88H92 M12 20H30V40H50V60H70V76H88\"/>"
      },
      {
        "name": "Vector Diagram",
        "svg": "<path d=\"M20 80L80 80 M80 80L80 30 M20 80L80 30 M77.7 36.6L80 30L73.1 31.1\"/>"
      },
      {
        "name": "Coordinate Axes",
        "svg": "<path d=\"M10 50L94 50 M88.0 53.6L94 50L88.0 46.4 M50 90L50 10 M53.6 16.0L50 10L46.4 16.0\"/>"
      },
      {
        "name": "Cartesian Coordinate System",
        "svg": "<path d=\"M10 10H90V90H10Z M10 50L90 50 M50 10L50 90\"/>"
      },
      {
        "name": "Polar Coordinate System",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0 M50 50L86 50 M50 50L74 26 M64 50A14 14 0 0 0 60 40\"/>"
      },
      {
        "name": "Three-Dimensional Coordinate System",
        "svg": "<path d=\"M30 70L92 70 M86.0 73.6L92 70L86.0 66.4 M30 70L30 8 M33.6 14.0L30 8L26.4 14.0 M30 70L8 88 M10.4 81.4L8 88L14.9 87.0\"/>"
      },
      {
        "name": "Vector Addition",
        "svg": "<path d=\"M10 86L50 50 M47.9 56.7L50 50L43.1 51.3 M50 50L90 22 M87.1 28.4L90 22L83.0 22.5 M10 86L90 22\"/>"
      },
      {
        "name": "Vector Resolution",
        "svg": "<path d=\"M10 86L70 26 M68.3 32.8L70 26L63.2 27.7 M70 26L70 86 M10 86L70 86 M70 86L94 86\"/>"
      },
      {
        "name": "Force Vectors",
        "svg": "<path d=\"M50 50L20 20 M26.8 21.7L20 20L21.7 26.8 M50 50L84 30 M80.7 36.1L84 30L77.0 29.9 M50 50L50 88 M46.4 82.0L50 88L53.6 82.0\"/>"
      },
      {
        "name": "Velocity Vectors",
        "svg": "<path d=\"M16 50a34 34 0 1 0 68 0a34 34 0 1 0 -68 0 M50 16L70 16 M64.0 19.6L70 16L64.0 12.4 M84 50L84 70 M80.4 64.0L84 70L87.6 64.0\"/>"
      },
      {
        "name": "Acceleration Vectors",
        "svg": "<path d=\"M30 70L30 20 M33.6 26.0L30 20L26.4 26.0 M30 70L82 70 M76.0 73.6L82 70L76.0 66.4\"/>"
      },
      {
        "name": "SI Unit Symbols",
        "svg": "<path d=\"M70 30C70 18 30 18 30 34C30 50 70 46 70 64C70 80 30 80 30 68 M70 64L84 64 M84 20L84 80\"/>"
      },
      {
        "name": "Measurement Uncertainty Illustration",
        "svg": "<path d=\"M8 80C30 80 36 20 50 20S70 80 92 80 M6 80L94 80 M34 80L34 90 M34 90L66 90 M66 90L66 80\"/>"
      },
      {
        "name": "Error Bar Diagram",
        "svg": "<path d=\"M12 10V88H92 M30 88L30 30 M24 30L36 30 M50 88L50 46 M44 46L56 46 M70 88L70 20 M64 20L76 20\"/>"
      },
      {
        "name": "Experimental Data Graph",
        "svg": "<path d=\"M12 10V88H92 M12 75.3L86 26 M26 63.3a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M46 50a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M66 36.7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\"/>"
      },
      {
        "name": "Scientific Notation Symbols",
        "svg": "<path d=\"M18 34L42 58M42 34L18 58 M42 34L58 18 M56.3 24.8L58 18L51.2 19.7\"/>"
      }
    ],
    "Basic Components & Machine Elements": [
      {
        "name": "Nut",
        "svg": "<path d=\"M50 10L84 30L84 70L50 90L16 70L16 30Z\"/><path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/>"
      },
      {
        "name": "Bolt",
        "svg": "<path d=\"M18 12H82V36H18Z\"/><path d=\"M40 36H60V88H40Z\"/><path d=\"M40 50L60 50\"/><path d=\"M40 62L60 62\"/><path d=\"M40 74L60 74\"/><path d=\"M40 88L50 94L60 88\"/>"
      },
      {
        "name": "Screw",
        "svg": "<path d=\"M24 14H76V30H24Z\"/><path d=\"M24 22L76 22\"/><path d=\"M42 30H58V86H42Z\"/><path d=\"M42 44L58 44\"/><path d=\"M42 56L58 56\"/><path d=\"M42 68L58 68\"/><path d=\"M42 86L50 94L58 86\"/>"
      },
      {
        "name": "Washer",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M32 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0\"/><path d=\"M50 10L50 32\"/>"
      },
      {
        "name": "Stud bolt",
        "svg": "<path d=\"M30 6H70V20H30Z\"/><path d=\"M42 20H58V90H42Z\"/><path d=\"M42 36L58 36\"/><path d=\"M42 50L58 50\"/><path d=\"M42 64L58 64\"/><path d=\"M42 78L58 78\"/>"
      },
      {
        "name": "Threaded rod",
        "svg": "<path d=\"M42 4H58V96H42Z\"/><path d=\"M42 16L58 22\"/><path d=\"M42 30L58 36\"/><path d=\"M42 44L58 50\"/><path d=\"M42 58L58 64\"/><path d=\"M42 72L58 78\"/><path d=\"M42 86L58 92\"/>"
      },
      {
        "name": "Shaft",
        "svg": "<path d=\"M6 42L50 42L50 36L94 36L94 64L50 64L50 58L6 58Z\"/>"
      },
      {
        "name": "Key and keyway",
        "svg": "<path d=\"M22 52a28 28 0 1 0 56 0a28 28 0 1 0 -56 0\"/><path d=\"M40 18H60V30H40Z\"/><path d=\"M40 30L60 30\"/>"
      },
      {
        "name": "Coupling",
        "svg": "<path d=\"M6 40H36V60H6Z\"/><path d=\"M36 28H64V72H36Z\"/><path d=\"M64 40H94V60H64Z\"/>"
      },
      {
        "name": "Flange coupling",
        "svg": "<path d=\"M6 42H38V58H6Z\"/><path d=\"M38 20H46V80H38Z\"/><path d=\"M54 20H62V80H54Z\"/><path d=\"M62 42H94V58H62Z\"/><path d=\"M36 32L64 32\"/><path d=\"M36 68L64 68\"/>"
      },
      {
        "name": "Universal joint",
        "svg": "<path d=\"M36 12L36 30L64 30L64 12\"/><path d=\"M36 88L36 70L64 70L64 88\"/><path d=\"M50 30L50 70\"/><path d=\"M30 50L70 50\"/>"
      },
      {
        "name": "Bearing",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M30 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/><path d=\"M70.0 50.0L90.0 50.0 M50.0 70.0L50.0 90.0 M30.0 50.0L10.0 50.0 M50.0 30.0L50.0 10.0\"/>"
      },
      {
        "name": "Ball bearing",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M30 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/><path d=\"M70.0 50.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M55.0 76.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M25.0 76.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M10.0 50.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M25.0 24.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M55.0 24.0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Roller bearing",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M30 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/><path d=\"M70.0 55.0L90.0 55.0L90.0 45.0L70.0 45.0Z\"/><path d=\"M55.7 69.8L65.7 87.1L74.3 82.1L64.3 64.8Z\"/><path d=\"M35.7 64.8L25.7 82.1L34.3 87.1L44.3 69.8Z\"/><path d=\"M30.0 45.0L10.0 45.0L10.0 55.0L30.0 55.0Z\"/><path d=\"M44.3 30.2L34.3 12.9L25.7 17.9L35.7 35.2Z\"/><path d=\"M64.3 35.2L74.3 17.9L65.7 12.9L55.7 30.2Z\"/>"
      },
      {
        "name": "Thrust bearing",
        "svg": "<path d=\"M14 40L86 40\"/><path d=\"M14 60L86 60\"/><path d=\"M16 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M40 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M64 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/>"
      },
      {
        "name": "Bush bearing",
        "svg": "<path d=\"M30 20H70V80H30Z\"/><path d=\"M6 46L30 46\"/><path d=\"M70 46L94 46\"/><path d=\"M6 54L30 54\"/><path d=\"M70 54L94 54\"/>"
      },
      {
        "name": "Gear",
        "svg": "<path d=\"M82.0 50.0L89.5 56.3L88.0 62.4L78.5 64.5L75.9 68.8L78.3 78.3L73.5 82.4L64.5 78.5L59.9 80.4L56.3 89.5L50.0 90.0L45.0 81.6L40.1 80.4L31.8 85.6L26.5 82.4L27.4 72.6L24.1 68.8L14.4 68.2L12.0 62.4L18.4 55.0L18.0 50.0L10.5 43.7L12.0 37.6L21.5 35.5L24.1 31.2L21.7 21.7L26.5 17.6L35.5 21.5L40.1 19.6L43.7 10.5L50.0 10.0L55.0 18.4L59.9 19.6L68.2 14.4L73.5 17.6L72.6 27.4L75.9 31.2L85.6 31.8L88.0 37.6L81.6 45.0Z\"/><path d=\"M62.0 50.0L82.0 50.0 M50.0 62.0L50.0 82.0 M38.0 50.0L18.0 50.0 M50.0 38.0L50.0 18.0\"/>"
      },
      {
        "name": "Spur gear",
        "svg": "<path d=\"M90.0 50.0L80.4 59.9L82.4 73.5L68.8 75.9L62.4 88.0L50.0 82.0L37.6 88.0L31.2 75.9L17.6 73.5L19.6 59.9L10.0 50.0L19.6 40.1L17.6 26.5L31.2 24.1L37.6 12.0L50.0 18.0L62.4 12.0L68.8 24.1L82.4 26.5L80.4 40.1Z\"/><path d=\"M38 50a12 12 0 1 0 24 0a12 12 0 1 0 -24 0\"/>"
      },
      {
        "name": "Helical gear",
        "svg": "<path d=\"M20 14H80V86H20Z\"/><path d=\"M20 30L80 14\"/><path d=\"M20 50L80 34\"/><path d=\"M20 70L80 54\"/><path d=\"M20 86L80 70\"/>"
      },
      {
        "name": "Bevel gear",
        "svg": "<path d=\"M14 22L86 22L50 88Z\"/><path d=\"M30 22L44 46\"/><path d=\"M50 22L58 48\"/><path d=\"M70 22L68 40\"/>"
      },
      {
        "name": "Worm gear",
        "svg": "<path d=\"M6 10H22V90H6Z\"/><path d=\"M6 22L22 30\"/><path d=\"M6 38L22 46\"/><path d=\"M6 54L22 62\"/><path d=\"M6 70L22 78\"/><path d=\"M32 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/>"
      },
      {
        "name": "Rack and pinion",
        "svg": "<path d=\"M12 58a18 18 0 1 0 36 0a18 18 0 1 0 -36 0\"/><path d=\"M6 76H94V88H6Z\"/><path d=\"M50 76L50 66\"/><path d=\"M62 76L62 66\"/><path d=\"M74 76L74 66\"/><path d=\"M86 76L86 66\"/>"
      },
      {
        "name": "Pulley",
        "svg": "<path d=\"M14 50a36 36 0 1 0 72 0a36 36 0 1 0 -72 0\"/><path d=\"M40 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M60.0 50.0L86.0 50.0 M50.0 60.0L50.0 86.0 M40.0 50.0L14.0 50.0 M50.0 40.0L50.0 14.0\"/><path d=\"M34 8L66 8\"/><path d=\"M50 14L50 8\"/>"
      },
      {
        "name": "Belt drive",
        "svg": "<path d=\"M10 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/><path d=\"M50 50a20 20 0 1 0 40 0a20 20 0 1 0 -40 0\"/><path d=\"M30 30L70 30\"/><path d=\"M30 70L70 70\"/>"
      },
      {
        "name": "Chain drive",
        "svg": "<path d=\"M10 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0\"/><path d=\"M54 50a18 18 0 1 0 36 0a18 18 0 1 0 -36 0\"/><path d=\"M28 32L72 32\"/><path d=\"M28 68L72 68\"/><path d=\"M40 32L40 28\"/><path d=\"M52 32L52 28\"/><path d=\"M64 32L64 28\"/><path d=\"M40 68L40 72\"/><path d=\"M52 68L52 72\"/><path d=\"M64 68L64 72\"/>"
      },
      {
        "name": "Sprocket",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M58.0 50.0L80.0 50.0 M46.0 56.9L35.0 76.0 M46.0 43.1L35.0 24.0\"/><path d=\"M80.0 50.0L88.0 50.0 M76.0 65.0L82.9 69.0 M65.0 76.0L69.0 82.9 M50.0 80.0L50.0 88.0 M35.0 76.0L31.0 82.9 M24.0 65.0L17.1 69.0 M20.0 50.0L12.0 50.0 M24.0 35.0L17.1 31.0 M35.0 24.0L31.0 17.1 M50.0 20.0L50.0 12.0 M65.0 24.0L69.0 17.1 M76.0 35.0L82.9 31.0\"/>"
      },
      {
        "name": "Flywheel",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M18 50a32 32 0 1 0 64 0a32 32 0 1 0 -64 0\"/><path d=\"M50 10L50 18\"/><path d=\"M50 82L50 90\"/><path d=\"M40 50a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M60.0 50.0L82.0 50.0 M40.0 50.0L18.0 50.0\"/>"
      },
      {
        "name": "Spring",
        "svg": "<path d=\"M30 10L70 10\"/><path d=\"M30 90L70 90\"/><path d=\"M50 10L60 16.7L40 23.3L60 30.0L40 36.7L60 43.3L40 50.0L60 56.7L40 63.3L60 70.0L40 76.7L60 83.3L40 90.0L50 90\"/>"
      },
      {
        "name": "Compression spring",
        "svg": "<path d=\"M30 26L70 26\"/><path d=\"M30 74L70 74\"/><path d=\"M50 26L58 30.8L42 35.6L58 40.4L42 45.2L58 50.0L42 54.8L58 59.6L42 64.4L58 69.2L42 74.0L50 74\"/><path d=\"M50 4L50 26 M46.4 20.0L50 26L53.6 20.0\"/><path d=\"M50 96L50 74 M53.6 80.0L50 74L46.4 80.0\"/>"
      },
      {
        "name": "Tension spring",
        "svg": "<path d=\"M30 6L70 6\"/><path d=\"M50 6L50 14\"/><path d=\"M50 14L58 19.8L42 25.7L58 31.5L42 37.3L58 43.2L42 49.0L58 54.8L42 60.7L58 66.5L42 72.3L58 78.2L42 84.0L50 84\"/><path d=\"M50 84L50 94\"/>"
      },
      {
        "name": "Leaf spring",
        "svg": "<path d=\"M4 20H16V56H4Z\"/><path d=\"M16 28Q50 8 84 28\"/><path d=\"M16 42Q50 22 84 42\"/><path d=\"M16 56Q50 36 84 56\"/>"
      },
      {
        "name": "Mechanical seal",
        "svg": "<path d=\"M14 14L86 14L86 86L14 86Z\"/><path d=\"M6 50L94 50\"/><path d=\"M44 36H56V64H44Z\"/><path d=\"M50 14L55 19.5L45 25.0L55 30.5L45 36.0L50 36\"/>"
      },
      {
        "name": "Gasket",
        "svg": "<path d=\"M14 18H86V34H14Z\"/><path d=\"M14 34H86V44H14Z\"/><path d=\"M14 44H86V60H14Z\"/><path d=\"M30 14L30 66\"/><path d=\"M70 14L70 66\"/>"
      },
      {
        "name": "O-ring",
        "svg": "<path d=\"M28 38a22 22 0 1 0 44 0a22 22 0 1 0 -44 0\"/><path d=\"M18 60H82V82H18Z\"/>"
      },
      {
        "name": "Mechanical brake",
        "svg": "<path d=\"M20 50a30 30 0 1 0 60 0a30 30 0 1 0 -60 0\"/><path d=\"M21.8 39.7A30 30 0 0 1 39.7 21.8\"/><path d=\"M39.7 21.8L20 92\"/><path d=\"M20 92L8 80 M14.8 81.7L8 80L9.7 86.8\"/>"
      },
      {
        "name": "Disc brake",
        "svg": "<path d=\"M10 50a40 40 0 1 0 80 0a40 40 0 1 0 -80 0\"/><path d=\"M42 50a8 8 0 1 0 16 0a8 8 0 1 0 -16 0\"/><path d=\"M2 40H18V60H2Z\"/><path d=\"M82 40H98V60H82Z\"/><path d=\"M18 40H30V60H18\"/>"
      },
      {
        "name": "Clutch",
        "svg": "<path d=\"M6 50L40 50\"/><path d=\"M60 50L94 50\"/><path d=\"M40 20L40 80\"/><path d=\"M60 20L60 80\"/><path d=\"M40 50L60 50\"/>"
      },
      {
        "name": "Cam and follower",
        "svg": "<path d=\"M12 50a28 28 0 1 0 56 0a28 28 0 1 0 -56 0\"/><path d=\"M40 50L68 50\"/><path d=\"M68 6L68 94\"/>"
      },
      {
        "name": "Crankshaft",
        "svg": "<path d=\"M8 60L30 60L38 30L62 30L70 60L92 60\"/>"
      },
      {
        "name": "Connecting rod",
        "svg": "<path d=\"M40 22a10 10 0 1 0 20 0a10 10 0 1 0 -20 0\"/><path d=\"M36 74a14 14 0 1 0 28 0a14 14 0 1 0 -28 0\"/><path d=\"M40 22L36 74\"/><path d=\"M60 22L64 74\"/>"
      }
    ]
  }
};
