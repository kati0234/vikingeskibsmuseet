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

  return (
    <div className="flex justify-between h-[52px] items-center">
      <div className="">
        <label htmlFor={name} className="block text-xl font-semibold ">
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
            aria-label="Decrease value"
          ></Button>

          <input
            id={name}
            type="text"
            className=" font-semibold text-lg text-center w-12 h-10   readonly focus:ring-0 focus:outline-none pointer-events-none"
            value={field.value}
            onChange={handleChange}
            onBlur={field.onBlur}
          />
          {/* [&::-webkit-outer-spin-button]:appearance-none */}
          {/* [appearance:textfield]   */}
          {/* [&::-webkit-inner-spin-button]:appearance-none  */}
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
            aria-label="Increase value"
          ></Button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default AddAndMinus;
