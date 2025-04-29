import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { useController } from "react-hook-form";
const AddAndMinus = ({
  control,
  name,
  defaultValue = 0,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  label,
  description,
  price,
  step = 1,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules: {
      min,
      max,
    },
  });

  const handleIncrement = () => {
    const newValue = Number(field.value) + step;
    if (newValue <= max) {
      field.onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = Number(field.value) - step;
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
      <div>
        <label htmlFor={name} className="block text-2xl font-medium ">
          {label}
        </label>
        {description && <p>{description}</p>}
      </div>
      <div className="flex items-center gap-6">
        <p className="font-medium text-2xl">{price}</p>
        <div className="flex items-center justify-evenly">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={Number(field.value) <= min}
            aria-label="Decrease value"
          >
            <FiMinusSquare className="w-8 h-8" />
          </button>
          <input
            id={name}
            type="number"
            className=" rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min={min}
            max={max}
            step={step}
            value={field.value}
            onChange={handleChange}
            onBlur={field.onBlur}
          />
          <button
            type="button"
            onClick={handleIncrement}
            disabled={Number(field.value) >= max}
            aria-label="Increase value"
          >
            <FiPlusSquare className="w-8 h-8" />
          </button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
      </div>
    </div>
  );
};

export default AddAndMinus;
