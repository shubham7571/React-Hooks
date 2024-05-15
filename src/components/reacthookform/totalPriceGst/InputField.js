import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function InputField(props) {
    // const [discount, setDiscount] = useState(0)
    // const [amount, setAmount] = useState(0)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 850,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const schema = yup.object().shape({
        ItemName: yup.string().required("Please enter the Item Name"),
        Quantity: yup.number().positive("Quantity should be a positive number").required("Please enter the Quantity"),
        Price: yup.number().positive("Price should be a positive number").required("Please enter the Price"),
        // Distcount: yup.number().min(0, "Discount should be 0 or greater").required("Please enter the Discount"),
        // Gst: yup.number().min(0, "Gst should be 0 or greater").required("Please enter the Gst"),
    });

    const {
        reset,
        setValue,
        formState: { errors },
        handleSubmit,
        register,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const Quantity = watch("Quantity");
    const Price = watch("Price");
    const Distcount = watch("Distcount");
    const Gst = watch("Gst");
    const [discountInpercentage, setDiscountInPercentage] = useState(null);
    useEffect(() => {
        if (props.selectedRow !== null) {
            setValue('ItemName', props.selectedRow.ItemName || '');
            setValue('Quantity', props.selectedRow.Quantity || '');
            setValue('Price', props.selectedRow.Price || '');
            setValue('Distcount', props.selectedRow.Distcount || '');
            setValue('Gst', props.selectedRow.Gst || '');
            setValue('TotalPrice', props.selectedRow.TotalPrice || '');
            setValue('Disc_Amount', props.selectedRow.Disc_Amount || '');
            setValue('Gst_Amount', props.selectedRow.Gst_Amount || '');
            setValue('Net_Amount', props.selectedRow.Net_Amount || '');
        } else {
            reset();
        }
    }, [props.selectedRow, reset]);

    // useEffect(() => {
    //     if (Quantity !== '' && Price !== '') {
    //     }
    // }, [Quantity, Price, setValue]);

    useEffect(() => {
        if (Quantity && Price) {
            const totalPrice = Quantity * Price;
            const discAmount = (Distcount / 100) * (totalPrice);
            //
            // const Distcount = (discAmount / totalPrice) * 100;
            const gstAmount = (Gst / 100) * (Quantity * Price - discAmount);
            const netAmount = Quantity * Price - discAmount + gstAmount;

            setValue("TotalPrice", totalPrice.toFixed(2));
            setValue("Disc_Amount", discAmount.toFixed(2));
            setValue("Gst_Amount", gstAmount.toFixed(2));
            setValue("Net_Amount", netAmount.toFixed(2));
            setDiscountInPercentage(discAmount)

        }

    }, [Quantity, Price, Distcount, Gst, setValue, discountInpercentage]);

    const onSubmit = (data) => {
        let tempArr = [...props.tableData];
        if (props.selectedRow !== null) {
            const index = tempArr.findIndex((row) => row === props.selectedRow);
            if (index !== -1) {
                tempArr[index] = data;
                props.setTableData(tempArr);
            }
            props.setSelectedRow(null)
        } else {
            tempArr.push(data);
            props.setTableData(tempArr);
        }
        props.handleClose();
        reset();
    };
    // const handleShowPercentage = (value) => {
    //     console.log("discountInpercentage", value);

    // }

    // let totalPrice = 0;

    // const discountAdd = (event) => {
    //     let discount = event.target.value;
    //     setDiscount(discount)
    //     setAmount((discount / 100) * (totalPrice));
    // }
    // const amountAdd = (event) => {
    //     let amount = event.target.value;
    //     console.log("Amount", amount);
    //     setAmount(amount)
    //     setDiscount((amount / totalPrice) * 100)
    // }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='text-end' onClick={props.handleClose}>
                            <Button variant='contained' type='button'>Close</Button>
                        </div>
                        <div className="my-20 text-center grid grid-cols-5 gap-8">
                            <div className='col-span-1'>
                                <TextField
                                    error={!!errors?.ItemName}
                                    helperText={errors?.ItemName?.message}
                                    label="Item Name"
                                    size="small"
                                    name="ItemName"
                                    {...register("ItemName")}
                                />
                            </div>
                            <TextField
                                label="Quantity"
                                type="number"
                                size="small"
                                name="Quantity"
                                helperText={errors?.Quantity?.message}
                                error={!!errors?.Quantity}
                                {...register("Quantity")}
                            />
                            <div>
                                <TextField
                                    label="Price"
                                    type="number"
                                    error={!!errors?.Price}
                                    helperText={errors?.Price?.message}
                                    size="small"
                                    {...register("Price")}
                                    name="Price"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Total Price"
                                    size="small"
                                    name="TotalPrice"
                                    disabled
                                    defaultValue={0}
                                    {...register("TotalPrice")}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Distcount (%)"
                                    type="number"
                                    size="small"
                                    name="Distcount"
                                    // value={discount} onChange={discountAdd}
                                    // onChange={(event) => { handleShowPercentage(event.target.value) }}
                                    // value={discountInpercentage}
                                    // helperText={errors?.Distcount?.message}
                                    // error={!!errors?.Distcount}
                                    {...register("Distcount")}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Discount Amount"
                                    size="small"
                                    name="Disc_Amount"
                                    // value={amount} onChange={amountAdd}
                                    defaultValue={0}
                                    {...register("Disc_Amount")}
                                />
                            </div>
                            {/* <div className='flex gap-x-2'>
                                <TextField size='small' value={discount} onChange={discountAdd} label='Discount (%)' />
                                <TextField size='small' value={amount} onChange={amountAdd} label='Amount' />

                            </div> */}
                            <div>
                                <TextField
                                    label="Gst (%)"
                                    type="number"
                                    size="small"
                                    name="Gst"
                                    // helperText={errors?.Gst?.message}
                                    // error={!!errors?.Gst}
                                    {...register("Gst")}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Gst Amount"
                                    size="small"
                                    name="Gst_Amount"
                                    defaultValue={0}

                                    {...register("Gst_Amount")}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Net Amount"
                                    size="small"
                                    name="Net_Amount"
                                    disabled
                                    defaultValue={0}

                                    {...register("Net_Amount")}
                                />
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button className='h-10 w-10' variant="contained" size="small" type="submit">
                                {props.selectedRow ? 'Update' : 'Add'}
                            </Button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default InputField;
