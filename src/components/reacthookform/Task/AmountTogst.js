import { TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Configuration() {
    const [discount, setDiscount] = useState(0)
    const [amount, setAmount] = useState(0)
    console.log("Discount", discount);

    let totalPrice = 1000;
    //
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
    return (
        <div className='flex gap-x-2'>
            <TextField size='small' value={discount} onChange={discountAdd} label='Discount (%)' />
            <TextField size='small' value={amount} onChange={amountAdd} label='Amount' />

        </div>
    )
}