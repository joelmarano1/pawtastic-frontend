import React from 'react'
import {Link} from 'react-scroll'
const Hero = () => {
  return (
    <>
        <section id="_hero"className="">
            <div className="grid lg:grid-cols-12 pt-[120px] grid-cols-1 items-center">
                <div className="lg:col-span-6">
                </div>
                <div className="lg:col-span-6 md:px-4 text-center lg:text-left">
                    <p className="text-7xl font-extrabold  pl-7">
                        We care for your furry little loved ones while
                    </p> 
                    <div className="py-10 text-center lg:text-left">
                        <Link to="_appointment" smooth={true}  duration={500} className="bg-white px-10 py-3 rounded-full ml-8  text-black hover:bg-gray-300"> Schedule a visit </Link>
                    </div>
                
                </div>
            </div>

        </section>
    </>
  )
}

export default Hero