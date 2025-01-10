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

const CoreValue = ({img }) => {
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
        className={`py-[12rem] max-small:py-[5rem] flex items-center justify-center w-full bg-[#ede6f8]/40`}
       >
        <div className="container text-center">
            <MainHeader text="Core Value" />
            <div className='text-[1.8rem] max-small:text-[1.6rem] max-small:leading-[2rem] max-small:mt-[1rem] font-[400] text-[#7E7E7E] max-w-[106rem] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div className='mt-[5rem] max-small:mt-[3rem] gridStyle gap-[3rem]'>
             <div className='bg-[#fff] rounded-[20px] min-h-[27.8rem] pt-[4rem] px-[2.5rem] text-left'>
                <div className="relative w-[4.8rem] h-[4.8rem] mb-[3rem]">
                  <Image 
                  src="/v_3_icons/empowerment.png"
                  fill
                  alt="slumtech core values"
              />
              </div>

              <h2 className='font-[700] text-[2rem] text-[#212121] leading-[2.6rem]'>Empowerment</h2>
              <p className='text-[1.8rem] leading-[3rem] text-[#6D6D6D] mt-[1.5rem]'>
              We cultivate skills and knowledge that enable individuals.
              </p>
             </div>

             <div className='bg-[#fff] rounded-[20px] min-h-[27.8rem] pt-[4rem] px-[2.5rem] text-left'>
                <div className="relative w-[3.5rem] h-[3.6rem] mb-[3rem]">
                  <Image 
                  src="/v_3_icons/collaboration.png"
                  fill
                  alt="slumtech core values"
              />
              </div>

              <h2 className='font-[700] text-[2rem] text-[#212121] leading-[2.6rem]'>Collaboration</h2>
              <p className='text-[1.8rem] leading-[3rem] text-[#6D6D6D] mt-[1.5rem]'>
              We partner with communities, organizations, and governments for sustainable progress.
              </p>
             </div>

             <div className='bg-[#fff] rounded-[20px] min-h-[27.8rem] pt-[4rem] px-[2.5rem] text-left'>
                <div className="relative w-[4rem] h-[4rem] mb-[3rem]">
                  <Image 
                  src="/v_3_icons/innovation.png"
                  fill
                  alt="slumtech core values"
              />
              </div>

              <h2 className='font-[700] text-[2rem] text-[#212121] leading-[2.6rem]'>Innovation</h2>
              <p className='text-[1.8rem] leading-[3rem] text-[#6D6D6D] mt-[1.5rem]'>
              We cultivate skills and knowledge that enable individuals.
              </p>
             </div>

             <div className='bg-[#fff] rounded-[20px] min-h-[27.8rem] pt-[4rem] px-[2.5rem] text-left'>
                <div className="relative w-[4rem] h-[4rem] mb-[3rem]">
                  <Image 
                  src="/v_3_icons/integrity.png"
                  fill
                  alt="slumtech core values"
              />
              </div>

              <h2 className='font-[700] text-[2rem] text-[#212121] leading-[2.6rem]'>Integrity</h2>
              <p className='text-[1.8rem] leading-[3rem] text-[#6D6D6D] mt-[1.5rem]'>
              We uphold transparency and ethical practices in all our endeavors.
              </p>
             </div>
            </div>
         
        
        </div> 
       </section>
    )
}

export default CoreValue;