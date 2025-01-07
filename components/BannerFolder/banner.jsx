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
        style={{backgroundImage: `url(${img})`}}
        className={`pt-[10rem] max-small:pt-0 flex items-center justify-center h-[100vh] w-full bg-cover bg-center bg-[#060F26]`}
       >
        <div className="container" >
          <div className='flex flex-col gap-y-[2rem] text-[#fff] w-[79.7rem]'>
            <h1 className='text-[6.2rem] leading-[8rem] font-[700] opacity-0 bigHeader'>Welcome to <span className='font-[900] text-[#FFC700]'>SLUMTECH</span> Foundation</h1>
            <div className='font-[600] text-[2.2rem] leading-[3.6rem] opacity-0 smallHeader'>Innovating for Global Change, Empowering Communities</div>
            <span className='leading-[3rem] text-[1.8rem] font-[400] opacity-0 intro'>
            The SlumTech Foundation is a global nonprofit organization dedicated to leveraging 
            technology as a transformative force in urban communities worldwide. Founded by Olanrewaju Ogunleye,
             a tech-savvy entrepreneur, our mission is to empower marginalized populations in the United States, Africa, and beyond.
            </span>

            <div className='flex flex-row gap-x-[2rem] w-full opacity-0 btnLinks'>
            <Button text='Get Involved' />
            <span className='flex flex-row items-center gap-x-[0.6rem]'>
              <span>Be part of the change!</span> 
              <span className='material-icons text-[1.4rem]'>arrow_forward</span>
              </span>
          </div>
          </div>
        
        </div> 
       </section>
    )
}

export default Banner;