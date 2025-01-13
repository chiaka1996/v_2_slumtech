"use client"
import {useEffect} from 'react'
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation, rightToLeftAnimation, leftToRightAnimation, scaleUpAnimation} from "../../utilis/animations";
import Image from 'next/image';
import Link from 'next/link';
import { MainHeader } from '..';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const GetInvolved = () => {
    useEffect(() => {
      topToBottomAnimation(".getInvolvedHeader")
      bottomToTopAnimation(".getInvolvedSubHeader")
     leftToRightAnimation(".involvedImage")
     gsap.fromTo(".involved1",
      { opacity: 0, y: 100 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".involved1", 
          start: "top 90%",       
        },
        onComplete: () => {
          gsap.fromTo(".involved2",
            { opacity: 0, y: 100 }, 
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: ".involved2", 
                start: "top 90%",       
              },
              onComplete: () => {
                gsap.fromTo(".involved3",
                  { opacity: 0, y: 100 }, 
                  {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                      trigger: ".involved3", 
                      start: "top 90%",       
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
    }, [])
    

    return(
       <section 
        className={`font-[400] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem] pt-[38rem] max-small:pt-[5rem] flex items-center justify-center w-full bg-[#fff]`}
       >
        <div className="relative pb-[12rem] max-small:pb-0 container text-left">
            <MainHeader text="Get Involved" classnames="getInvolvedHeader" />
            <div className='getInvolvedSubHeader text-[1.8rem] font-[400] text-[#6D6D6D] leading-[3rem] max-w-[70rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
             et dolore magna aliqua. 
            </div>

            <div className='max-small:mt-[3rem] gridStyle gap-x-[5rem] gap-y-[3rem] items-center'>
              <div className='max-w-[74.7rem] flex flex-col gap-y-[2rem]'>
                <div className='involved1 opacity-0 w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='min-w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative min-w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved1.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='max-w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Volunteer Opportunities</h3>
                    <p className='text-[#6D6D6D]'>Join our mission by contributing your time and skills in various programs, including tech training, mentorship, and community outreach.</p>
                  </div>

                </div>

                <div className='involved2 opacity-0 w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='min-w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative min-w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved2.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Donate</h3>
                    <p className='text-[#6D6D6D]'>
                    Support our impact! Your contributions help expand our services and reach more communities. Donate Now
                    </p>
                  </div>

                </div>

                <div className='involved3 opacity-0 w-full p-[2.4rem] rounded-[20px] flex gap-x-[2rem] bg-[#F5E1F5]'>
                  <div className='min-w-[63px] h-[63px] rounded-full flex items-center bg-[#EEE8FF]'>
                    <div className='relative min-w-[3.2rem] h-[3.2rem] mx-auto'>
                      <Image 
                    src="/v_3_icons/involved3.png"
                    fill
                    alt="slumtech programs"
                    />
                    </div>
                  </div>

                  <div className='w-[59.5rem]'>
                    <h3 className='font-[700] text-[1.8rem] leading-[2.3rem]'>Partnerships</h3>
                    <p className='text-[#6D6D6D]'>Join our mission by contributing your time and skills in various programs, including tech training, mentorship, and community outreach.</p>
                  </div>

                </div>
              </div>

               <div className='involvedImage opacity-0 relative max-w-[72.3rem] min-h-[49.5rem] max-small:min-h-[35rem]'>
                    <Image 
                  src="/v_3_images/involved4.png"
                  fill
                  alt="Get involved with slumtech"
              />
              </div>
            </div>
        </div>
       </section>
   ) 
}

export default GetInvolved;