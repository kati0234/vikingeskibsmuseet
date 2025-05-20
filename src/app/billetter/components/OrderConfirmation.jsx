"use client";

import LinkButton from "@/ui/Atom/LinkButton/LinkButton";
import { LuCircleCheck } from "react-icons/lu";

const OrderConfirmation = ({ formData }) => {
  const {
    name,
    email,
    orderNumber,
    totalPrice,
    discountAmount,
    tickets = [],
    discountCode,
    finalPrice,
  } = formData;
  return (
    <div>
      <div className="w-[100px] fixed top-5 md:top-6 z-20 right-12-271 ">
        <p className="whitespace-nowrap text-center text-base">
          Trin 2 ud af 2
        </p>
        <div className="mt-1 flex gap-1">
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="w-full h-1 bg-black  rounded"></div>
        </div>
      </div>
      <div className="bg-blue-500 rounded-lg w-full overflow-hidden flex justify-center">
        <div className=" text-center flex-col max-w-[328px]  flex justify-center items-center text-bw-50 h-[430px] ">
          <LuCircleCheck className="w-[120px] h-[120px] pb-6" />

          <h1 className="font-semibold text-lg pb-3">Ordrebekræftelse</h1>
          <p className="text-base pb-2">
            Tak, fordi du har valgt at besøge Vikingeskibsmuseet!
          </p>
          <p className="text-base">
            Vi har modtaget din ordre og sender dig en bekræftelse, når du har
            modtaget dine billetter elektronisl. Nedenfor finder du oplysninger
            om din ordre.
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-10 pb-3 ">
        <p className="text-lg ">Bestillingsnummer: </p>
        <p className="text-lg font-semibold">{orderNumber} </p>
      </div>
      <div className="border-t border-bw-950 space-y-6 pt-6 text-base">
        <div>
          <p className="font-semibold">Dine informationer</p>
          <p>{name}</p>
          <p>{email} </p>
        </div>
        <div>
          <p className="font-semibold">Betalingsmetode</p>
          <p>Dankort</p>
        </div>
      </div>
      <div>
        <div className="border-b mt-10 border-bw-950 pb-2.5">
          <p className="text-lg">Ordreoversigt</p>
        </div>
        <ul className="my-3 space-y-3">
          {tickets.map((ticket) => (
            <li key={ticket.type} className="flex justify-between">
              <span>
                {ticket.quantity}x {ticket.type}
              </span>
              <span>{ticket.price * ticket.quantity} kr</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t mt-2 pt-2 mb-10">
        <div className="flex font-semibold text-lg justify-between">
          {discountAmount > 0 ? <p>subtotal:</p> : <p>I alt:</p>}
          <p>{totalPrice} kr</p>
        </div>
        {discountAmount > 0 && (
          <div className="font-bold text-lg">
            <div className="flex justify-between">
              <p>Rabat ({discountCode}):</p>
              <p>-{discountAmount} kr</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p> {finalPrice} kr </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start gap-3">
        <LinkButton
          linkText="Hent dine billetter"
          variant="blue"
          size="md"
          href="/"
          ticketIcon
        />
        <LinkButton
          linkText="Tilbage til forsiden"
          variant="beige"
          size="md"
          href="/"
          houseIcon
        />
      </div>
    </div>
  );
};

export default OrderConfirmation;
