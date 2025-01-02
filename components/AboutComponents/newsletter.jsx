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

const Newsletter = () => {
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
        className={`flex items-center justify-center font-[400] text-[1.6rem] leading-[2.4rem] max-small:pt-0 w-full h-[327px] mb-[3rem] bg-[url("/v_3_images/newsletter.png")]`}
       >
        <div className='text-[#fff]'>
            <p className='font-[700] text-[3.6rem] leading-[4.6rem]'>
                <span className='text-[#FFC700]'>Stay informed!</span> <span> Join our newsletter for the latest updates. Subscribe Here
                </span>
            </p>
            <div className='mt-[3.3rem] flex gap-x-[2rem] justify-center'>
                <input type="email" placeholder='Enter email address' 
                className='placeholder-[#fff] outline-none w-[47.5rem] h-[5.6rem] bg-[#FFFFFF45] rounded-[10px] text-[1.8rem] px-[2rem]' />
                <button className='w-[181px] h-[56px] rounded-[10px] font-[700] text-[1.8rem] bg-[#0C9D69]'>Subscribe</button>
            </div>
        </div>
        
       </section>
   ) 
}

export default Newsletter;