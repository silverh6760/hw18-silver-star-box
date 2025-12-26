import type { DrinkType } from "../../../utils/types";
import { Card } from "./card";
import { Header } from "./header";

type Props = {
  drinks: DrinkType[];
  plusDrink: (id: number) => void;
  minusDrink: (id: number) => void;
};

export function Menu({ drinks, plusDrink, minusDrink }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-full px-5 gap-2">
        {drinks.map((drink) => {
          return (
            <Card
              drink={drink}
              plusDrink={plusDrink}
              minusDrink={minusDrink}
              cardType="MENU"
            />
          );
        })}
      </div>
    </div>
  );
}
