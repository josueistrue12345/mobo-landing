import React from 'react';

const Button = ({ text, onClick, className }) => (
    <button onClick={onClick} className={`py-4 px-8 rounded-full shadow-lg ${className}`}>
        {text}
    </button>
);

export default Button;