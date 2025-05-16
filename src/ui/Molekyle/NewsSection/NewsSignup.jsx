"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { postNewsletter } from "@/lib/api";
import Button from "@/ui/Atom/Button/Button";
import { LuMoveRight } from "react-icons/lu";

const NewsSignup = ({ inSection = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!submittedEmail) return;

    postNewsletter(submittedEmail)
      .then(() => {
        setMessage("Tak! Du er nu tilmeldt nyhedsbrevet.");
        reset();
      })
      .catch((error) => {
        if (
          error.message?.includes("duplicate key value") ||
          error.status === 409
        ) {
          setMessage("Denne email er allerede tilmeldt.");
          reset();
        } else {
          setMessage("Noget gik galt. Prøv igen senere.");
        }
      });
  }, [submittedEmail, reset]);

  const onSubmit = (data) => {
    setSubmittedEmail(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "space-y-4 bg-bw-50  rounded-lg overflow-hidden p-6",
        inSection
          ? "w-full  md:max-w-[510px] h-fit"
          : "w-full  md:w-[436px] h-fit"
      )}
    >
      {!inSection && (
        <p className="font-semibold text-lg md:text-[22px] mb-2">NYHEDSBREV</p>
      )}

      <label htmlFor="email" className="sr-only ">
        Din e‑mail
      </label>
      <p className="text-bw-950 text-sm">
        Tilmeld dig nyhedsbrevet og få informationer om kommende
        særudstillinger, aktiviteter, tilbud og meget mere
      </p>

      <input
        id="email"
        // type="email"
        placeholder="Skriv din e-mail"
        {...register("email", {
          required: "Email er påkrævet",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Ugyldig email",
          },
        })}
        className="w-full  py-2 border-b text-bw-950 placeholder:text-bw-600 border-bw-950 focus:ring-0 focus:outline-none"
      />
      {errors.email && (
        <p className="text-sm text-error">{errors.email.message}</p>
      )}
      {message && <p className="text-sm text-error">{message}</p>}
      <Button
        type="submit"
        className="w-full"
        variant={inSection ? "secondary" : "primary"}
        iconAndText
        size="md"
        iconEnd={<LuMoveRight />}
      >
        Tilmeld
      </Button>
    </form>
  );
};

export default NewsSignup;
