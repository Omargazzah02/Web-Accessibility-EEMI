import features from "@/data/features.json"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeatureSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4);


    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1); // mobile
            } else {
                setSlidesPerView(4); // desktop
            }
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);

        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (

        <section className="sm:py-16 sm:px-12 bg-white max-sm:p-4" id="features">
            <h2 className="text-center mb-12 text-slate-800">Nos fonctionnalités</h2>

            <div className="relative max-w-6xl mx-auto">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                        }}
                    >

                        {features.map((item) => (
                            <div className="sm:min-w-[25%] min-w-full px-3" key={item.id}>

                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    {/* Ajouter un texte alternatif descriptif pour l’image */}

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-5">
                                        <p className="mb-2">{item.title}</p>
                                        {/* Améliorer le contraste du texte */}

                                        <p className="text-[#3f3f3f] text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Remplacer une div par un bouton accessible clavier */}


                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
                    onClick={() => scrollToSlide((currentSlide - 1 + features.length) % features.length)}
                >
                    <ChevronLeft className="w-4 h-4 text-slate-400" aria-label="Précédent" />
                </button>

                {/* Remplacer une div par un bouton accessible clavier */}

                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
                    onClick={() => scrollToSlide((currentSlide + 1) % features.length)}
                    aria-label="Suivant">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <div className="flex justify-center gap-2 mt-6">
                    {features.map((_, index) => (
                        /* Remplacer une div par un bouton accessible clavier */

                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentSlide === index ? 'bg-purple-500' : 'bg-slate-300'
                                }`}
                            onClick={() => scrollToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>)
}