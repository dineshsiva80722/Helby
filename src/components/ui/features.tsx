import React from 'react'
import Boximg from '@/assets/flexbox.png';
import Box2 from '@/assets/box-2.png';
import Box3 from '@/assets/Box-3.png';
import Box4 from '@/assets/Box-4.png';
import Estimate from '@/assets/estimate.png';
import Compliant from '@/assets/compliant.png';
import Native from '@/assets/native.png'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);





const features = () => {


  const securetitle = useRef(null);
  const subpara = useRef(null);
  const svg1 = useRef(null);
  const svg2 = useRef(null);
  const svg3 = useRef(null);
  const compliant = useRef(null);
  const image1 = useRef(null);
  const content1 = useRef(null);
  const sectionRef = useRef(null);
  const compliantreffu = useRef(null);
  const securereffu = useRef(null);
  const feature = useRef(null);
  const featuretitle = useRef(null);




  useEffect(() => {
    const element = sectionRef.current;
    const element1 = compliantreffu.current;
    const element2 = securereffu.current;
    const element3 = feature.current;
    const element4 = featuretitle.current;

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

    gsap.fromTo(
      element1,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
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
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element2,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      element3,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element3,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      element4,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element4,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );


  }, []);





  useEffect(() => {

    // --------------------------
    gsap.fromTo(
      securetitle.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.2 }
    );
    gsap.fromTo(
      subpara.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.2 }
    );
    gsap.fromTo(
      svg1.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );
    gsap.fromTo(
      svg2.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );
    gsap.fromTo(
      svg3.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );
    gsap.fromTo(
      compliant.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );
    gsap.fromTo(
      image1.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );
    gsap.fromTo(
      content1.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.inout', delay: 0.3 }
    );




  })




  return (
    <div className=' xl:container xl:mx-auto'>
      <div  ref={featuretitle}  className='lg:py-4'>
        <h1 className='flex justify-evenly  md:text-4xl text-3xl lg:text-5xl'>Our unique features</h1>
        <p  className='flex justify-evenly  mt-4 md:mt-10 lg:text-lg md:text-xl md:px-20 lg:px-64 text-center' >powerful natural language processing capabilities,
          that can understand and respond to customer inquries
          in real-time & improve customer satisfication.</p>
      </div>
      <div ref={feature}  className='px-28 py-4'>
        <div className="flexbox md:flex justify-evenly gap-5 lg:px-4">
          <div  className='w-60 h-auto place-self-center bg-gray-100   rounded-lg space-y-4 ' >
            <h4 className='flex px-1 mt-4 md:mt-10 text-lg md:text-xl font-semibold'>Enterprise level super security grade</h4>
            <p className=' flex px-1 mt-4 md:mt-10 text-left'>Start maximising your company results today and speed up all your workflows processes.</p>
            <a href="" className=' px-1 font-bold underline'>Learn more </a>
            <img src={Boximg} className='w-60 h-32 p-2 object-cover rounded-2xl ' alt="" />
          </div>
          <div className='w-60 h-auto place-self-center bg-gray-600  bg-opacity-5 rounded-lg space-y-4 ' >
            <h1 className='flex px-1 mt-4 md:mt-10 text-lg md:text-xl font-semibold'>Enterprise level super security grade</h1>
            <p className=' flex px-1 mt-4 md:mt-10 text-left'>Start maximising your company results today and speed up all your workflows processes.</p>
            <a href="" className='px-1 font-bold underline'>Learn more </a>
            <img src={Box2} className='w-60 h-32 p-2 rounded-2xl object-cover  ' alt="" />
          </div>
          <div  className='w-60 h-auto place-self-center bg-gray-600  bg-opacity-5 rounded-lg space-y-4 ' >
            <h1 className='flex px-1 mt-4 md:mt-10 text-lg md:text-xl font-semibold'>Enterprise level super security grade</h1>
            <p className=' flex px-1 mt-4 md:mt-10 text-left'>Start maximising your company results today and speed up all your workflows processes.</p>
            <a href="" className='px-1 font-bold underline'>Learn more </a>
            <img src={Box3} className='w-60 h-32 p-2 rounded-2xl object-cover ' alt="" />
          </div>
          <div className='w-60 h-auto place-self-center bg-gray-600  bg-opacity-5 rounded-lg space-y-4 ' >
            <h1 className='flex px-1 mt-4 md:mt-10 text-lg md:text-xl font-semibold'>Enterprise level super security grade</h1>
            <p className=' flex px-1 mt-4 md:mt-10 text-left'>Start maximising your company results today and speed up all your workflows processes.</p>
            <a href="" className='px-1 font-bold underline'>Learn more </a>
            <img src={Box4} className='w-60 h-32 p-2 rounded-2xl object-cover' alt="" />
          </div>
        </div>
      </div>
      <div ref={securereffu} className='secure w-screen lg:m-32 mx-auto container'>
        <div className='md:flex px-5 lg:px-0 align-middle items-center '>
          <div className='py-20 space-y-7'>
            <h3  className='font-semibold text-3xl'>Secure</h3>
            <p  className='justify-item'>Configure your infrastructure in your own cloud, using best practices, automatically and get the best insights from our internal database.</p>
            <div className='flex'>
              <div  className='w-64 '>
                < ><svg className="w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                </>
                <h3 className='font-bold pl-4'>Create an account</h3>
                <p className='pl-4'>Create your company account to start using all features</p>
              </div>
              <div  className='w-60'>
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover">
                    <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
                  </svg>
                </>
                <h3 className='font-bold pl-4'>Create an account</h3>
                <p className='pl-4 text-left'>Start speeding up all your workflows processes.</p>
              </div>
            </div>
          </div>
          <div  className='px-7 pl-0 lg:pl-4'>
            <img className='lg:w-auto  lg:h-auto md:w-60 w-[18rem] mx-auto lg:mx-0  my-10  max-w-sm object-contain' src={Estimate} alt="" />
          </div>
        </div>
      </div>
      <div className='compliant  md:mx-auto container   m-0 lg:m-0'>
        {/* <div className='md:flex px-5 lg:px-0 justify-around gap-10 align-middle items-center '>
          <div  className='px-7 pl-0 lg:pl-4'>
            <img className='lg:w-auto  lg:h-auto  w-[18rem] mx-auto lg:mx-0  max-w-sm h-auto object-contain' src={Compliant} alt="" />
          </div>
          <div className='py-20 md:w-96 lg:w-auto space-y-7'>
            <h3  className='font-semibold text-3xl'>Compliant</h3>
            <p className='justify-item'>Get an audit trail of your SDLC from requirements, to development, to testing & deployment.</p>
            <div  className='flex'>
              <div className='w-64 '>
                <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover">
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                </svg>

                </>
                <h3 className='font-bold pl-4'>Database structure</h3>
                <p className='pl-4'>Start maximising your company results today</p>
              </div>
              <div className='w-60'>
                <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover">
                  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                </svg>

                </>
                <h3 className='font-bold pl-4'>Unique features</h3>
                <p className='pl-4 text-left'>Start speeding up all your workflows processes.</p>
              </div>
            </div>
          </div>
        </div> */}

        <div ref={compliantreffu} className="md:flex px-5 lg:px-0 justify-around gap-10 align-middle items-center">
          <div className="px-7 pl-0 lg:pl-4">
            <img
              className="lg:w-auto lg:h-auto w-[18rem] mx-auto lg:mx-0 max-w-sm h-auto object-contain"
              src={Compliant}
              alt=""
            />
          </div>
          <div className="py-20 md:w-96 lg:w-auto space-y-7">
            <h3 className="font-semibold text-3xl">Compliant</h3>
            <p className="justify-item">
              Get an audit trail of your SDLC from requirements, to development, to testing &
              deployment.
            </p>
            <div className="flex">
              <div className="w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover"
                >
                  {/* SVG path */}
                </svg>
                <h3 className="font-bold pl-4">Database structure</h3>
                <p className="pl-4">Start maximising your company results today</p>
              </div>
              <div className="w-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover"
                >
                  {/* SVG path */}
                </svg>
                <h3 className="font-bold pl-4">Unique features</h3>
                <p className="pl-4 text-left">Start speeding up all your workflows processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='native lg:m-32 pb-20'>
        <div className='md:flex px-5 lg:px-0 '>
          <div className='lg:py-20 space-y-7'>
            <h3 className='font-semibold sroolbox text-3xl'>Native data</h3>
            <p className='justify-item'>Builds and deployments are surfaced intuitively, empowering your team regardless of DevOps experience.</p>
            <div className='flex'>
              <div className='w-64 '>
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover">
                    <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
                  </svg>
                </>
                <h3 className='font-bold pl-4'>AI features</h3>
                <p className='pl-4'>Start maximising your company results today</p>
              </div>
              <div className='w-60'>
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                  </svg>
                </>
                <h3 className='font-bold pl-4'>Data cloud</h3>
                <p className='pl-4 text-left'>Start speeding up all your workflows processes.</p>
              </div>
            </div>
          </div>
          <div className='px-7 pl-0 lg:pl-4'>
            <img className='lg:w-auto  lg:h-auto md:w-60  w-[18rem] mx-auto lg:mx-0  max-w-sm object-contain' src={Native} alt="" />
          </div>
        </div>
      </div> */}

      <div ref={sectionRef} className="native lg:m-32 pb-20">
        <div className="md:flex px-5 lg:px-0 ">
          <div className="lg:py-20 space-y-7">
            <h3 className="font-semibold sroolbox text-3xl">Native data</h3>
            <p className="justify-item">
              Builds and deployments are surfaced intuitively, empowering your team regardless of DevOps experience.
            </p>
            <div className="flex">
              <div className="w-64">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
                <h3 className="font-bold pl-4">AI features</h3>
                <p className="pl-4">Start maximizing your company results today</p>
              </div>
              <div className="w-60">
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 size-6 w-8 h-8 m-4 p-1 bg-slate-800 bg-opacity-5 rounded-lg object-cover"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                </>
                <h3 className="font-bold pl-4">Data cloud</h3>
                <p className="pl-4 text-left">Start speeding up all your workflows processes.</p>
              </div>
            </div>
          </div>
          <div className="px-7 pl-0 lg:pl-4">
            <img
              className="lg:w-auto lg:h-auto md:w-60 w-[18rem] mx-auto lg:mx-0 max-w-sm object-contain"
              src={Native}
              alt=""
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default features;
