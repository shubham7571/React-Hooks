import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';

const itemSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    age: yup
        .number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer'),
});

const arraySchema = yup.object().shape({
    items: yup
        .array()
        .of(itemSchema)
        .min(1, 'At least one item is required'),
});

function UseFiledArray() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(arraySchema),
        defaultValues: {
            items: [{ name: '', age: '' }], // Initialize with one empty object
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });

    const onSubmit = (data) => {
        console.log('Submitted Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {fields.map((field, index) => (
                    <div key={field.id} style={{ marginBottom: '10px' }} className='space-x-8 mt-10 ml-10'>
                        <Controller
                            name={`items.${index}.name`}
                            control={control}
                            defaultValue={field.name || ''}
                            render={({ field }) => (
                                <input {...field} className='border border-black rounded' placeholder="Name" />
                            )}
                        />
                        {errors.items?.[index]?.name && <p>{errors.items[index].name.message}</p>}

                        <Controller
                            name={`items.${index}.age`}
                            control={control}
                            defaultValue={field.age || ''}
                            render={({ field }) => (
                                <input {...field} type="number" className='border border-black rounded' placeholder="Age" />
                            )}
                        />
                        {errors.items?.[index]?.age && <p>{errors.items[index].age.message}</p>}




                        <Button variant='contained' type="button" onClick={() => remove(index)}>
                            Remove
                        </Button>
                    </div>
                ))}
                <div className='flex gap-4 ml-32 mt-10 '>
                    <Button variant='contained' type="button" onClick={() => append({ name: '', roll: '', age: '' })}>
                        Add Item
                    </Button>
                    <Button variant='contained' type="submit">Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default UseFiledArray;
