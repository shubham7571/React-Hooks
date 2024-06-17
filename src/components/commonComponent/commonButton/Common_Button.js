import React from 'react';

const Common_Button = ({ type = 'button', label, className, style, onClick, onChange, disabled = false, }) => {

     
    return (
        <button
            type={type}
            className={className}
            style={style}
            onClick={onClick}
            onChange={onChange}
            disabled={disabled}
        >
            {label}

            
        </button>
    );
};



export default Common_Button;
