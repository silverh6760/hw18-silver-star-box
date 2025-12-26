import type { CardType, DrinkType } from "../../../utils/types";
import Button from "../../shared/button";

type CardProps = {
  drink: DrinkType;
  plusDrink: (id: number) => void;
  minusDrink: (id: number) => void;
  cardType: CardType;
};

export function Card({ drink, plusDrink, minusDrink, cardType }: CardProps) {
  return (
    <div
      key={drink.id}
      className="bg-[#1e3932] flex flex-col gap-2 p-1 text-white"
    >
      <img src={drink.img} width="30px" height="30px"></img>
      <div>{drink.name}</div>
      <div className="text-[#ecc59a]">{drink.price * drink.quantity}$</div>

      {cardType === "MENU" ? (
        <div className="flex items-center">
          <Button
            className="bg-[#ecc59a]"
            childern="+"
            onclick={() => plusDrink(drink.id)}
          />
          <span className="bg-white">{drink.quantity}</span>
          <Button
            className="bg-[#ecc59a]"
            childern="-"
            onclick={() => minusDrink(drink.id)}
          />
        </div>
      ) : (
        <div>Qty: {drink.quantity}</div>
      )}
    </div>
  );
}
