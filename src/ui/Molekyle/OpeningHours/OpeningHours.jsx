const OpeningHours = () => {
  return (
    <div className="space-y-6  rounded-lg md:w-[668px]">
      <ul className="flex divide-solid flex-col divide-bw-950  divide-y-[0.5px]">
        <li className="flex justify-between pb-2">
          <p className="text-xl">Vikingeskibshallen</p>
          <p className="text-lg text-nowrap">10.00 - 17.00</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Bådeværftet</p>
          <p className="text-lg text-nowrap">10.00 - 17.00</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Marinarkæologernes værksted</p>
          <p className="text-lg text-nowrap">10.00 - 15.30</p>
        </li>
        <li className="flex justify-between pt-4 pb-2">
          <p className="text-xl">Gå ombord i et vikingeskib i havnen</p>
          <p className="text-lg text-nowrap">10.00 - 17.00</p>
        </li>
      </ul>
    </div>
  );
};

export default OpeningHours;
