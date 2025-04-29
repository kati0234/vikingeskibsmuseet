import { inputFieldStyles } from "./InputField.styles";

const InputField = ({
  label,
  name,
  type,
  register,
  error,
  placeholder,
  size,
  readOnly,
  inputType,
  maxLength,
  onInput,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-lg font-medium mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        maxLength={maxLength}
        {...register(name)}
        className={inputFieldStyles({
          intent: error ? "error" : "default",
          size,
          readOnly,
          inputType,
        })}
        onInput={onInput}
        readOnly={readOnly}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
