import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"

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
      <nav className={isScrolled ? "fixed top-0 left-0 w-full z-[500] h-[9rem] flex items-center bg-[#00000080]" : "fixed top-0 left-0 w-full z-[500] h-[9rem] flex items-center bg-[#00000080]"}>
        <div className="container flex flex-row justify-between items-center max-small:items-start">
         <Image 
            src="/v_3_logo/logo1.png"
            width="154"
            height="68"
            alt="logo"
            className='mt-[1rem]'
        />
           <div className="w-[34.2rem] text-[1.6rem] font-[400] leading-[3rem] flex flex-row justify-between items-center max-[900px]:hidden">
           <span className={router.asPath == "/" ? style.activeLink : style.navLink}> 
           <Link href="/" className='no-underline'>
            HOME
            </Link>
            </span>

             <span className={router.asPath == "/story" ? style.activeLink : style.navLink}> 
           <Link href="/story" className='no-underline'>
            ABOUT US
            </Link>
            </span>

            <span className={router.asPath == "/work" ? style.activeLink : style.navLink}> 
           <Link href="/work" className='no-underline'>
            STEM
            </Link>
            </span>

            {/* <Link href="/contact" className='no-underline max-[900px]:hidden'>
              <Button text="Get Involved" />
              </Link> */}
            </div>

           
            

           {/* {
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
                } */}
          </div>
      </nav>
    )
}

export default Navigation;