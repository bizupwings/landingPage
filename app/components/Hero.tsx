import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] mt-24 flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full animate-slideShow">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 animate-fadeInOut" style={{ backgroundImage: "url('/assets/bg1.jpeg')" }}></div>
          <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 animate-fadeInOut animation-delay-3000" style={{ backgroundImage: "url('/assets/bg2.jpg')" }}></div>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome To Bizupwings</h1>
        <p className="text-2xl mb-8">Powering Innovation, Illuminating Futures.</p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">EXPLORE MORE</Button>
          <Button variant="outline" size="lg" className="text-black" >CONTACT US</Button>
        </div>
      </div>
    </section>
  )
}
