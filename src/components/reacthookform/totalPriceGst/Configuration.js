import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Configuration() {
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [gst, setGst] = useState(0)
    const [gstAmount, setGstAmount] = useState(0)
    const [netAmount, setNetAmount] = useState(0)

    //formule 

    // const quantityAdd = (event) => {
    //     let quantity = event.target.value;
    //     setQuantity(quantity)

    // }
    // totalprice =quantity multiply price
    const priceAdd = (event) => {
        let price = event.target.value;
        setPrice(price)
        setTotalPrice(quantity * price)

    }
    const discountAdd = (event) => {
        let discount = event.target.value;
        setDiscount(discount)
        setAmount((discount / 100) * (totalPrice));
    }
    const amountAdd = (event) => {
        let amount = event.target.value;
        console.log("Amount", amount);
        setAmount(amount)
        setDiscount((amount / totalPrice) * 100)
    }
    const gstAdd = (event) => {
        let gst = event.target.value;
        setGst(gst);
        setGstAmount((totalPrice * gst) / 100);
    }

    const gstAmountAdd = (event) => {
        let gstAmount = event.target.value;
        setGstAmount(gstAmount);
        let newGst = (gstAmount / totalPrice) * 100;
        setGst(newGst);
    }
    const netAmountAdd = () => {
        let discountAmount = discount ? (discount / 100) * (quantity * price) : 0;
        const netAmount = (quantity * price) - discountAmount + parseFloat(gstAmount);
        setNetAmount(netAmount);
    };
    useEffect(() => {
        const netAmountAdd = () => {
            let discountAmount = discount ? (discount / 100) * (quantity * price) : 0;
            const netAmount = (quantity * price) - discountAmount + parseFloat(gstAmount);
            setNetAmount(netAmount);
        };
        netAmountAdd();
    }, [quantity, price, discount, gst, gstAmount]);
    //end formule

    return (
        <div className='grid grid-cols-4 gap-2 mt-4 mx-6'>
            <TextField size='small' label='quantity' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
            <TextField size='small' label='price' value={price} onChange={priceAdd} />
            <TextField size='small' label='totalprice' value={parseInt(totalPrice)} onChange={setTotalPrice} />
            <TextField size='small' value={discount} onChange={discountAdd} label='Discount (%)' />
            <TextField size='small' value={amount} onChange={amountAdd} label='Amount' />
            <TextField size='small' value={gst} onChange={gstAdd} label='gst(%)' />
            <TextField size='small' value={gstAmount} onChange={gstAmountAdd} label='gstAmount' />
            <TextField size='small' value={netAmount} onChange={netAmountAdd} label='netAmount' />

        </div>
    )
}