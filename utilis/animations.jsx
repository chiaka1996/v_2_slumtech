import { useEffect } from 'react';
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const topToBottomAnimation = (classname) => {
    gsap.fromTo(classname,
      { opacity: 0, y: -50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: classname, 
          start: "top 90%",       
        }
      }
    );
    
}

export const bottomToTopAnimation = (classname) => {
  gsap.fromTo(classname,
    { opacity: 0, y: 100 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: classname, 
        start: "top 90%",       
      },
    }
  );
}