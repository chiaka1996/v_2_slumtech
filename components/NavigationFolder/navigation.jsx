import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { useRouter } from "next/router";
import {Button} from "../index"

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the user has scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

    return(
      <nav className={isScrolled ? "fixed top-0 left-0 w-full z-[500] h-[9rem] flex items-center bg-[#A9A9A9]" : "fixed top-0 left-0 w-full z-500 h-[9rem] flex items-center  bg-transparent"}>
        <div className="container flex flex-row justify-between items-center max-small:items-start">
         <Image 
            src="/v_3_logo/logo1.png"
            width="154"
            height="68"
            alt="logo"
        />
           <div className="w-[53.6rem] leading-[1.8rem] flex flex-row justify-between items-center max-[900px]:hidden">
           <span className={router.asPath == "/" ? style.activeLink : style.navLink}> 
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

            {/* <span className={router.asPath == "/contact" ? style.activeLink : style.navLink}> 
           <Link href="/contact" className='no-underline text-primary text-normal'>
            Contact Us
            </Link>
            </span> */}

            <span className={router.asPath == "/ideas" ? style.activeLink : style.navLink}> 
           <Link href="/" className='no-underline text-primary text-normal'>
            Ideas
            </Link>
            </span>
            </div>

            <div className='w-[15rem] h-[5rem] max-[900px]:hidden'> 
            <Link href="/contact" className='no-underline'>
              <Button text="Contact Us" />
              </Link>
            </div>

            

           {
                    !bar ? <div className={style.hamburger}>
                  <div className='flex flex-col gap-y-[0.6rem] mt-[2rem] relative' onClick={openBar}>
                  <span className='block w-[3.2rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  <span className='block w-[3.2rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  <span className='block w-[3.2rem] h-[0.2rem] rounded-[10px] bg-[#fff]'></span>
                  </div>
                    </div> : 
                    <div className={style.hamburger}>
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