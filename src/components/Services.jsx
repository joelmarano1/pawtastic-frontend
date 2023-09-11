import React,{useRef} from 'react'
import {Link} from 'react-scroll'

const Services = ({forwardRef}) => {
  return (
    <>
        <section id="_services" ref={forwardRef} className='px-10 lg:px-24 pt-[120px]'>
            <div className="grid lg:grid-cols-12 py-10 grid-cols-1 items-center">
                <div className="lg:col-span-6 text-center lg:text-left ">
                    <p className="text-4xl lg:text-5xl font-extrabold ">
                        Expert care for your furry,feathery, or scaley friend 
                    </p> 
                    <p className="text-md py-5 ">
                        We know how stressful it is to leave your pets at
                        home alone. We're a team of experienced 
                        animal categories, well connected to local veterinarians. 
                        Trust to us to love them like our own, and to keep them 
                        safe and happy till you're home.
                    </p>
                    <div className="py-5 ">
                        <Link to="_appointment" smooth={true}  duration={500} className="bg-gray-600 px-10 py-3 rounded-full  text-white hover:bg-gray-500"> Schedule a visit </Link>
                    </div>
                </div>
                <div className="lg:col-span-6  text-center md:text-left  mx-auto ">
                    <div className="grid lg:grid-cols-2 grid-cols-2 gap-5 items-center">
                        <div className="w-44 ">
                            <img src="img/cat1.jpg" className=" img-overlay"/>
                        </div>
                        <div className="w-44">
                            <img src="img/bird1.jpg" className="img-overlay"/>
                        </div>
                        <div className="w-44">
                            <img src="img/dog1.jpg" className="img-overlay"/>
                        </div>
                        <div className="w-44">
                            <img src="img/rat1.jpg" className="img-overlay "/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Services