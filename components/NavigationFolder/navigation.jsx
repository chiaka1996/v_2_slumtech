import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { useRouter } from "next/router";
import {Button} from "../index"

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const router = useRouter();

    return(
      <nav className="fixed top-0 left-0 w-full z-500 h-[9rem] flex items-center  bg-transparent">
        <div className="container flex flex-row justify-between items-center max-small:items-start">
         <Image 
            src="/v_3_logo/logo1.png"
            width="154"
            height="68"
            alt="logo"
        />
           <div className="w-[53.6rem] leading-[1.8rem] flex flex-row justify-between items-center max-lg:hidden">
           <span className={router.asPath == "/" ? style.activeLink : style.navLink}> 
           {/* <div className={router.asPath == "/" ? style.activeLink : style.navLink}>  */}
           <Link href="/" className='no-underline'>
            HOME
            </Link>
            </span>

             <span className={router.asPath == "/story" ? style.activeLink : style.navLink}> 
           <Link href="/story" className='no-underline text-primary text-normal'>
            Our Story
            </Link>
            </span>

             <span className={router.asPath == "/faq" ? style.activeLink : style.navLink}> 
           <Link href="/faq" className='no-underline text-primary text-normal'>
            FAQ
            </Link>
            </span>

            <span className={router.asPath == "/work" ? style.activeLink : style.navLink}> 
           <Link href="/work" className='no-underline text-primary text-normal'>
            Our Work
            </Link>
            </span>

            <span className={router.asPath == "/contact" ? style.activeLink : style.navLink}> 
           <Link href="/contact" className='no-underline text-primary text-normal'>
            Contact Us
            </Link>
            </span>

            <span className={router.asPath == "/ideas" ? style.activeLink : style.navLink}> 
           <Link href="/ideas" className='no-underline text-primary text-normal'>
            Ideas
            </Link>
            </span>
            </div>

            <div className='w-[15rem] h-[5rem] max-lg:hidden'> 
              <Button text="Contact" />
            </div>

            

           {
                    !bar ? <div className={style.hamburger}>
                  {/* <Image 
                  width={24} 
                  height={24}
                  src="https://img.icons8.com/ios/24/menu--v1.png" 
                  alt="menu--v1"
                  /> */}
                  <div className='flex flex-col gap-y-[1rem] mt-[0.5rem] relative' onClick={openBar}>
                  <span className='block w-[3.5rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  <span className='block w-[3.5rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  <span className='block w-[3.5rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  </div>
                    </div> : 
                    <div className={style.hamburger}>
                    {/* <Image 
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios/24/delete-sign.png" 
                    alt="delete-sign"
                    />    */}
                  <div className='mt-[2rem] relative' onClick={closeBar}>
                  <span className='block w-[3rem] h-[0.2rem] rounded-[10px] bg-[#fff] transform rotate-45'></span>
                  <span className='block w-[3rem] h-[0.2rem] rounded-[10px] bg-[#fff] transform -rotate-45'></span>
                  </div>
                </div>
                }
          </div>
      </nav>
    )
}

export default Navigation;