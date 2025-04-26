import { getAllHeros } from "@/actions/get-heros";
import HeroCard from "@/components/cards/HeroCard";
import Grid from "@/components/Grid";
import HeroModal from "@/components/modal/HeroModal";
import SearchBar from "@/components/SearchBar";

interface HeroPageProps {
  searchParams: Promise<{
    s: string;
  }>;
}

const HeroPage: React.FC<HeroPageProps> = async ({ searchParams }) => {
  const { s } = await searchParams;
  const heros = await getAllHeros(s);

  return (
    <div className="container max-w-7xl mx-auto p-5">
      <div className="flex flex-col items-center space-y-10">
        <SearchBar />
        {heros.length == 0 ? (
          <div className="w-full h-full my-40 text-3xl text-black text-center ">
            No heros found for search term &apos;{s}&apos;
          </div>
        ) : (
          <Grid>
            {heros.map((hero, i) => (
              <HeroCard key={i} hero={hero} />
            ))}
          </Grid>
        )}
      </div>
      <HeroModal/>
    </div>
  );
};

export default HeroPage;
