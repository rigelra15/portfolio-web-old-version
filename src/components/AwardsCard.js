import React, { useState } from "react";
import { useDarkModeContext } from "../DarkModeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AwardsCard = ({ item }) => {
  const { title, description, imageSrc, date } = item;

  const [showFullDescription, setShowFullDescription] = useState(false);
    const { isDarkMode } = useDarkModeContext();

  return (
    <div className={`bg-white hover:translate-y-2 border-2  transition-all duration-300 rounded-xl overflow-hidden ${isDarkMode ? 'bg-zinc-900 border-zinc-600' : 'bg-white border-zinc-300'}`}  style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.1)'}}>
      <LazyLoadImage src={imageSrc} alt={title} loading="lazy" className="w-full" />
      <div className="px-6 py-4">
        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        {showFullDescription ? (
          <div>
            <p className={`mb-2 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {description}{" "}
              <button
                className="text-sky-500 hover:underline cursor-pointer"
                onClick={() => setShowFullDescription(false)}
              >
                <span className="text-sm">View Less</span>
              </button>
            </p>
          </div>
        ) : (
          <div>
            <p className={`mb-4 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              {description.length > 150
                ? `${description.substring(0, 150)}...`
                : description}
              {description.length > 150 && (
                <button
                  className="text-sky-500 hover:underline cursor-pointer ml-1"
                  onClick={() => setShowFullDescription(true)}
                >
                  <span className="text-sm">View More</span>
                </button>
              )}
            </p>
          </div>
        )}
        <div className="my-3 flex justify-end">
            <div className="bg-sky-500 px-3 py-2 rounded-xl font-bold text-white">
                {date}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsCard;
