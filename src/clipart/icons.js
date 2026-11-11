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
    ]
  }
};
