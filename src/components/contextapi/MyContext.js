import React, { useContext } from 'react'
import { NewContext } from './NewContext'

function MyContext() {
    const {text, setText} = useContext(NewContext);
    console.log("cardData", text)
    return (
        <div>
            <button onClick={() => {
                setText("abc")
            }}>

                shoew text
            </button>
        </div>
    )
}

export default MyContext