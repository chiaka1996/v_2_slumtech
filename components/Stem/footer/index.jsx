import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";


const Footer = () => {
    return(
        <footer className='bg-[#175046] w-full text-[1.8rem] leading-[3rem] text-[#fff]'>
          <div className='container'>
            <div className='gridStyle pt-[9.2rem]'>
            <div className='max-w-[40.5rem]'>
            <div className="relative h-[4.5rem] w-[167px]">
              <Image 
              src="/v_3_icons/footerLogo.png"
              fill 
              alt="slumtech logo"
                />
            </div>

            <p className='mt-[2rem]'> 
            At SlumTech Foundation, we believe in transforming communities through
             innovative technology solutions. Our mission is to empower individuals, 
             uplift families, and inspire sustainable development.
            </p>
            </div> 

            {/* quicklinks */}
            <div className='max-w-[150px]'>
            <h3 className='font-[700] text-[2.2rem] leading-[3rem]'>Quick Links</h3>

              <div className='flex flex-col mt-[3rem] text-[1.8rem] leading-[4.2rem]'>
                <span>Home</span>
                <span>About Us</span>
                <span>Contact Us</span>
              </div>
            </div> 

            {/* email */}
            <div className='max-w-[47rem] '>
            <h3 className='font-[700] text-[2.2rem] leading-[3rem]'>Email</h3>

              <div className='flex flex-col mt-[3rem]'>
                <div className='w-full w-[47rem] relative'>
                  <input 
                  type='email' 
                  placeholder='Enter email address' 
                  className='text-[1.8rem] font-[500] outline-none w-full h-[6.4rem] rounded-[34px] border border-[#BCBCBC] placeholder-[#fff] bg-transparent pl-[3rem] pr-[16.4rem]'/>
                  <button className='absolute right-[1.1rem] top-[9px] px-[1rem] flex flex-row justify-between items-center w-[164px] h-[45px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] leading-[3rem]'>
                  <span>Contact Now</span>
                   <div className="relative h-[11px] w-[11px]">
                    <Image 
                    src="/v_3_icons/arrow.png"
                    fill
                    alt="slumtech value"
                    />
                    </div>
                </button>
                </div> 
                {/* icons               */}
                <div className='flex gap-x-[3rem] mt-[2rem]'> 
                  <div className='bg-gradient-to-r from-[#FFDD55] via-[#FF543E] to-[#C837AB] w-[39px] h-[39px] rounded-[5px] flex items-center'>
                  <Image 
                    src="/v_3_icons/instagram2.png"
                    width={29}
                    height={29}
                    alt="slumtech social media icon"
                    className='mx-auto'
                    />
                  </div>

                  <div className='bg-[#1976D2] w-[39px] h-[39px] rounded-[5px] flex items-center'>
                  <Image 
                    src="/v_3_icons/facebook2.png"
                    width={18}
                    height={32}
                    alt="slumtech social media icon"
                    className='mx-auto'
                    />
                  </div>

                  <div className='bg-[#0077B5] w-[39px] h-[39px] rounded-[5px] flex items-center'>
                  <Image 
                    src="/v_3_icons/linkedIn2.png"
                    width={24}
                    height={24}
                    alt="slumtech social media icon"
                    className='mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div> 
            </div>

            <div className='mt-[6rem] py-[3rem] border border-t-[#FFFFFF80] border-b-0 border-x-0 flex justify-between'>
              <span>Copyright all rights reserved</span>
              <span>Terms & Condition . Privacy Policy</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;