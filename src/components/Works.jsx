import { SectionTitle } from "./SectionTitle";
import { WorkItem } from "./WorkItem";
import { BsGithub } from 'react-icons/bs'

import works from "../data/works";

export const Works = () => {
  return (
    <div id="works" className="h-auto lg:h-screen flex flex-col justify-center pt-32">
      <SectionTitle>Works</SectionTitle>

      <div className="display flex justify-center items-center gap-8 pb-14">

        <p className="text-gray-700 dark:text-gray-400 font-bold md:text-xl text-right">Here you will find the code for this portfolio &#10230;</p>

        <a href="https://github.com/OswaldoAPF/Portfolio" target="_blank" rel="noreferrer" className="cursor-pointer w-[150px] flex justify-center items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 md:text-md z-[2] hover:scale-105 duration-500 hover:ring-1">
          <BsGithub />
          <span>Github</span>
        </a>

      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          works.map(( work ) => (
            <WorkItem
              key={ work.title }
              imgUrl={ work.imgUrl }
              title={ work.title }
              tech={ work.tech }
              github={ work.github }
              host={ work.host }
            ></WorkItem>
          ))
        }
      </section>
    </div>
  );
};