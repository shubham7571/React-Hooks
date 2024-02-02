import React, { useEffect, useRef } from 'react'

function UseRef() {
    let inputRef = useRef()
    let inputRef2 = useRef()
 
    useEffect(() => {
        inputRef.current.focus()

    }, [])

    const Next = (e) => {
        if (e.key ==='End') {
            e.preventDefault(111); 

            
            inputRef2.current.focus()

        }                                                                                               
    }

    return (
        <div>
            <input type='text' placeholder='Enter' ref={inputRef} onKeyDown={(e) => Next(e)} />
            <input type='text' placeholder='Enter' ref={inputRef2} />
         </div>
    )
}

export default UseRef