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

const Blog = ({img }) => {
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
        className={`py-[12rem] max-small:pb-[5rem] max-small:pt-[5rem]  font-[400] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem] w-full bg-gradient-to-r from-[#D9CBFF]/100 to-[#F9D7FF]/100`}
       >
        <div className="relative container text-left">
            <MainHeader text="Our Blog" />
            <div className='text-[1.8rem] max-small:mt-[1rem] max-small:text-[1.6rem] font-[400] text-[#7E7E7E] max-w-[70rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div className='gridStyle gap-[3.2rem] mt-[5rem] max-small:mt-[3rem]'>
                <div className='rounded-[25px] border border-[#00000026]'>
                <div className="relative h-[23.5rem]">
                <Image 
                src="/v_3_images/event1.png"
                fill
                alt="slumtech about page banner"
                 />
                </div>

                <div className='px-[2.4rem] pb-[2.5rem]'>
                    <div className='py-[1.8rem] border border-b-[#C3C3C3] border-t-0 border-x-0 flex justify-between items-center'>
                        <span className='text-[#3C3E3F]'>September 9, 2024</span>
                        <span className='text-[#3C3E3F]'>One comment</span>
                    </div>

                    <div className='mt-[1.5rem] flex flex-col gap-y-[1.5rem]'>
                        <p className='font-[700] text-[2rem] leading-[3rem] text-[#000]'>Articles on the intersection of technology and poverty alleviation</p>
                        <p className='text-[#6D6D6D]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Neque augue eu torquent bibendum iaculis dictumst lectus et.</p>
                        <span className='text-[#0C9D69] underline font-[600] text-[1.8rem] leading-[3rem]'>Read More</span>
                    </div>
                </div>
                </div>

                <div className='rounded-[25px] border border-[#00000026]'>
                <div className="relative h-[23.5rem]">
                <Image 
                src="/v_3_images/blog2.png"
                fill
                alt="slumtech about page banner"
                 />
                </div>

                <div className='px-[2.4rem] pb-[2.5rem]'>
                    <div className='py-[1.8rem] border border-b-[#C3C3C3] border-t-0 border-x-0 flex justify-between items-center'>
                        <span className='text-[#3C3E3F]'>September 9, 2024</span>
                        <span className='text-[#3C3E3F]'>One comment</span>
                    </div>

                    <div className='mt-[1.5rem] flex flex-col gap-y-[1.5rem]'>
                        <p className='font-[700] text-[2rem] leading-[3rem] text-[#000]'>
                        Updates on SlumTech programs and beneficiaries’ success stories
                        </p>
                        <p className='text-[#6D6D6D]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Neque augue eu torquent bibendum iaculis dictumst lectus et.</p>
                        <span className='text-[#0C9D69] underline font-[600] text-[1.8rem] leading-[3rem]'>Read More</span>
                    </div>
                </div>
                </div>

                <div className='rounded-[25px] border border-[#00000026]'>
                <div className="relative h-[23.5rem]">
                <Image 
                src="/v_3_images/blog3.png"
                fill
                alt="slumtech about page banner"
                 />
                </div>

                <div className='px-[2.4rem] pb-[2.5rem]'>
                    <div className='py-[1.8rem] border border-b-[#C3C3C3] border-t-0 border-x-0 flex justify-between items-center'>
                        <span className='text-[#3C3E3F]'>September 9, 2024</span>
                        <span className='text-[#3C3E3F]'>One comment</span>
                    </div>

                    <div className='mt-[1.5rem] flex flex-col gap-y-[1.5rem]'>
                        <p className='font-[700] text-[2rem] leading-[3rem] text-[#000]'>
                        Tips on leveraging technology for community development
                        </p>
                        <p className='text-[#6D6D6D]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Neque augue eu torquent bibendum iaculis dictumst lectus et.</p>
                        <span className='text-[#0C9D69] underline font-[600] text-[1.8rem] leading-[3rem]'>Read More</span>
                    </div>
                </div>
                </div>

            </div>

            

        </div>
       </section>
   ) 
}

export default Blog;