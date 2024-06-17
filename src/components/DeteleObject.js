import React, { useState } from 'react'

function Delete() {

    const handleDelet = (yogesh,) => {

        let temparr = [...data]

        temparr?.splice(yogesh)
        setdata(temparr);
    }




    const [data, setdata] = useState([
        {
            name: 'shubham',
            subject: 'math',
            rollno: 18
        },
        {
            name: 'kiran',
            subject: 'java',
            rollno: 19
        },
        {
            name: 'yogesh',
            subject: 'pub-G',
            rollno: 25
        },
        {
            name: 'abhi',
            subject: 'physics',
            rollno: 0
        },
    ])
    return (
        <div className=' grid grid-cols-5'>
            {data.map((shubham, index) => {
                return (
                    <div key={index}>
                        <h4>{shubham.name}</h4>
                        <p>{shubham.rollno}</p>
                        <p>{shubham.subject}</p>
                        <button onClick={() => handleDelet(index, shubham.name)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Delete