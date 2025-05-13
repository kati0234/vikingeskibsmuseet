import clsx from "clsx";
import { buttonStyles } from "./Button.styles";
import { AiOutlineLoading } from "react-icons/ai";
import { useState } from "react";

const Button = ({
  children,
  variant,
  size,
  className = "",
  delay = 500,
  disabled,
  iconStart,
  iconEnd,
  iconOnly,
  iconAndText,
  onClick,
  isLoading = false,
  isSelected,
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = (e) => {
    if (disabled || internalLoading) return;

    if (isLoading) {
      setInternalLoading(true);
      onClick?.(e); // <-- Kald med det samme
      setTimeout(() => {
        setInternalLoading(false);
      }, delay);
    } else {
      onClick?.(e);
    }
  };

  const showSpinner = isLoading && internalLoading;

  // console.log("Is selected:", isSelected);
  return (
    <button
      className={clsx(
        buttonStyles({
          variant,
          size,
          iconAndText,
          iconOnly,
          selected: isSelected,
        }),
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {/* {showSpinner && (
        <AiOutlineLoading className="animate-spin w-5 h-5 mr-2" />
      )} */}
      {showSpinner && (
        <AiOutlineLoading className="animate-spin w-5 h-5 mr-2  " />
      )}
      {iconStart && !showSpinner && <span>{iconStart}</span>}
      {/* {iconStart && <span>{iconStart}</span>} */}
      {children}
      {iconEnd && <span>{iconEnd}</span>}
    </button>
  );
};

export default Button;
