import { buttonStyles } from "./Button.styles";

const Button = ({ children, variant, size, className = "", ...props }) => {
  return (
    <button className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
