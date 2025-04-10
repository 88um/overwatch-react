"use client";

import { Hero } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className="m-5">
      <Card className="overflow-hidden">
        <div className="flex flex-col md:flex-row w-full p-5 space-y-4 md:space-y-0 md:space-x-10 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src={hero.image}
                alt="Hero pic"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-2">
            <CardTitle>{hero.name}</CardTitle>
            <CardDescription>
              {`${hero.name} is a ${hero.role} 
              type hero from ${hero.nationality}. 
              ${hero.name}'s special ability is ${hero.ability} and his special weapon is the ${hero.weapon}.`}
            </CardDescription>
          </div>
        </div>

        <CardContent>
          <Button className="cursor-pointer flex w-full justify-center text-center items-center">
            Go
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;

