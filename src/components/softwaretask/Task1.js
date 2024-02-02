import Reactz, { useState } from 'react'
import Web from './Web.png';
import T1 from './T1.png';
import T2 from './T2.png';
import T3 from './T3.png';
import Result from './Result';
// const label ={inputPops: {'ar'}}

function Task1() { 
    const[selectedService,setSelectedService]=useState([]);
    const periodicMaintainanceCost=650; 
       const Detail = [
        {
            id: 1,
            image: T1,
            name: "Brake Replacement",
            button: 'Add Service',
            price: 1400
        },
        {
            id: 2,
            image: T2,
            name: "Wheel Replacement",
            button: 'Add Service',
            price:1200
        },
        {
            id: 3,
            image: T3,
            name: "Brake Replacement",
            button: 'Add Service',
            price:2000
        },
        {
            id: 4,
            image: T1,
            name: " Battery Replacement",
            button: 'Add Service',
            price: 1400
        },
        {
            id: 5,
            image: T2,
            name: "Wheel Replacement",
            button: 'Add Service',
            price:1200
        },
        {
            id: 6,
            image: T3,
            name: "Battery Replacement",
            button: 'Add Service',
            price:2000
        },

    ];
    const handleAddService=(service)=>{
        setSelectedService([...selectedService],service)
    };
    return (
        <div>
              <div className='items-center w-full' >
                        <nav className='bg-blue-900 flex justify-between  items-center w-full'>
                            <img className='h-12 ml-10' src={Web} />
                            <ul className=' flex justify-end p-2  mx-2 text-white text-lg   '>
                                <li className='mx-4 '>How it work?</li>
                                <li className='mx-4 '>Club</li>
                                <li className='mx-4 '>Blog</li>
                                <li className='mx-4 '>faq</li>
                                <li className='mx-4 '>FeedBack</li>
                                <li className='mx-4 '><button className=' bg-white text-black  p-1'>Log In /Sign Up</button></li>
                            </ul>
                        </nav>
                    </div>
            <div className='flex justify-between'>
                <div>
                    <div className=' '>
                        <div className=' w-full border shadow-md rounded mt-4  ml-4 '>

                            <div className='flex justify-between  mr-20'>
                                <div>
                                    <img className=' w-60 h-36 rounded' src='https://media.istockphoto.com/id/1051029946/photo/people-holding-hand-are-repairing-a-motorcycle.jpg?s=612x612&w=0&k=20&c=ZAdC5r-MzTHu6GfnOd-UxBZfYqTGMAlDMbQND6ktWVY=' ></img>
                                </div>
                                <div>
                                    <div className='flex justify-between ml-1 '>
                                        <h2  >Periodic Maintenance</h2>
                                        <h2 >Included</h2>
                                    </div>
                                    <div className='flex justify-between  '>
                                        <div>
                                            <ul className=' list-disc '>
                                                Engine
                                                <div className=' text-xs flex '>
                                                    <div className=' pr-14'>
                                                        <li>Oil Change </li>
                                                        <li>Clean oil Filter </li>

                                                    </div>
                                                    <div className='pr-4 '>
                                                        <li>Clean carburator</li>
                                                        <li>Spark Plug Check</li>
                                                    </div>
                                                </div>
                                            </ul>
                                            <ul className='list-disc '>
                                                Tranmission
                                                <div className=' flex  text-xs'>
                                                    <div className='  '>
                                                        <li>Drive Chain Cleaning</li>
                                                        <li>Wheel Alignment</li>
                                                    </div>
                                                    <div className='pl-4'>
                                                        <li>Drive Chain Cleaning</li>
                                                        <li>Wheel Alignment</li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                        <div className='ml-5'>
                                            Brake
                                            <ul className=' list-disc text-xs '>
                                                <li> Check from & Rear Brake </li>
                                                <li> Fuel Or Brake Fulid Leak Check</li>
                                            </ul>
                                            Electronics
                                            <ul className='list-disc text-xs   '>

                                                <li>Tail Lamp check</li>
                                                <li> Indicator</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='  ml-4  text-xl font-bold'>Additonal services you may like</h1>
                        <div className='grid grid-cols-3  w-full ml-4 gap-6  '>
                            {
                                Detail.map((list) => (
                                    <div className='h-[33vh] w-full   bg-indigo-200 border rounded-lg  shadow-lg text-center' key={list.id}>
                                        <img className=' mx-auto h-24 mt-2' src={list.image} alt='' />
                                        <h2 className='font-semibold'>{list.name}</h2>
                                        <button className='border border-black px-5 mt-3 text-indigo-500  py-1'>{list.button}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <Result 
                    periodicMaintainanceCost={periodicMaintainanceCost}
                    handleAddService={handleAddService}
                    name={name1}
                    price={price}
                    />
                </div>

            </div>
        </div>
    )
}

export default Task1