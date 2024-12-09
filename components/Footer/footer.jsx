import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './footer.module.css';

const Footer = () => {

    return(
        <footer className='bg-[#1B1B1B] w-[100%] text-[#fff]'>
            <div className='container py-[5rem] flex flex-row max-small:flex-col max-small:gap-y-[2rem] flex-wrap justify-between'>
            <div className='flex flex-col gap-[2rem] max-w-[29.6rem]'>
           <div className='relative w-[15.4rem] h-[68px]'>
             <Image 
            src="/v_3_logo/footerLogo.png"
            fill
            alt="logo"
        />
        </div>
        <div className="text-[1.5rem] leading-[2.3rem]">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </div>
      </div>
      {/* quicklinks */}
      <div className='w-[37.7rem] max-small:w-full'>
        <h1 className='font-[600] text-[1.8rem] leading-[2.8rem]'>Quick Links</h1>

        <div className='flex flex-row flex-wrap justify-between mt-[2.5rem]'>
          <div className='flex flex-col gap-y-[2rem] leading-[2.8rem]'>
            <span>
            <Link href="/" className='no-underline'>
              Home
              </Link>
              </span>
            <span>
            <Link href="/story" className='no-underline'>
              Our Story
            </Link>  
            </span>
            <span>
            <Link href="/faq" className='no-underline'>
              FAQ
              </Link>
              </span>
          </div>

          <div className='flex flex-col gap-y-[2rem] leading-[2.8rem]'>
            <span>
            <Link href="/faq" className='no-underline'>
              Our Work
              </Link>
              </span>
            <span>
            <Link href="/contact" className='no-underline'>
              Contact Us
              </Link>
              </span>
            <span>Ideas</span>
          </div>
        </div>
      </div>

      {/* get in touch */}
       <div className='max-w-[22.1rem]'>
        <h1 className='font-[600] text-[1.8rem] leading-[2.8rem]'>Get in Touch With Us</h1>
          <div className='flex flex-col gap-y-[2rem] leading-[2.8rem] mt-[2.5rem]'>
            <div className='flex flex-row gap-x-[1.5rem]'>
            <div className='relative w-[2.3rem] h-[2.3rem]'>
                <Image 
                src="/v_3_icons/phone.png"
                fill
                alt="slumtech foundation phone number"
            />
            </div>
            <span>(808) 551-1413</span>
            </div>
            <div className='flex flex-row gap-x-[1.5rem]'>
            <div className='relative w-[2.5rem] h-[1.7rem]'>
                <Image 
                src="/v_3_icons/mail.png"
                fill
                alt="slumtech foundation email address"
            />
            </div>
            <span>SlumTech@gmail.com</span>
            </div>
           <div className='flex flex-row flex-wrap gap-x-[1.5rem]'>
           <a href="https://www.facebook.com/share/1EBLeawcny/?mibextid=LQQJ4d" target="_blank">
          <div className='hover:scale-110  flex items-center rounded-full w-[3.6rem] h-[3.6rem] border border-[#fdb21a]'>
           <div className='relative w-[0.8rem] h-[1.7rem] mx-auto'>
                <Image 
                src="/v_3_icons/facebook-footer.png"
                fill
                alt="slumtech foundation facebook link"
            />
            </div>
            </div>
            </a>

            <a href="https://www.linkedin.com/company/slumtech-foundation/" target="_blank">
            <div className='hover:scale-110 flex items-center rounded-full w-[3.6rem] h-[3.6rem] border border-[#fdb21a]'>
           <div className='relative w-[2.2rem] h-[1.7rem] mx-auto'>
                <Image 
                src="/v_3_icons/linkedin-footer.png"
                fill
                alt="slumtech foundation linkedin link"
            />
            </div>
            </div>
            </a>

            <a href="https://www.instagram.com/slumtechfoundation/profilecard/?igsh=MThrcGRqZXQ0bm15bA==" target="_blank">
            <div className='hover:scale-110 flex items-center rounded-full w-[3.6rem] h-[3.6rem] border border-[#fdb21a]'>
           <div className='hover:scale-110 relative w-[1.7rem] h-[1.7rem] mx-auto'>
                <Image 
                src="/v_3_icons/instagram-footer.png"
                fill
                alt="slumtech foundation instagram link"
            />
            </div>
            </div>
            </a>
           </div>
          </div>
        </div>
      </div>

      <div className="opacity-40 bg-[#fff] w-full h-[0.1rem]"></div>
      <div className='text-center leading-[2.8rem] py-[2rem]'>Copyright © 2024 SlumTech Foundation All Rights Reserved</div>
        </footer>
    )
}

export default Footer;