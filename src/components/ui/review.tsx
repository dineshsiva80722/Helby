
import Trust from '@/assets/trustpilot.png'
import Star from '@/assets/star.png'
import Myprofile from '@/assets/profile.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const review = () => {

  const nothingref = useRef(null);
  


  useEffect(() => {
    const element = nothingref.current;


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
    <div ref={nothingref} className='bg-black xl:container xl:mx-auto bg-opacity-5 w-auto h-auto '>
    <div className='-mt-14 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-black w-auto h-auto text-center text-sm md:text-4xl lg:text-5xl font-semibold mt-6'>
        Nothing less than excellent
      </h1>
      <div className='flex flex-col items-center mt-4'>
        <div className='flex flex-wrap justify-center gap-3'>
          <img className='object-contain mx-auto h-16 md:h-20' src={Trust} alt="Trust" />
          <img className='object-contain mx-auto h-7 md:h-10 mt-4' src={Star} alt="Star" />
        </div>
        <div className='text-black text-center mt-4'>
          <h2 className='text-lg md:text-xl'>
            Reviews 4,317 <span className='text-2xl font-semibold'>Excellent</span>
          </h2>
        </div>
      </div>
  
      <Carousel className='mt-10 pb-10'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-1">
              <div className='w-full lg:w-80 h-auto m-4 p-5 rounded-xl bg-white'>
                <img className='object-contain h-7' src={Star} alt="Star" />
                <p className='mt-3 text-sm md:text-base lg:text-lg'>
                  “I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap.”
                </p>
                <div className='flex mt-3 items-center'>
                  <img className='h-10 md:h-14 rounded-full' src={Myprofile} alt="Profile" />
                  <div className='pl-2 pt-1'>
                    <span className="font-bold text-black">Anna Carlson</span>
                    <p className="text-xs md:text-sm text-slate-500">CEO, United Data Ltd</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='lg:flex hidden justify-between items-center mt-6'>
          <CarouselPrevious />
          <CarouselNext/>
        </div>
      </Carousel>
    </div>
  </div>
  
  )
}

export default review;