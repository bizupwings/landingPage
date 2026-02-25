"use client";

export default function TantalumShowcase() {
  const pdfUrl = "/pdf/xiangyee-profile.pdf";

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">
          Home / Products / Tantalum Capacitor
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <div>
            <img
              src="/products/tantalum .jpg"
              alt="Tantalum Capacitor"
              className="rounded-lg shadow bg-white w-full"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Tantalum Capacitor
            </h1>

            <p className="text-gray-700 mb-6">
              Solid & polymer tantalum capacitors for high stability and compact design.
            </p>

            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Features
            </h3>

            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>Low ESR</li>
              <li>High volumetric efficiency</li>
              <li>Stable capacitance</li>
              <li>Long operational life</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Technical Specifications
            </h3>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border-b">Capacitance Range</td>
                    <td className="px-6 py-3 border-b font-medium">0.1µF – 1000µF</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b">Voltage Range</td>
                    <td className="px-6 py-3 border-b font-medium">6.3V – 50V</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border-b">Operating Temp</td>
                    <td className="px-6 py-3 border-b font-medium">-55°C to +125°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border-b">Tolerance</td>
                    <td className="px-6 py-3 border-b font-medium">±10% / ±20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== PDF SECTION ===== */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">
            Datasheet
          </h2>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Datasheet (PDF)
          </a>

          <div className="border rounded-xl overflow-hidden shadow bg-white">
            <iframe
              src={pdfUrl}
              className="w-full h-[800px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
