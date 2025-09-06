import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// helper to resolve correct base path on GitHub Pages
const asset = (p: string) => new URL(p, import.meta.env.BASE_URL).toString();

const heroSlides = [
  {
    id: 1,
    title: "Welcome to Vivekananda Gurukula",
    subtitle: "Empowering Teachers, Inspiring Students",
    description:
      "Join our comprehensive digital learning platform designed specifically for educators and students seeking excellence in education.",
    image: asset("hero/Slide1.png"),
    cta: "Explore Classroom",
  },
  {
    id: 2,
    title: "Modern Learning Environment",
    subtitle: "State-of-the-Art Educational Facilities",
    description:
      "Experience cutting-edge technology and innovative teaching methods in our modern educational environment.",
    image: asset("hero/Slide2.png"),
    cta: "Tour Campus",
  },
  {
    id: 3,
    title: "Digital Learning Revolution",
    subtitle: "Technology-Enhanced Education",
    description:
      "Discover how we integrate technology seamlessly into traditional learning methods for enhanced educational outcomes.",
    image: asset("hero/Slide3.png"),
    cta: "Learn More",
  },
  {
    id: 4,
    title: "Expert Educators",
    subtitle: "Dedicated Teachers, Exceptional Results",
    description:
      "Meet our passionate educators who are committed to fostering growth, creativity, and academic excellence.",
    image: asset("hero/Slide4.png"),
    cta: "Meet Faculty",
  },
  {
    id: 5,
    title: "Holistic Development",
    subtitle: "Beyond Academics",
    description:
      "We focus on building values, culture, and leadership qualities along with academics.",
    image: asset("hero/Slide5.png"),
    cta: "Discover More",
  },
  {
    id: 6,
    title: "Join the Movement",
    subtitle: "Shaping Future Generations",
    description:
      "Be a part of the Gurukula journey that blends tradition with modern education.",
    image: asset("hero/Slide6.png"),
    cta: "Get Started",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/75 via-blue-800/50 to-cyan-600/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-purple-800/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6 font-medium drop-shadow-lg">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg text-cyan-100 mb-8 leading-relaxed max-w-xl drop-shadow-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white px-8" size="lg">
                        <Play className="w-5 h-5 mr-2" />
                        {slide.cta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-cyan-400 text-cyan-300 px-8"
                      >
                        Learn More
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-3 rounded-full bg-purple-600/70"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-3 rounded-full bg-purple-600/70"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide
                ? "bg-gradient-to-r from-pink-500 to-cyan-500 scale-125"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-20 right-4 z-20 text-white p-3 rounded-full bg-cyan-600/70"
      >
        {isPlaying ? (
          <div className="w-4 h-4 flex space-x-1">
            <div className="w-1.5 h-4 bg-white"></div>
            <div className="w-1.5 h-4 bg-white"></div>
          </div>
        ) : (
          <Play className="w-4 h-4" />
        )}
      </button>
    </section>
  );
}
