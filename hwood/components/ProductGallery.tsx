'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-light">
        <Image src={active} alt={title} fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className={`relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${active === image ? 'border-primary' : 'border-transparent'}`}
          >
            <Image src={image} alt={`${title} תצוגה`} fill className="object-cover" sizes="128px" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
