import LinkButton from "@/ui/Atom/LinkButton/LinkButton";

const BilletInfo = () => {
  return (
    <div className="space-y-6 bg-yellow-100 p-6 rounded-lg max-w-[668px]">
      <p className="text-2xl font-semibold">BILLETTER</p>
      <ul className="flex divide-solid flex-col divide-bw-950  divide-y-[0.5px]">
        <li className="flex justify-between pb-2">
          <p className="text-xl">Voksen 18+</p>
          <p className="text-lg">160 kr.</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Børn / under 18 år</p>
          <p className="text-lg">0 kr.</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Studerende</p>
          <p className="text-lg">100 kr.</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">67+</p>
          <p className="text-lg">80 kr.</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Familie</p>
          <p className="text-lg">300 kr.</p>
        </li>
      </ul>
      <div className="space-y-2">
        <p>
          Bemærk venligst: Billetter købt online er gyldige i et år fra
          købsdatoen, og kan bruges én gang på en vilkårlig åbningsdag.
        </p>
        <p>
          Billetter refunderes ikke, men må gerne gives videre. Rabatter kan
          ikke kombineres.
        </p>
        <p>Grupperabat kan kun opnås ved henvendelse i billetsalg på museet.</p>
      </div>
      <LinkButton
        href="/billetter"
        variant="blue"
        linkText="Køb billetter"
        ticketIcon
      />
    </div>
  );
};

export default BilletInfo;
