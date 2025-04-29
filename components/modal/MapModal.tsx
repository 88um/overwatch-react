"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useMapStore } from "@/stores/useMapStore";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MapModal: React.FC = () => {
  const { close, isActive, map } = useMapStore();

  if (!isActive || !map) {
    return null;
  }

  return (
    <Dialog open={isActive} onOpenChange={(open) => !open && close()}>
        <DialogContent className="max-w-screen-xl w-full h-[75vh] overflow-y-auto">
        <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{map.name} layout</DialogTitle>
        </DialogHeader>

        {/* Map Top Image */}
        <div className="flex justify-center mt-6">
            <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
            <Image
                src={map.top}
                alt={`${map.name} Top View`}
                fill
                className="object-contain"
            />
            </div>
        </div>

        <DialogFooter className="pt-4">
            <Button variant="outline" onClick={close}>
            Close
            </Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    );
    };

export default MapModal;