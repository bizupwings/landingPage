export const products = [
  {
    title: "General Purpose LED",
    slug: "general-purpose-led",
    category: "LED",
    categorySlug: "led",
    specs: "3mm, 5mm Diffused/Transparent LED",
    colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
    applications: ["UPS", "Inverter", "Stabilisers", "Telecom", "Power Supply"],
    image: "general_led.jpg",
  },
  {
    title: "High Bright LED",
    slug: "high-bright-led",
    category: "LED",
    categorySlug: "led",
    specs: "3mm, 5mm, 8mm, 10mm High bright LED (4000mcd to 20,000mcd)",
    colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
    applications: ["Traffic Signals", "Railway Signals", "Indoor & Outdoor Lighting"],
    image: "high_bright_led.jpeg",
  },
  {
    title: "Power LED",
    slug: "power-led",
    category: "LED",
    categorySlug: "led",
    specs: "Star type, Chip type, High bright LED (0.5W to 30W)",
    colors: ["Warm White", "Cool White", "Milky White"],
    applications: ["Decoration", "Home/Commercial Lighting", "Street Lighting"],
    image: "power_led.png",
  },
  {
    title: "Infra Red and Other LEDs",
    slug: "infra-red-and-other-leds",
    category: "LED",
    categorySlug: "led",
    specs: "Round IR LED, Moulded IR Modules, PLCC/SMD LEDs",
    applications: ["Remote Control Systems", "TV", "Energy Meters"],
    image: "ir_led.jpg",
  },
  {
    title: "Lithium Batteries",
    slug: "lithium-batteries",
    category: "Batteries",
    categorySlug: "batteries",
    specs: "Li/SOCI2, Li/MnO2, Li-ion, Li-Polymer (25mAh to 10,000mAh)",
    image: "li-battery.jpeg",
  },
  {
    title: "Nickel Batteries",
    slug: "nickel-batteries",
    category: "Batteries",
    categorySlug: "batteries",
    specs: "Ni-Mh, Ni-Cd Batteries (25mAh to 50,000mAh)",
    image: "ni_battery.jpg",
  },
  {
    title: "Capacitors",
    slug: "capacitors",
    category: "Capacitors",
    categorySlug: "capacitors",
    specs: "Aluminium Electrolytic, Ceramic, Tantalum, SMD",
    image: "capacitor.jpg",
  },
  {
  title: "Resistors",
  slug: "resistors",
  category: "Resistors",
  categorySlug: "resistors",
  specs: "CFR, MFR, Wire Wound, SMD, Fusible",
  image: "resistor.jpg",

  description:
    "Comprehensive range of chip and DIP resistors including thick film, thin film, metal film, wire wound and automotive grade resistors.",

  features: [
    "Thick Film Chip Resistors (RCT / ACR / RCA)",
    "Anti-Sulfur Chip Resistors (AS / AAS)",
    "Thin Film Precision Resistors (AR / AAR)",
    "Current Sensing Resistors (CS / ACS)",
    "High Voltage & Surge Withstanding Resistors",
    "Wire Wound & Cement Resistors"
  ],

  technicalSpecs: [
    { label: "Standards", value: "RoHS & REACH compliant" },
    { label: "Automotive", value: "AEC-Q200 available" },
    { label: "Certifications", value: "ISO 9001 / 14001 / 45001 / IATF 16949" }
  ],

  datasheetPdf: "/pdf/resistor_hkr.pdf"


  },
  {
    title: "LCD Displays",
    slug: "lcd-displays",
    category: "Liquid Crystal Display (LCD)",
    categorySlug: "liquid-crystal-display-lcd",
    specs: "Alpha Numeric, Seven Segment, Graphics LCD",
    image: "lcd.jpg",
  },
  {
    title: "LED Displays",
    slug: "led-displays",
    category: "LED Display",
    categorySlug: "led-display",
    specs: "Seven Segment (0.30\" to 8\")",
    image: "led.png",
  },
 {
  title: "Shunt Resistors",
  slug: "shunt-resistors",
  category: "Shunt Resistance",
  categorySlug: "shunt-resistance",
  specs: "Custom Manganin / Copper Shunt for Energy Meters",
  image: "shard.jpg",

  description:
    "High precision manganin shunt resistors designed for energy meters, current sensing and power measurement applications.",

  features: [
    "High current capability",
    "Low temperature coefficient",
    "Stable resistance value",
    "Custom dimensions available"
  ],

 image: "shunt.jpg",

datasheetImages: [
  "/products/shunt1.png",
  "/products/shunt2.png",
  "/products/shunt3.png",
  "/products/shunt4.png"


  ]
  },
  {
  title: "Crystals & Oscillators",
  slug: "crystals-oscillators",
  category: "Crystals & Frequency Devices",
  categorySlug: "crystals-frequency-devices",

  
  image: "quartz.jpg",

  description:
    "High precision quartz crystals for frequency control applications in industrial and consumer electronics.",

  features: [
    "Wide frequency range",
    "Low ESR",
    "High stability",
    "Custom specifications available"
  ],

  technicalSpecs: [
    { label: "Frequency Range", value: "8–50 MHz" },
    { label: "Load Capacitance", value: "18pF" },
    { label: "Tolerance", value: "±20ppm" },
    { label: "Operating Temp", value: "-40°C to +85°C" }
  ],

  datasheetPdf: "/pdf/crystal_sjk.pdf",
  },
  {
    title: "Transformers",
    slug: "transformers",
    category: "Transformers",
    categorySlug: "transformers",
    specs: "Current, Potential, Power Transformers",
    image: "transformer.jpg",
  },
  {
    title: "Bare PCB",
    slug: "bare-pcb",
    category: "Bare PCB",
    categorySlug: "bare-pcb",
    specs: "2 to 14 Layers (Single/Double Side)",
    image: "pcb.jpg",
  },
  {
  title: "Relays",
  slug: "relays",
  category: "Relays",
  categorySlug: "relays",
  specs: "Telecom, Automotive, Reed Relays",
  image: "relays.jpg",

  description:
    "Magnetic latching relays (SH31A / SH31E series) with low power consumption and high switching capability.",

  features: [
    "Dual coil available",
    "Low power consumption",
    "Switch capability up to 120A",
    "Short-circuit current capability up to 6000A",
    "RoHS compliant"
  ],

  technicalSpecs: [
    { label: "Contact material", value: "Silver alloy" },
    { label: "Max switching current", value: "60A / 90A / 120A" },
    { label: "Max switching voltage", value: "250VAC" },
    { label: "Dielectric strength", value: "4000VAC (1 min)" },
    { label: "Ambient temperature", value: "-40°C to +70°C" }
  ],

  datasheetPdf: "/pdf/latch_relay.pdf"

  },
  {
    title: "Circuit Safety Devices",
    slug: "circuit-safety-devices",
    category: "Circuit Safety Devices",
    categorySlug: "circuit-safety-devices",
    specs: "Fuses (Auto/Glass/Ceramic/SMD), MOV",
    image: "fuse.jpg",
  },
];
