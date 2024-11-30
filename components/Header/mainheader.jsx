const MainHeader = ({text, classnames}) => {

    return(
        <h1 className={`text-[2.5rem] leading-[2.5rem] mb-[2rem] ${classnames}`}>{text}</h1>
    )
}

export default MainHeader;