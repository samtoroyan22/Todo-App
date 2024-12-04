function Button({ className, onClick, children, title, disabled = false }) {
  return (
    <button
      className={className}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
