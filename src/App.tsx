import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Button } from './components/ui/button';
import MyImage from './assets/Home.png';
import Home from './components/ui/Home';
import Features from './components/ui/features';
import { gsap } from 'gsap';
import Review from './components/ui/review';
import Resources from '@/components/ui/resource';
import Land from '@/components/ui/land';
import About from '@/components/about';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const featuresREf = useRef(null);
  const pricongRef = useRef(null);
  const aboutref = useRef(null);
  const blogref = useRef(null);
  const contectref = useRef(null);
  const logoimg = useRef(null);
  const btnref = useRef(null);
  const svg1 = useRef(null);
  const svg2 = useRef(null);
  useEffect(() => {

    gsap.fromTo(
      logoimg.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out', delay: 0.2 }
    );
  
    gsap.fromTo(
      featuresREf.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
    );
    gsap.fromTo(
      pricongRef.current,
      { opacity: 0, y: -60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      aboutref.current,
      { opacity: 0, y: -70 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
    );
    gsap.fromTo(
      aboutref.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.7 }
    );
    gsap.fromTo(
      blogref.current,
      { opacity: 0, y: -90 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
    );
    gsap.fromTo(
      contectref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.9 }
    );  
    gsap.fromTo(
      btnref.current,
      { opacity: 0, y: -110 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 },
    );
    gsap.fromTo(
      svg1.current,
      { opacity: 0, y: -120 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
    );
    gsap.fromTo(
      svg2.current,
      { opacity: 0, y: -130 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.3 }
    );
  


    
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="flex  flex-col md:flex-row xl:container xl:mx-auto justify-between px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex justify-around gap-36 align-middle items-center">
            <img ref={logoimg} className="object-contain h-10 md:h-12" src={MyImage} alt="" />
            <div className="lg:hidden md:hidden sm:flex" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="container hidden lg:flex md:flex gap-4 md:gap-6 py-4 md:py-0 justify-center">
            <a  ref={featuresREf}  href="">Features</a>
            <a  ref={pricongRef}  href="">Pricing</a>
            <a  ref={aboutref} href="">About us</a>
            <a  ref={blogref} href="">Blog</a>
            <a  ref={contectref} href="">Contact</a>
          </div>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`lg:hidden md:hidden sm:flex flex-col bg-gray-100 w-full text-center h-auto gap-4 justify-center py-4 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <li className="list-none p-1 font-bold text-sm">
            <a href="">Features</a>
          </li>
          <li className="list-none p-1 font-bold text-sm">
            <a href="">Pricing</a>
          </li>
          <li className="list-none p-1 font-bold text-sm">
            <a href="">About us</a>
          </li>
          <li className="list-none p-1 font-bold text-sm">
            <a href="">Blog</a>
          </li>
          <li className="list-none p-1 font-bold text-sm">
            <a href="">Contact</a>
          </li>
        </div>

        <div className="flex gap-2 md:gap-4 mt-4 lg:mx-0 mx-auto md:mt-0 items-center">
          <Button ref={btnref} className="px-4 py-2 text-sm md:text-base rounded-3xl">Book a demo</Button>
          <Button ref={svg1} className="text-black pb-4 px-2 py-2 w-8 h-8 border-2 border-black rounded-3xl bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 bg-white text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Button>
          <Button ref={svg2} className="text-black pb-4 px-2 py-2 w-8 h-8 border-2 border-black rounded-3xl bg-white">
            <svg

              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Button>
        </div>
      </div>

      <Home />
      <Features />
      <Review />
      <Resources />
      <Land />
      <About />
    </>
  );
};

export default App;
