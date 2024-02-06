import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide % 3) + 1; // Adjust the number based on the total number of slides
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out transform translate-x-full md:translate-x-0" style={{ width: '300%', transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
        {/* Replace the image URLs with your actual image URLs */}
        <div className="w-full flex-none">
          <img src="https://promotions.co.th/wp-content/uploads/capture-20161228-145149.png" alt="Slide 1" className="w-full h-44 md:h-64 object-cover" />
        </div>
        <div className="w-full flex-none">
          <img src="https://www.avarinshop.com/wp-content/uploads/2023/12/Banner-Wave-Rebellion-Pro-2-01-scaled.jpg" alt="Slide 2" className="w-full h-64 md:h-96 object-cover" />
        </div>
        <div className="w-full flex-none">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVyWW73aeiIZpAPo3y717Gtwifk5bcEgLrfPyroPJSQ&s" alt="Slide 3" className="w-full h-64 md:h-96 object-cover" />
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="text-white text-2xl" onClick={() => goToSlide(currentSlide === 1 ? 3 : currentSlide - 1)}>
          ❮
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="text-white text-2xl" onClick={() => goToSlide(currentSlide === 3 ? 1 : currentSlide + 1)}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
