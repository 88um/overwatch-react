"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TeamModal: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">More Info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Understanding Different Compositions</DialogTitle>
          <DialogDescription>
            This is a general guideline to help you understand the different compositions and how they work.
          </DialogDescription>
        </DialogHeader>
        {/* Scrollable Content */}
        <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
          {/* Composition Descriptions */}
          <div>
            <h3 className="text-lg font-semibold">Brawl</h3>
            <p className="text-sm">
              A composition that focuses on close-range combat and taking things head-on, with heroes such as Reinhardt, Zarya, and Ramattra.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Dive</h3>
            <p className="text-sm">
              A composition that focuses on mobility and flanking and "diving" into the enemy backline, with heroes such as Winston, Genji, and Tracer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Poke</h3>
            <p className="text-sm">
              A composition that focuses on long-range damage and poking the enemy team from a distance, with heroes such as Ashe, Widowmaker, and Hanzo.
            </p>
          </div>

          {/* Composition Image */}
          <div className="relative w-full h-64">
            <Image
              src="/comp/comp.jpg"
              alt="Composition Guide"
              fill
              className="object-contain rounded-lg"
            />
            <p className="text-xs text-center mt-2">
              Rush is Brawl. Think of it as such while looking at this image!
            </p>
          </div>

          {/* Map Guidelines */}
          <div>
            <h3 className="text-lg font-semibold">Map Guidelines</h3>
            <p className="text-sm">
              Different comps are good on different maps from either attacking or defending:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                <strong>Brawl:</strong> Good on maps that are close-quarters, such as King's Row and Numbani.
              </li>
              <li>
                <strong>Dive:</strong> Good on maps where you need to attack a point or take high ground, such as Ilios or Oasis.
              </li>
              <li>
                <strong>Poke:</strong> Good on maps that are long-range and have sightlines, such as Route 66 and Junkertown.
              </li>
            </ul>
          </div>

          {/* Rock-Paper-Scissors Explanation */}
          <div>
            <h3 className="text-lg font-semibold">Rock-Paper-Scissors</h3>
            <p className="text-sm">
              Think of it like this: <strong>Poke beats Brawl</strong>, <strong>Brawl beats Dive</strong>, and <strong>Dive beats Poke</strong>. 
              But only if played in the correct conditions. This is a rock-paper-scissors type of game, and you need to start to understand the 
              different comps and how they work on different maps.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal;