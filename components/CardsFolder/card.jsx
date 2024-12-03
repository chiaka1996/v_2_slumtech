import Image from "next/image";

const Card = ({img, title, list}) => {

    return(
       <div>
        <div className='relative w-full h-[27.5rem] max-small:h-[20rem]'>
        <Image 
            src={img}
           fill
          alt="slumtech foundation service"
        />
        </div>
        <h1 className="text-[2rem] max-small:text-[1.8rem] leading-[2.5rem] font-[500] my-[2rem] max-small:my-[1rem]">{title}</h1>
        <div>
            <ul className="list-disc pl-[2rem] gap-y-[0.3rem] flex flex-col leading-[2.6rem]">
            {
                list.map((note, i) => <li key={i}>{note}</li>)
            }
            </ul>
        </div>
       </div>
    )
}

export default Card;