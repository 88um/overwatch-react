import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 px-4">
      {/* Hero Section */}
      <div className="w-full max-w-6xl">
        {/* Image Container */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg ow-glow-border mb-6">
          <Image
            src="/ow2_main.jpg"
            alt="Overwatch 2 Strategy Hub"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          
          {/* Title Overlay - Only show on larger screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent hidden md:flex flex-col justify-end p-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-400 drop-shadow-lg ow-glow text-center w-full">
              Overwatch Strategy Hub
            </h1>
          </div>
        </div>

        {/* Text Content - Separate section for mobile */}
        <div className="md:hidden text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400 drop-shadow-lg ow-glow mb-4">
            Overwatch Strategy Hub
          </h1>
          <p className="text-lg font-semibold text-white leading-tight">
            Welcome to your secret weapon for Overwatch domination!
          </p>
        </div>

        {/* Description - Responsive padding and width */}
        <div className="bg-gray-800/90 rounded-lg border border-blue-500/20 p-6 mb-8">
          <p className="text-base md:text-lg text-white text-center max-w-4xl mx-auto leading-relaxed">
            At the Overwatch Strategy Hub, we pride ourselves on turning you into the pro player 
            you were meant to be! Unlock pro strategies, hero-specific tips and tricks, and team 
            comps so good you'll be making the enemy team cry all the way back to the lobby as 
            you climb the ranks all the way to becoming #1!
          </p>
        </div>
      </div>

      {/* Quick Navigation Cards - Updated grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        <div className="bg-gray-800/90 hover:bg-gray-700/80 transition-all rounded-lg border border-blue-500/20 p-4 sm:p-6 group">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            Hero Guides
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
            Master every hero's strengths and matchups
          </p>
        </div>
        
        <div className="bg-gray-800/90 hover:bg-gray-700/80 transition-all rounded-lg border border-blue-500/20 p-4 sm:p-6 group">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            Map Strategies
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
            Learn optimal positioning and rotations
          </p>
        </div>
        
        <div className="bg-gray-800/90 hover:bg-gray-700/80 transition-all rounded-lg border border-blue-500/20 p-4 sm:p-6 group col-span-1 sm:col-span-2 md:col-span-1">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            Team Comps
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
            Discover meta compositions and synergies
          </p>
        </div>
      </div>
    </div>
  );
}