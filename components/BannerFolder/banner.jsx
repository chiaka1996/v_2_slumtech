import css from "./banner.module.css";
import Image from 'next/image';
import {Button} from "../index"

const Banner = ({
                    img, 
                    header1, 
                    header2, 
                    subheader, 
                    header1Color,
                    header2Color
                }) => {

    const bgImg = `bg-[]`

    return(
    // 
       <section 
       style={{backgroundImage: `url(${img})`}}
       className='pt-[10rem] flex items-center justify-center h-[100vh] w-full bg-cover bg-center'
       >
        <div className="text-center container" >
            <h1 className={`font-[700] tracking-[0.10em] text-[15rem] leading-[9rem] ${css.banner_main_header}`}>SLUMTECH</h1>
           <h2 className="font-[700] text-[5rem] leading-[9rem]">
            <span style={{color: `${header1Color}`}}>{header1} </span><span style={{color: `${header2Color}`}}> {header2}</span>
            </h2>
            <h3 className="font-[600] text-[2.5rem] leading-[2.6rem] text-[#fff]">{subheader}</h3>
            <div className="w-[16rem] h-[5.8rem] mx-auto mt-[5rem]">
                <Button text="Learn More" />
            </div>
            <div className="flex flex-col gap-y-[2rem]">
        <Image 
            src="/v_3_icons/facebook-icon.png"
            width="36"
            height="36"
            alt="slumtech foundation facebook link"
        />
        <Image 
            src="/v_3_icons/twitter-icon.png"
            width="36"
            height="36"
            alt="slumtech foundation twitter link"
        />
        <Image 
            src="/v_3_icons/instagram-icon.png"
            width="36"
            height="36"
            alt="slumtech foundation instagram link"
        />
        </div>
        </div> 
       </section>
    )
}

export default Banner;