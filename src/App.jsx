import { useEffect, useState } from "react";
import { HeroSection, Services, Works, About, NavBar, Skills, Contact, LightMouse, Background } from "./components";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import './styles/index.css';

export const App = () => {
  const [ theme, setTheme ] = useState( null );

  useEffect(() => {

    if ( window.matchMedia( "(prefers-color-scheme: dark)" ).matches ) {
      setTheme( "dark" );
    } else {
      setTheme( "ligth" );
    }
  }, []);

  useEffect(() => {

    if ( theme === "dark" ) {
      document.documentElement.classList.add( "dark" );
    } else {
      document.documentElement.classList.remove( "dark" );
    }
  }, [theme]);

  const handleThemeSwitch = () => {

    setTheme( theme === "dark" ? "light" : "dark" );

  };

  return (
    <>
      <button
        type="button"
        onClick={ handleThemeSwitch }
        className="fixed z-30 right-3 top-3 bg-indigo-800 hover:bg-indigo-500 text-lg rounded-md text-gray-200 p-2 md:p-3 hover:scale-105 duration-500"
      >
        { theme === "dark" ? ( <BsSunFill className="w-full h-full" /> ) : ( <BsFillMoonFill className="w-full h-full" /> ) }
      </button>
      <div className="font-quicksand">
          <div className="max-w-5xl mx-auto w-11/12 flex flex-col gap-36">
            <Background theme={theme} />
            <NavBar />
            <HeroSection />
            <Services />
            <Skills />
            <Works />
            <About />
            <Contact />
          </div>
      </div>
      {/* <div className="bg-slate-400 dark:bg-slate-950 bg-opacity-90 dark:bg-opacity-90 z-[-1] absolute w-full h-full top-0 left-0">
      </div> */}
      <LightMouse />
    </>
  );
};
