"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-[500px] bg-white rounded-xl overflow-hidden shadow">

      <Image
        src={images[index]}
        alt="product image"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain p-6"
        priority
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}
