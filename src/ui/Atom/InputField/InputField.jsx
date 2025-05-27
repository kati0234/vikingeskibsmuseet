"use client";
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
  isLoading,
}) => {
  const { onBlur: rhfOnBlur, onChange, ref, name: inputName } = register(name);
  const [isFocused, setIsFocused] = useState(false);

  const showError = !isLoading && !isFocused && error;
  return (
    <div className="w-full">
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
        aria-label={label}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        aria-describedby={`indtast gyldig ${name}`}
        maxLength={maxLength}
        {...register(name)}
        className={inputFieldStyles({
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
        onBlur={(e) => {
          rhfOnBlur(e);
          setIsFocused(false);
        }}
        onChange={onChange}
        onInput={onInput}
        readOnly={readOnly}
      />
      {showError && (
        <p role="alert" className="text-red-500 text-wrap text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
