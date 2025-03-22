import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

interface Reel {
  title: string;
  videoUrl: string;
  thumbnail: string;
}

const reels: Reel[] = [
  {
    title: "Reel 1: Amazing Beach Vibes",
    videoUrl: "https://www.youtube.com/embed/Ryr7aQOuIA8", // Use embed URL for YouTube videos
    thumbnail: "https://img.freepik.com/premium-psd/instagram-reels-thumbnail-digital-marketing_475351-768.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_keywords_boost", 
  },
  {
    title: "Reel 2: Urban Adventures",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real video URL
    thumbnail: "https://img.freepik.com/premium-psd/business-reels-thumbnail-design-youtube-instagram_475351-764.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_keywords_boost", 
  },
  {
    title: "Reel 3: Nature Wonders",
    videoUrl: "https://www.youtube.com/embed/47lcv2sLNXo", // Replace with real video URL
    thumbnail: "https://img.freepik.com/premium-psd/modern-reels-cover-template_941802-4277.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_keywords_boost", 
  },
  {
    title: "Reel 4: Ocean Exploration",
    videoUrl: "https://www.youtube.com/embed/K4c6MQCwy5k", // Replace with real video URL
    thumbnail: "https://img.freepik.com/premium-psd/instagram-reels-youtube-short-video-thumbnail-template-business-promotion_475351-817.jpg?uid=R187627718&ga=GA1.1.856026252.1735303750&semt=ais_keywords_boost", 
  },
];

const ReelsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

  const openModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Reels</h2>

        {/* Reels Scrolling Container */}
        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-scroll-reels items-center">
            {reels.map((reel, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-lg w-60 flex-none cursor-pointer relative"
                onClick={() => openModal(reel.videoUrl)}
              >
                {/* Thumbnail with centered play icon */}
                <div className="relative">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="rounded w-full h-[350px] object-cover"
                  />
                  <FaPlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 text-5xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for playing video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full sm:w-2/3 lg:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-2xl p-2"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="315"
              src={currentVideoUrl}
              title="Reel Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReelsSection;
