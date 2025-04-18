
import { getAllMaps } from "@/actions/get-maps";
import MapCard from "@/components/cards/MapCard";
import Grid from "@/components/Grid";
import SearchBar from "@/components/SearchBar";


interface MapsPageProps {
  searchParams: Promise<{
    s: string;
  }>;
}

const MapsPage: React.FC<MapsPageProps> = async ({ searchParams }) => {
  const { s } = await searchParams;
  const maps = await getAllMaps(s);
  return (
    <div className="container max-w-7xl mx-auto p-5">
      <div className="flex flex-col items-center space-y-10">
        <SearchBar />
        {maps.length == 0 ? (
          <div className="w-full h-full my-40 text-3xl text-black text-center ">
            No maps found for search term &apos;{s}&apos;
          </div>
        ) : (
          <Grid>
            {maps.map((map, i) => (
              <MapCard key={i} map={map} />
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default MapsPage;
