export default function TantalumShowcase() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12">
          Chip Tantalum Capacitor
        </h1>

        <div className="space-y-20">

          <SeriesBlock
            title="CA55 Conductive Polymer"
            specs={[
              "Capacitance: 0.68 – 1000 μF",
              "Temp: -55℃ ~ +125℃",
              "Tolerance: ±20%",
              "Very Low ESR",
              "Reflow: 3×260℃ / 10s"
            ]}
          />

          <SeriesBlock
            title="CA45 MnO₂ Series"
            specs={[
              "Capacitance: 0.47 – 2200 μF",
              "Voltage: 2.5 – 50V",
              "Temp: -55℃ ~ +125℃",
              "High electric field strength",
              "Miniaturization"
            ]}
          />

          <SeriesBlock
            title="QCA45 Automotive Grade"
            specs={[
              "Capacitance: 0.1 – 680 μF",
              "Temp: -55℃ ~ +125℃",
              "Stable performance",
              "Long life",
              "Automotive DC/DC applications"
            ]}
          />

          <SeriesBlock
            title="CA45L Low ESR"
            specs={[
              "Low ESR",
              "0.1 – 680 μF",
              "Temp: -55℃ ~ +125℃",
              "Industrial & Automotive",
              "High reliability"
            ]}
          />

          <SeriesBlock
            title="CA45H High Temp"
            specs={[
              "Up to 150℃ working",
              "Stable performance",
              "High reliability",
              "0.1 – 680 μF",
              "Automotive terminals"
            ]}
          />

        </div>

        {/* PDF 区域 */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-6">
            Datasheet
          </h2>

          <a
            href="/pdf/xiangyee-profile.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Full Datasheet
          </a>

          <div className="border rounded-xl overflow-hidden shadow bg-white">
            <iframe
              src="/pdf/xiangyee-profile.pdf"
              className="w-full h-[900px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}


function SeriesBlock({ title, specs }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
        {specs.map((s, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
