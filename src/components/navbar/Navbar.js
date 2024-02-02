import React from 'react'
function Navbar() {
    return (
        <div className=' flex justify-between p-5 shadow fixed w-full bg-[#f6dcb0]'>
            <div>
                <h2 className=' bg-blue-300 rounded'></h2><img className='h-10' src="https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/63200f5593e491dbf5e18c8e_image3-p-500.png"></img>
            </div>
            <div className='w-28  '><img src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=362313&theme=light
'></img></div>
            <div className='md: text-center   rounded-full border border-black flex justify-between  '>

                <button type='butt' className='p-3 '>Get Started</button>
            </div>
        </div>
    );
}
export default Navbar;   