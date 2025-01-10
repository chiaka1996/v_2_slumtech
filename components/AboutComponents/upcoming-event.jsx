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

const UpcomingEvents = ({img }) => {
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
        className={`pb-[12rem] max-small:pb-[5rem] max-small:pt-[5rem]  font-[400] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem]  flex items-center justify-center w-full`}
       >
        <div className="relative container text-center">
            <MainHeader text="Upcoming Events" />
            <div className='text-[1.8rem] mt-[1rem] font-[400] text-[#7E7E7E] max-w-[106rem] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div className='gridStyle mt-[5rem] max-small:mt-[3rem] gap-x-[5rem] gap-y-[3rem] text-left text-[#fff]'>
                <div className='bg-[url("/v_3_images/event1.png")] h-[35.9rem] bg-cover py-[4.4rem] px-[3rem] rounded-[25px]'>

                    <div className='bg-[#FFFCFC42] w-[128px] h-[29px] rounded-[10px] flex items-center justify-center'>25-12-2024</div>
                    <p className='max-w-[54.2rem] font-[700] text-[2.4rem] mt-[5.9rem] mb-[5.9rem] text-[#fff]'>Workshops on entrepreneurship and technology</p>

                    <button className='w-[18.1rem] h-[4.4rem] bg-[#0C9D69] rounded-[10px] text-[1.8rem] font-[600]'>Get Involved</button>

                </div>

                <div className='bg-[url("/v_3_images/event2.png")] h-[35.9rem] bg-cover py-[4.4rem] px-[3rem] rounded-[25px]'>

                    <div className='bg-[#FFFCFC42] w-[128px] h-[29px] text-[#fff] rounded-[10px] flex items-center justify-center'>25-12-2024</div>
                    <p className='max-w-[54.2rem] font-[700] text-[2.4rem] mt-[5.9rem] mb-[5.9rem] text-[#fff]'>Workshops on entrepreneurship and technology</p>

                    <button className='w-[18.1rem] h-[4.4rem] bg-[#0C9D69] rounded-[10px]'>Get Involved</button>

                    </div>
            </div>

        </div>
       </section>
   ) 
}

export default UpcomingEvents;