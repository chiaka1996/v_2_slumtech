import Image from "next/image";

const WorkCard = ({img, title, note}) => {

    return(
       <div>
        <div className='relative w-full h-[27.5rem]'>
        <Image 
            src={img}
           fill
          alt="our work approach at slumtech"
        />
        </div>
        <h1 className="text-[2rem] leading-[2.5rem] font-[500] my-[2rem]">{title}</h1>
        <div>
        {note}
        </div>
       </div>
    )
}

export default WorkCard;