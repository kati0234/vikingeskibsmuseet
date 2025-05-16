import "../globals.css";

import HeaderTicket from "../componets/layouts/ticket-flow/Header-ticket";
import FooterTicket from "../componets/layouts/ticket-flow/Footer-ticket";

export const metadata = {
  title: "Vikingeskibsmuseet",
  description: "Developed by Katinka and design by Mathilde & Fie",
};

export default function BilletLayout({ children }) {
  return (
    <>
      <HeaderTicket />
      <main>{children}</main>
      <FooterTicket />
    </>
  );
}
