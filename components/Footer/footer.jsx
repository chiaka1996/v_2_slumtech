import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import style from './footer.module.css';

const Footer = () => {
    return(
        <footer className='bg-[#3A1667] w-[100%] text-[#fff] text-center pt-[38.1rem] max-small:pt-[10rem]'>
          <div className='container'>
            <div className="relative h-[7.5rem] w-[177px] mx-auto">
              <Image 
              src="/v_3_logo/logo1.png"
              fill
              alt="slumtech logo"
                />
            </div>
            <div className='mt-[5rem] font-[500] text-[1.8rem] leading-[3rem] flex flex-row max-small:flex-col max-small:gap-y-[3rem] gap-x-[5rem] justify-center'>
              <span>Home</span>
              <span>About Us</span>
              <span>Contact Us</span>
            </div>

            <div className='py-[2.4rem] mt-[6rem] border border-t-[#FFFFFF40] border-x-0 border-b-0 flex flex-row max-small:flex-col max-small:gap-y-[3rem] justify-between'>
              <span>Copyright © [2024] SlumTech Foundation</span>
              <div className='flex flex-row gap-x-[2rem] max-small:justify-center'>
                {/* facebook icon */}
                <div className='w-[38px] h-[38px] rounded-full bg-[#0C9D69] flex items-center'>
                <div className="relative h-[1.7rem] w-[8px] mx-auto">
                  <Image 
                  src="/v_3_icons/facebook.png"
                  fill
                  alt="slumtech facebook social"
                    />
                </div>
                </div>

                {/* twitter icon */}
                <div className='w-[38px] h-[38px] rounded-full bg-[#0C9D69] flex items-center'>
                <div className="relative h-[1.4rem] w-[18px] mx-auto">
                  <Image 
                  src="/v_3_icons/twitter.png"
                  fill
                  alt="slumtech facebook social"
                    />
                </div>
                </div>

                {/* linked icon */}
                <div className='w-[38px] h-[38px] rounded-full bg-[#0C9D69] flex items-center'>
                <div className="relative h-[1.5rem] w-[15px] mx-auto">
                  <Image 
                  src="/v_3_icons/linkedin.png"
                  fill
                  alt="slumtech facebook social"
                    />
                </div>
                </div>

              </div>
              <span>Privacy Policy | Terms of Service</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;