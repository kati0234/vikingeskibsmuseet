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
    <div className="mt-[141px] md:mt-[137px] mx-12-271   mb-10">
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
