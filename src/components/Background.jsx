import { useEffect } from 'react';

export const Background = () => {



  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 60 },
          color: { value: "#fff" },
          shape: { type: 'circle' },
          line_linked: { enable: true, distance: 150, color: "#fff", opacity: 0.5, width: 1 },
          opacity: { value: 0.4 },
          size: { value: 3 },
          move: { enable: true, speed: 4, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false, mode: "push" },
          }
        }
      });
    };
    

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="particles-js" style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 0, top: 0, left: 0 }}></div>
  );
};

