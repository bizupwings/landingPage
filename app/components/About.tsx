// import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Bizupwings</h2>
            <h3 className="text-xl mb-4">
            Shanghai Bizupwings Import And Export Foreign Trade Co. Ltd
            </h3>
            <p className="text-gray-600 mb-6 text-justify ">
            We are a trusted leader in the electronics and energy solutions industry. We specialize in energy metering solutions, offering end-to-end support including design, kitting, component sourcing, and manufacturing. Our portfolio also includes high-quality battery packs (Lithium, Ni-Cd, Ni-Mh) for applications in instrumentation, telecom, and safety devices, as well as innovative lighting solutions spanning from CFL to advanced LED technologies. Additionally, we provide cost-effective telecom and power conditioning solutions for EPABX systems, UPS, inverters, and stabilizers, supported by a range of electronic components, bare PCBs, and custom designs. Committed to innovation, quality, and customer satisfaction, we deliver tailored solutions to meet the evolving needs of our clients, ensuring reliability and efficiency across industries.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image src="/assets/logo.png" alt="Technical Illustration" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
