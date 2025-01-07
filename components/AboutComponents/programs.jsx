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

const Programs = ({img }) => {
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
        className={`font-[400] text-[1.6rem] leading-[2.4rem] pt-[12rem] max-small:pt-0 flex items-center justify-center w-full bg-gradient-to-r from-[#D8CAFF]/50 to-[#F1C9FF]/50`}
       >
        <div className="relative pb-[37rem] container text-center">
            <MainHeader text="Programs" />
            <div className='text-[1.8rem] font-[400] text-[#7E7E7E] max-w-[106rem] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div className='mt-[5rem] flex justify-between max-w-[136rem] mx-auto'>
                <div className='w-[47.6rem] min-h-[25rem] bg-[#fff]/50 rounded-[2rem] p-[3rem]'>
                    <h2 className='flex items-end gap-x-[8px] border border-b-[#933EFF26] border-t-0 border-x-0 pb-5'> 
                        <span className='text-[#933EFF5E] text-[3rem] leading-[3.9rem] font-[900] '>1.</span>
                        <span className='font-[700] text-[1.8rem] leading-[3.2rem]'>Tech Literacy and Education</span>
                    </h2>

                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program2.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Providing hands-on training in digital skills for youth and adults.
                        </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program1.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Increase employability and entrepreneurship through tech education.
                        </div>
                        </div>
                    </div>

                </div>

                <div className='w-[47.6rem] min-h-[25rem] bg-[#fff]/50 rounded-[2rem] p-[3rem]'>
                    <h2 className='flex items-end gap-x-[8px] border border-b-[#933EFF26] border-t-0 border-x-0 pb-5'> 
                        <span className='text-[#933EFF5E] text-[3rem] leading-[3.9rem] font-[900] '>3.</span>
                        <span className='font-[700] text-[1.8rem] leading-[3.2rem]'>HealthTech Solutions</span>
                    </h2>

                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program2.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Bridging healthcare gaps with mobile health services and telemedicine.
                        </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program1.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Improve health access and outcomes in underserved areas.
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-[5rem] flex justify-between relative programImage1'>
                <div className='absolute w-[89.4rem] h-[58.3rem] top-[-22rem] left-[33rem]'>
                <Image 
                src="/v_3_images/program1.png"
                fill
                alt="slumtech programs"
                />
                </div>
            <div className='w-[47.6rem] min-h-[25rem] bg-[#fff]/50 rounded-[2rem] p-[3rem]'>
                    <h2 className='flex items-end gap-x-[4px] border border-b-[#933EFF26] border-t-0 border-x-0 pb-5'> 
                        <span className='text-[#933EFF5E] text-[3rem] leading-[3.9rem] font-[900] '>2.</span>
                        <span className='font-[700] text-[1.8rem] leading-[3.2rem] text-left'>Entrepreneurship & Economic Development</span>
                    </h2>

                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program2.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Supporting small businesses and startups in urban slums.
                        </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program1.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Enhance economic opportunities through training, funding, and mentorship.
                        </div>
                        </div>
                    </div>

                </div>

                <div className='w-[47.6rem] min-h-[25rem] bg-[#fff]/50 rounded-[2rem] p-[3rem]'>
                    <h2 className='flex items-end gap-x-[8px] border border-b-[#933EFF26] border-t-0 border-x-0 pb-5'> 
                        <span className='text-[#933EFF5E] text-[3rem] leading-[3.9rem] font-[900] '>4.</span>
                        <span className='font-[700] text-[1.8rem] leading-[3.2rem]'>Tech Literacy and Education</span>
                    </h2>

                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program2.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Establishing tech hubs with internet access and community resources.
                        </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-y-[2rem] mt-[2.7rem]'>
                        <div className='flex gap-x-[1.2rem] items-center'>
                            <div className='relative w-[2.9rem] h-[2.9rem]'>
                             <Image 
                            src="/v_3_icons/program1.png"
                            fill
                            alt="slumtech programs"
                        />
                        </div>
                        <div className='text-[1.6rem] leading-[2.4rem] text-[#4A4A4A] text-left'>
                        Create inclusive spaces where all can access information and technology.
                        </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='absolute bottom-[-26rem] w-full left-0 mx-auto bg-[#3A1667] rounded-[20px] p-[6.5rem] flex justify-between'>
            <div className='relative w-[70rem] h-[40rem]'>
                <Image 
                src="/v_3_images/program2.png"
                fill
                alt="slumtech programs"
            />
            </div> 

            <div className='w-[56rem]'>
                <h2 className='font-[700] text-[4.8rem] leading-[6.2rem] tracking-wide text-[#fff]'>Global Impact</h2>
                <div className='mt-[5rem] flex flex-row justify-between'>
                    <div className='w-[24.7rem] text-center flex flex-col gap-y-[1.5rem]'>
                        <div className='w-[6.2rem] h-[6.2rem] mx-auto flex items-center rounded-full bg-[#EEE8FF]'>
                        <div className='relative w-[3.3rem] h-[3.3rem] mx-auto'>
                        <Image 
                        src="/v_3_icons/program3.png"
                        fill
                        alt="slumtech programs"
                        />
                        </div>
                        </div>

                        <h3 className='font-[600] text-[1.8rem] text-[#fff] leading-[2.3rem]'>United States</h3>
                        <p className='text-[#fff] text-opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className='flex justify-center items-center gap-x-[1.2rem] mt-[1rem]'>
                            <span className='font-[900] text-[3rem] text-[#FFC700]'>20+</span>
                            <span className='text-[#fff] text-opacity-70'>Project completed</span>
                        </div>
                    </div>

                    <div className='w-[24.7rem] text-center flex flex-col gap-y-[1.5rem]'>
                        <div className='w-[6.2rem] h-[6.2rem] mx-auto flex items-center rounded-full bg-[#EEE8FF]'>
                        <div className='relative w-[3.3rem] h-[3.3rem] mx-auto'>
                        <Image 
                        src="/v_3_icons/integrity.png"
                        fill
                        alt="slumtech programs"
                        />
                        </div>
                        </div>

                        <h3 className='font-[600] text-[1.8rem] text-[#fff] leading-[2.3rem]'>Africa</h3>
                        <p className='text-[#fff] text-opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className='flex justify-center items-center gap-x-[1.2rem] mt-[1rem]'>
                            <span className='font-[900] text-[3rem] text-[#FFC700]'>15+</span>
                            <span className='text-[#fff] text-opacity-70'>Project completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       </section>
   ) 
}

export default Programs;