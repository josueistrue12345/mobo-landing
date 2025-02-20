import React from 'react';

const ImageGallery = ({ images, activeImageIndex }) => {
    return (
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-indigo-50">
            <div className="relative h-4/5 flex justify-center items-center w-100">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`iPhone 16 vista ${index}`}
                        className={`absolute max-h-4/5 transition-opacity duration-500 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0' }`}
                    />
                ))}
            </div>
        </div>
    )
};

export default ImageGallery;
