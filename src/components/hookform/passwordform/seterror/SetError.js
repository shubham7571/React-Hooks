import React from 'react';
import { useForm } from 'react-hook-form';

function SetError() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Perform custom validation
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Passwords do not match'
            });
            return;
        }

        // Proceed with form submission if validation passes
        console.log("data",data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('password', { required: true })} />
            {errors.password && <span>Password is required</span>}
            
            <input {...register('confirmPassword', { required: true })} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default SetError;
