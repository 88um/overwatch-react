import { getAllHeros } from "@/actions/get-heros";
import { getAllMaps } from "@/actions/get-maps";
import TeamComp from "@/components/TeamComp";


const CompPage: React.FC = async ({}) => {
  const heroes = await getAllHeros();
  const maps = await getAllMaps();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <TeamComp heroes={heroes} maps={maps} />
    </div>
  );
};

export default CompPage;