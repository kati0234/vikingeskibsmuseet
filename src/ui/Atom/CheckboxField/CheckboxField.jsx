// const CheckboxField = ({ label, name, register, error }) => {
//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           id={name}
//           {...register(name)} // Registrer checkboxen
//           className="w-4 h-4 border-gray-300 rounded"
//         />
//         <span>{label}</span>
//       </label>
//       {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
//     </div>
//   );
// };

// export default CheckboxField;
import { useState } from "react";
import { LuCheck } from "react-icons/lu";

const CheckboxField = ({ label, name, register, error }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="checkbox"
            id={name}
            {...register(name, {
              onChange: handleChange, // Så react-hook-form stadig virker
            })}
            className="w-5 h-5 border border-bw-600 rounded appearance-none  "
          />

          {/* hvis chekred skal styles checked:bg-blue-500 */}
          {isChecked && (
            <LuCheck className="w-4 h-4  absolute top-0 left-0 m-0.5 pointer-events-none" />
          )}
        </div>
        <span className="pb-1">{label}</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CheckboxField;
