"use client";
import AddAndMinus from "@/ui/Atom/AddAndMinus/AddAndMinus";
import Button from "@/ui/Atom/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LuTicket } from "react-icons/lu";

import { z } from "zod";
const ticketSchema = z
  .object({
    adult: z.number().min(0),
    student: z.number().min(0),
    child: z.number().min(0),
    senior: z.number().min(0),
    family: z.number().min(0),
  })
  .refine((data) => {
    const total =
      data.adult + data.student + data.child + data.senior + data.family;
    return total > 0;
  });

const TicketSelection = ({ onNext, defaultValues }) => {
  const {
    handleSubmit,
    control,
    watch,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      adult: defaultValues.adult ?? 0,
      student: defaultValues.student ?? 0,
      child: defaultValues.child ?? 0,
      senior: defaultValues.senior ?? 0,
      family: defaultValues.family ?? 0,
    },
  });
  const values = watch();

  const totalTickets =
    values.adult +
    values.student +
    values.child +
    values.senior +
    values.family;

  const totalPrice =
    values.adult * 160 +
    values.student * 100 +
    values.child * 0 +
    values.family * 300 +
    values.senior * 80;

  const onSubmit = (data) => {
    const tickets = [
      { type: "Voksen", quantity: data.adult, price: 160 },
      { type: "Studerende", quantity: data.student, price: 100 },
      { type: "Barn", quantity: data.child, price: 0 },
      { type: "Pensionist", quantity: data.senior, price: 80 },
      { type: "family", quantity: data.family, price: 300 },
    ].filter((ticket) => ticket.quantity > 0); // Fjern dem der er 0
    onNext({
      tickets,
      totalPrice,
      ...data,
    });
  };
  return (
    <div className="">
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        // skal være i 571
      >
        <div className="max-w-[571px] ">
          <div className="flex items-center pb-3  gap-3">
            <div
              className="aspect-square w-8 h-8 flex items-center justify-center
 rounded-full bg-bw-950"
            >
              <p className="text-bw-50 text-center">1</p>
            </div>
            <h1 className=" font-semibold text-3xl  ">Vælg Billetter</h1>
          </div>

          <p>
            En dagsbillet giver adgang til alle udstillinger på
            Vikingeskibsmuseet . Billetten skal indløses inden for 1 år fra
            købsdatoen.
          </p>
        </div>
        <div className="border-b border-bw-950 w-full mb-8 md:mb-12 mt-3 md:mt-8 "></div>
        <div className=" space-y-7 max-w-[571px]  ">
          <AddAndMinus
            name="adult"
            control={control}
            label="Voksen 18+"
            price={"160 kr"}
          />
          <AddAndMinus
            name="student"
            control={control}
            label="Studerende"
            description={"Med gyldigt studiekort."}
            price={"100 kr"}
          />
          <AddAndMinus
            name="child"
            control={control}
            label="Børn / under 18"
            price={"0 kr"}
            description={"Børn under 14 år skal følges med en voksen"}
          />
          <AddAndMinus
            name="senior"
            control={control}
            label="Pensionist Billet"
            price={"80 kr"}
          />
          <AddAndMinus
            name="family"
            control={control}
            label="Familie billet"
            description={"Inkludere 2 voksne+børn 0-17 år."}
            price={"300 kr"}
          />
          <div className="mt-6 text-xl flex justify-between  items-center font-semibold ">
            <p>I alt ( {totalTickets} Billetter )</p>
            <p>{totalPrice} kr.</p>
          </div>
          <div className="flex  justify-end">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full md:w-auto"
              iconOnly={false}
              iconAndText={true}
              iconStart={<LuTicket />}
              disabled={totalTickets === 0}
            >
              Køb
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketSelection;
