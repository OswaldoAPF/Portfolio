import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from "react-icons/tb";

export const WorkItem = ({ title, imgUrl, tech, github, host }) => {

  const handleLinkClick = (e) => {
    if (!github || !host) {
      e.preventDefault();
    }
  };

  return (
    <article className="bg-slate-300 dark:bg-slate-800 rounded-lg shadow-custom-1 relative overflow-hidden card-project">
      <div className="before-custom-1 absolute top-0 w-full h-36 md:h-48 z-[3] cursor-pointer">
        <a onClick={ handleLinkClick } href={ github } target="_blank" rel="noreferrer" className="w-1/2 h-full flex justify-center items-center flex-col gap-1 hover:shadow-custom-2 text-white">
          <BsGithub className="w-10 h-10" />
          <span>Github</span>
        </a>
        <a onClick={ handleLinkClick } href={ host } target="_blank" rel="noreferrer" className="w-1/2 h-full flex justify-center items-center flex-col gap-1 hover:shadow-custom-2 text-white">
          <TbWorldWww className="w-10 h-10" />
          <span>Host</span>
        </a>
      </div>
      <img
        src={ imgUrl }
        alt={ title }
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          { title }
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {
            tech.map(( item ) => (
              <span
                key={ item }
                className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
              >
                { item }
              </span>
            ))
          }
        </p>
      </div>
    </article>
  );
};
