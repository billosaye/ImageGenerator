import React from "react";

export const Gallery = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-xl font-medium text-white/90 mb-4">Generated Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((url, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors"
          >
            <img
              src={url}
              alt={`Generated ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;