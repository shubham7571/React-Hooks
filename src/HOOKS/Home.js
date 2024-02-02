import React, { useState } from 'react'
import { NewContext } from './NewContext'
import UseContextPage1 from './UseContextPage1'
import UseContextPage2 from './UseContextPage2'

function Home() {
    const [text,setText] =useState("Yogesh walk")

  return (
    <div>
        <NewContext.Provider value={[text,setText]}>

            <UseContextPage1/>
            <UseContextPage2/>

        </NewContext.Provider>
    </div>
  )
}

export default Home