import React, { useState, useEffect, useRef } from "react";

interface YouTubeShortsCarouselProps {
  videoIds?: string[]; // YouTube video IDs instead of direct URLs
}

const YouTubeShortsCarousel: React.FC<YouTubeShortsCarouselProps> = () => {
  const videoIds = [
    "5aGlLeYAj6s",
    "d2mt1N8fpc0",
    "OOAK7SxbyUg",
    "sSdsZgS8kKE",
    "w7uJe3NgvQU",
    "H3gw_jlxj3A"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll to the next video
  const scrollNext = (): void => {
    if (carouselRef.current) {
      const newIndex = (currentIndex + 1) % videoIds.length;
      setCurrentIndex(newIndex);
    }
  };

  // Scroll to the previous video
  const scrollPrev = (): void => {
    if (carouselRef.current) {
      const newIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
      setCurrentIndex(newIndex);
    }
  };

  // Auto-scroll and update current video index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    }, 10000); // Change video every 10 seconds - longer for YouTube to give users time to watch

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [videoIds.length]);

  // Scroll to the current video
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * 280, // Adjusted for the width
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Only render content if we have videos
  if (!videoIds.length) {
    return <div className="p-4 text-center">No videos available</div>;
  }

  return (
    <div className="relative w-full my-20">
      {/* Scroll Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-hidden" // Use overflow-hidden to hide anything outside the visible area
        style={{
          scrollSnapType: "x mandatory", // Ensures smooth snap to each video
          scrollBehavior: "smooth", // Smooth scroll behavior
        }}
      >
        {videoIds.map((videoId, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2 relative"
            style={{
              width: "280px", // Width for mobile-like display
              height: "530px", // Height for mobile-like display (shorts aspect ratio)
              transform: index === currentIndex ? "scale(1)" : "scale(0.9)", // Scale the center video larger
              transition: "transform 0.3s ease", // Smooth scaling transition
              scrollSnapAlign: "center", // Ensure the video snaps to center
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=${index === currentIndex ? '1' : '0'}&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&enablejsapi=1&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1`}
              title={`YouTube Shorts ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
              style={{ border: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeShortsCarousel;