'use client';

import { Hero, Map } from "@/types";
import { useState } from "react";
import CompForm from "./forms/CompForm";

interface TeamCompProps {
    maps : Map[];
    heroes : Hero[];
}

const TeamComp: React.FC<TeamCompProps> = ({maps, heroes}) => {
    const [comp, setComp] = useState<string>("");
  return (
    <div>
        <h1 className="text-5xl font-bold">Team Composition Form</h1>
        <h2 className="my-5 text-xl">Leave at least ONE role empty to generate</h2>
        <CompForm heroes={heroes} maps={maps} setComp={setComp}/>
        {
            comp && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">Your Team Composition</h2>
                    <p>{comp}</p>
                </div>
            )
        }
    </div>
  );
};

export default TeamComp;