import React from 'react';
import { useForm } from 'react-hook-form';

function IsValid() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log("data",data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span>Email is required and must be valid</span>}
            
            <input {...register('password', { required: true, minLength: 6 })} />
            {errors.password && <span>Password is required and must be at least 6 characters</span>}
            
            <button type="submit">Submit</button>
            
            <p>Is form dirty: {isDirty ? 'Yes' : 'No'}</p>
            <p>Is form valid: {isValid ? 'Yes' : 'No'}</p>
        </form>
    );
}

export default IsValid;
