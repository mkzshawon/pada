// PADA Conversion: each category lists its units as [name, symbol, factor].
// The factor converts one unit into the category's base unit (shown in the comment).
// Temperature is special: its "factor" is a short key used by the conversion code.
window.PADA_UNITS = [
  { name: "Length", units: [
    ["Kilometer", "km", 1000], ["Hectometer", "hm", 100], ["Dekameter", "dam", 10], ["Meter", "m", 1],
    ["Decimeter", "dm", 0.1], ["Centimeter", "cm", 0.01], ["Millimeter", "mm", 0.001], ["Micrometer", "µm", 1e-6],
    ["Nanometer", "nm", 1e-9], ["Picometer", "pm", 1e-12], ["Inch", "in", 0.0254], ["Foot", "ft", 0.3048],
    ["Yard", "yd", 0.9144], ["Mile", "mi", 1609.344], ["Nautical Mile", "nmi", 1852], ["Fathom", "fath", 1.8288],
    ["Rod", "rd", 5.0292], ["Chain", "ch", 20.1168], ["Furlong", "fur", 201.168], ["Angstrom", "Å", 1e-10] ] },
  { name: "Area", units: [
    ["Square Kilometer", "km²", 1e6], ["Hectare", "ha", 1e4], ["Acre", "ac", 4046.8564224], ["Square Meter", "m²", 1],
    ["Square Decimeter", "dm²", 0.01], ["Square Centimeter", "cm²", 1e-4], ["Square Millimeter", "mm²", 1e-6],
    ["Square Mile", "mi²", 2589988.110336], ["Square Yard", "yd²", 0.83612736], ["Square Foot", "ft²", 0.09290304],
    ["Square Inch", "in²", 0.00064516], ["Square Rod", "rd²", 25.29295], ["Are", "a", 100],
    ["Square Chain", "ch²", 404.68564224], ["Square Nautical Mile", "nmi²", 3429904] ] },
  { name: "Volume", units: [
    ["Cubic Kilometer", "km³", 1e9], ["Cubic Meter", "m³", 1], ["Cubic Decimeter", "dm³", 0.001],
    ["Cubic Centimeter", "cm³", 1e-6], ["Cubic Millimeter", "mm³", 1e-9], ["Liter", "L", 0.001],
    ["Milliliter", "mL", 1e-6], ["Centiliter", "cL", 1e-5], ["Deciliter", "dL", 1e-4], ["Hectoliter", "hL", 0.1],
    ["Kiloliter", "kL", 1], ["Cubic Inch", "in³", 1.6387064e-5], ["Cubic Foot", "ft³", 0.028316846592],
    ["Cubic Yard", "yd³", 0.764554857984], ["Cubic Mile", "mi³", 4168181825.44], ["US Gallon", "US gal", 0.003785411784],
    ["UK Gallon", "Imp gal", 0.00454609], ["US Quart", "US qt", 0.000946352946], ["UK Quart", "Imp qt", 0.00113652],
    ["US Pint", "US pt", 0.000473176473], ["UK Pint", "Imp pt", 0.000568261], ["US Fluid Ounce", "US fl oz", 2.95735295625e-5],
    ["UK Fluid Ounce", "Imp fl oz", 2.84130625e-5], ["US Cup", "US cup", 0.0002365882365],
    ["US Tablespoon", "tbsp", 1.478676478125e-5], ["US Teaspoon", "tsp", 4.92892159375e-6], ["Barrel (Oil)", "bbl", 0.158987294928] ] },
  { name: "Weight / Mass", units: [
    ["Metric Ton (Tonne)", "t", 1000], ["Kilogram", "kg", 1], ["Hectogram", "hg", 0.1], ["Dekagram", "dag", 0.01],
    ["Gram", "g", 0.001], ["Decigram", "dg", 1e-4], ["Centigram", "cg", 1e-5], ["Milligram", "mg", 1e-6],
    ["Microgram", "µg", 1e-9], ["Nanogram", "ng", 1e-12], ["Pound", "lb", 0.45359237], ["Ounce", "oz", 0.028349523125],
    ["Stone", "st", 6.35029318], ["US Short Ton", "ton US", 907.18474], ["UK Long Ton", "ton UK", 1016.0469088],
    ["Carat", "ct", 0.0002], ["Grain", "gr", 6.479891e-5], ["Atomic Mass Unit", "u", 1.66053906660e-27],
    ["Tola", "tola", 0.0116638], ["Maund", "maund", 37.3242] ] },
  { name: "Time", units: [
    ["Nanosecond", "ns", 1e-9], ["Microsecond", "µs", 1e-6], ["Millisecond", "ms", 1e-3], ["Second", "s", 1],
    ["Minute", "min", 60], ["Hour", "h", 3600], ["Day", "d", 86400], ["Week", "week", 604800],
    ["Fortnight", "fortnight", 1209600], ["Month (Average)", "month", 2629746], ["Year (365 days)", "year", 31536000],
    ["Leap Year (366 days)", "leap year", 31622400], ["Decade", "decade", 315576000], ["Century", "century", 3155760000],
    ["Millennium", "millennium", 31557600000] ] },
  { name: "Temperature", temp: true, units: [
    ["Celsius", "°C", "c"], ["Fahrenheit", "°F", "f"], ["Kelvin", "K", "k"], ["Rankine", "°R", "r"], ["Réaumur", "°Ré", "re"] ] },
  { name: "Speed / Velocity", units: [
    ["Meter per Second", "m/s", 1], ["Kilometer per Hour", "km/h", 1 / 3.6], ["Mile per Hour", "mph", 0.44704],
    ["Foot per Second", "ft/s", 0.3048], ["Foot per Minute", "ft/min", 0.00508], ["Knot", "kn", 0.5144444444],
    ["Centimeter per Second", "cm/s", 0.01], ["Mach", "Ma", 340.29], ["Speed of Light", "c", 299792458] ] },
  { name: "Acceleration", units: [
    ["Meter per Second Squared", "m/s²", 1], ["Centimeter per Second Squared", "cm/s²", 0.01],
    ["Foot per Second Squared", "ft/s²", 0.3048], ["Standard Gravity", "g", 9.80665], ["Gal", "Gal", 0.01], ["Milligal", "mGal", 1e-5] ] },
  { name: "Density", units: [
    ["Kilogram per Cubic Meter", "kg/m³", 1], ["Gram per Cubic Centimeter", "g/cm³", 1000], ["Gram per Cubic Meter", "g/m³", 0.001],
    ["Kilogram per Liter", "kg/L", 1000], ["Gram per Liter", "g/L", 1], ["Milligram per Liter", "mg/L", 0.001],
    ["Pound per Cubic Foot", "lb/ft³", 16.018463], ["Pound per Cubic Inch", "lb/in³", 27679.905],
    ["Pound per US Gallon", "lb/US gal", 119.826427] ] },
  { name: "Pressure", units: [
    ["Pascal", "Pa", 1], ["Kilopascal", "kPa", 1000], ["Megapascal", "MPa", 1e6], ["Gigapascal", "GPa", 1e9],
    ["Bar", "bar", 1e5], ["Millibar", "mbar", 100], ["Hectopascal", "hPa", 100], ["Atmosphere", "atm", 101325],
    ["Technical Atmosphere", "at", 98066.5], ["Torr", "Torr", 133.322368], ["Millimeter of Mercury", "mmHg", 133.322387],
    ["Centimeter of Mercury", "cmHg", 1333.22387], ["Inch of Mercury", "inHg", 3386.389], ["PSI", "psi", 6894.757293],
    ["PSF", "psf", 47.88026], ["Kilogram-force per Square Centimeter", "kgf/cm²", 98066.5],
    ["Kilogram-force per Square Meter", "kgf/m²", 9.80665], ["Inch of Water Column", "inH₂O", 249.08891],
    ["Millimeter of Water Column", "mmH₂O", 9.80665] ] },
  { name: "Force", units: [
    ["Newton", "N", 1], ["Kilonewton", "kN", 1000], ["Meganewton", "MN", 1e6], ["Millinewton", "mN", 0.001],
    ["Dyne", "dyn", 1e-5], ["Kilogram-force", "kgf", 9.80665], ["Gram-force", "gf", 0.00980665],
    ["Pound-force", "lbf", 4.4482216152605], ["Ounce-force", "ozf", 0.278013851], ["Poundal", "pdl", 0.138254954376],
    ["Kip", "kip", 4448.2216152605] ] },
  { name: "Energy", units: [
    ["Joule", "J", 1], ["Kilojoule", "kJ", 1000], ["Megajoule", "MJ", 1e6], ["Gigajoule", "GJ", 1e9],
    ["Millijoule", "mJ", 0.001], ["Calorie", "cal", 4.184], ["Kilocalorie", "kcal", 4184], ["Watt-hour", "Wh", 3600],
    ["Kilowatt-hour", "kWh", 3.6e6], ["Megawatt-hour", "MWh", 3.6e9], ["Gigawatt-hour", "GWh", 3.6e12],
    ["Electronvolt", "eV", 1.602176634e-19], ["Kiloelectronvolt", "keV", 1.602176634e-16],
    ["Megaelectronvolt", "MeV", 1.602176634e-13], ["British Thermal Unit", "BTU", 1055.05585], ["Therm", "thm", 105480400],
    ["Erg", "erg", 1e-7], ["Foot-pound", "ft·lbf", 1.3558179483] ] },
  { name: "Work", units: [
    ["Joule", "J", 1], ["Kilojoule", "kJ", 1000], ["Megajoule", "MJ", 1e6], ["Erg", "erg", 1e-7],
    ["Foot-pound", "ft·lbf", 1.3558179483], ["Inch-pound", "in·lbf", 0.112984829], ["Newton-meter", "N·m", 1],
    ["Kilogram-force meter", "kgf·m", 9.80665], ["Electronvolt", "eV", 1.602176634e-19] ] },
  { name: "Power", units: [
    ["Watt", "W", 1], ["Kilowatt", "kW", 1000], ["Megawatt", "MW", 1e6], ["Gigawatt", "GW", 1e9],
    ["Milliwatt", "mW", 0.001], ["Microwatt", "µW", 1e-6], ["Horsepower (Mechanical)", "hp", 745.69987158],
    ["Metric Horsepower", "PS", 735.49875], ["Boiler Horsepower", "bhp", 9809.5], ["BTU per Hour", "BTU/h", 0.29307107],
    ["Foot-pound per Second", "ft·lbf/s", 1.3558179483], ["Kilocalorie per Hour", "kcal/h", 1.16222],
    ["Ton of Refrigeration", "TR", 3516.8528] ] },
  { name: "Torque", units: [
    ["Newton-meter", "N·m", 1], ["Kilonewton-meter", "kN·m", 1000], ["Newton-centimeter", "N·cm", 0.01],
    ["Newton-millimeter", "N·mm", 0.001], ["Kilogram-force meter", "kgf·m", 9.80665],
    ["Kilogram-force centimeter", "kgf·cm", 0.0980665], ["Pound-force foot", "lbf·ft", 1.3558179483],
    ["Pound-force inch", "lbf·in", 0.112984829], ["Ounce-force inch", "ozf·in", 0.0070615518] ] },
  { name: "Frequency", units: [
    ["Hertz", "Hz", 1], ["Kilohertz", "kHz", 1e3], ["Megahertz", "MHz", 1e6], ["Gigahertz", "GHz", 1e9],
    ["Terahertz", "THz", 1e12], ["Millihertz", "mHz", 1e-3], ["Revolutions per Minute", "rpm", 1 / 60],
    ["Revolutions per Second", "rps", 1], ["Cycles per Minute", "cpm", 1 / 60], ["Radian per Second", "rad/s", 1 / (2 * Math.PI)] ] },
  { name: "Angle", units: [
    ["Degree", "°", Math.PI / 180], ["Radian", "rad", 1], ["Milliradian", "mrad", 0.001], ["Gradian", "gon", Math.PI / 200],
    ["Arcminute", "′", Math.PI / 10800], ["Arcsecond", "″", Math.PI / 648000], ["Revolution", "rev", 2 * Math.PI],
    ["Turn", "turn", 2 * Math.PI], ["Quadrant", "quadrant", Math.PI / 2] ] },
];
