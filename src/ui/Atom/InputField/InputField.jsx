import { inputFieldStyles } from "./InputField.styles";
import { useState } from "react";
const InputField = ({
  label,
  name,
  type,
  register,
  error,
  success,
  placeholder,
  size,
  readOnly,
  inputType,
  maxLength,
  onInput,
  isLoading, // NYT
}) => {
  const { onBlur: rhfOnBlur, onChange, ref, name: inputName } = register(name);
  console.log("error:", error, "success:", success);
  const [isFocused, setIsFocused] = useState(false);

  const showError = !isLoading && !isFocused && error;
  // const showError = isLoading ? false : error;

  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="text-lg font-medium  block pb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={inputName}
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        {...register(name)}
        className={inputFieldStyles({
          // intent: error ? "error" : success ? "success" : "default",
          intent: isLoading
            ? "default"
            : error
            ? "error"
            : success
            ? "success"
            : "default",
          size,
          readOnly,
          inputType,
        })}
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        onBlur={(e) => {
          rhfOnBlur(e);
          setIsFocused(false);
        }}
        onChange={onChange}
        onInput={onInput}
        readOnly={readOnly}
      />
      {showError && (
        <p className="text-red-500 text-wrap text-sm mt-1">{error.message}</p>
      )}
      {/* {!isLoading && error && (
        <p className="text-red-500 text-wrap text-sm mt-1">{error.message}</p>
      )} */}
      {/* {error && (
        <p className="text-red-500 text-wrap text-sm mt-1">{error.message}</p>
      )} */}
    </div>
  );
};

export default InputField;
