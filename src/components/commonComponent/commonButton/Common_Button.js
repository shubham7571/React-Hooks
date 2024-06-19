import React from 'react';

const Common_Button = ({ type , label, className, style, onClick, onChange,  }) => {

     
    return (
        <button
            type={type}
            className={className}
            style={style}
            onClick={onClick}
            onChange={onChange}
            
        >
            {label}

            
        </button>
    );
};



export default Common_Button;
