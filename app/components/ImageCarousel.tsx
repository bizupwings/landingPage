"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] bg-white rounded-lg">

      <Image
        src={images[index]}
        alt="product image"
        fill
        sizes="100vw"
        className="object-contain rounded-lg"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
      >
        ▶
      </button>

    </div>
  );
}
