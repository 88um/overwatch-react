"use client";

import { Hero } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className="m-4">
      <div className="bg-[#ff9c00] rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row w-full p-5 gap-6 items-center">
          {/* Hero Image */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden border-2 border-blue-500/20">
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Hero Info */}
          <div className="w-full md:w-3/5 space-y-3 text-[#0a1428]">
            <h3 className="text-2xl font-bold">{hero.name}</h3>
            <p className="text-sm md:text-base">
              {`${hero.name} is a ${hero.role} hero from ${hero.nationality}. 
              Comp: ${hero.comp}. Abilities: ${hero.abilities}.
              Weapon: ${hero.weapon}.
              Ultimate: ${hero.ult}`}
            </p>
            
            <Button 
              className="w-full bg-[#00aeef] hover:bg-[#0088cc] text-white mt-4"
              variant="default"
            >
              View Hero
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;