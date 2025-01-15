import { useState, useEffect } from 'react';
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation } from "../../../utilis/animations";
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const WhyParticipate = () => {
  useEffect(() => {
    topToBottomAnimation(".gsap-header")
    bottomToTopAnimation(".gsap-subheader")

    gsap.fromTo(".gsap-grid1",
      {y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".gsap-grid1", 
          start: "top 90%",       
        },
        onComplete: () => {
          gsap.fromTo(".gsap-grid2",
              {y: 100,
              opacity: 0
              
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  trigger: ".gsap-grid2", 
                  start: "top 90%",       
                },
                onComplete: () => {
                  gsap.fromTo(".gsap-grid3",
                      {y: 100,
                      opacity: 0
                      
                      },
                      {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                          trigger: ".gsap-grid3", 
                          start: "top 90%",       
                        },
                        onComplete: () => {
                          gsap.fromTo(".gsap-grid4",
                              {y: 100,
                              opacity: 0
                              
                              },
                              {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                scrollTrigger: {
                                  trigger: ".gsap-grid4", 
                                  start: "top 90%",       
                                },
                              })        
                        }
                         
                      })        
                }
                
              })        
        }
      })
  },[])
 
    return(
      <section
      className="w-full font-[400] leading-[3rem] max-small:leading-[2.2rem] text-[#000] relative"
     >
        <div className='container py-[12rem] max-small:py-[5rem] text-center'>
            <h1 className='gsap-header opacity-0 text-[#004658] text-[54px] max-small:text-[3rem] font-[700] leading-[64px] max-small:leading-[3.2rem]'>Why Participate</h1>
            <h3 className='gsap-subheader opacity-0 max-w-[878px] text-[1.8rem] max-small:text-[1.4rem] mx-auto'>
            The SlumTech STEM Competition is an annual event dedicated to inspiring and 
            empowering young minds from underserved communities across the United States.
            </h3>

            <div className='gridStyle gap-[3rem] mt-[5rem] max-small:mt-[3rem]'>
                <div className='gsap-grid1 opacity-0 rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate1.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] max-small:gap-x-[1rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate1.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Unlock Potential</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] max-small:text-[1.4rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Showcase your skills, demonstrate your creativity, and turn your innovative ideas into real-world solutions.
                </div>
                </div>

                <div className='gsap-grid2 opacity-0 rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate2.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] max-small:gap-x-[1rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate2.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Prizes and Scholarships</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] max-small:text-[1.4rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Win scholarships, cash prizes, and mentorship opportunities that can help you take your education and career to the next level.
                </div>
                </div>

                <div className='gsap-grid3 opacity-0 rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate3.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] max-small:gap-x-[1rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate3.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Networking</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] max-small:text-[1.4rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Connect with professionals and peers who share your passion for STEM and innovation, opening doors for future opportunities.
                </div>
                </div>

                <div className='gsap-grid4 opacity-0 rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate4.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] max-small:gap-x-[1rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate4.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Make a Difference</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] max-small:text-[1.4rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Tackle real-world social challenges and use your skills to make a positive impact on your community.
                </div>
                </div>

            </div>
        </div>
      </section>
    )
}

export default WhyParticipate;