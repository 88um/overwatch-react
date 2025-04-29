'use client';

import { Map } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMapStore } from "@/stores/useMapStore";

interface MapCardProps {
map : Map
}

const MapCard: React.FC<MapCardProps> = ({map}) => {
  const { show , setMap } = useMapStore();
  return (
<div className="m-4">
      <div className="bg-[#ff9c00] rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row w-full p-5 gap-6 items-center">
          {/* Map Image */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-20 rounded-lg overflow-hidden border-2 border-blue-500/20">
              <Image
                src={map.image}
                alt={map.name}
                fill

                className="object-contain" 

         

                priority
              />
            </div>
          </div>

          {/* Map Info */}
          <div className="w-full md:w-3/5 space-y-3 text-[#0a1428]">
            <h3 className="text-2xl font-bold">{map.name}</h3>
            <p className="text-sm md:text-base">
              {`${map.name} is a ${map.type} map from ${map.location}.

              Attack: ${map.attackComp}. 
              Defense: ${map.defenseComp}.`}

            </p>
            
            <Button 
              className="w-full bg-[#00aeef] hover:bg-[#0088cc] text-white mt-4"
              variant="default"
              onClick={() => {
                setMap(map);
                show();
              }}
            >
              View Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;