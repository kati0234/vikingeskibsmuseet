import { IoPricetagOutline } from "react-icons/io5";
const DiscountSection = ({
  discountCode,
  setDiscountCode,
  setDiscount,
  discount,
}) => {
  const applyDiscount = () => {
    if (discountCode.toLowerCase() === "katinka") {
      setDiscount(0.2); // 20%
    } else {
      alert("Ugyldig rabatkode");
      setDiscount(0); // Reset hvis ugyldig
    }
  };

  return (
    <div className="mt-6">
      <label className="font-medium flex items-center gap-2 mb-1">
        <IoPricetagOutline />
        Indtast rabatkode
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border p-2 w-full"
          placeholder="f.eks. katinka"
        />
        <button
          type="button"
          onClick={applyDiscount}
          className="bg-black text-white px-4 py-2"
        >
          Anvend
        </button>
      </div>
      {discount > 0 && (
        <p className="text-green-600 text-sm mt-1">
          Rabatkode aktiveret: -{discount * 100}%
        </p>
      )}
    </div>
  );
};
export default DiscountSection;
