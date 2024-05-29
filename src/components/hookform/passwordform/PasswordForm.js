import React, { useState } from 'react';

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage('');
            alert('Form submitted successfully!');
            // Perform further actions such as form submission to a server
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '50px' }}>
            <h1>Password Confirmation Example</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {errorMessage && (
                        <div style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PasswordForm;
