import { useState } from "react";

export default function ProductGallery({ img }:any) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">

      <div className="bg-white rounded-lg p-8 flex items-center justify-center relative aspect-square">
        <img
          src={img[selectedImage]}
          alt="Producto"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex gap-4">
        {img.map((img:any, idx:any) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`border-2 rounded-lg p-2 bg-white transition-all ${
              selectedImage === idx ? "border-blue-800" : "border-gray-200"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-20 h-20 object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
