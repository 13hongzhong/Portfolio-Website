import React, { useState } from 'react';
import Head from 'next/head';
import Background from '@/components/Background';

const sections = [
    {
        title: 'Regular Style',
        images: [
            '/images/illustrations/13.png',
            '/images/illustrations/14.png',
            '/images/illustrations/15.jpg',
            '/images/illustrations/16.png',
        ]
    },
  {
    title: 'Chibi',
    images: [
      '/images/illustrations/1.png',
      '/images/illustrations/2.png',
      '/images/illustrations/3.png',
      '/images/illustrations/4.png',
      '/images/illustrations/5.png',
      '/images/illustrations/6.png',
      '/images/illustrations/7.png',
      '/images/illustrations/8.png',
    ]
  },
  {
    title: 'Pixel Art',
    images: [
      '/images/illustrations/9.gif',
      '/images/illustrations/10.gif',
      '/images/illustrations/11.gif',
      '/images/illustrations/12.gif',
    ]
  },
];

const Illustrations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Kagu • Illustrations</title>
        <meta name="description" content="any description" />
      </Head>

      <Background>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="container mx-auto p-4">
                <h1 className="text-6xl font-bold text-beige mb-8 text-center mt-8">{section.title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.images.map((src, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg shadow-lg cursor-pointer w-full h-90"
                      onClick={() => handleImageClick(src)}
                    >
                      <img src={src} alt={`${section.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={handleCloseModal}
            >
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
            </div>
          )}
        </div>

      </Background>
    </>
  );
};

export default Illustrations;