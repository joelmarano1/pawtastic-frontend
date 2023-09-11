
import axios from 'axios';
import React, { useState,useRef } from 'react'
import {Link} from 'react-scroll'

const Appointment = () => {
 const [isActiveMrng, setIsActiveMrng] = useState(false);
 const [isActiveAftn, setIsActiveAftn] = useState(false);
 const [isActiveEvng, setIsActiveEvng] = useState(false);
 const [isActiveMon, setIsActiveMon] = useState(false);
 const [isActiveTue, setIsActiveTue] = useState(false);
 const [isActiveWed, setIsActiveWed] = useState(false);
 const [isActiveThur, setIsActiveThur] = useState(false);
 const [isActiveFri, setIsActiveFri] = useState(false);
 const [isActiveSat, setIsActiveSat] = useState(false);
 const [isActiveSun, setIsActiveSun] = useState(false);
 const [days,setDays] = useState([]);
 const [times,setTimes] = useState([]);
 const [message, setMessage] = useState('')
 const [isSuccess,setisSuccess] = useState()

 const [service, setService] = useState({
    'frequency' : '',
    'start_date': '',
    'days':[],
    'times':[],
    'notes':'',
 })
 const handleInputs = (e) => {
    e.persist()
    setService({...service,[e.target.name]: e.target.value
        ,['days'] : JSON.stringify(days)
        ,['times'] : JSON.stringify(times)
    });
 }
 const handleDays = (value,isactive) =>{
    var array = days; 
    if(array.length > 0  && isactive){
        var index = array.indexOf(value)
        if (index !== -1) {
          array.splice(index, 1);
          setDays(array);
        }
    }
    else {
        setDays([...days,value]) ;
    } 
    setService({...service  ,['days'] : JSON.stringify(days)});
 }

 const handleTimes = (value,isactive) =>{
    var array = times; 
    if(array.length > 0  && isactive){
        var index = array.indexOf(value)
        if (index !== -1) {
          array.splice(index, 1);
          setTimes(array);
        }
    }
    else {
        setTimes([...times,value]) ;
    } 
    setService({...service  ,['times'] : JSON.stringify(times)});
 }
 const handleSubmit = () => {
    alert(service.days.length)
   
    if(service.frequency == "" || service.start_date == "" || service.days.length <= 2 
    || service.times.length <= 2 ){
        setisSuccess(false);
        setMessage('Please fill up all the required fields!');
    }
    else {
        //CHANGE PORT IF NEEDED//
        axios.post('http://127.0.0.1:8000/api/service',service)
        .then(response => {
            setMessage(response.data.message);
            if(response.data.status == "200") setisSuccess(true)
            else setisSuccess(false)
        })
    }
 }
  return (
    <>
         <section id="_appointment" className=''>
            <div className="grid lg:grid-cols-12 w-full grid-cols-1 items-center">
                <div className="lg:col-span-5 text-center pt-[120px] text-white lg:px-10 bg-gray-700">
                   <div className='flex justify-center pb-10 font-extrabold'>
                        <div className="bg-white rounded-full h-12 w-12">
                            <img src="img/paw.png" alt="logo" className="object-fit p-1 ml-1" /> 
                        </div>
                        <Link to="_nav" smooth={true} duration={500}><h1 className="pt-3 px-2 font-extrabolder">PAWTASTIC</h1></Link>
                   </div>
                   <h1 className="text-2xl pb-10 font-extrabold ">All services include:</h1>
                   <ul className="pb-20 px-20 leading-10 text-center list-disc">
                    <li>A photo update for you all along</li>
                    <li>Notifications of sitter arrival </li>
                    <li>Treats for your pet, with your</li>
                   </ul>
                   <img src="img/dog2.png" className="dog_img -ml-24 h-80 w-99" alt=""  />
                </div>
                <div className="lg:col-span-7 text-center md:text-left h-full px-10 lg:px-20 bg-slate-50">
                    <p className="text-5xl font-extrabold pt-28 pb-10 ">
                        We'll take care of your dog for a walk. Just tell us when!
                    </p> 
                    {isSuccess ? (
                        <h1 className='bg-green-500 w-full text-xl px-4 py-2 text-white'>{message}</h1>
                    ): isSuccess == false ? (
                        <h1 className='bg-rose-500 w-full text-xl px-4 py-2 text-white'>{message}</h1>
                    ) : ''}
                    <div className="text-left grid lg:grid-cols-12 grid-cols-1 gap-4">
                        <div className="lg:col-span-6 py-2">
                            <h1 className='pb-2'>Frequency<span className='text-red-500'> *</span></h1>
                            <div className="flex bg-white rounded ">
                                <div className="flex items-center pl-4 ">
                                    <input onChange={handleInputs} id="bordered-radio-1" type="radio" value="1" name="frequency" className="w-4 h-4 bg-gray-100 border-gray-300"/>
                                    <label htmlFor="frequency-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">Recurring</label>
                                </div>
                                <div className="flex items-center pl-4 ">
                                    <input onChange={handleInputs} id="frequency-2" type="radio" value="2" name="frequency" className="w-4 h-4 bg-gray-100 border-gray-300"/>
                                    <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">One time</label>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 py-2">
                            <h1 className='pb-2'> Start Date <span className='text-red-500'> *</span></h1>
                           <input type="date" name="start_date" onChange={handleInputs} id="" className="px-4 py-3 w-full"/>
                        </div>
                    </div>
                    <h1 className='pt-4 text-left'>Days <span className='text-red-500'> *</span> <span className='ml-5 text-sm font-extralight text-gray-700/50'>Select all that apply</span></h1>
                    <div className="py-2  text-center grid lg:grid-cols-12 grid-cols-1">
                        <div
                            className=" inline-flex"
                            role="group">
                            <button
                                type="button"
                                className={(isActiveMon ? 'active': '')+" inline-block rounded-l bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={(e) => {
                                    setIsActiveMon(!isActiveMon);
                                    handleDays('MON',isActiveMon)
                                }}>
                                Mon
                            </button>
                            <button
                                type="button"
                                className={(isActiveTue ? 'active': '')+" inline-block  bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white :text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0" }
                                onClick={() => {
                                    setIsActiveTue(!isActiveTue);
                                    handleDays('TUE',isActiveTue)
                                }}>
                                Tue
                            </button>
                            <button
                                type="button"
                                className={(isActiveWed ? 'active': '')+" inline-block   bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={() => {
                                    setIsActiveWed(!isActiveWed);
                                    handleDays('WED',isActiveWed)
                                }}>
                                Wed
                            </button>
                            <button
                                type="button"
                                className={(isActiveThur ? 'active': '')+" inline-block  bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={() => {
                                    setIsActiveThur(!isActiveThur);
                                    handleDays('THUR',isActiveThur)

                                }}>
                                Thur
                            </button>
                            <button
                                type="button"
                                className={(isActiveFri ? 'active': '')+" inline-block  bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={() => {
                                    setIsActiveFri(!isActiveFri);
                                    handleDays('FRI',isActiveFri)

                                }}>
                                Fri
                            </button>
                            <button
                                type="button"
                                className={(isActiveSat ? 'active': '')+" inline-block  bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={() => {
                                    setIsActiveSat(!isActiveSat);
                                    handleDays('SAT',isActiveSat)
                                }}>
                                Sat
                            </button>
                            <button
                                type="button"
                                className={(isActiveSun ? 'active': '')+" inline-block rounded-r bg-white px-3 md:px-9 lg:px-5 xl:px-9 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0"}
                                onClick={() => {
                                    setIsActiveSun(!isActiveSun);
                                    handleDays('SUN',isActiveSun)
                                }}>
                                Sun
                            </button>
                        </div>
                    </div>
                    <h1 className='pt-4 text-left'>Times <span className='text-red-500'> *</span> <span className='ml-5 text-sm font-extralight text-gray-700/50'>Select all that apply</span></h1>
                    <div className="py-2  text-center grid lg:grid-cols-12 grid-cols-1">
                        <div
                            className=" inline-flex "
                            role="group">
                            <button
                                type="button"
                                className={ (isActiveMrng ? 'active': '') + ' inline-block bg-white px-7 md:px-20 lg:px-11 xl:px-20 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0 ' }
                                onClick={() => {
                                    setIsActiveMrng(!isActiveMrng);
                                    handleTimes('Morning',isActiveMrng)

                                }}>
                                Morning
                            </button>
                            <button
                                type="button"
                                className={ (isActiveAftn ? 'active': '') + ' inline-block bg-white px-7 md:px-20 lg:px-11 xl:px-20 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0 ' }
                                onClick={() => {
                                    setIsActiveAftn(!isActiveAftn);
                                    handleTimes('Afternoon',isActiveAftn)

                                }}>
                                Afternoon
                            </button>
                            <button
                                type="button"
                                className={ (isActiveEvng ? 'active': '') + ' inline-block bg-white px-7 md:px-20 lg:px-11 xl:px-20 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0 ' }
                                onClick={() => {
                                    setIsActiveEvng(!isActiveEvng);
                                    handleTimes('Evening',isActiveEvng)

                                }}>
                                Evening
                            </button>
                        </div>
                    </div>
                    <h1 className='py-4 text-left'>Notes for your sitter</h1>
                    <textarea rows="5" name="notes" onChange={handleInputs} className="p-2 text-sm w-full"></textarea>
                    <div className="text-center">
                        <div className="py-5 ">
                            <button onClick={handleSubmit} className="bg-gray-600 px-10 py-3 rounded-full  text-white hover:bg-gray-500"> Schedule Service </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Appointment
