import HeaderTicket from "../layouts/ticket-flow/Header-ticket";
import FooterTicket from "../layouts/ticket-flow/Footer-ticket";

export default function BilletLayout({ children }) {
  return (
    <>
      <HeaderTicket />
      <main>{children}</main>
      <FooterTicket />
    </>
  );
}
