import { initialDrinks } from "../../utils/list";
import type { DrinkType } from "../../utils/types";
import { Bill } from "./bill/bill";
import { useState } from "react";
import { Menu } from "./menu/menu";

export function Home() {
  const [drinks, setDrinks] = useState<Array<DrinkType>>(initialDrinks);

  const plusDrink = (id: number) => {
    setDrinks((prev) =>
      prev.map((drink) =>
        drink.id === id ? { ...drink, quantity: drink.quantity + 1 } : drink
      )
    );
  };

  const minusDrink = (id: number) => {
    setDrinks((prev) =>
      prev.map((drink) =>
        drink.id === id && drink.quantity > 0
          ? { ...drink, quantity: drink.quantity - 1 }
          : drink
      )
    );
  };
  return (
    <div className="bg-[#ececec] flex flex-col items-center justify-center py-2 gap-2">
      <Menu drinks={drinks} plusDrink={plusDrink} minusDrink={minusDrink} />
      <Bill drinks={drinks} />
    </div>
  );
}
