import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Resources = () => {
 
    return(
      <section
      className="w-full font-[400] leading-[3rem] text-[#000] relative"
     >
         <div className='shadow-2xl shadow-[#FFEA7B66] blur-2xl w-[616px] h-[616px] rounded-full bg-[#6FFFCB80] z-10 absolute top-[-5rem] right-[-10rem] opacity-60'></div>
       <div className='container py-[12rem]'>
          <div className=''>
            <h1 className='font-[700] text-[54px] leading-[64px] text-[#004658]'>Resources</h1>
            <h3 className='text-[1.8rem] mb-[1.5rem] max-w-[85.8rem]'>
            Join our workshops and webinars designed to help you develop your project idea. 
            Access resources, mentorship, and guidance from experienced professionals in the STEM field.
            </h3>

           <div className='gridStyle gap-x-[3rem] mt-[5rem]'>
            <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF] relative pb-[9rem]'>
            <div className="relative h-[20rem] w-full rounded-[25px]">
            <Image 
            src="/v_3_images/resource1.png"
            fill
            alt="resources available in slumtech"
            />
            </div> 
            <div className='py-[3rem] px-[3rem] flex flex-col gap-y-[1.5rem]'>
            <h3 className='font-[700] font-basic text-[2rem] text-[#004658]'>Guidelines and Rules</h3>
            <ul className='text-[1.6rem] list-disc ml-[2rem]'>
                <li>Comprehensive documents detailing the competition format, eligibility, submission requirements, and judging criteria</li>
                <li>Important dates and deadlines to keep your project on track</li>
            </ul>
            <div className='absolute bottom-0 left-0 w-full px-[3rem] h-[9rem]'>
                <div className='flex justify-between border border-x-0 border-b-0 border-[#C3C3C3] py-[2rem]'>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource1.png"
                width={17}
                height={18}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>Admin</span>
                </div>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource2.png"
                width={19}
                height={16}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>18- 12 2024</span>
                </div>
                </div>
            </div>
            </div>
            </div>

            <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF] relative pb-[9rem]'>
            <div className="relative h-[20rem] w-full rounded-[25px]">
            <Image 
            src="/v_3_images/resource2.png"
            fill
            alt="resources available in slumtech"
            />
            </div> 
            <div className='py-[3rem] px-[3rem] flex flex-col gap-y-[1.5rem]'>
            <h3 className='font-[700] font-basic text-[2rem] text-[#004658]'>Educational Materials</h3>
            <ul className='text-[1.6rem] list-disc ml-[2rem]'>
                <li>Curated articles, videos, and tutorials on STEM topics relevant to the competition, such as coding, engineering principles, and data analysis.</li>
                <li>Access to online courses and platforms that offer free or discounted classes to enhance your skills.</li>
            </ul>
            <div className='absolute bottom-0 left-0 w-full px-[3rem] h-[9rem]'>
                <div className='flex justify-between border border-x-0 border-b-0 border-[#C3C3C3] py-[2rem]'>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource1.png"
                width={17}
                height={18}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>Admin</span>
                </div>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource2.png"
                width={19}
                height={16}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>18- 12 2024</span>
                </div>
                </div>
            </div>
            </div>
            </div>

            <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF] relative pb-[9rem]'>
            <div className="relative h-[20rem] w-full rounded-[25px]">
            <Image 
            src="/v_3_images/resource3.png"
            fill
            alt="resources available in slumtech"
            />
            </div> 
            <div className='py-[3rem] px-[3rem] flex flex-col gap-y-[1.5rem]'>
            <h3 className='font-[700] font-basic text-[2rem] text-[#004658]'>Workshops and Webinars</h3>
            <ul className='text-[1.6rem] list-disc ml-[2rem]'>
                <li>Scheduled live workshops and webinars featuring experts in various STEM fields.</li>
                <li>Opportunities for Q&A sessions, project guidance, and team-building activities.</li>
            </ul>
            <div className='absolute bottom-0 left-0 w-full px-[3rem] h-[9rem]'>
                <div className='flex justify-between border border-x-0 border-b-0 border-[#C3C3C3] py-[2rem]'>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource1.png"
                width={17}
                height={18}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>Admin</span>
                </div>
                <div className='flex gap-x-[4px]'>
                <Image 
                src="/v_3_icons/resource2.png"
                width={19}
                height={16}
                alt="resources available in slumtech"
                />
                <span className='text-[#6A6A6A]'>18- 12 2024</span>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>
       </div>
      </section>
    )
}

export default Resources;