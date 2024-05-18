import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Axios() {
    const [useData, setUserData] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.data)
            .then((res) => {
                console.log("res", res);
                setUserData(res)
            })
    }, [])
    return (
        <div className=' '>
            {
                useData.map((item) => (
                    <div key={item.id} className='flex justify-between '>
                        <div className='w-52'>{item.title}</div>
                        <div className='w-48'>{item.body}</div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Axios