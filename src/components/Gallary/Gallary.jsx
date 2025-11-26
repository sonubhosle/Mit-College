import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const galleryImages = [
  { src: 'https://picsum.photos/seed/campus-view/800/800.webp', alt: 'Wide view of the campus', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://picsum.photos/seed/lecture-hall/800/400.webp', alt: 'Students in a lecture hall', className: 'md:col-span-2' },
  { src: 'https://picsum.photos/seed/science-lab/400/400.webp', alt: 'Modern science lab', className: '' },
  { src: 'https://picsum.photos/seed/library-study/400/400.webp', alt: 'Student studying in the library', className: '' },
  { src: 'https://picsum.photos/seed/sports-event/800/400.webp', alt: 'Annual sports meet', className: 'md:col-span-2' },
  { src: 'https://picsum.photos/seed/graduation/800/400.webp', alt: 'Graduation ceremony', className: 'md:col-span-2' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-linear-to-b from-white to-slate-50 relative overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-slate-50/50 to-transparent"></div>
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] mix-blend-multiply"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply"></div>

      <div className="container mx-auto px-5">

        <SectionHeading
          subtitle="Memories"
          title="Gallary"
          description="A Glimpse Into Our Vibrant Campus Life"
          className="mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-slate-400/30 ring-2 ring-slate-400/30 group w-full h-full ${image.className}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-semibold drop-shadow-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;