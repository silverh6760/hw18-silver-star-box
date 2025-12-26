import type { DrinkType } from "../../../utils/types";
import Button from "../../shared/button";
import { Card } from "../menu/card";

type Props = {
  drinks: DrinkType[];
};

export function Bill({ drinks }: Props) {
  const filteredDrinks = drinks.filter((drink) => drink.quantity > 0);
  const total = filteredDrinks.reduce(
    (sum, drink) => sum + drink.price * drink.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>Bill</div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center w-full h-full px-5 gap-2 ">
        {filteredDrinks.map((drink) => {
          return <Card drink={drink} cardType="BILL" />;
        })}
      </div>
      <div>Total:${total}</div>
      <div className="w-full px-5">
        <Button
          className={`
    w-full rounded-sm bg-[#ecc59a] text-white font-bold text-[12px] py-1 px-2
    ${total > 0 ? " cursor-pointer" : " cursor-not-allowed opacity-60"}`}
          childern="Submit Order"
        />
      </div>
    </div>
  );
}
