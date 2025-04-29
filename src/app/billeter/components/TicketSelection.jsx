"use client";
import AddAndMinus from "@/ui/Atom/AddAndMinus/AddAndMinus";
import Button from "@/ui/Atom/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const ticketSchema = z
  .object({
    adult: z.number().min(0),
    student: z.number().min(0),
    child: z.number().min(0),
    senior: z.number().min(0),
  })
  .refine(
    (data) => {
      const total = data.adult + data.student + data.child + data.senior;
      return total > 0;
    },
    {
      message: "Du skal vælge mindst én billet",
      path: ["_form"],
    }
  );

const TicketSelection = ({ onNext, defaultValues }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      adult: defaultValues.adult ?? 0,
      student: defaultValues.student ?? 0,
      child: defaultValues.child ?? 0,
      senior: defaultValues.senior ?? 0,
    },
  });
  const values = watch();

  const totalTickets =
    values.adult + values.student + values.child + values.senior;

  const totalPrice =
    values.adult * 120 +
    values.student * 100 +
    values.child * 60 +
    values.senior * 80;

  const onSubmit = (data) => {
    const tickets = [
      { type: "Voksen", quantity: data.adult, price: 120 },
      { type: "Studerende", quantity: data.student, price: 100 },
      { type: "Barn", quantity: data.child, price: 60 },
      { type: "Pensionist", quantity: data.senior, price: 80 },
    ].filter((ticket) => ticket.quantity > 0); // Fjern dem der er 0
    onNext({
      tickets,
      totalPrice,
      ...data,
    });
  };
  return (
    <div className="m-8 grid grid-cols-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" font-medium text-5xl col-span-1 pb-5">
          Vælg Billetter
        </h1>
        <div className=" space-y-4 ">
          <AddAndMinus
            name="adult"
            control={control}
            label="Voksen Billet"
            price={"120 kr"}
            min={0}
            step={1}
            max={10}
          />
          <AddAndMinus
            name="student"
            control={control}
            label="Studerende Billet"
            description={"Studerende med gyldigt studiekort"}
            price={"100 kr"}
            min={0}
            step={1}
            max={10}
          />
          <AddAndMinus
            name="child"
            control={control}
            label="Børne Billet"
            price={"60 kr"}
            description={"Børn under 14 år skal følges med en voksen"}
            min={0}
            step={1}
            max={10}
          />
          <AddAndMinus
            name="senior"
            control={control}
            label="Pensionist Billet"
            price={"80 kr"}
            min={0}
            step={1}
            max={10}
          />
          {errors._form && (
            <p className="text-red-500 mt-2">{errors._form.message}</p>
          )}
          <div className="mt-6 text-lg flex justify-between items-center font-medium">
            <p>I alt( Billetter {totalTickets})</p>
            <p>pris i alt {totalPrice} kr</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="secondary" size="lg">
            Fortsæt
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TicketSelection;
