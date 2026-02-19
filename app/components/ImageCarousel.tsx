"use client";

import { useState } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: string[];
  height?: number; // 可选：你想自定义高度就传
};

export default function ImageCarousel({ images, height = 500 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="relative w-full bg-white rounded-lg overflow-hidden"
      style={{ height }}
    >
      <Image
        src={images[index]}
        alt="product image"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
        priority
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
            aria-label="Previous image"
          >
            ◀
          </button>

          <button
            onClick={next}
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
            aria-label="Next image"
          >
            ▶
          </button>

          {/* 小圆点 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
