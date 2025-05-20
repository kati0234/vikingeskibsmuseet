import HeaderTicket from "../componets/layouts/ticket-flow/Header-ticket";
import FooterTicket from "../componets/layouts/ticket-flow/Footer-ticket";

export default function BilletLayout({ children }) {
  return (
    <>
      <HeaderTicket />
      <main>{children}</main>
      <FooterTicket />
    </>
  );
}
