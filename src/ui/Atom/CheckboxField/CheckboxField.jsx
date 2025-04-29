const CheckboxField = ({ label, name, register, error }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={name}
          {...register(name)} // Registrer checkboxen
          className="w-4 h-4 border-gray-300 rounded"
        />
        <span>{label}</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CheckboxField;
