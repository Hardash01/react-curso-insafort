import { useState, useEffect } from "react";

export function Carousel () {
    const totalSlides = 5; // Número total de diapositivas
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        }
    };

    const handleNextSlide = () => {
        if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
        } else {
        // Si se está en la última diapositiva, vuelve a la primera
        setCurrentSlide(0);
        }
    };

    useEffect(() => {
        // Configura un temporizador para cambiar automáticamente la diapositiva cada 5 segundos (ajusta según tus preferencias)
        const autoSlideTimer = setInterval(() => {
        handleNextSlide();
        }, 2000); // Cambia de diapositiva cada 5 segundos

        return () => {
        // Limpia el temporizador cuando el componente se desmonta para evitar fugas de memoria
        clearInterval(autoSlideTimer);
        };
    }, [currentSlide]); // Agregamos currentSlide como dependencia

    return (
        <>
            <div id="default-carousel" className="relative mx-auto md:w-4/6" data-carousel="slide">
                <h1 className="mt-5 text-center font-bold text-3xl">Esto es un Carousel con imagenes de noche</h1>
                {/* Carousel wrapper */}
                <div className="relative overflow-hidden  md:h-screen">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                    key={index}
                    className={`duration-700 ease-in-out ${currentSlide === index ? '' : 'hidden'}`}
                    data-carousel-item
                    >
                    <img
                        src={`/img/carousel${index + 1}.jpg`}
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                    </div>
                ))}
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-16 left-1/2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-indigo-500' : 'bg-gray-300'}`}
                    aria-current={currentSlide === index ? 'true' : 'false'}
                    aria-label={`Slide ${index + 1}`}
                    data-carousel-slide-to={index}
                    onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
                </div>
                {/* Slider controls */}
                <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={handlePrevSlide}
                >
                {/* Botón de retroceso */}
                </button>
                <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={handleNextSlide}
                >
                {/* Botón de avance */}
                </button>
            </div>
        </>
    )
}