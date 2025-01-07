import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhoCanEnter = () => {
 
    return(
      <section
      className="w-full font-[400] leading-[3rem] text-[#000] bg-gradient-to-b from-[#FEEECD00] to-[#FEEECDD9]"
     >
       <div className='container py-[12rem]'>
        <div className='gridStyle gap-x-[5rem] items-center'>
          <div className='max-w-[73.5rem]'>
            <h1 className='font-[700] text-[54px] leading-[64px] text-[#004658]'>Who Can Enter?</h1>
            <h3 className='text-[1.8rem] mb-[1.5rem]'>The SlumTech STEM Competition is an annual
               event dedicated to inspiring and empowering young minds from underserved communities across the United States.
            </h3>
            <div className='flex flex-col gap-y-[2rem] font-basic font-[700] text-[24px] leading-[42px] text-[#004658]'>
              <div className='flex gap-x-[1.2rem] bg-[#fff] rounded-[20px] py-[2rem] px-[5rem] items-center'>
               <Image 
              src="/v_3_icons/enter1.png"
              width={51}
              height={59}
              alt="who can enter slumtech competition"
              />
              <span>Students aged 13-18 from any background</span>
              </div>

              <div className='flex gap-x-[1.2rem] bg-[#fff] rounded-[20px] py-[2rem] px-[5rem] items-center'>
               <Image 
              src="/v_3_icons/enter2.png"
              width={54}
              height={62}
              alt="who can enter slumtech competition"
              />
              <span>Teams of 2-5 members</span>
              </div>

              <div className='flex gap-x-[1.2rem] bg-[#fff] rounded-[20px] py-[2rem] px-[5rem] items-center'>
               <Image 
              src="/v_3_icons/enter1.png"
              width={62}
              height={62}
              alt="who can enter slumtech competition"
              />
              <span>Projects must focus on real-world problems in your community</span>
              </div>     
            </div>
          </div>

          <div className='relative max-w-[70rem] min-h-[70rem] rounded-[2rem]'>
          <Image 
            src="/v_3_images/enter1.png"
            fill
            alt="kids competing in a competition"
            className='rounded-[2rem]'
            />
          </div>

        </div>
       </div>
      </section>
    )
}

export default WhoCanEnter;