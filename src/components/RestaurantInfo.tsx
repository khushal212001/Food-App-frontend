import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-stone-700 bg-stone-700 text-amber-400 ">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-400  font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription className="bg-stone-700 text-amber-400">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex ">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex bg-stone-700 text-amber-400">
            <span  >{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
