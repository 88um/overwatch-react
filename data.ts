import { Hero } from "./types"


export const maps = [
    {
        name : "My map",
        imgSrc : "/download.jpeg",
        location: "Hello"

    }
]

export const routes = [
   {
    name : "Home",
    href : "/",
   },
   {
    name : "Heroes",
    href : "/heroes"
   },
   {
    name : "Maps",
    href : "/maps"
   },
   {
    name : "Team Comp Form",
    href : "/comp"
   },
   {
    name: "Reviews",
    href:"/reviews"
   }
]


export const reviews = [
    {
        stars : 4,
        name : "joshua",
        username : "d",
        text: "this sucks ass"
    },
    {
        stars : 4,
        name : "joshua",
        username : "d",
        text: "this sucks ass"
    }
]


export const heroes : Hero[] = [
//TANKS
{
    name: "Doomfist",
    role: "Tank",
    nationality: "Nigeria",
    weapon : "Hand Cannon",
    abilities : "Rocket Punch, Seismic Slam, Power Block",
    image:"/tanks/doomfist/doomfist.webp",
    ult: "Meteor Strike",
    comp: "Dive"
},
{
    name: "Mauga",
    role: "Tank",
    nationality: "Samoa",
    weapon : "Miniguns",
    abilities : "Overrun, Cardiac Overdrive, Berserker",
    image:"/tanks/mauga/mauga.webp",
    ult: "Cage Fight",
    comp: "Brawl"
},
{
    name: "Hazard",
    role: "Tank",
    nationality: "Scotland",
    weapon : "Bonespur",
    abilities : "Spike Guard, Violent Leap, Jagged Wall",
    image:"/tanks/hazard/hazard.webp",
    ult: "Downpour",
    comp: "Brawl or Dive"

}
,{
    name: "Junker Queen",
    role: "Tank",
    nationality: "Australia",
    weapon : "Scattergun",
    abilities : "Jagged Blade, Carnage, Commanding Shout",
    image:"/tanks/junkerqueen/junkerqueen.webp",
    ult: "Rampage",
    comp: "Brawl"
},
{
    name: "DVA",
    role: "Tank",
    nationality: "South Korea",
    weapon : "Fusion Cannons",
    abilities : "Defense Matrix, Boosters, Micro Missiles",
    image:"/tanks/dva/dva.webp",
    ult: "Self-Destruct",
    comp: "Dive"

},
{
    name: "Orisa",
    role: "Tank",
    nationality: "Numbani",
    weapon : "Augmented Fusion Driver",
    abilities : "Fortify, Energy Javelin, Javelin Spin",
    image:"/tanks/orisa/orisa.webp",
    ult: "Terra Surge",
    comp: "Brawl"
},
{
    name: "Reinhardt",
    role: "Tank",
    nationality: "Germany",
    weapon: "Rocket Hammer",
    abilities: "Barrier Field, Charge, Fire Strike",
    image: "/tanks/reinhardt/reinhardt.webp",
    ult: "Earthshatter",
    comp: "Brawl"
  },
  {
    name: "Roadhog",
    role: "Tank",
    nationality: "Australia",
    weapon: "Scrap Gun",
    abilities: "Chain Hook, Take a Breather, Pig Pen",
    image: "/tanks/roadhog/roadhog.webp",
    ult: "Whole Hog",
    comp: "Brawl"
  },
  {
    name: "Sigma",
    role: "Tank",
    nationality: "Netherlands",
    weapon: "Hyperspheres",
    abilities: "Kinetic Grasp, Accretion, Experimental Barrier",
    image: "/tanks/sigma/sigma.webp",
    ult: "Gravitic Flux",
    comp: "Poke"
  },
  {
    name: "Winston",
    role: "Tank",
    nationality: "Horizon Lunar Colony",
    weapon: "Tesla Cannon",
    abilities: "Jump Pack, Barrier Projector",
    image: "/tanks/winston/winston.webp",
    ult: "Primal Rage",
    comp: "Dive"
  },
  {
    name: "Wrecking Ball",
    role: "Tank",
    nationality: "Horizon Lunar Colony",
    weapon: "Quad Cannons",
    abilities: "Grappling Claw, Adaptive Shield, Piledriver",
    image: "/tanks/wreckingball/wreckingball.webp",
    ult: "Minefield",
    comp: "Dive"
  },
  {
    name: "Zarya",
    role: "Tank",
    nationality: "Russia",
    weapon: "Particle Cannon",
    abilities: "Particle Barrier, Projected Barrier",
    image: "/tanks/zarya/zarya.webp",
    ult: "Graviton Surge",
    comp: "Brawl"
  },
  {
    name: "Ramattra",
    role: "Tank",
    nationality: "Null Sector",
    weapon: "Void Accelerator",
    abilities: "Void Barrier, Nemesis Form, Ravenous Vortex",
    image: "/tanks/ramattra/ramattra.webp",
    ult: "Annihilation",
    comp: "Brawl"
  },
  //DPS
  {
    name: "Ashe",
    role: "DPS",
    nationality: "USA",
    weapon: "The Viper",
    abilities: "Dynamite, Coach Gun",
    image: "/dps/ashe/ashe.webp",
    ult: "B.O.B.",
    comp: "Poke"
  },
  {
    name: "Bastion",
    role: "DPS",
    nationality: "Unknown",
    weapon: "Configuration: Assault",
    abilities: "A-36 Tactical Grenade, Reconfigure",
    image: "/dps/bastion/bastion.webp",
    ult: "Artillery Configuration",
    comp: "Poke"
  },
  {
    name: "Cassidy",
    role: "DPS",
    nationality: "USA",
    weapon: "Peacekeeper",
    abilities: "Combat Roll, Magnetic Grenade",
    image: "/dps/cassidy/cassidy.webp",
    ult: "Deadeye",
    comp: "Poke"
  },
  {
    name: "Echo",
    role: "DPS",
    nationality: "Switzerland",
    weapon: "Tri-Shot",
    abilities: "Sticky Bombs, Flight, Focusing Beam",
    image: "/dps/echo/echo.webp",
    ult: "Duplicate",
    comp: "Dive"
  },
  {
    name: "Genji",
    role: "DPS",
    nationality: "Japan",
    weapon: "Shuriken",
    abilities: "Deflect, Swift Strike",
    image: "/dps/genji/genji.webp",
    ult: "Dragonblade",
    comp: "Dive"
  },
  {
    name: "Hanzo",
    role: "DPS",
    nationality: "Japan",
    weapon: "Storm Bow",
    abilities: "Sonic Arrow, Storm Arrows, Lunge",
    image: "/dps/hanzo/hanzo.webp",
    ult: "Dragonstrike",
    comp: "Poke"
  },
  {
    name: "Junkrat",
    role: "DPS",
    nationality: "Australia",
    weapon: "Frag Launcher",
    abilities: "Concussion Mine, Steel Trap",
    image: "/dps/junkrat/junkrat.webp",
    ult: "RIP-Tire",
    comp: "Poke"
  },
  {
    name: "Mei",
    role: "DPS",
    nationality: "China",
    weapon: "Endothermic Blaster",
    abilities: "Cryo-Freeze, Ice Wall",
    image: "/dps/mei/mei.webp",
    ult: "Blizzard",
    comp: "Brawl"
  },
  {
    name: "Pharah",
    role: "DPS",
    nationality: "Egypt",
    weapon: "Rocket Launcher",
    abilities: "Jump Jet, Concussive Blast",
    image: "/dps/pharah/pharah.webp",
    ult: "Barrage",
    comp: "Dive"
  },
  {
    name: "Reaper",
    role: "DPS",
    nationality: "USA",
    weapon: "Hellfire Shotguns",
    abilities: "Wraith Form, Shadow Step",
    image: "/dps/reaper/reaper.webp",
    ult: "Death Blossom",
    comp: "Brawl"
  },
  {
    name: "Sojourn",
    role: "DPS",
    nationality: "Canada",
    weapon: "Railgun",
    abilities: "Disruptor Shot, Power Slide",
    image: "/dps/sojourn/sojourn.webp",
    ult: "Overclock",
    comp: "Poke"
  },
  {
    name: "Soldier: 76",
    role: "DPS",
    nationality: "USA",
    weapon: "Heavy Pulse Rifle",
    abilities: "Sprint, Biotic Field, Helix Rockets",
    image: "/dps/soldier76/soldier76.webp",
    ult: "Tactical Visor",
    comp: "Poke"
  },
  {
    name: "Sombra",
    role: "DPS",
    nationality: "Mexico",
    weapon: "Machine Pistol",
    abilities: "Hack, Virus, Translocator",
    image: "/dps/sombra/sombra.webp",
    ult: "EMP",
    comp: "Dive"
  },
  {
    name: "Symmetra",
    role: "DPS",
    nationality: "India",
    weapon: "Photon Projector",
    abilities: "Sentry Turrets, Teleporter",
    image: "/dps/symmetra/symmetra.webp",
    ult: "Photon Barrier",
    comp: "Brawl"
  },
  {
    name: "Torbjörn",
    role: "DPS",
    nationality: "Sweden",
    weapon: "Rivet Gun",
    abilities: "Deploy Turret, Overload",
    image: "/dps/torbjorn/torbjorn.webp",
    ult: "Molten Core",
    comp: "Poke"
  },
  {
    name: "Tracer",
    role: "DPS",
    nationality: "United Kingdom",
    weapon: "Pulse Pistols",
    abilities: "Blink, Recall",
    image: "/dps/tracer/tracer.webp",
    ult: "Pulse Bomb",
    comp: "Dive"
  },
  {
    name: "Venture",
    role: "DPS",
    nationality: "Canada",
    weapon: "Smart Excavator",
    abilities: "Burrow, Drill Dash",
    image: "/dps/venture/venture.webp",
    ult: "Tectonic Shock",
    comp: "Dive"
  },
  {
    name: "Widowmaker",
    role: "DPS",
    nationality: "France",
    weapon: "Widow's Kiss",
    abilities: "Grappling Hook, Venom Mine",
    image: "/dps/widowmaker/widowmaker.webp",
    ult: "Infra-Sight",
    comp: "Poke"
  },
  //Support
  {
    name: "Ana",
    role: "Support",
    nationality: "Egypt",
    weapon: "Biotic Rifle",
    abilities: "Sleep Dart, Biotic Grenade",
    image: "/support/ana/ana.webp",
    ult: "Nano Boost",
    comp: "Poke"
  },
  {
    name: "Baptiste",
    role: "Support",
    nationality: "Haiti",
    weapon: "Biotic Launcher",
    abilities: "Regenerative Burst, Immortality Field",
    image: "/support/baptiste/baptiste.webp",
    ult: "Amplification Matrix",
    comp: "Poke"
  },
  {
    name: "Brigitte",
    role: "Support",
    nationality: "Sweden",
    weapon: "Rocket Flail",
    abilities: "Repair Pack, Whip Shot, Barrier Shield",
    image: "/support/brigitte/brigitte.webp",
    ult: "Rally",
    comp: "Brawl"
  },
  {
    name: "Illari",
    role: "Support",
    nationality: "Peru",
    weapon: "Solar Rifle",
    abilities: "Healing Pylon, Outburst",
    image: "/support/illari/illari.webp",
    ult: "Captive Sun",
    comp: "Poke"
  },
  {
    name: "Kiriko",
    role: "Support",
    nationality: "Japan",
    weapon: "Healing Ofuda",
    abilities: "Swift Step, Protection Suzu",
    image: "/support/kiriko/kiriko.webp",
    ult: "Kitsune Rush",
    comp: "Dive"
  },
  {
    name: "Lifeweaver",
    role: "Support",
    nationality: "Thailand",
    weapon: "Healing Blossom",
    abilities: "Life Grip, Petal Platform, Rejuvenating Dash",
    image: "/support/lifeweaver/lifeweaver.webp",
    ult: "Tree of Life",
    comp: "Poke"
  },
  {
    name: "Lúcio",
    role: "Support",
    nationality: "Brazil",
    weapon: "Sonic Amplifier",
    abilities: "Crossfade, Amp It Up, Soundwave",
    image: "/support/lucio/lucio.webp",
    ult: "Sound Barrier",
    comp: "Dive or Brawl"
  },
  {
    name: "Mercy",
    role: "Support",
    nationality: "Switzerland",
    weapon: "Caduceus Staff, Caduceus Blaster",
    abilities: "Guardian Angel, Resurrect",
    image: "/support/mercy/mercy.webp",
    ult: "Valkyrie",
    comp: "Poke"
  },
  {
    name: "Moira",
    role: "Support",
    nationality: "Ireland",
    weapon: "Biotic Grasp",
    abilities: "Biotic Orb, Fade",
    image: "/support/moira/moira.webp",
    ult: "Coalescence",
    comp: "Brawl"
  },
  {
    name: "Zenyatta",
    role: "Support",
    nationality: "Shambali Monastery",
    weapon: "Orb of Destruction",
    abilities: "Orb of Harmony, Orb of Discord",
    image: "/support/zenyatta/zenyatta.webp",
    ult: "Transcendence",
    comp: "Poke"
  }
]