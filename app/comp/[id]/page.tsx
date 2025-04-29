import { getTeam } from "@/actions/get-team";
import HeroModal from "@/components/modal/HeroModal";
import MapModal from "@/components/modal/MapModal";
import HeroCard from "@/components/cards/HeroCard";
import MapCard from "@/components/cards/MapCard";
import Grid from "@/components/Grid";
import { Button } from "@/components/ui/button";
import TeamModal from "@/components/modal/TeamModal";

interface CompPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CompPage: React.FC<CompPageProps> = async ({ params }) => {
  const { id } = await params;
  const { team } = await getTeam(id);

  if (!team) {
    return <div>Team not found</div>;
  }

  const { tank, dps, dps2, support, support2, map, side, comp, originalValues } = team;

  return (
    <div className="p-6 space-y-8">
      {/* Modals */}
      <MapModal />
      <HeroModal />

      {/* Original Input Values */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 ">
        <h2 className="flex flex-col gap-4 text-2xl font-bold mb-4 ">Original Input</h2>
        <p><strong>Tank:</strong> {originalValues.tank || "Not specified"}</p>
        <p><strong>DPS 1:</strong> {originalValues.dps || "Not specified"}</p>
        <p><strong>DPS 2:</strong> {originalValues.dps2 || "Not specified"}</p>
        <p><strong>Support 1:</strong> {originalValues.support || "Not specified"}</p>
        <p><strong>Support 2:</strong> {originalValues.support2 || "Not specified"}</p>
        <p><strong>Map:</strong> {originalValues.map}</p>
        <p><strong>Side:</strong> {originalValues.side}</p>
        <TeamModal/>
      </div>
      <div>
      <h2 className="text-2xl font-bold mb-4">For Map</h2>
      <MapCard map={map} />
      </div>

      {/* Resulting Team */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Resulting Team</h2>
        <Grid>
          {/* Hero Cards */}
          <HeroCard hero={tank} />
          <HeroCard hero={dps} />
          <HeroCard hero={dps2} />
          <HeroCard hero={support} />
          <HeroCard hero={support2} />

          {/* Map Card */}
          
        </Grid>
      </div>
    </div>
  );
};

export default CompPage;