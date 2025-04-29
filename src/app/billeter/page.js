"use client";
import { useState } from "react";
import TicketSelection from "./components/TicketSelection";
import PaymentStep from "./components/PaymentStep";

export default function Billeter() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="h-[1000px]">
      <h1 className="text-9xl text-blue-700"> billeter</h1>

      {step === 1 && (
        <TicketSelection onNext={nextStep} defaultValues={formData} />
      )}
      {step === 2 && (
        <PaymentStep formData={formData} onBack={prevStep} onNext={nextStep} />
      )}
      {step === 3 && <div> betaling fulført </div>}
    </div>
  );
}
