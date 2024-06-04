import React from "react";
import AwardsCard from "./AwardsCard";
import { useDarkModeContext } from "../DarkModeContext";
import { FaAward } from "react-icons/fa";

const Awards = () => {
  const awardsItems = [
    {
      title: "1st place in UI/UX Design Competition ITCC 2023",
      description: "Information Technology Creative Competition (ITCC) is an annual event organized by Information Technology Student Association (HMTI) of Udayana University",
      imageSrc: "awards/awards1.jpg",
      date: "Nov 2023",
    },
    {
      title: "Best Team Project in UX Academy Information System Expo 2023",
      description: "Information Systems Expo (ISE!) is an annual event organized by the ITS Information Systems Student Association",
      imageSrc: "awards/awards2.jpeg",
      date: "Oct 2023",
    },
  ];

  const { isDarkMode } = useDarkModeContext();

  return (
    <section id="projects" className="pt-4 w-[100svw]" style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
      <div className={`container mx-auto py-8 px-8 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-[#3d3d3d]' : 'bg-white'}`} style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl mb-4 font-bold flex items-center gap-2">
              <FaAward className='inline-block text-xl mr-2' />
              <span>Awards</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {awardsItems.map((item, index) => (
            <AwardsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
