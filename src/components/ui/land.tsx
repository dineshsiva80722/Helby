
import LandBack from '@/assets/resources/landback.png';
import { Button } from './button';
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const land = () => {

  const nextlevelref = useRef(null);
  


  useEffect(() => {
    const element = nextlevelref.current;


    gsap.fromTo(
      element,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  })

  return (


    <div ref={nextlevelref} className='xl:container md:h-auto h-32 xl:mx-auto'>
        <div className=''>
        <div className='relative '>
            <h1 className='lg:text-5xl md:text-4xl w-7/12 relative  md:top-20 lg:top-40 mx-auto text-center my-16'>Take your audience to the next level starting today</h1>
        <Button className='mx-auto flex justify-center -top-10 md:top-20  sm:text-sm rounded-3xl relative lg:top-40' >Let's get started</Button>
        </div>
        <div className='relative lg:-top-[15rem] -z-10 -top-[10.5rem]'>
            <img className='object-contain w-12/12 h-full z-0' src={LandBack} alt="" />
        </div>
        </div>
    </div>
  )
}

export default land;