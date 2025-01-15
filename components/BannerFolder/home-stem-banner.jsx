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
        gsap.fromTo(".complete",
            {y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              onComplete: () => {
                gsap.fromTo(".stembigHeader",
                    {y: 100,
                    opacity: 0
                    
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      onComplete: () => {
                        gsap.fromTo(".stemSmallHeader",
                            {y: 100,
                            opacity: 0
                            
                            },
                            {
                              y: 0,
                              opacity: 1,
                              duration: 1,
                              onComplete: () => {
                                gsap.fromTo(".learnBtn",
                                    {y: 100,
                                    opacity: 0
                                    
                                    },
                                    {
                                      y: 0,
                                      opacity: 1,
                                      duration: 1,
                                      onComplete: () => {
                                        gsap.fromTo(".registration",
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
              }
            })
    }, [])
    return(
       <section 
        style={{borderImage: "fill 1 linear-gradient(#000000B2, #00000080)"}}
        className={`relative font-[400] pt-[19.5rem] pb-[8rem] max-small:pb-0 text-[#fff] max-small:pt-[13rem] justify-center min-h-[100vh] max-small:min-h-full w-full bg-center bg-[#00000099] ${css.StemHomeBanner}`}
       >
        <video muted loop autoPlay playsInline disablePictureInPicture
        className='absolute top-0 left-0 w-full min-h-full z-[-1] object-cover'
        >
            <source src="/v_3_videos/slumtech-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        <div className='container'>
        <div className='max-w-[876px] flex flex-col gap-y-[1.5rem]'>
            {/* the opacity-0 is so that gsap works properly. */}
            <button className='complete opacity-0 w-[138px] h-[34px] rounded-[25px] bg-[#14CB8A80] text-[16px] max-small:text-[1.4rem] font-[600] leading-[24px]'>Completion</button>
            <h1 className='stembigHeader opacity-0 font-[700] text-[48px] max-small:text-[3rem] leading-[6.4rem] max-small:leading-[4rem]'>
           <span>Your Innovation:</span> <br/>
            <span className='text-[#F5B021]'>Join</span> the <span className='text-[#F5B021]'>SlumTech STEM Competition</span>
            </h1>
            <p className='stemSmallHeader opacity-0 max-w-[542px] text-[1.8rem] max-small:text-[1.6rem] leading-[3rem] max-small:leading-[2.5rem]'>Unleash your creativity, solve real-world problems, and compete for a chance to change your community.</p>
             <button className='learnBtn opacity-0 gap-x-[1.5rem] flex flex-row justify-center items-center w-[198px] max-small:w-[137px] h-[50px] max-small:h-[40px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] max-small:text-[1.4rem] leading-[3rem]'>
            <span>Learn more</span>
            <div className="relative h-[11px] w-[11px]">
            <Image 
            src="/v_3_icons/arrow.png"
            fill
            alt="slumtech value"
            />
            </div>
        </button>
        </div>

        <div 
         style={{backgroundImage: `url(/v_3_images/stem-home-banner3.png)`}}
        className='registration opacity-0 mt-[9rem] max-small:mt-[3rem] relative w-full min-h-[25rem] rounded-[20px] p-[7rem] max-small:p-[2rem] max-small:px-[1rem] bg-center'>
            <div>
                <div className='flex gap-[3rem] mb-[3.7rem] max-small:mb-[1.5rem]'>
                    <h3 className='font-[500] text-[30px] max-small:text-[1.8rem] leading-[32px]'>Registration Opens</h3>
                    <button className='h-[40px] w-[137px] bg-[#14CB8A80] rounded-[25px]'>12/02/2024</button>
                </div>
                <button className='gap-x-[1.5rem] flex flex-row justify-center items-center w-[198px]  max-small:w-[137px] h-[50px] max-small:h-[40px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] max-small:text-[1.4rem] leading-[3rem]'>
            <span>Join now</span>
            <div className="relative h-[11px] w-[11px]">
            <Image 
            src="/v_3_icons/arrow.png"
            fill
            alt="slumtech value"
            />
            </div>
        </button>
            </div>

            <div className='absolute  max-small:relative bottom-0 right-0'>
            <div className='relative w-[996px] max-small:w-[370px] h-[498px] max-small:h-[200px]'>
            <Image 
            src="/v_3_images/stem-home-banner2.png"
            fill
            alt="kids in technology"
            />
            </div>
            </div>
        </div>
        </div>     
       </section>
    )
}

export default Banner;