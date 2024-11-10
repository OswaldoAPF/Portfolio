import { useState, useEffect } from 'react'

export const LightMouse = () => {

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);

  const handleMouseMove = (event) => {
    setCurX(event.clientX);
    setCurY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <div className="hidden lg:block dark:bg-gradient-custom-1 bg-gradient-custom-2 fixed mix-blend-hard-light w-[500px] h-[500px] top-[-250px] left-[-250px] opacity-70 z-[-1]" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }}></div>

  )
}