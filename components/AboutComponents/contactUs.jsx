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

const ContactUs = () => {
    return(
       <section 
        className={`relative bg-[#7545FC]/5 text-center font-[400] text-[1.6rem] leading-[2.4rem] max-small:pt-[5rem] w-full min-h-[540px] pt-[12rem]`}
       >
       <MainHeader text="Connect us" />
        <div className='w-full absolute max-small:relative bottom-[-28rem] max-small:bottom-0 left-0'>
       <form className='mx-auto mt-[5rem] max-w-[115rem] min-h-[600px] max-small:min-h-full rounded-[30px] bg-[#fff] py-[5rem] px-[8.6rem] max-small:px-[1rem] text-center'>
       <h3 className='font-[700] text-[30px] max-small:text-[2rem] leading-[39px] text-[#212121]'>Connect with Us</h3>
       <div className='text-[#6D6D6D] text-[1.8rem] max-small:text-[1.6rem] leading-[3rem]'>Have questions or wish to collaborate? Reach out to us</div>

       <div className='mt-[5rem] flex flex-col gap-y-[3rem] text-left'>
        <div className='gridStyle gap-x-[3rem] gap-[3rem]'>
          <div>
            <label className='text-[1.8rem] max-small:text-[1.4rem]'>Email</label><br/>
            <input 
            type='email' 
            placeholder='mailto:info@slumtechfoundation.org'
            className='px-[2rem] max-small:text-[1.4rem] w-full outline-none border border-[#00000026] h-[5.2rem] text-[#6D6D6D] placeholder-[#6D6D6D] rounded-[10px]'
            />
          </div>
          <div>
            <label className='text-[1.8rem] max-small:text-[1.4rem]'>Fullname</label><br/>
            <input 
            type='text' 
            placeholder='John doe'
            className='px-[2rem] w-full outline-none border border-[#00000026] h-[5.2rem]  text-[#6D6D6D] placeholder-[#6D6D6D] rounded-[10px]'
            />
          </div>
        </div>

        <div>
        <label className='text-[1.8rem] max-small:text-[1.4rem]'>Message</label><br/>
        <textarea className='p-[2rem] max-small:text-[1.4rem] w-full outline-none border border-[#00000026] h-[18.2rem] text-[#6D6D6D] placeholder-[#6D6D6D] rounded-[10px]'></textarea>
        </div>

        <div className='mx-auto w-[203px]'>
          <button className='w-full h-[56px] rounded-[10px] bg-[#0C9D69] text-[#fff] outline-none'>Contact us</button>
        </div>

       </div>
       </form>
       </div>
       </section>
   ) 
}

export default ContactUs;