import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";


const Footer = () => {
    return(
        <footer className='bg-[#175046] w-full text-[1.8rem] max-small:text-[1.4rem] leading-[3rem] max-small:leading-[2rem] text-[#fff]'>
          <div className='container'>
            <div className='gridStyle gap-y-[3rem] pt-[9.2rem] max-small:pt-[5rem]'>
            <div className='max-w-[40.5rem]'>
            <div className="relative h-[7.1rem] w-[167px]">
              <Image 
              src="/v_3_logo/logo1.png"
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
            <h3 className='font-[700] text-[2.2rem] max-small:text-[1.6rem] leading-[3rem]'>Quick Links</h3>

              <div className='flex flex-col mt-[3rem] max-small:mt-[1rem] text-[1.8rem] max-small:text-[1.4rem] leading-[4.2rem]'>
              <Link href="/" className='no-underline'>
                <span>Home</span>
                </Link>
                <Link href="/about" className='no-underline'>
                <span>About Us</span>
                </Link>
                <Link href="/stem" className='no-underline'>
                <span>Stem</span>
                </Link>
              </div>
            </div> 

            {/* email */}
            <div className='max-w-[47rem] '>
            <h3 className='font-[700] text-[2.2rem] max-small:text-[1.6rem] leading-[3rem] max-small:leading-[2.5rem]'>Email</h3>

              <div className='flex flex-col mt-[3rem] max-small:mt-[1rem]'>
                <div className='w-full relative'>
                  <input 
                  type='email' 
                  placeholder='Enter email address' 
                  className='text-[1.8rem] max-small:text-[1.4rem] font-[500] outline-none w-full h-[6.4rem] rounded-[34px] border border-[#BCBCBC] placeholder-[#fff] bg-transparent pl-[3rem] pr-[16.4rem]'/>
                  <button className='absolute right-[1.1rem] top-[9px] px-[1rem] flex flex-row justify-between items-center w-[164px] max-small:w-[134px] h-[45px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] max-small:text-[1.4rem] leading-[3rem]'>
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
                <div className='flex gap-x-[3rem] max-small:gap-x-[1rem] mt-[2rem]'> 
                  <div className='bg-gradient-to-r from-[#FFDD55] via-[#FF543E] to-[#C837AB] w-[39px] max-small:w-[29px] h-[39px] max-small:h-[29px] rounded-[5px] flex items-center'>
                  <div className='relative w-[29px] max-small:w-[19px] h-[29px] max-small:h-[19px] mx-auto'>
                  <Image 
                    src="/v_3_icons/instagram2.png"
                   fill
                    alt="slumtech social media icon"
                    />
                    </div>
                  </div>

                  <div className='bg-[#1976D2] w-[39px] max-small:w-[29px] h-[39px] max-small:h-[29px] rounded-[5px] flex items-center'>
                  <div className='relative w-[18px] max-small:w-[10px] h-[32px] max-small:h-[12px] mx-auto'>
                  <Image 
                    src="/v_3_icons/facebook2.png"
                    fill
                    alt="slumtech social media icon"
                    className='mx-auto'
                    />
                    </div>
                  </div>

                  <div className='bg-[#0077B5] w-[39px] max-small:w-[29px] h-[39px] max-small:h-[29px] rounded-[5px] flex items-center'>
                  <div className='relative w-[24px] max-small:w-[12px] h-[24px] max-small:h-[12px] mx-auto'>
                  <Image 
                    src="/v_3_icons/linkedIn2.png"
                    fill
                    alt="slumtech social media icon"
                    className='mx-auto'
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            </div>

            <div className='mt-[6rem] max-small:mt-[3rem] py-[3rem] max-small:py-[1.5rem] border border-t-[#FFFFFF80] border-b-0 border-x-0 flex max-small:flex-col max-small:gap-y-[1rem] justify-between'>
              <span>Copyright all rights reserved</span>
              <span>Terms & Condition . Privacy Policy</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;