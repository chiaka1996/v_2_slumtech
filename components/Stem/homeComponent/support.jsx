import { useState, useEffect } from 'react';
import Image from 'next/image';
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation } from "../../../utilis/animations";
import Link from 'next/link';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Support = () => {
    useEffect(() => {
        topToBottomAnimation(".supportHeader")
        bottomToTopAnimation(".supportSubHeader")
    
        gsap.fromTo(".gsap-support-grid1",
          {y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".gsap-support-grid1", 
              start: "top 90%",       
            },
            onComplete: () => {
              gsap.fromTo(".gsap-support-grid2",
                  {y: 100,
                  opacity: 0
                  
                  },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                      trigger: ".gsap-support-grid2", 
                      start: "top 90%",       
                    },
                    onComplete: () => {
                      gsap.fromTo(".gsap-support-grid3",
                          {y: 100,
                          opacity: 0
                          
                          },
                          {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                              trigger: ".gsap-support-grid3", 
                              start: "top 90%",       
                            },
                            onComplete: () => {
                                gsap.fromTo(".gsap-support-grid4",
                                    {y: 100,
                                    opacity: 0
                                    
                                    },
                                    {
                                      y: 0,
                                      opacity: 1,
                                      duration: 1,
                                      scrollTrigger: {
                                        trigger: ".gsap-support-grid4", 
                                        start: "top 90%",       
                                      }        
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
      className="w-full font-[400] leading-[3rem] max-small:leading-[2.2rem] text-[#000] relative bg-gradient-to-b from-[#BAFFE600] to-[#BAFFE6D9]"
     >
       <div className='container py-[12rem] max-small:py-[5rem]'>
       <h1 className='font-[700] text-[54px] max-small:text-[3rem] leading-[64px] max-small:leading-[3.2rem] text-[#004658] text-center'>Support</h1>

       <div className='gridStyle gap-[3rem] mt-[5rem] max-small:mt-[3rem]'>
        <div className='gsap-support-grid4 opacity-0 bg-[#fff] rounded-[2rem] pt-[3.4rem] pb-[5rem] px-[2rem] flex flex-col gap-y-[1.5rem] relative min-h-[400px] max-small:min-h-[350px]'>
             <Image 
            src="/v_3_icons/support1.png"
            width={58}
            height={58}
            alt="resources available in slumtech"
            />    
            <h3 className='font-[700] font-basic text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Technical Support</h3>
            <ul className='text-[1.6rem] max-small:text-[1.4rem] list-disc ml-[2rem] flex flex-col gap-y-[0.5rem]'>
                <li>FAQs on common technical issues encountered during the competition.</li>
                <li> Access to forums for peer-to-peer support where participants can ask questions and share solutions.</li>
            </ul>

        <div className='absolute bottom-[2.8rem] left-[2rem] w-full font-[600] text-[1.8rem] text-[#004658] flex items-center gap-x-[1rem]'>
       <span> Contact us</span>
       <Image 
        src="/v_3_icons/arrow2.png"
        width={11}
        height={11}
        alt="slumtech support"
        />  
        </div>
        </div>

        <div className='gsap-support-grid3 opacity-0 bg-[#fff] rounded-[2rem] pt-[3.4rem] pb-[5rem] px-[2rem] flex flex-col gap-y-[1.5rem] relative min-h-[400px] max-small:min-h-[350px]'>
             <Image 
            src="/v_3_icons/support2.png"
            width={48}
            height={50}
            alt="resources available in slumtech"
            />    
            <h3 className='font-[700] font-basic text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Project Development Assistance</h3>
            <ul className='text-[1.6rem] max-small:text-[1.4rem] list-disc ml-[2rem] flex flex-col gap-y-[0.5rem]'>
                <li>Tips for brainstorming, planning, and developing your project idea.</li>
                <li>Best practices for collaboration and communication within your team.</li>
            </ul>

        <div className='absolute bottom-[2.8rem] left-[2rem] w-full font-[600] text-[1.8rem] text-[#004658] flex items-center gap-x-[1rem]'>
       <span> Contact us</span>
       <Image 
        src="/v_3_icons/arrow2.png"
        width={11}
        height={11}
        alt="slumtech support"
        />  
        </div>
        </div>

        <div className='gsap-support-grid2 opacity-0 bg-[#fff] rounded-[2rem] pt-[3.4rem] pb-[5rem] px-[2rem] flex flex-col gap-y-[1.5rem] relative min-h-[400px] max-small:min-h-[350px]'>
             <Image 
            src="/v_3_icons/support3.png"
            width={40}
            height={48}
            alt="resources available in slumtech"
            />    
            <h3 className='font-[700] font-basic text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Mental Health and Well-being</h3>
            <ul className='text-[1.6rem] max-small:text-[1.4rem] list-disc ml-[2rem] flex flex-col gap-y-[0.5rem]'>
                <li>Resources and hotlines for mental health support, stress management, and work-life balance.</li>
                <li>Articles on maintaining motivation and creativity throughout the competition.</li>
            </ul>

        <div className='absolute bottom-[2.8rem] left-[2rem] w-full font-[600] text-[1.8rem] text-[#004658] flex items-center gap-x-[1rem]'>
       <span> Contact us</span>
       <Image 
        src="/v_3_icons/arrow2.png"
        width={11}
        height={11}
        alt="slumtech support"
        />  
        </div>
        </div>

        <div className='gsap-support-grid1 opacity-0 bg-[#fff] rounded-[2rem] pt-[3.4rem] pb-[5rem] px-[2rem] flex flex-col gap-y-[1.5rem] relative min-h-[400px] max-small:min-h-[350px]'>
             <Image 
            src="/v_3_icons/support4.png"
            width={47}
            height={48}
            alt="resources available in slumtech"
            />    
            <h3 className='font-[700] font-basic text-[2rem] max-small:text-[1.8rem] text-[#004658]'>Community Engagement</h3>
            <ul className='text-[1.6rem] max-small:text-[1.4rem] list-disc ml-[2rem] flex flex-col gap-y-[0.5rem]'>
                <li>Links to social media groups and online communities for connecting with fellow participants.</li>
                <li>Opportunities to showcase your work and collaborate on projects with other competitors</li>
            </ul>

        <div className='absolute bottom-[2.8rem] left-[2rem] w-full font-[600] text-[1.8rem] text-[#004658] flex items-center gap-x-[1rem]'>
       <span> Contact us</span>
       <Image 
        src="/v_3_icons/arrow2.png"
        width={11}
        height={11}
        alt="slumtech support"
        />  
        </div>
        </div>

       </div>
       </div>
      </section>
    )
}

export default Support;