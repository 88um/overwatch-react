import { getAllHeros } from "@/actions/get-heros";
import HeroCard from "@/components/cards/HeroCard";
import Grid from "@/components/Grid";
import SearchBar from "@/components/SearchBar";
import { use } from "react";


interface HeroPageProps {
  searchParams : {
    s: string;
  }
}

const HeroPage: React.FC<HeroPageProps> = async ({searchParams}) => {

  const{s} = await searchParams;
  const heros = await getAllHeros(s);

  return (
    
    <div className="container max-w-[88rem] mx-auto m-5">
      <div className="flex flex-col items-center space-y-10">
      <SearchBar/>
      {heros.length == 0 ? (
        <div className="w-full h-full my-40 text-3xl text-black text-center ">
         No heros found for search term '{s}'
       </div>
      ) : (
        <Grid>

        {heros.map((hero, i)=> <HeroCard key={i} hero={hero}/>)}
      </Grid>
      )}
      </div>
      
     
    </div>
  );
};

export default HeroPage;
