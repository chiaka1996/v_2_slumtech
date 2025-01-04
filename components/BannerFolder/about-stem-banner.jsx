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
        style={{backgroundImage: `url(/v_3_images/about-stem-banner.png)`, borderImage: "fill 1 linear-gradient(#00000099, #00000099)"}}
        className={`pt-[10rem] max-small:pt-0 justify-center h-[100vh] w-full bg-cover bg-center bg-[#00000099] ${css.StemAboutBanner}`}
       >
        <div className="relative container text-center pt-[10rem]" >
            <h2 className='font-[700] text-[4.8rem] leading-[6.4rem] text-[#F5B021]'>About Us</h2>
            <h3 className='font-[400] text-[1.8rem] leading-[3rem] text-[#fff] max-w-[819px] mx-auto'>
            Welcome to the SlumTech STEM Competition, an initiative of the SlumTech Foundation dedicated 
            to empowering young minds from underserved communities through science, technology, engineering,
             and mathematics (STEM). 
             </h3>
        </div> 

        <div className='absolute bottom-[-25rem] left-0 w-full z-[100]'>
        <div className='w-[1100px] h-[560px] rounded-[20px] mx-auto'>
        <video width="1100" height="560" controls className='rounded-[20px]'>
            <source src="/v_3_videos/slumtech_highlight.mp4" type="video/mp4" />
            {/* <source src="example.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
        </video>
        </div>
        </div>
       </section>
    )
}

export default Banner;