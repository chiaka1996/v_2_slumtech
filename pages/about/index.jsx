import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import { topToBottomAnimation, bottomToTopAnimation } from "../../utilis/animations";
import {Navigation, Sidebar, MainHeader, CoreValue, Programs, Newsletter, Footer, GetInvolved, UpcomingEvent, Blog, ContactUs} from "../../components"
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function About() {

useEffect(() => {
    gsap.fromTo(".aboutImage",
        {y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          onComplete: () => {
            gsap.fromTo(".aboutHeader",
                {y: 100,
                opacity: 0
                
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  onComplete: () => {
                    gsap.fromTo(".paragraph1",
                        {y: 100,
                        opacity: 0
                        
                        },
                        {
                          y: 0,
                          opacity: 1,
                          duration: 1,
                          onComplete: () => {
                            gsap.fromTo(".paragraph2",
                                {y: 100,
                                opacity: 0
                                
                                },
                                {
                                  y: 0,
                                  opacity: 1,
                                  duration: 1,
                                  onComplete: () => {
                                    gsap.fromTo(".paragraph3",
                                        {y: 100,
                                        opacity: 0
                                        
                                        },
                                        {
                                          y: 0,
                                          opacity: 1,
                                          duration: 1
                                        })        
                                  }
                                })        
                          }
                           
                        })        
                  }
                  
                })        
          }
        })
}, [])
 
  return (
   <main className="text-[1.6rem] max-small:text-[1.4rem] font-[400] text-[#000] leading-[2.6rem] max-small:leading-[1.8rem] relative">
    <Navigation />
    <Sidebar /> 
    <section 
        className={`pt-[10rem] pb-0 max-small:pb-[5rem] w-full bg-[#EAE2FF] min-h-[100vh]`}
       >
        <div className="container gridStyle gap-x-[15rem] gap-y-[5rem]" >
           <div className="relative max-w-[80rem] min-h-[57.8rem] max-small:min-h-[40rem] aboutImage">
            <Image 
            src="/v_3_images/about_main.png"
            fill
            alt="slumtech about page banner"
        />
           </div>
           <div className="max-w-[63.5rem]">
            <div className="aboutHeader opacity-0">
            <MainHeader text="About Us" />
            </div>
           
           <div className="mt-[5rem] max-small:mt-[3rem] flex flex-col gap-y-[3rem]">
            <div className="flex flex-row gap-x-[1.5rem] opacity-0 paragraph1">
            <div className="relative min-w-[3.8rem] h-[3.8rem]">
            <Image 
            src="/v_3_icons/about1.png"
            fill
            alt="slumtech about page banner"
        />
           </div>
           <div className="max-w-[56rem]">
            <h2 className="text-[#000] font-[700] text-[2rem] max-small:text-[1.6rem] leading-[2.5rem] mb-[1.5rem]">Mission Statement</h2>
            <div className="text-[1.6rem] font-[400] text-[#6D6D6D] leading-[2.4rem]">
            At SlumTech Foundation, our mission is to harness the power of technology 
            to improve the lives of individuals in impoverished communities, fostering
            education, economic growth, and sustainable development.
            </div>
           </div>
            </div>

            <div className="flex flex-row gap-x-[1.5rem] opacity-0 paragraph2">
            <div className="relative min-w-[3.8rem] h-[3.8rem]">
            <Image 
            src="/v_3_icons/about2.png"
            fill
            alt="slumtech about page banner"
        />
           </div>
           <div className="max-w-[56rem]">
            <h2 className="text-[#000] font-[700] text-[2rem] leading-[2.5rem] mb-[1.5rem]">History</h2>
            <div className="text-[1.6rem] font-[400] text-[#6D6D6D] leading-[2.4rem]">
            Founded by Olanrewaju Ogunleye in [Year], 
            SlumTech Foundation has grown from a local initiative into a global movement. 
            Our work focuses on creating lasting impact through innovative technology solutions.
            </div>
           </div>
            </div>
            <div className="flex flex-row gap-x-[1.5rem] opacity-0 paragraph3">
            <div className="relative min-w-[3.8rem] h-[3.8rem]">
            <Image 
            src="/v_3_icons/about3.png"
            fill
            alt="slumtech about page banner"
        />
           </div>
           <div className="max-w-[56rem]">
            <h2 className="text-[#000] font-[700] text-[2rem] leading-[2.5rem] mb-[1.5rem]">Vision</h2>
            <div className="text-[1.6rem] font-[400] text-[#6D6D6D] leading-[2.4rem]">
            A world where technology closes the gap between opportunity and need, allowing everyone to thrive.
            </div>
           </div>
            </div>
           </div>
           </div>
            </div>
        </section>
        <CoreValue />
       <Programs />
         <GetInvolved />
         <UpcomingEvent />
         <Blog />
          <Newsletter />
         <ContactUs />
         <Footer />
    </main>
  )
};