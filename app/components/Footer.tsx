import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

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
  "Stepper Motor Counters",
  "CFL",
  "Circuit Safety Devices",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizupwings</h3>
            <p className="text-gray-400">Powering Innovation, Illuminating Futures.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/all" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
              {
                categories.map((category, index) => (
                  <li key={index}>
                <Link href={`/products/${category}`} className="text-gray-400 hover:text-white">
                  {category}
                </Link>
                  </li>
                  ))
              }
              
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/all" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shanghai Bizupwings Import And Export Foreign Trade Co. Ltd.<br></br> All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

