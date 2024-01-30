const Button = ({ className, text, onClick }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default Button;
