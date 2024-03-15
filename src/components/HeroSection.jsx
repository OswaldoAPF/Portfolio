import { Link } from "react-scroll";
import { BsGithub, BsArrowDown } from 'react-icons/bs'

export const HeroSection = () => {
  return (
      <div id="hero" className="h-screen md:pt-16 flex items-center justify-center flex-col">

        <div className="z-[5] grid grid-cols-1 pb-4">
          <div className="img__profile"></div>
        </div>
        
        <div className="z-[5] text-center">
          <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-700 font-semibold">
            Hi, this is Oswaldo!
          </h1>
          <p className="text-md md:text-xl max-w-md mb-3 text-gray-700 dark:text-gray-300">
            Welcome to my digital corner, where my passion for web development
            comes to life. This portfolio is a reflection of my dedication to
            creating engaging and effective digital experiences. I hope you enjoy
            browsing through my projects!
          </p>

          <div className="flex justify-center w-full items-center flex-row gap-4 pt-3">
            <div className="flex gap-4">
              <Link
                to="works" spy={true} smooth={true} offset={-50} duration={500}
                className="cursor-pointer inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 md:text-md z-[2]"
              >
                See Works
              </Link>
              <a href='https://github.com/OswaldoAPF/' target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-800 hover:bg-gray-900 text-gray-200 hover:text-gray-50 z-[2] hover:scale-105 duration-500 hover:ring-1">
                <BsGithub className="w-[40%] h-[100%]" />
              </a>

              <a href="../../public/CV-Oswaldo-Pereira.pdf" download className="cursor-pointer flex justify-center items-center gap-3  bg-gray-800 rounded-md text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 w-[140px]">
                <span>Resume</span>
                <BsArrowDown className="w-5 h-5 animate-bounce" />
              </a>
            </div>
          </div>
          
        </div>

      </div>
  );
};
