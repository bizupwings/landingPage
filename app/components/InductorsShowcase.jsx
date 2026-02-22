export default function InductorsShowcase() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12">
          Inductor Series
        </h1>

        <div className="space-y-20">

          {/* 1 I-Shaped */}
          <SeriesBlock
            title="I-Shaped Inductor"
            features={[
              "High inductance",
              "Low DCR",
              "Surface mount",
              "RoHS compliant"
            ]}
          />

          {/* 2 Covering */}
          <SeriesBlock
            title="Covering Inductance"
            features={[
              "Magnetic glue shielded",
              "Reduce buzzing sound",
              "High EMI suppression",
              "Smart home application"
            ]}
          />

          {/* 3 Magnetic Shielding */}
          <SeriesBlock
            title="Magnetic Shielding Inductor"
            features={[
              "Low DCR",
              "Large current",
              "Strong anti-interference",
              "SMT compatible"
            ]}
          />

          {/* 4 Molded */}
          <SeriesBlock
            title="Integrally Molded Inductor"
            features={[
              "Low internal resistance",
              "High current",
              "Low noise",
              "Frequency >1MHz"
            ]}
          />

          {/* 5 Multilayer */}
          <SeriesBlock
            title="Multilayer Chip Inductor"
            features={[
              "Monolithic structure",
              "High SRF",
              "Small size",
              "0603–4516 sizes"
            ]}
          />

          {/* 6 Magnetic Bead */}
          <SeriesBlock
            title="Magnetic Bead"
            features={[
              "High impedance",
              "Low DCR",
              "RF noise suppression",
              "High reliability"
            ]}
          />

        </div>
      </div>
    </section>
  );
}


function SeriesBlock({ title, features }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            {f}
          </li>
        ))}
      </ul>

    </div>
  );
}
