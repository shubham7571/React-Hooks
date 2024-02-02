import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BookTickets() {
    const CardDetails = [
        // ... (your data remains unchanged)
        {
            name: "Platinum",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "50000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Gold",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "40000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Silver",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "25000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Diamond",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "20000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Ruby",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "18000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Pearl",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "15000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Emerald",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "10000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            name: "Plaza",
            subname: "Standing",
            info: "1 Ticket for 1 person",
            price: "5000",
            title: "Please refer Venue Plan:",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
    ];

    const [cardData, setCardData] = useState(CardDetails);

    const Card = ({ id, onClick, disabled }) => {
        return (
            <div className='border rounded-md  p-4'>
                <div className='flex justify-between'>
                    <h2>{item.name}</h2>
                    <div>
                        <button type='button' className={`opacity: ${disabled ? 0.5 : 1}`} onClick={() => onClick(id)}><RemoveIcon /></button>
                        <button type='button' className={`opacity: ${disabled ? 0.5 : 1}`} onClick={() => onClick(id)}><AddIcon /></button>
                    </div>
                </div>
                <h3>{item.subname}</h3>
                <div className='flex justify-between '>
                    <h4>{item.info}</h4>
                    <h4 className='font-bold'>{item.price}</h4>
                </div>
                <hr />
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
            </div>
        );
    };

    return (
        <div className='flex grid-cols-2 '>
            <div className='bg-fixed'>
                <img className='w-full h-full' src='https://demos.onepagelove.com/html/stage/images/event-banner.jpg' alt='' />
            </div>
            <div className='gap-4 grid grid-cols-2 p-3 font-normal'>
                {cardData.map((item, index) => (
                    <Card key={index} id={index} onClick={(id) => handleOnClick(id)} disabled={false} />
                ))}
                <div className='flex justify-evenly'>
                    <p>Ticket</p>
                    <p>Total.Rs.</p>
                </div>
                <button className='bg-red-500 rounded p-1'> Process</button>
            </div>
        </div>
    );
}

export default BookTickets;
