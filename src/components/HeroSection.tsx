import adakreiLogo from '/adakrei.svg'

function Navigation(){
    const sectionName: string[] = ['Services', 'Case Study', 'Workflow', 'Contact Us'];
    
    return(
        <div className='bg-black fixed top-0 left-0 w-full'>
            <nav className="flex items-center justify-between px-12 py-2 text-white bg-white/10  backdrop-blur-3xl ">
                <div className="flex items-center text-xl">
                    <img src={adakreiLogo} className="logo bg" alt="Adakrei logo"></img>
                    <span className='pl-2'>Adakrei</span>
                </div>
                <ul className='flex items-center justify-between mw sm:gap-x-3 md:gap-x-6 lg:gap-x-16'>
                    {sectionName.map((item)=>(
                        <li><a href='#'>{item}</a></li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}

function Herosection(){
    return(
        <>
            <Navigation />
            <div className='bg-black h-screen content-center text-white'>
                <div className="flex items-center justify-center text-xl ">
                    <img src={adakreiLogo} className="logo " alt="Adakrei logo"></img>
                    <span className='pl-4 text-4xl'>Adakrei</span>
                </div>
                <div className='text-7xl'>
                    <p>You Imagination,</p>
                    <p>Our implementation</p>
                </div>
            </div>

        </>
    )
}

export default Herosection;

