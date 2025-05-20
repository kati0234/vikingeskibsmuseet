"use client";
import { useState, useEffect } from "react";
import TicketSelection from "./components/TicketSelection";
import PaymentStep from "./components/PaymentStep";
import OrderConfirmation from "./components/OrderConfirmation";

export default function Billetter() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <div className="mt-[141px] md:mt-[137px] mx-12-271   mb-10">
      {step === 1 && (
        <TicketSelection onNext={nextStep} defaultValues={formData} />
      )}
      {step === 2 && (
        <PaymentStep formData={formData} onBack={prevStep} onNext={nextStep} />
      )}
      {step === 3 && <OrderConfirmation formData={formData} />}
    </div>
  );
}
