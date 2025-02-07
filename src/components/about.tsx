import React from 'react';
import Home from '@/assets/Home.png';
import { Button } from './ui/button';
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const about2 = useRef(null);
  const about1 = useRef(null);
  const about3 = useRef(null);
  


  useEffect(() => {
    const element = about2.current;
    const element1 = about1.current;
    const element2 = about3.current;


    gsap.fromTo(
      element,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      element1,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element1,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      element2,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element2,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  })

  return (
    <div className="container  mx-auto p-6">
      <div  className="flex flex-col   md:flex-row md:space-x-6">
        {/* Left Section: Address and Contact */}
        <div ref={about2} className="flex-1 p-6">
          <img
            src={Home}
            alt="Home"
            className="object-contain md:my-2 relative top- h-12 rounded-lg"
          />
          <div className="lg:mb-6 lg:my-14 my-5 ">
            <h1 className="text-xl font-bold">Address</h1>
            <p className="text-gray-700">2774 Oak Drive, Plattsburgh, New York</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact:</h1>
            <p className="text-gray-700">
              <a
                href="tel:5185643200"
                className="text-black hover:underline"
              >
                518-564-3200
              </a>
            </p>
            <p className="text-gray-700">
              <a
                href="mailto:contact@helby.com"
                className="text-black hover:underline"
              >
                contact@helby.com
              </a>
            </p>
          </div>
          <div className=' flex size-10  gap-2 align-middle items-center'>
            <a href="">
              <svg className=' size-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#62409a" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" /><path fill="#62409a" fill-rule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd" /></svg>
            </a>
            <a href="">
              <svg className='size-8 ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#62409A" fill-rule="evenodd" d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z" /></svg>
            </a>
            <a href="">
              <svg className='size-7  ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#62409A" d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z" /></svg>
            </a>
            <a href="">
              <svg className='size-10 ' xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="#62409A" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z" /></svg>
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div  ref={about1}  className="flex md:flex-wrap justify-between align-middle  items-center md:justify-start  md:space-x-12">
          {/* Column 1 */}
          <div className="p-4 lg:pt-32 md:pt-36">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-blue-500">About Us</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Book a Demo</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Blog</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
            </div>
          </div>


          {/* Column 2 */}
          <div className="p-4 lg:pt-32 md:pt-36">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-blue-500">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Sign In</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Sign Up</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Forgot Password</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="p-4 lg:pt-32 md:pt-36">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-blue-500">Style Guide</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Changelog</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Licenses</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Design <br></br> Inspiration</a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <div ref={about3} className="mt-12 flex flex-col md:flex-row md:justify-between items-center text-center gap-4">
        <div>&#xA9; <span>2024 Helby</span></div>
        <div>
          Designed by <span className="font-semibold">DesignUp</span> - Powered by <span className="font-semibold ">Webflow</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="underline">Terms of Service</a>
          <a href="#" className="underline">Privacy Policy</a>
          <a href="#" className="underline">Cookies Settings</a>
        </div>
      </div>
    </div>
  );
};

export default About;
