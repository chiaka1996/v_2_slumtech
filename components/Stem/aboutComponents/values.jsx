import { useState, useEffect } from 'react';
import Image from 'next/image';
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation} from "../../../utilis/animations";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Values = () => {
    useEffect(() => {
        topToBottomAnimation(".valueHeader")
        bottomToTopAnimation(".valueSubHeader")

        gsap.fromTo(".gsap-value-grid1",
            {y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: ".gsap-value-grid1", 
                start: "top 90%",       
              },
              onComplete: () => {
                gsap.fromTo(".gsap-value-grid2",
                    {y: 100,
                    opacity: 0
                    
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      scrollTrigger: {
                        trigger: ".gsap-value-grid2", 
                        start: "top 90%",       
                      },
                      onComplete: () => {
                        gsap.fromTo(".gsap-value-grid3",
                            {y: 100,
                            opacity: 0
                            
                            },
                            {
                              y: 0,
                              opacity: 1,
                              duration: 1,
                              scrollTrigger: {
                                trigger: ".gsap-value-grid3", 
                                start: "top 90%",       
                              },
                              onComplete: () => {
                                  gsap.fromTo(".gsap-value-grid4",
                                      {y: 100,
                                      opacity: 0
                                      
                                      },
                                      {
                                        y: 0,
                                        opacity: 1,
                                        duration: 1,
                                        scrollTrigger: {
                                          trigger: ".gsap-value-grid4", 
                                          start: "top 90%",       
                                        }        
                                      })        
                                }        
                            })        
                      }
                      
                    })        
              }
            })
    }, [])
 
    return(
        <section className='w-full bg-gradient-to-r from-[#FEB41E26] to-[#12CE8926] py-[12rem] max-small:py-[5rem] text-[1.8rem] max-small:text-[1.4rem] leading-[3rem]  max-small:leading-[2.5rem]'>
        <div className='container'>
        <h2 className='text-[#004658] font-[700] text-[5.4rem]  max-small:text-[3rem] leading-[6.4rem]  max-small:leading:[3.2rem] valueHeader'>Our Values</h2>
        <p className='max-w-[878px] valueSubHeader'>
        The SlumTech STEM Competition is an annual event dedicated to inspiring
         and empowering young minds from underserved communities across the United States.
        </p>

        <div className='mt-[5rem] max-small:mt-[3rem] gridStyle gap-[3rem] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem]'>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center opacity-0 gsap-value-grid1'>
                <div className="relative h-[8rem]  max-small:h-[4rem] w-[8rem] max-small:w-[4rem] mx-auto">
                <Image 
                src="/v_3_icons/value1.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] max-small:text-[2rem] leading-[4.2rem] max-small:leading-[3rem] text-[#004658] mt-[4rem]  max-small:mt-[2rem]'>Inclusivity</h3>
                <p className='text-[#004658] mt-[3rem]  max-small:mt-[1rem]'>
                We celebrate diversity and encourage participation from all backgrounds.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center opacity-0 gsap-value-grid2'>
                <div className="relative h-[8rem] max-small:h-[4rem] w-[8rem] max-small:w-[4rem] mx-auto">
                <Image 
                src="/v_3_icons/value2.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] max-small:text-[2rem] leading-[4.2rem] max-small:leading-[3rem] text-[#004658] mt-[4rem] max-small:mt-[2rem]'>Empowerment</h3>
                <p className='text-[#004658] mt-[3rem]  max-small:mt-[1rem]'>
                We empower youth by providing the tools and resources necessary for their success.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center opacity-0 gsap-value-grid3'>
                <div className="relative h-[8rem] max-small:h-[4rem] w-[8rem] max-small:w-[4rem] mx-auto">
                <Image 
                src="/v_3_icons/value3.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] max-small:text-[2rem] leading-[4.2rem] max-small:leading-[3rem] text-[#004658] mt-[4rem] max-small:mt-[2rem]'>Innovation</h3>
                <p className='text-[#004658] mt-[3rem] max-small:mt-[1rem]'>
                We foster a spirit of creativity and critical thinking, urging participants to think outside the box.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center opacity-0 gsap-value-grid4'>
                <div className="relative h-[8rem] max-small:h-[4rem] w-[8rem] max-small:w-[4rem] mx-auto">
                <Image 
                src="/v_3_icons/value4.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] max-small:text-[2rem] leading-[4.2rem] max-small:leading-[3rem] text-[#004658] mt-[4rem] max-small:mt-[2rem]'>Collaboration</h3>
                <p className='text-[#004658] mt-[3rem] max-small:mt-[1rem]'>
                We believe in the power of teamwork and community, encouraging participants to work together and support one another.
                </p>
            </div>
        </div>
          
        </div>
      </section>
    )
}

export default Values;