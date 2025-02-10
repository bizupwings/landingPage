"use client";

import { Breadcrumbs, Typography, Link, Container} from "@mui/material";
import { useRouter } from "next/navigation";
import Products from "../../components/Products";


const products = [
    {
      title: "General Purpose LED",
      category: "LED",
      specs: "3mm, 5mm Diffused/Transparent LED",
      colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
      applications: ["UPS", "Inverter", "Stabilisers", "Telecom", "Power Supply"],
      image:"general_led.jpg",

    },
    {
      title: "High Bright LED",
      category: "LED",
      specs: "3mm, 5mm, 8mm, 10mm High bright LED (4000mcd to 20,000mcd)",
      colors: ["Red", "Green", "Yellow", "Amber", "Blue", "White"],
      applications: ["Traffic Signals", "Railway Signals", "Indoor & Outdoor Lighting"],
      image:"high_bright_led.jpeg",
    },
    {
      title: "Power LED",
      category: "LED",
      specs: "Star type, Chip type, High bright LED (0.5W to 30W)",
      colors: ["Warm White", "Cool White", "Milky White"],
      applications: ["Decoration", "Home/Commercial Lighting", "Street Lighting"],
      image:"power_led.png",
    },
    {
      title: "Infra Red and Other LEDs",
      category: "LED",
      specs: "Round IR LED, Moulded IR Modules, PLCC/SMD LEDs",
      applications: ["Remote Control Systems", "TV", "Energy Meters"],
      image:"ir_led.jpg",
    },
    {
      title: "Lithium Batteries",
      category: "Batteries",
      specs: "Li/SOCI2, Li/MnO2, Li-ion, Li-Polymer (25mAh to 10,000mAh)",
      types: ["Coin", "Cylindrical", "Wafer Cells"],
      applications: ["Memory Back-up", "Energy Meter", "GPS"],
      image:"li-battery.jpeg",
    },
    {
      title: "Nickel Batteries",
      category: "Batteries",
      specs: "Ni-Mh, Ni-Cd Batteries (25mAh to 50,000mAh)",
      types: ["Coin", "Cylindrical", "Wafer Cells"],
      applications: ["Wireless Telephone", "Smoke Alarm", "Night Vision"],
      image:"ni_battery.jpg",
    },
    {
      title: "Capacitors",
      category: "Capacitors",
      specs: "Aluminium Electrolytic, Ceramic, Tantalum, SMD",
      image:"capacitor.jpg",
    },
    {
      title: "Resistors",
      category: "Resistors",
      specs: "CFR, MFR, Wire Wound, SMD, Fusible",
      image:"resistor.jpg",
    },
    {
      title: "LCD Displays",
      category: "Liquid Crystal Display (LCD)",
      specs: "Alpha Numeric, Seven Segment, Graphics LCD",
      image:"lcd.jpg",
    },
    {
      title: "LED Displays",
      category: "LED Display",
      specs: "Seven Segment (0.30\" to 8\"), Arrow, Dot",
      image:"led.png",
    },
    {
      title: "Shunt Resistors",
      category: "Shunt Resistance",
      specs: "Custom Material for Energy Meters",
      image:"shard.jpg",
    },
    {
      title: "Crystals & Oscillators",
      category: "Crystals & Frequency Devices",
      specs: "HC49U, HC49S, SMD Tuning Fork, Resonators",
      image:"quartz.jpg",
    },
    {
      title: "Transformers",
      category: "Transformers",
      specs: "Current, Potential, Power Transformers",
      image:"transformer.jpg",
    },
    {
      title: "Bare PCB",
      category: "Bare PCB",
      specs: "2 to 14 Layers (Single/Double Side)",
      image:"pcb.jpg",
    },
    {
      title: "Relays",
      category: "Relays",
      specs: "Telecom, Automotive, Reed Relays",
      image:"relays.jpg",
    },
    {
      title: "Stepper Motor Counters",
      category: "Stepper Motor Counters",
      specs: "5+1, 6+0, 6+1 Type",
      image:"motor.jpg",
    },
    {
      title: "CFL",
      category: "CFL",
      specs: "5W to 85W (OEM/CKD/SKD)",
      image:"cfs.jpg",
    },
    {
      title: "Circuit Safety Devices",
      category: "Circuit Safety Devices",
      specs: "Fuses (Auto/Glass/Ceramic/SMD), MOV",
      image:"fuse.jpg",
    },
];


export default function ProductPage({ params }) {
  const router = useRouter();
  const { category } = params;

  // Filter products by category or show all
  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === decodeURIComponent(category));

  return (
    <Container maxWidth="lg" className="mt-48">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ my: 3 }}>
        <Link color="inherit" href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
          Home
        </Link>
        <Link color="inherit" href="/products/all"  onClick={(e)=>{e.preventDefault(); router.push("/products/all")}} >Products</Link>
        {category !== "all" && <Typography color="textPrimary">{decodeURIComponent(category)}</Typography>}
      </Breadcrumbs>

      <Typography variant="h4" gutterBottom>
        {category === "all" ? "All Products" : `Products in ${decodeURIComponent(category)}`}
      </Typography>

      {/* Product Grid */}
      <Products filteredProducts={filteredProducts}/>
    </Container>
  );
}