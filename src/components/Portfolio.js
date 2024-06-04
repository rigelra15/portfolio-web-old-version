import React from "react";
import PortfolioCard from "./PortfolioCard";
import { useDarkModeContext } from "../DarkModeContext";
import { FaFile, FaFilePdf } from "react-icons/fa";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Redesign Amazon Shopping App UI/UX",
      description: "In the 'Redesigning Amazon Shopping UI/UX' of ISE (Information System Expo) 2023 UX Academy selection , I aimed to enhance user experience within the Amazon Shopping App. By rethinking the interface while preserving Amazon's identity, I optimized navigation, introduced personalization, and streamlined the checkout process. The result is a visually cohesive and user-friendly UI that offers improved product exploration and a more intuitive shopping journey. This project showcases my skills in UI/UX design, emphasizing user-centered solutions and maintaining brand consistency.",
      imageSrc: "portfolio/1.png",
      link: "https://www.behance.net/gallery/178891497/UX-Redesign-of-Amazon-Shopping-App",
      year: 2023
    },
    {
      title: "TrashCash App UI/UX Design ",
      description: "The TrashCash App emerges as an epitome of the profound influence that innovative design can wield, transcending the boundaries of the ordinary to instigate extraordinary change. This visionary project transcends the conventional notion of waste disposal, ingeniously reenvisioning it as an exhilarating journey of empowerment, where users seamlessly morph into trailblazers of sustainability, simultaneously reaping palpable rewards for their conscientious actions. The heart and soul of this transformative expedition lie within the meticulously orchestrated UI design—a true masterpiece that seamlessly amalgamates the realms of artistic aesthetics, pragmatic functionality, and resounding purpose.",
      imageSrc: "portfolio/2.png",
      link: "https://www.behance.net/gallery/178891735/TrashCash-App-UI-Design",
      year: 2023
    },
    {
      title: "Graduation Event Poster",
      description: "The 'Tropical Rhythms: A Summer and Jungle Graduation Event' poster is more than a mere visual creation; it is a testament to the art of storytelling through design. This artwork encapsulates the essence of celebration, exploration, and the indomitable spirit of graduates on the cusp of new horizons. Its intricate layers of meaning pay homage to their remarkable journey and stand as a vibrant reminder of the myriad possibilities that await them as they step into a world colored by their passion and potential.",
      imageSrc: "portfolio/3.png",
      link: "https://www.behance.net/gallery/178892353/Graduation-Event-Poster",
      year: 2023
    },
    {
      title: "Lanyard, Logo, and ID Card Design",
      description: "In the modern world of technological advancement, a distinct and cohesive identity is crucial to establish a strong presence. The 'Unified Identity System for Computer Engineering Force' project encapsulates the essence of this need by showcasing a meticulously crafted set of designs including Lanyard, Logo, and ID Card. These designs are not merely visual representations but a reflection of the values, ideals, and professionalism of the Computer Engineering Force.",
      imageSrc: "portfolio/4.png",
      link: "https://www.behance.net/gallery/178893773/Lanyard-Logo-and-ID-Card-Design",
      year: 2023
    },
    {
      title: "Personal Online Store Website | HyperTopia ID",
      description: "The HyperTopia ID website is a testament to the power of design in creating a seamless user experience. This project showcases my skills in UI/UX design, emphasizing user-centered solutions and maintaining brand consistency. The result is a visually cohesive and user-friendly UI that offers improved product exploration and a more intuitive shopping journey.",
      imageSrc: "portfolio/5.png",
      link: "https://hypertopia-id.vercel.app",
      year: 2023
    },
    
  ];

  const { isDarkMode } = useDarkModeContext();

  return (
    <section id="projects" className="pt-4 w-[100svw]" style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0', color: isDarkMode ? 'white' : 'black' }}>
      <div className={`container mx-auto py-8 px-8 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-[#3d3d3d]' : 'bg-white'}`} style={{ boxShadow: '8px 8px 20px 0px rgba(0, 0, 0, 0.2)'}}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl mb-2 font-bold flex items-center gap-2">
              <FaFile className='inline-block text-xl mr-2' />
              <span>Portofolios</span>
          </h2>
          <a href="https://drive.google.com/file/d/1v1JNoXdXKxdcQZTcd9pNj8JKCT_3oBwO/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 mb-4 flex flex-row justify-center items-center gap-2 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-red-500 border-2 border-gray-200 ${isDarkMode ? 'text-white' : 'text-red-500 hover:text-white'}`}>
            <span>PDF</span>
            <FaFilePdf />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
