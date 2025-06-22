import React from 'react';

const Button = ({ 
  children, 
  primary = true, 
  className = '', 
  onClick = () => {}, 
  disabled = false, 
  type = 'button',
  href = null,
}) => {
  
  const baseClasses = "font-medium rounded-full transition-all duration-300 focus:outline-none px-6 py-3";
  
  const styleClasses = primary 
    ? "bg-[#0E49A1] text-white hover:bg-[#0D3E8A] active:bg-[#0C3472]" 
    : "bg-white text-[#0E49A1] border border-[#0E49A1] hover:bg-gray-100 active:bg-gray-200";
  
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  const allClasses = `${baseClasses} ${styleClasses} ${disabledClasses} ${className}`;
  
  return href ? (
    <a 
      href={href}
      className={allClasses}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button 
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;