import React, { useState } from 'react'

function Rough() {
    const [display, setDisplay] = useState('')
    const [listData, setListData] = useState([])
    console.log("display", display);
    const handleAdd = () => {
            setListData([...listData,display])
            let temp = [...listData]
            temp.push(display)
            setListData(temp)
            setDisplay("")
        // setListData((listData) => {
        //     const updateListData = [...listData, display]
        //     console.log("listData", updateListData);
        //     return updateListData
        // })
        // setDisplay("")
    }

    const handleDelete=(index) => {
        let updateListData = [...listData]
        updateListData.splice(index, 1)
        setListData(updateListData)

    }
    return (
        <div className='space-x-3'>
            <input
                placeholder='Enyer the name '
                value={display}
                onChange={(e) => { setDisplay(e.target.value) }}


            />
            <button className='px-1 py-1 bg-black text-white' onClick={handleAdd}
            >add</button>
            <div>
                <ul>
                    {listData.map((item, index) => (
                        <div key={index} className='flex gap-10'>
                            <h1>{item}</h1>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rough