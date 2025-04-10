"use client";

import { use } from "react";

interface HeroNameProps {
  params: Promise<{
    id: string;
  }>;
}

const HeroName: React.FC<HeroNameProps> = ({ params }) => {

  const { id } = use(params);
  return <div>{id}</div>;
};

export default HeroName;
