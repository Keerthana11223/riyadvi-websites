import React from 'react';
import { Link } from 'react-router-dom';

// FIX: Added 'type' prop to support different button types like 'submit'.
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, variant = 'primary', fullWidth = false, type = 'button' }) => {
  const baseClasses = "inline-block text-center font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-black transition-all duration-300 ease-in-out px-6 py-3";
  
  const variantClasses = {
    primary: 'bg-brand-gold text-black hover:bg-yellow-500 focus:ring-brand-gold transform hover:scale-105',
    secondary: 'bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black focus:ring-brand-gold',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${widthClass}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    // FIX: Passed the 'type' prop to the underlying button element.
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  );
};

export default Button;