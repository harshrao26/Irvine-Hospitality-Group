'use client';

const LayoutProject = () => {
  const images = [
    'https://unsplash.it/600/400?image=1027',
    'https://unsplash.it/600/400?image=1062',
    'https://unsplash.it/600/400?image=1074',
    'https://unsplash.it/600/400?image=1084',
     
  ];

  const labels = [
    'Guestroom Case Goods',
    'Lobby & Reception Furniture',
    'Restaurant & Café Seating',
    'Custom Lighting Solutions',
    'Upholstered Lounge Sets',
    'Brand-Approved Room Packages',
  ];

  return (
    <div className="w-full md:hidden block bg-white py-16 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-sm text-[#c6d7e3] uppercase mb-2">› Integrated FF&E Services</h3>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#082135] mb-4">
          End-to-End Project Support
        </h2>
        <p className="text-[#082135] text-sm md:text-base max-w-2xl">
          Irvine Hospitality delivers design, procurement, and manufacturing expertise for every phase of your hospitality project—from concept to completion.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`img-${index}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
            <p className="mt-2 text-sm font-semibold text-[#082135]">
              {labels[index % labels.length]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutProject;
