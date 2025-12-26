import type { CardType, DrinkType } from "../../../utils/types";
import Button from "../../shared/button";

type CardProps = {
  drink: DrinkType;
  plusDrink?: (id: number) => void;
  minusDrink?: (id: number) => void;
  cardType: CardType;
};

export function Card({ drink, plusDrink, minusDrink, cardType }: CardProps) {
  return (
    <div
      key={drink.id}
      className="bg-[#1e3932] flex flex-col gap-2 py-1 px-2 rounded-md"
    >
      <img src={drink.img} width="70px" height="30px"></img>
      <div className="text-white text-[10px]">{drink.name}</div>
      <div className="text-[#ecc59a]">
        {cardType === "MENU" ? drink.price : drink.price * drink.quantity}$
      </div>

      {cardType === "MENU" ? (
        <div className="flex items-center justify-center">
          <Button
            className="bg-[#ecc59a] text-black"
            childern="+"
            onclick={() => plusDrink?.(drink.id)}
          />
          <span className="bg-white">{drink.quantity}</span>
          <Button
            className="bg-[#ecc59a]"
            childern="-"
            onclick={() => minusDrink?.(drink.id)}
          />
        </div>
      ) : (
        <div className=" text-white text-[10px]">Qty: {drink.quantity}</div>
      )}
    </div>
  );
}
