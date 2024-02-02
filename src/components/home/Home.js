import React from 'react';
import FastTag from '../common/assests/fastTagImage.png'
import FastTag2 from '../common/assests/fastTagImage2.png'
import FastTag3 from '../common/assests/fastTagImage3.png'
import FastTag4 from '../common/assests/fastTagImage4.png'
import FastTag5 from '../common/assests/fastTagImage5.png'
import FastTag6 from '../common/assests/fastTagImage6.png'
const dummyarr = [
  {
    companyName: FastTag
  },
  {
    companyName: FastTag2
  },
  {
    companyName: FastTag3
  },
  {
    companyName: FastTag4
  },
  {
    companyName: FastTag5
  },
  {
    companyName: FastTag6
  },

];
 
export default function Home() {
  return (
    <div>
      <div className='pt-20 '>
        <h1 className=' md:font-family   text-center md:text-8xl font-bold p-10 text-[35px]'>
          your browser is a mess. It's not your fault.
        </h1>
        <p className='md: text-gray-500  text-center '>Skeema is a new  way to manage your tabs that helps declutter your browser and  your mind
        </p>
        <div className='text-center'>
          <button type="button" className='bg-black text-center  text-white rounded-full p-5 mt-14 font-semibold '>
          Get started
        </button></div>
        <p className='text-center my-10 '>AS FEATURED IN</p>
        <div className='grid gap-7 grid-cols-2  px-12'>
          {
            dummyarr.map((obj) => (
              <img src={obj.companyName} className='w-32 mt10 pb-3 px-1 ' />))
          }
        </div>
        <p className='font-semibold text-2xl mx-12 mb-10 mt-10' >Skeema solves the three main problems  that cause tab overload.</p>
        <div className='bg-[#f7e2e262]'>
          <div className='mx-12 grid grid-cols-1'>
            <div className=' rounded-2xl bg-[#f8f2e8] p-8 '>
              <div className='flex justify-between ' >
                <div className='font-semibold ml-6 '>01</div>
                <div className='w-8 rounded-md bg-[#f7e2e2]'><img src='https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321073a41e0518dece1cb79_hourglass.svg'></img></div>
              </div>
              <h1 className='md:text-2xl font-semibold'>Reminding &<br /> Resumption</h1>
              <p>You're constantly switching between unfinished tasks all day,leaving tabs open so you don't lose where you left off.</p>
            </div>
            <br />
            <div className=' bg-[#f8f2e8] p-8 rounded-2xl'>
              <div className='flex justify-between ' >
                <div className='font-semibold'>02</div>
                <div className='w-8 rounded-md bg-[#d6ebf5]'><img src='https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106dea62b46be39712309_page-scroll.svg'></img></div>
              </div>
              <h1 className='text-2xl font-semibold'>Resurfacing</h1>
              <p>You leave articles and papers openin tabs to read because you don't have time to read them right now but if you put them away you may<br /> forget and never get back to them.</p>
            </div>
            <br />
            <div className=' bg-[#f8f2e8] p-8 rounded-2xl'>
              <div className='flex justify-between'>
                <div className='font-semibold'>03</div>
                <div className='w-8 rounded-md bg-emerald-200'><img src='https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632106deffe37448ce8514f2_query.svg'></img></div>
              </div>
              <h1 className='text-2xl font-semibold'>Refinding</h1>
              <p>You leave docs and links open to avoid sifting through emails or Slac  to find them again.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-12 my-10 flex justify-between bg-[#f8f2e8]  '>
        <div className='rounded-2xl w-2/4 p-8'>
          <div className='flex justify-between'>
            <div className='font-semibold ml-6'>01</div>
            <div className='w-8 mb-3 rounded-md bg-[#f7e2e2] '>
              <img src='https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6321073a41e0518dece1cb79_hourglass.svg'></img></div>
          </div>
          <div className='text-center'>
            <h1 className=' text-2xl font-semibold  '>Declutter your browser</h1>
            <p>Organize your tabs into projects and outlines</p>
          </div>
        </div>
        <div><img src='https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/632018abdf286259a805938b_image11.png'></img></div>


      </div>


    </div>

  )
}
