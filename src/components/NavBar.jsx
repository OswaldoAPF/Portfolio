import { useState, useEffect } from 'react'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { BsImages } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { TbMessage } from 'react-icons/tb'
import { RxCross1 } from 'react-icons/rx'

export const NavBar = () => {

  const [ view, setView ] = useState( false );
  const [ color, setColor ] = useState( false );

  const changeColor = () => {

    if( window.scrollY >= 100 ) {
      setColor( true );
    }else{
      setColor( false );
    }

  };

  window.addEventListener( 'scroll', changeColor )

  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

  }, []);


  return (
    <>
      <div 
        className={ 
          view ? ( "navbar fixed md:left-0 md:top-0 z-20 md:w-full md:h-16 flex md:justify-start md:items-center text-gray-700 dark:text-gray-300 bg-slate-400 dark:bg-slate-800 md:rounded-none md:pb-0 bottom-0 w-[98%] h-[200px] shadow-custom-1 rounded-t-lg left-[5px] justify-center items-center dalay-150 duration-300 pb-16" )
          : ( "navbar fixed md:left-0 md:top-0 z-20 md:w-full md:h-16 flex justify-start items-center text-gray-700 dark:text-gray-300 bg-slate-400 dark:bg-slate-950 md:shadow-custom-1 bottom-[-100%] w-[98%] dalay-150 duration-300" )
        }
      >

        <ul 
          className={ 
            color ? ( "w-full h-16 md:flex md:pl-6 md:pb-0 items-center md:gap-x-8 grid grid-cols-3 gap-8 md:dark:bg-slate-800 md:bg-slate-300 dalay-150 duration-300" ) 
            : ( "w-full h-16 md:flex md:pl-6 md:pb-0 items-center md:gap-x-8 grid grid-cols-3 gap-8 dalay-150 duration-300" )
          }
        >

          <li className="nav_item">
            <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <AiOutlineHome className="md:hidden text-xl"></AiOutlineHome> Home
            </Link>
          </li>

          <li className="nav_item">
            <Link to="services" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <MdWorkOutline className="md:hidden text-xl"></MdWorkOutline> Services
            </Link>
          </li>

          <li className="nav_item">
            <Link to="skills" spy={true} smooth={true} offset={-150} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <FaReact className="md:hidden text-xl"></FaReact> Skills
            </Link>
          </li>

          <li className="nav_item">
            <Link to="works" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <BsImages className="md:hidden text-xl"></BsImages> Works
            </Link>
          </li>

          <li className="nav_item">
            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <AiOutlineUser className="md:hidden text-xl"></AiOutlineUser> About Me
            </Link>
          </li>

          <li className="nav_item">
            <Link to="contact" spy={true} smooth={true} offset={20} duration={500} className="cursor-pointer select-none flex flex-col items-center dark:hover:text-indigo-500 hover:text-indigo-700">
              <TbMessage className="md:hidden text-xl"></TbMessage> Contact
            </Link>
          </li>
        </ul>

        <RxCross1 onClick={() => setView( !view )} className="md:hidden text-xl absolute right-3 bottom-5 cursor-pointer dark:hover:text-indigo-500 hover:text-indigo-700"></RxCross1>
      </div>


      <div onClick={() => setView( !view )} className="z-10 md:hidden text-xl cursor-pointer bg-indigo-800 p-2 rounded-full text-white hover:bg-indigo-600 fixed right-4 bottom-4">
        <AiOutlineAppstore></AiOutlineAppstore>
      </div>
    </>
  );
};
