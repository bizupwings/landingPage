import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import Solutions from "./components/Solutions"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products selfRender={true} />
      <Solutions />
    </main>
  )
}

