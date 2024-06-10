import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
            {fields.map((field, index) => (
                <div key={field.id} style={{ marginBottom: '10px' }}>
                    <Controller
                        name={`items.${index}.name`}
                        control={control}
                        defaultValue={field.name || ''}
                        render={({ field }) => (
                            <input {...field} placeholder="Name" />
                        )}
                    />
                    {errors.items?.[index]?.name && <p>{errors.items[index].name.message}</p>}

                    <Controller
                        name={`items.${index}.age`}
                        control={control}
                        defaultValue={field.age || ''}
                        render={({ field }) => (
                            <input {...field} type="number" placeholder="Age" />
                        )}
                    />
                    {errors.items?.[index]?.age && <p>{errors.items[index].age.message}</p>}

                    <button type="button" onClick={() => remove(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <div className='flex gap-4 '>
                <button type="button" onClick={() => append({ name: '', roll: '', age: '' })}>
                    Add Item
                </button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default UseFiledArray;
