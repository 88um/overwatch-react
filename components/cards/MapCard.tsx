'use client';

import { Map } from "@/types";

interface MapCardProps {
map : Map
}

const MapCard: React.FC<MapCardProps> = ({map}) => {
  return (
    <div>
      {map.name}
    </div>
  );
};

export default MapCard;