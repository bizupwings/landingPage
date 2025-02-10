import { Battery, Lightbulb, Phone, Power, Activity} from "lucide-react"


const solutions = [
  {
    title: "Energy Metering Solution",
    descriptions: "We have over 8 years of experience in the Energy Meter Segment, being part of the evolution of the metering industry in India.",
    icon: <Activity className="h-8 w-8" />,
    points: [
      "Design & Development Support",
      "Kitting & Logistic Support",
      "Component Sourcing & Distribution",
      "Manufacturing & Tooling Support",
    ],
  },
  {
    title: "Battery Packs Solution",
    descriptions: "We offer EVE Make high-quality Lithium, Ni-Cd, and Ni-Mh Batteries, packed as per customer requirements.",
    icon: <Battery className="h-8 w-8" />,
    points: [
      "Used in Instrumentation, Telecom, Radio, Signalling, Safety Devices, etc.",
    ],
  },
  {
    title: "Lighting Solution",
    descriptions: "We have vast experience in Lighting Solutions, from incandescent lamps to LED Lighting, with a dedicated design team for continuous innovation.",
    icon: <Lightbulb className="h-8 w-8" />,
    points: [
      "CFL Lighting",
      "LED Lighting",
    ],
  },
  {
    title: "Telecom Solution",
    descriptions: "We provide cost-effective solutions for Telecom equipment like EPABX, Telephone sets, Battery Packs, and Power Supplies.",
    icon: <Phone className="h-8 w-8" />,
    points: [
      "Range of electronic components, Kit of components, Sub Assembly, SKD, CKD",
      "Designing of new products",
      "Distinctive products: Bare PCB, Electronic Components Kit (ICs, Relays, Capacitors, Resistors, etc.), Transformer, Cabinet, Wire Assembly",
    ],
  },
  {
    title: "Power Conditioning Solution",
    descriptions: "We offer cost-effective solutions for Power Conditioning equipment like UPS, Inverters, and Stabilizers.",
    icon: <Power className="h-8 w-8" />,
    points: [
      "Range of electronic components, Kit of components, Sub Assembly, SKD, CKD",
      "Designing of new products",
      "Distinctive products: Bare PCB, Electronic Components Kit (ICs, Relays, LCD, Capacitors, Resistors, etc.), Transformer, Cabinet, Wire Assembly",
    ],
  },
];

export default function Solutions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.descriptions}</p>

              <div className=" flex flex-col gap-4 mt-2  mb-4">
                {solution.points.map((point, index) => (
                  <p key={index} className="text-gray-600 bg-gray-100 p-2 rounded-md ">{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
