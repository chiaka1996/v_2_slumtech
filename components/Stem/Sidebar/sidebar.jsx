"use client"
import { useRouter } from 'next/router'
import Link from 'next/link';
import style from './sidebar.module.css';
import { BarState } from '../../../context/context';
// import {Button} from "../index"

const SideBar = ({page}) => {
  const router = useRouter();
    const { bar, closeBar} = BarState();

    const NavItems = [
      {
        label: "Home",
        url: "/stem"
      },
      {
        label: "About us",
        url: "/stem/about"
      },
      {
        label: "Foundation",
        url: "/"
      }
    ]
  
    
    return(
       <nav className={bar ? style.sidebarContainer : style.sidebarContainerClose}>
          {
              NavItems.map((data, i) =>  <div key={i} className='w-full text-center mb-[10%]' >
                <Link href={data.url} className='no-underline text-nav_links text-normal font-label'>
                <span onClick={()=>closeBar()} className={router.asPath == data.url ? style.activeLink : style.navLink}>{data.label}</span>
                </Link>
                </div>
              )
            }

         {/* <Link href='/contact' onClick={()=>closeBar()} className='no-underline'>
         <div className='w-[15rem] h-[5rem] mx-auto'> 
            <Button text="Contact" />
          </div>
        </Link> */}
       </nav>
    )
}

export default SideBar;