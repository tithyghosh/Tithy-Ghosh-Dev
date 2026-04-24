import React from 'react'

const Navbar = () => {
  return (
    <nav className='jetbrains-mono-font fixed top-0 left-0 right-0 z-10 px-10 py-4'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <div className='text-white flex flex-row gap-3 items-center'>
                <a href="#" className='text-2xl 'style={{fontFamily: 'fantasy'}}>
                    Ti
                    <span className='text-[#e8602e]'>t</span>
                    h
                    <span className='text-[#e8602e]'>y</span>
                </a>
                <p className='text-4xl'> | </p>
                <div>
                    <a href="#" className='text-md text-[#e8602e] uppercase leading-snug'>Frontend<br />Developer</a></div>
                
            </div>
            <ul className='flex border border-l text-white/50 gap-4 px-6 py-2 rounded-2xl shadow-sm hover:shadow-[#e8602e]'>
                <li className='hover:text-[#e8602e] transition-colors duration-200'><a href="#home">Home</a></li>
                <li className='hover:text-[#e8602e] transition-colors duration-200'><a href="#about">About</a></li>
                <li className='hover:text-[#e8602e] transition-colors duration-200'><a href="#skills">Skills</a></li>
                <li className='hover:text-[#e8602e] transition-colors duration-200'><a href="#projects">Projects</a></li>
                <li className='hover:text-[#e8602e] transition-colors duration-200'><a href="#contact">Contact</a></li>
            </ul>
            <div>
                <button 
                        className='bg-transparent text-[#f1f5f9] border-2 border-[#dfdadd] px-5 py-2 uppercase 
                        shadow-sm hover:shadow-[#e8602e]
                        hover:bg-[#e8602e] 
                        hover:shadow-[0_0_20px_rgba(244,114,182,0.5)]
                        active:scale-95 hover:-translate-y-1.5 
                        transition-all duration-300'
                        style={{fontFamily: 'ui-rounded'}}
                        >
                        Hire Me
                    </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
