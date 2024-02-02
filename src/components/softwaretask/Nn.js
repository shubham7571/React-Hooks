import React from 'react'

function nn() {
    const cardDetail = [
        {
            id: 1,
            name: "shubham",
            rolllnO: 21,
            div: "A",

        },
        {
            id: 2,
            name: "shubham",
            rolllnO: 221,
            div: "A",

        },
        {
            id: 3,
            name: "shubham",
            rolllnO: 2221,
            div: "A",

        },
        {
            id: 4,
            name: "shubham",
            rolllnO: 222221,
            div: "A",

        },
        {
            id: 5,
            name: "shubham",
            rolllnO: 233331,
            div: "A",

        },
    ];



    return (
        <div>
            {
                cardDetail.map((shubhan) => {
                    return (
                     <h1>{shubhan.name}</h1>
                )
                }
                )
            }

        </div>
    )
}

export default nn