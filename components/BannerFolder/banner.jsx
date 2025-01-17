"use client"
import {useEffect} from 'react'
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import css from "./banner.module.css";
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "../index"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Banner = ({img }) => {
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
        style={{backgroundImage:`url(/v_3_images/home-banner.png)`}}
        className={`relative font-[400] pt-[19.5rem] max-small:pt-[13rem] max-small:pb-0 text-[#fff] min-h-[100vh] max-small:min-h-[100vh] w-full bg-cover max-small:bg-center bg-[#00000099]`}
       >
        <video muted loop autoPlay playsInline disablePictureInPicture
        className='absolute top-0 left-0 w-full h-[100vh] z-[-1] object-cover'
        >
            <source src="/v_3_videos/slumtech-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        <div className='container'>
        <div className='flex flex-col gap-y-[2rem] text-[#fff] max-w-[79.7rem]'>
            <h1 className='text-[6.2rem] max-small:text-[3rem] leading-[8rem] max-small:leading-[4rem] font-[700] opacity-0 bigHeader'>Welcome to <span className='font-[900] text-[#FFC700]'>SLUMTECH</span> Foundation</h1>
             <div className='font-[600] text-[2.2rem] max-small:text-[1.8rem] leading-[3.6rem] opacity-0 smallHeader'>Innovating for Global Change, Empowering Communities</div>
             <span className='leading-[3rem] text-[1.8rem] max-small:text-[1.4rem] font-[400] opacity-0 intro'>
             The SlumTech Foundation is a global nonprofit organization dedicated to leveraging 
             technology as a transformative force in urban communities worldwide. Founded by Olanrewaju Ogunleye,
            a tech-savvy entrepreneur, our mission is to empower marginalized populations in the United States, Africa, and beyond.
             </span>

             <div className='flex flex-row gap-x-[2rem] w-full opacity-0 btnLinks'>
             <Button text='Get Involved' />
             <span className='flex flex-row items-center gap-x-[0.6rem]'>
               <span>Be part of the change!</span> 
               <span className='material-icons text-[1.4rem] '>arrow_forward</span>
               </span>
           </div>
           </div>
       
        </div> 
       </section>
    )
}

export default Banner;