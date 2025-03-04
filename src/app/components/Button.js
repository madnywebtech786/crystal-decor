const Button = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  isSticky = false, // New prop to control border color
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      data-sticky={isSticky} // Set the attribute
      className={`bg-secondary text-white w-max fancy-button text-xs md:text-sm lg:text-base ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
