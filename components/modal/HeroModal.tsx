"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useHeroStore } from "@/stores/useHeroStore";

interface HeroModalProps {}

const HeroModal: React.FC<HeroModalProps> = () => {
  const { close, isActive, hero } = useHeroStore();

  if (!isActive || !hero) {
    return null;
  }

  return (
    <Dialog open={isActive} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{hero.name}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {hero.role} • {hero.nationality}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-6 pb-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Hero Details */}
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div>
              <h3 className="font-semibold text-lg">Weapon</h3>
              <p className="text-sm text-foreground">{hero.weapon}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Abilities</h3>
              <p className="text-sm text-foreground whitespace-pre-wrap">
                {hero.abilities}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Ultimate</h3>
              <p className="text-sm text-foreground whitespace-pre-wrap">
                {hero.ult}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="pt-0">
          <Button variant="outline" onClick={close}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeroModal;
