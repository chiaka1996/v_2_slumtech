import css from "./banner.module.css";
import Image from 'next/image';
import {Button} from "../index"

const Banner = ({img, header1, header2, subheader, header1Color, header2Color }) => {

    return(
       <section 
       style={{backgroundImage: `url(${img})`}}
       className='pt-[10rem] max-small:pt-0 flex items-center justify-center h-[100vh] w-full bg-cover bg-center'
       >
        <div className="text-center container" >
             <h1 className={`font-[700] tracking-[0.10em] text-[15rem] max-small:text-[5rem] leading-[9rem] max-small:leading-[9rem]  ${css.banner_main_header}`}>SLUMTECH</h1>
           <h2 className="font-[700] text-[5rem] max-small:text-[2.5rem] leading-[9rem] max-small:leading-[4rem]">
            <span style={{color: `${header1Color}`}}>{header1} </span><span style={{color: `${header2Color}`}}> {header2}</span>
            </h2>
            <h3 className="font-[600] text-[2.5rem] max-small:text-[1.8rem] leading-[2.6rem] text-[#fff]">{subheader}</h3>
            <div className="w-[16rem] h-[5.8rem] mx-auto mt-[5rem] max-small:mt-[3rem]">
                <Button text="Learn More" />
            </div>
            <div className="flex flex-col gap-y-[2rem] max-small:mt-[3rem] max-small:pl-[2rem]">
        <div className="w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/facebook-icon.png"
           fill
            alt="slumtech foundation facebook link"
        />
        </div>
        <div className="w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/twitter-icon.png"
           fill
            alt="slumtech foundation twitter link"
        />
        </div>
        <div className="w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/instagram-icon.png"
           fill
            alt="slumtech foundation instagram link"
        />
        </div>
        </div>
        </div>  
       </section>
    )
}

export default Banner;