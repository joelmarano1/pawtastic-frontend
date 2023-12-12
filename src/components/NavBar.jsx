import React,{useRef} from 'react'
import {Link} from 'react-scroll'
const NavBar = ({forwardedRef,handleScroll}) => {
    const ref = useRef(forwardedRef)
     handleScroll = () => {
        console.log(ref)
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      <div id="_nav" className=" flex flex-row w-full md:text-xl px-12 md:px-24 py-10 justify-between ">
         <div className='flex justify-between'>
            <div className="bg-white rounded-full h-12 w-12">
                <img src="img/paw.png" alt="logo" className="object-fit p-1 ml-1" /> 
            </div>
            <h1 className="pt-3 px-2 font-extrabold">PAWTASTIC</h1>
         </div>
         <div className="px-auto pt-3 hidden md:block ">
            <Link to="_services" smooth={true} duration={500} className="px-3">About us</Link>
            <Link to="_appointment" smooth={true} duration={500} className="px-3">Schedule a visit</Link>
         </div>
      </div>
    </>
  )
}

export default NavBar