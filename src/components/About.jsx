import { SectionTitle } from "./SectionTitle";
import Profile from "../assets/img/profile.webp";

export const About = () => {
  return (
    <div id="about" className="md:h-screen h-auto flex flex-col justify-center mt-[200px]">

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 show__component">

          <div className="w-full md:w-6/12 flex flex-col gap-3 text-justify">
            <SectionTitle>About Me</SectionTitle>

            <p className="text-md text-gray-700 dark:text-gray-300">
              I`m an inquisitive and passionate individual constantly seeking new horizons. 
              Determination is one of my key qualities; I never give up until I achieve my goals.
              My professional approach is built on this tenacity and perseverance, 
              driving me to give my best in every project.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300">
              When I`m not immersed in the professional world, you can find me exploring my love for video games, 
              diving into virtual adventures, and challenging my wits with digital strategies. 
              Additionally, I have a deep appreciation for the idea of traveling and discovering new places. 
              The thrill of experiencing different cultures and landscapes truly excites me.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300">
              In my leisure time, I also enjoy staying active and fit through various sports activities. 
              I firmly believe that maintaining a balance between mind and body is essential for success in all areas of life.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300">
              In summary, I`m a dedicated professional who draws inspiration from curiosity, passion, and persistence. 
              My love for video games, my desire to explore new destinations, 
              and my commitment to physical well-being are just a few facets that define who I am.
            </p>

          </div>

          <img
              src={ Profile }
              alt="Oswaldo Pereira"
              className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] rounded-[100%] object-cover shadow-custom-1"
              loading="lazy"
            />
          
        </div>


      </div>
  );
};
