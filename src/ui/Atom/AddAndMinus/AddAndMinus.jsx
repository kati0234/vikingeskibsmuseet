import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

import { useController } from "react-hook-form";
import Button from "../Button/Button";
const AddAndMinus = ({
  control,
  name,
  defaultValue = 0,
  label,
  description,
  price,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules: {
      min: 0,
      max: 10,
    },
  });
  const min = 0;
  const max = 10;

  const handleIncrement = () => {
    const newValue = Number(field.value) + 1;
    if (newValue <= max) {
      field.onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = Number(field.value) - 1;
    if (newValue >= min) {
      field.onChange(newValue);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value === "" ? min : Number(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      field.onChange(value);
    }
  };

  // Generer dynamisk aria-label baseret på name eller label
  const getAriaLabel = (action) => {
    const itemName = label || name || "value";
    return `${action} ${itemName}`;
  };

  return (
    <div className="flex justify-between h-[52px] items-center">
      <div className="">
        <label
          htmlFor={name}
          id={label}
          className="block text-xl font-semibold "
        >
          {label}
        </label>
        {description && (
          <p className="text-bw-700 leading-5 text-sm font-normal ">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <p className="font-semibold text-lg text-nowrap">{price}</p>
        <div className="flex items-center justify-evenly">
          <Button
            type="button"
            onClick={handleDecrement}
            size="md"
            variant="tertiary"
            iconOnly={true}
            iconStart={
              <LuMinus className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
            }
            disabled={Number(field.value) <= min}
            aria-label={getAriaLabel("Decrease")}
          ></Button>

          <input
            id={name}
            type="text"
            aria-label={`Antal ${label || name}`}
            className=" font-semibold text-lg text-center w-12 h-10   readonly focus:ring-0 focus:outline-none pointer-events-none"
            value={field.value}
            onChange={handleChange}
            onBlur={field.onBlur}
          />
          <Button
            type="button"
            onClick={handleIncrement}
            size="md"
            variant="tertiary"
            iconOnly={true}
            iconStart={
              <LuPlus className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
            }
            disabled={Number(field.value) >= max}
            aria-label={getAriaLabel("Increase")}
          ></Button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default AddAndMinus;
