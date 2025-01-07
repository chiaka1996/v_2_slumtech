import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { topToBottomAnimation, bottomToTopAnimation } from '../utilis/animations';
import {Navigation, Sidebar, Banner} from "../components"

export default function Home() {
  return (
   <main className="text-[1.6rem] max-small:text-[1.3rem] font-[400] text-[#000] leading-[2.6rem] max-small:leading-[2rem] w-full">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/home-banner.png"
    />
    </main>
  );
}
