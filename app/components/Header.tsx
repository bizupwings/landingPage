"use client"
import { useState } from "react"
import Link from "next/link"
import { X, Menu as MenuIcon, ChevronDown  } from "lucide-react"
import Image from "next/image"
import {Typography, MenuItem, Menu } from "@mui/material";
import { useRouter } from "next/navigation";

const categories = [
  "LED",
  "Batteries",
  "Capacitors",
  "Resistors",
  "Liquid Crystal Display (LCD)",
  "LED Display",
  "Shunt Resistance",
  "Crystals & Frequency Devices",
  "Transformers",
  "Bare PCB",
  "Relays",
  "Circuit Safety Devices",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category: string) => {
    setAnchorEl(null);
    router.push(`/products/${category}`);
  };
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 text-sm">
            <span>📞 India: +91 8178484331</span>
            <span>📞 China: (021) 69902124</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="h-30 w-30 md:h-20 md:w-20 flex items-center">
            <Image 
              src="/assets/logo.png" 
              alt="logo" 
              width={50}  
              height={50}
              className="object-contain" 
            />
            {/* <Typography variant="h5" sx={{ fontWeight: "bold", color: "inherit" }}>BizUpWings</Typography> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Typography className="flex items-center gap-1"
          sx={{ cursor: "pointer", color: "inherit" }}
          onMouseOver={handleMenuClick}
          onMouseOut={handleMenuClick}
          >
         
          Our Products <ChevronDown size={16} />
        </Typography>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => handleClose("all")}>All Products</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => handleClose(category)}>{category}</MenuItem>
          ))}
        </Menu>
          <Link href="/solutions" className="hover:text-blue-600" >Solutions</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full border-t">
          <ul className="flex flex-col text-gray-700 text-center py-4 space-y-4">
            <li><Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li>
              <Typography className="flex items-center justify-center gap-1"
                sx={{ cursor: "pointer", color: "inherit" }}
                onMouseOver={handleMenuClick}
                onMouseOut={handleMenuClick}
                >
              
                Our Products <ChevronDown size={16} />
              </Typography>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => handleClose("all")}>All Products</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} onClick={() => handleClose(category)}>{category}</MenuItem>
                ))}
              </Menu>
            </li>
            <li><Link href="/solutions" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Solutions</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
