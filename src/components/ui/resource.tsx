import React from 'react';
import One from '@/assets/resources/one.jpeg';
import Two from '@/assets/resources/two.jpeg';
import Three from '@/assets/resources/three.jpeg';
import Four from '@/assets/resources/four.jpeg';
import Five from '@/assets/resources/five.jpeg';
import Six from '@/assets/resources/six.jpeg';
import { Button } from './button';
import Myprofile from '@/assets/profile.png';
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Resource = () => {

  const usefullreff = useRef(null);
  


  useEffect(() => {
    const element = usefullreff.current;


    gsap.fromTo(
      element,
      { x: "-100%", opacity: 0 },
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
    <div ref={usefullreff} className='xl:container xl:mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='space-y-4 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
          Useful <span className='font-extralight'>Resources</span>
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
          Discover our useful resources and read articles on different categories
        </p>
      </div>
      <div className='mt-10 pb-10 flex flex-wrap gap-6 justify-center'>
        {[One, Two, Three, Four, Five, Six].map((image, index) => (
          <div
            key={index}
            className='box-1 w-full sm:w-60 md:w-72 h-auto pb-2 rounded-2xl bg-black bg-opacity-5'
          >
            <a href='' className=''>
              <img
                src={image}
                className='object-cover w-full h-40 sm:h-44 md:h-48 rounded-t-2xl'
                alt=''
              />
              <Button className='mt-2 mx-4   rounded-3xl'>Analytics</Button>
              <div className='w-full px-4 -mt-5 rounded-lg space-y-4'>
                <h4 className='mt-2 lg:py-0 py-4 md:mt-4 text-lg md:text-xl font-semibold'>
                  5 Great Web Design Resources
                </h4>
                <p className='mt-2 text-sm md:text-base'>
                  Est placeat perspicia
                </p>
                <div className='flex items-center mt-3'>
                  <img
                    className='h-8 w-8 md:h-10 md:w-10 rounded-full'
                    src={Myprofile}
                    alt=''
                  />
                  <div className='pl-2'>
                    <span className='font-bold text-sm md:text-base'>Anna Oneal</span>
                    <p className='text-xs md:text-sm'>
                      March 28, 2023 <span className='font-bold'>.</span> 4 min read
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
