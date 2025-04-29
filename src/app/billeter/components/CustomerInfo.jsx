import InputField from "@/ui/Atom/InputField/InputField";
import { useFormContext } from "react-hook-form";

const CustomerInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const validationRules = {
    name: {
      required: "Navn er påkrævet",
    },
    email: {
      required: "Email er påkrævet",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Ugyldigt email-format",
      },
    },
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Modtager</h2>

      <InputField
        name="name"
        label="Navn"
        register={register}
        error={errors.name}
        rules={validationRules.name}
      />
      <InputField
        name="email"
        label="Email"
        type="email"
        register={register}
        error={errors.email}
        rules={validationRules.email}
      />
    </div>
  );
};

export default CustomerInfo;
