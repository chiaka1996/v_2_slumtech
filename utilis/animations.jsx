import { useEffect } from 'react';
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const topToBottomAnimation = (classname) => {
    gsap.fromTo(classname,
      { opacity: 0, y: -100 }, 
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

export const rightToLeftAnimation = (classname) => {
  gsap.fromTo(classname,
    { opacity: 0, x: -100 }, 
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: classname, 
        start: "top 90%",       
      },
    }
  );
}

export const leftToRightAnimation = (classname) => {
  gsap.fromTo(classname,
    { opacity: 0, x: 100 }, 
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: classname, 
        start: "top 90%",       
      },
    }
  );
}

export const scaleUpAnimation = (classname) => {
  gsap.fromTo(classname,
    { opacity: 0, scale: 0 }, 
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: classname, 
        start: "top 90%",       
      },
    }
  );
}