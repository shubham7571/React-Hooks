import React from 'react'

function Stepperpage2() {
  return (
    <div className=''>
      <div className='mx-[38%] my-10 border border-black rounded h-65 text-center shadow-xl'>
        <h1 className=' '>Your order Has Been Confirmed !</h1>
        <div className='border  h-[60%]  my-8  text-xl shadow-2xl rounded w-[70%] mx-[15%]'>
          <div className='mb-10'>

            <h3>My Great Project <br /> <span className=' font-center'> Receipt</span> </h3>
            <p>******************</p>
            <div className=' flex justify-between text-sm    p-1 mb-8'>
              <div>
                <h3>Card : Gift </h3>
                <h3>Total : </h3>
                <h3>Due : </h3>
                <p>------------------</p>
                <h3>Balance :</h3>
                <p>***************</p>

              </div>
              <div>
                <h3>$200.00</h3>
                <h3>$160.33</h3>
                <h3>$0.00</h3>
                <p>-----------------</p>
                <h3 className='text-bold color-green'>$39.63</h3>
                <p>**************</p>
              </div>
              <div>
              </div>
            </div>
<div className=' text-center text-xs p-2'>
<h1>Thank you for your purchase .<br/>Please come again.</h1>

</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Stepperpage2