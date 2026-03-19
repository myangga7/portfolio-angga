// Button.jsx - Komponen button reusable
const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseStyle =
    "rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
