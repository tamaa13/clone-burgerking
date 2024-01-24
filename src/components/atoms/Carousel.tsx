import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        "https://bkdelivery.co.id/media/slider_image/2024/1/16/9hqedgnvxjhvubp9bpesne.jpg",
        "https://bkdelivery.co.id/media/slider_image/2024/1/15/k5zx5lnjaqjykyqkmcpm2k.jpg",
        "https://bkdelivery.co.id/media/slider_image/2023/11/15/wq6t8n4pyjrmgxkuko82gj.jpg"
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide - 1 < 0 ? images.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide + 1 >= images.length ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full">
            <div className="flex transition-transform duration-500 ease-in-out transform">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-full ${index === currentSlide ? '' : 'hidden'}`}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>

            <div className="absolute top-[40%] px-10 w-full flex justify-between">
                <IoIosArrowDropleftCircle onClick={goToPrevSlide} className="text-2xl text-quaternary lg:w-14 lg:h-14 bg-inherit rounded-full cursor-pointer focus:outline-none" />
                <IoIosArrowDroprightCircle onClick={goToNextSlide} className="text-2xl text-quaternary lg:w-14 lg:h-14 bg-inherit rounded-full cursor-pointer focus:outline-none" />
            </div>

            <div className="absolute -bottom-5 w-full flex justify-center">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 bg-primary rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-quaternary' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
