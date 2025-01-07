"use client"
import {useEffect} from 'react'
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import Image from 'next/image';
import Link from 'next/link';
import { MainHeader } from '..';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const GetInvolved = () => {
    useEffect(() => {
        gsap.fromTo(".bigHeader",
            {y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              onComplete: () => {
                gsap.fromTo(".smallHeader",
                    {y: 100,
                    opacity: 0
                    
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      onComplete: () => {
                        gsap.fromTo(".intro",
                            {y: 100,
                            opacity: 0
                            
                            },
                            {
                              y: 0,
                              opacity: 1,
                              duration: 1,
                              onComplete: () => {
                                gsap.fromTo(".btnLinks",
                                    {y: 100,
                                    opacity: 0
                                    
                                    },
                                    {
                                      y: 0,
                                      opacity: 1,
                                      duration: 1,
                                      
                
                                    })        
                              }
                               
                            })        
                      }
                      
                    })        
              }
            })
    }, [])
    

    return(
       <section 
        className={`font-[400] text-[1.6rem] leading-[2.4rem] pt-[38rem] max-small:pt-0 flex items-center justify-center w-full bg-[#fff]`}
       >
        <div className="relative pb-[12rem] container text-left">
            <MainHeader text="Get Involved" />
            <div className='text-[1.8rem] font-[400] text-[#6D6D6D] leading-[3rem] max-w-[70rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. 
            </div>

            <div className='flex flex-row justify-between items-center'>
              <div className='w-[74.7rem] flex flex-col gap-y-[2rem]'>
                <div className='w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved1.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Volunteer Opportunities</h3>
                    <p className='text-[#6D6D6D]'>Join our mission by contributing your time and skills in various programs, including tech training, mentorship, and community outreach.</p>
                  </div>

                </div>

                <div className='w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved2.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Donate</h3>
                    <p className='text-[#6D6D6D]'>
                    Support our impact! Your contributions help expand our services and reach more communities. Donate Now
                    </p>
                  </div>

                </div>

                <div className='w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved3.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Partnerships</h3>
                    <p className='text-[#6D6D6D]'>Join our mission by contributing your time and skills in various programs, including tech training, mentorship, and community outreach.</p>
                  </div>

                </div>
              </div>

               <div className='relative w-[72.3rem] h-[49.5rem]'>
                    <Image 
                  src="/v_3_images/involved4.png"
                  fill
                  alt="Get involved with slumtech"
              />
              </div>
            </div>
        </div>
       </section>
   ) 
}

export default GetInvolved;