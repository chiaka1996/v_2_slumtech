const MainHeader = ({text, classnames}) => {

    return(
        <h1 className={`text-[2.5rem] max-small:text-[1.8rem] leading-[2.5rem] max-small:leading-[1.8rem] mb-[2rem] max-small:mb-[0.5rem] ${classnames}`}>{text}</h1>
    )
}

export default MainHeader;