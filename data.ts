import { Hero, Review } from "./types"
import { Map } from "./types";

// Default data for maps, heroes, and reviews when initializing the database
export const maps : Map[] = [
  //Control
    {
      name : "Antarctic Peninsula",
      type : "Control",
      image : "/maps/antarctic.webp",
      top: "/mapbutton/antarctic.jpg",
      location: "Antarctica",
      attackComp: "Brawl",
      defenseComp: "Brawl",
    },
    {
      name : "Busan",
      type : "Control",
      image : "/maps/busan.webp",
      top: "/mapbutton/busan.jpg",

      location: "Korea",
      attackComp: "Brawl",
      defenseComp: "Brawl",
    },      
    {
      name : "Ilios",
      type : "Control",
      image : "/maps/ilios.webp",
      top: "/mapbutton/ilios.jpg",

      location: "Greece",
      attackComp: "Brawl",
      defenseComp: "Brawl",
    },
    {
      name : "Lijang Tower",
      type : "Control",
      image : "/maps/lijang.webp",
      top: "/mapbutton/lijang.jpg",
      location: "China",
      attackComp: "Brawl",
      defenseComp: "Brawl",
    },
    {
      name : "Nepal",
      type : "Control",
      image : "/maps/nepal.webp",
      top: "/mapbutton/nepal.jpg",
      location: "Nepal",
      attackComp: "Brawl",
      defenseComp: "Brawl",
  },
  {
    name : "Oasis",
    type : "Control",
    image : "/maps/oasis.webp",
    top: "/mapbutton/oasis.jpg",
    location: "Iraq",
    attackComp: "Brawl",
    defenseComp: "Brawl",
  },
  {
    name : "Samoa",
    type : "Control",
    image : "/maps/samoa.webp",
    top: "/mapbutton/samoa.webp",
    location: "Samoa",
    attackComp: "Brawl",
    defenseComp: "Brawl",
  },
  // Escort
{
  name: "Circuit Royal",
  type: "Escort",
  image: "/maps/circuit.webp",
  top: "/mapbutton/circuit.png",
  location: "Monaco",
  attackComp: "Poke",
  defenseComp: "Poke",
},
{
  name: "Dorado",
  type: "Escort",
  image: "/maps/dorado.jpg",
  top: "/mapbutton/dorado.jpg",
  location: "Mexico",
  attackComp: "Dive",
  defenseComp: "Poke",
},
{
  name: "Havana",
  type: "Escort",
  image: "/maps/havana.webp",
  top: "/mapbutton/habana.jpg",
  location: "Cuba",
  attackComp: "Poke",
  defenseComp: "Poke",
},
{
  name: "Junkertown",
  type: "Escort",
  image: "/maps/junkertown.webp",
  top: "/mapbutton/junkertown.jpg",
  location: "Australia",
  attackComp: "Poke or Dive",
  defenseComp: "Poke",
},
{
  name: "Rialto",
  type: "Escort",
  image: "/maps/rialto.webp",
  top: "/mapbutton/rialto.jpg",
  location: "Italy",
  attackComp: "Poke or Dive",
  defenseComp: "Poke",
},
{
  name: "Route 66",
  type: "Escort",
  image: "/maps/route.webp",
  top: "/mapbutton/route.jpg",
  location: "USA",
  attackComp: "Poke or Dive",
  defenseComp: "Poke",
},
{
  name: "Shambali Monastery",
  type: "Escort",
  image: "/maps/shambali.webp",
  top: "/mapbutton/shambali.jpg",
  location: "Nepal",
  attackComp: "Poke or Dive",
  defenseComp: "Poke",
},
{
  name: "Watchpoint: Gibraltar",
  type: "Escort",
  image: "/maps/gibby.webp",
  top: "/mapbutton/gibby.jpg",
  location: "Gibraltar",
  attackComp: "Poke or Dive",
  defenseComp: "Poke",
},

// Hybrid
{
  name: "Blizzard World",
  type: "Hybrid",
  image: "/maps/blizzardworld.webp",
  top: "/mapbutton/blizzardworld.jpg",
  location: "USA",
  attackComp: "Any",
  defenseComp: "Poke",
},
{
  name: "Eichenwalde",
  type: "Hybrid",
  image: "/maps/eichenwalde.webp",
  top: "/mapbutton/eichenwalde.jpg",
  location: "Germany",
  attackComp: "Brawl",
  defenseComp: "Brawl",
},
{
  name: "Hollywood",
  type: "Hybrid",
  image: "/maps/hollywood.webp",
  top: "/mapbutton/hollywood.jpg",
  location: "USA",
  attackComp: "Brawl or Dive",
  defenseComp: "Brawl",
},
{
  name: "King's Row",
  type: "Hybrid",
  image: "/maps/kingsrow.webp",
  top: "/mapbutton/kingsrow.jpg",
  location: "England",
  attackComp: "Brawl",
  defenseComp: "Brawl",
},
{
  name: "Midtown",
  type: "Hybrid",
  image: "/maps/midtown.webp",
  top: "/mapbutton/midtown.png",
  location: "USA",
  attackComp: "Brawl or Poke",
  defenseComp: "Brawl or Poke",
},
{
  name: "Numbani",
  type: "Hybrid",
  image: "/maps/numbani.webp",
  top: "/mapbutton/numbani.jpg",
  location: "Nigeria",
  attackComp: "Any",
  defenseComp: "Poke",
},
{
  name: "Paraíso",
  type: "Hybrid",
  image: "/maps/paraiso.webp",
  top: "/mapbutton/paraiso.png",
  location: "Brazil",
  attackComp: "Any",
  defenseComp: "Poke",
},

// Push
{
  name: "Colosseo",
  type: "Push",
  image: "/maps/colosseo.webp",
  top: "/mapbutton/colosseo.webp",
  location: "Italy",
  attackComp: "Dive or Brawl",
  defenseComp: "Dive or Brawl",
},
{
  name: "Esperança",
  type: "Push",
  image: "/maps/esperanca.webp",
  top: "/mapbutton/esperanca.webp",
  location: "Portugal",
  attackComp: "Dive or Brawl",
  defenseComp: "Dive or Brawl",
},
{
  name: "New Queen Street",
  type: "Push",
  image: "/maps/newqueenstreet.webp",
  top: "/mapbutton/newqueenstreet.webp",
  location: "Canada",
  attackComp: "Brawl",
  defenseComp: "Brawl",
},

// Flashpoint
{
  name: "New Junk City",
  type: "Flashpoint",
  image: "/maps/newjunkcity.webp",
  top: "/mapbutton/newjunkcity.jpg",
  location: "Australia",
  attackComp: "Brawl",
  defenseComp: "Brawl",
},
{
  name: "Suravasa",
  type: "Flashpoint",
  image: "/maps/suravasa.webp",
  top: "/mapbutton/suravasa.webp",
  location: "India",
  attackComp: "Brawl",
  defenseComp: "Brawl",
},
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


export const reviews : Review[] = [
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
    comp: "Dive",
    info: "/herobutton/doom.webp"
},
{
    name: "Mauga",
    role: "Tank",
    nationality: "Samoa",
    weapon : "Miniguns",
    abilities : "Overrun, Cardiac Overdrive, Berserker",
    image:"/tanks/mauga/mauga.webp",
    ult: "Cage Fight",
    comp: "Brawl",
    info: "/herobutton/mauga.jpg"

},
{
    name: "Hazard",
    role: "Tank",
    nationality: "Scotland",
    weapon : "Bonespur",
    abilities : "Spike Guard, Violent Leap, Jagged Wall",
    image:"/tanks/hazard/hazard.webp",
    ult: "Downpour",
    comp: "Brawl",
    info: "/herobutton/hazard.webp"


}
,{
    name: "Junker Queen",
    role: "Tank",
    nationality: "Australia",
    weapon : "Scattergun",
    abilities : "Jagged Blade, Carnage, Commanding Shout",
    image:"/tanks/junkerqueen/junkerqueen.webp",
    ult: "Rampage",
    comp: "Brawl",
    info: "/herobutton/junkerqueen.webp"

},
{
    name: "DVA",
    role: "Tank",
    nationality: "South Korea",
    weapon : "Fusion Cannons",
    abilities : "Defense Matrix, Boosters, Micro Missiles",
    image:"/tanks/dva/dva.webp",
    ult: "Self-Destruct",
    comp: "Dive",
    info: "/herobutton/dva.webp"


},
{
    name: "Orisa",
    role: "Tank",
    nationality: "Numbani",
    weapon : "Augmented Fusion Driver",
    abilities : "Fortify, Energy Javelin, Javelin Spin",
    image:"/tanks/orisa/orisa.webp",
    ult: "Terra Surge",
    comp: "Brawl",
    info: "/herobutton/orisa.webp"

},
{
    name: "Reinhardt",
    role: "Tank",
    nationality: "Germany",
    weapon: "Rocket Hammer",
    abilities: "Barrier Field, Charge, Fire Strike",
    image: "/tanks/reinhardt/reinhardt.webp",
    ult: "Earthshatter",
    comp: "Brawl",
    info: "/herobutton/reinhardt.webp"

  },
  {
    name: "Roadhog",
    role: "Tank",
    nationality: "Australia",
    weapon: "Scrap Gun",
    abilities: "Chain Hook, Take a Breather, Pig Pen",
    image: "/tanks/roadhog/roadhog.webp",
    ult: "Whole Hog",
    comp: "Brawl",
    info: "/herobutton/roadhog.webp"

  },
  {
    name: "Sigma",
    role: "Tank",
    nationality: "Netherlands",
    weapon: "Hyperspheres",
    abilities: "Kinetic Grasp, Accretion, Experimental Barrier",
    image: "/tanks/sigma/sigma.webp",
    ult: "Gravitic Flux",
    comp: "Poke",
    info: "/herobutton/sigma.webp"

  },
  {
    name: "Winston",
    role: "Tank",
    nationality: "Horizon Lunar Colony",
    weapon: "Tesla Cannon",
    abilities: "Jump Pack, Barrier Projector",
    image: "/tanks/winston/winston.webp",
    ult: "Primal Rage",
    comp: "Dive",
    info: "/herobutton/winston.webp"

  },
  {
    name: "Wrecking Ball",
    role: "Tank",
    nationality: "Horizon Lunar Colony",
    weapon: "Quad Cannons",
    abilities: "Grappling Claw, Adaptive Shield, Piledriver",
    image: "/tanks/wreckingball/wreckingball.webp",
    ult: "Minefield",
    comp: "Dive",
    info: "/herobutton/wreckingball.webp"

  },
  {
    name: "Zarya",
    role: "Tank",
    nationality: "Russia",
    weapon: "Particle Cannon",
    abilities: "Particle Barrier, Projected Barrier",
    image: "/tanks/zarya/zarya.webp",
    ult: "Graviton Surge",
    comp: "Brawl",
    info: "/herobutton/zarya.webp"

  },
  {
    name: "Ramattra",
    role: "Tank",
    nationality: "Null Sector",
    weapon: "Void Accelerator",
    abilities: "Void Barrier, Nemesis Form, Ravenous Vortex",
    image: "/tanks/ramattra/ramattra.webp",
    ult: "Annihilation",
    comp: "Brawl",
    info: "/herobutton/ramattra.webp"

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
    comp: "Poke",
    info: "/herobutton/ashe.webp"

  },
  {
    name: "Bastion",
    role: "DPS",
    nationality: "Unknown",
    weapon: "Configuration: Assault",
    abilities: "A-36 Tactical Grenade, Reconfigure",
    image: "/dps/bastion/bastion.webp",
    ult: "Artillery Configuration",
    comp: "Poke",
    info: "/herobutton/bastion.webp"

  },
  {
    name: "Cassidy",
    role: "DPS",
    nationality: "USA",
    weapon: "Peacekeeper",
    abilities: "Combat Roll, Magnetic Grenade",
    image: "/dps/cassidy/cassidy.webp",
    ult: "Deadeye",
    comp: "Poke",
    info: "/herobutton/cassidy.webp"

  },
  {
    name: "Echo",
    role: "DPS",
    nationality: "Switzerland",
    weapon: "Tri-Shot",
    abilities: "Sticky Bombs, Flight, Focusing Beam",
    image: "/dps/echo/echo.webp",
    ult: "Duplicate",
    comp: "Dive",
    info: "/herobutton/echo.webp"

  },
  {
    name: "Freja",
    role: "DPS",
    nationality: "Denmark",
    weapon: "Revdraw Crossbow",
    abilities: "Take Aim, Quick Dash, Updraft",
    image: "/dps/freja/freja.webp",
    ult: "Bola Shot",
    comp: "Poke",
    info: "/herobutton/freja.jpg"

  },
  {
    name: "Genji",
    role: "DPS",
    nationality: "Japan",
    weapon: "Shuriken",
    abilities: "Deflect, Swift Strike",
    image: "/dps/genji/genji.webp",
    ult: "Dragonblade",
    comp: "Dive",
    info: "/herobutton/genji.webp"

  },
  {
    name: "Hanzo",
    role: "DPS",
    nationality: "Japan",
    weapon: "Storm Bow",
    abilities: "Sonic Arrow, Storm Arrows, Lunge",
    image: "/dps/hanzo/hanzo.webp",
    ult: "Dragonstrike",
    comp: "Poke",
    info: "/herobutton/hanzo.webp"

  },
  {
    name: "Junkrat",
    role: "DPS",
    nationality: "Australia",
    weapon: "Frag Launcher",
    abilities: "Concussion Mine, Steel Trap",
    image: "/dps/junkrat/junkrat.webp",
    ult: "RIP-Tire",
    comp: "Poke",
    info: "/herobutton/junkrat.webp"

  },
  {
    name: "Mei",
    role: "DPS",
    nationality: "China",
    weapon: "Endothermic Blaster",
    abilities: "Cryo-Freeze, Ice Wall",
    image: "/dps/mei/mei.webp",
    ult: "Blizzard",
    comp: "Brawl",
    info: "/herobutton/mei.webp"

  },
  {
    name: "Pharah",
    role: "DPS",
    nationality: "Egypt",
    weapon: "Rocket Launcher",
    abilities: "Jump Jet, Concussive Blast",
    image: "/dps/pharah/pharah.webp",
    ult: "Barrage",
    comp: "Dive",
    info: "/herobutton/pharah.webp"

  },
  {
    name: "Reaper",
    role: "DPS",
    nationality: "USA",
    weapon: "Hellfire Shotguns",
    abilities: "Wraith Form, Shadow Step",
    image: "/dps/reaper/reaper.webp",
    ult: "Death Blossom",
    comp: "Brawl",
    info: "/herobutton/reaper.webp"

  },
  {
    name: "Sojourn",
    role: "DPS",
    nationality: "Canada",
    weapon: "Railgun",
    abilities: "Disruptor Shot, Power Slide",
    image: "/dps/sojourn/sojourn.webp",
    ult: "Overclock",
    comp: "Poke",
    info: "/herobutton/sojourn.webp"

  },
  {
    name: "Soldier: 76",
    role: "DPS",
    nationality: "USA",
    weapon: "Heavy Pulse Rifle",
    abilities: "Sprint, Biotic Field, Helix Rockets",
    image: "/dps/soldier76/soldier76.webp",
    ult: "Tactical Visor",
    comp: "Poke",
    info: "/herobutton/soldier76.webp"

  },
  {
    name: "Sombra",
    role: "DPS",
    nationality: "Mexico",
    weapon: "Machine Pistol",
    abilities: "Hack, Virus, Translocator",
    image: "/dps/sombra/sombra.webp",
    ult: "EMP",
    comp: "Dive",
    info: "/herobutton/sombra.webp"

  },
  {
    name: "Symmetra",
    role: "DPS",
    nationality: "India",
    weapon: "Photon Projector",
    abilities: "Sentry Turrets, Teleporter",
    image: "/dps/symmetra/symmetra.webp",
    ult: "Photon Barrier",
    comp: "Brawl",
    info: "/herobutton/symmetra.webp"
  },
  {
    name: "Torbjörn",
    role: "DPS",
    nationality: "Sweden",
    weapon: "Rivet Gun",
    abilities: "Deploy Turret, Overload",
    image: "/dps/torbjorn/torbjorn.webp",
    ult: "Molten Core",
    comp: "Poke",
    info: "/herobutton/torbjorn.webp"
  },
  {
    name: "Tracer",
    role: "DPS",
    nationality: "United Kingdom",
    weapon: "Pulse Pistols",
    abilities: "Blink, Recall",
    image: "/dps/tracer/tracer.webp",
    ult: "Pulse Bomb",
    comp: "Dive",
    info: "/herobutton/tracer.webp"
  },
  {
    name: "Venture",
    role: "DPS",
    nationality: "Canada",
    weapon: "Smart Excavator",
    abilities: "Burrow, Drill Dash",
    image: "/dps/venture/venture.webp",
    ult: "Tectonic Shock",
    comp: "Dive",
    info: "/herobutton/venture.png"
  },
  {
    name: "Widowmaker",
    role: "DPS",
    nationality: "France",
    weapon: "Widow's Kiss",
    abilities: "Grappling Hook, Venom Mine",
    image: "/dps/widowmaker/widowmaker.webp",
    ult: "Infra-Sight",
    comp: "Poke",
    info: "/herobutton/widow.webp"
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
    comp: "Dive",
    info: "/herobutton/ana.webp"
  },
  {
    name: "Baptiste",
    role: "Support",
    nationality: "Haiti",
    weapon: "Biotic Launcher",
    abilities: "Regenerative Burst, Immortality Field",
    image: "/support/baptiste/baptiste.webp",
    ult: "Amplification Matrix",
    comp: "Poke",
    info: "/herobutton/baptiste.webp"
  },
  {
    name: "Brigitte",
    role: "Support",
    nationality: "Sweden",
    weapon: "Rocket Flail",
    abilities: "Repair Pack, Whip Shot, Barrier Shield",
    image: "/support/brigitte/brigitte.webp",
    ult: "Rally",
    comp: "Dive",
    info: "/herobutton/brigette.webp"
  },
  {
    name: "Illari",
    role: "Support",
    nationality: "Peru",
    weapon: "Solar Rifle",
    abilities: "Healing Pylon, Outburst",
    image: "/support/illari/illari.webp",
    ult: "Captive Sun",
    comp: "Poke",
    info: "/herobutton/illari.webp"
  },
  {
    name: "Kiriko",
    role: "Support",
    nationality: "Japan",
    weapon: "Healing Ofuda",
    abilities: "Swift Step, Protection Suzu",
    image: "/support/kiriko/kiriko.webp",
    ult: "Kitsune Rush",
    comp: "Dive",
    info: "/herobutton/kiriko.webp"
  },
  {
    name: "Lifeweaver",
    role: "Support",
    nationality: "Thailand",
    weapon: "Healing Blossom",
    abilities: "Life Grip, Petal Platform, Rejuvenating Dash",
    image: "/support/lifeweaver/lifeweaver.webp",
    ult: "Tree of Life",
    comp: "Poke",
    info: "/herobutton/lifeweaver.webp"
  },
  {
    name: "Lúcio",
    role: "Support",
    nationality: "Brazil",
    weapon: "Sonic Amplifier",
    abilities: "Crossfade, Amp It Up, Soundwave",
    image: "/support/lucio/lucio.webp",
    ult: "Sound Barrier",
    comp: "Brawl",
    info: "/herobutton/lucio.webp"
  },
  {
    name: "Mercy",
    role: "Support",
    nationality: "Switzerland",
    weapon: "Caduceus Staff, Caduceus Blaster",
    abilities: "Guardian Angel, Resurrect",
    image: "/support/mercy/mercy.webp",
    ult: "Valkyrie",
    comp: "Poke",
    info: "/herobutton/mercy.webp"
  },
  {
    name: "Moira",
    role: "Support",
    nationality: "Ireland",
    weapon: "Biotic Grasp",
    abilities: "Biotic Orb, Fade",
    image: "/support/moira/moira.webp",
    ult: "Coalescence",
    comp: "Brawl",
    info: "/herobutton/moira.webp"
  },
  {
    name: "Zenyatta",
    role: "Support",
    nationality: "Shambali Monastery",
    weapon: "Orb of Destruction",
    abilities: "Orb of Harmony, Orb of Discord",
    image: "/support/zenyatta/zenyatta.webp",
    ult: "Transcendence",
    comp: "Poke",
    info: "/herobutton/zenyatta.webp"
  },
  {
    name: "Juno",
    role: "Support",
    nationality: "Mars",
    weapon: "Mediblaster",
    abilities: "Pulsar Torpedoes, Glide Boost, Hyper Ring",
    image: "/support/juno/juno.webp",
    ult: "Orbital Ray",
    comp: "Brawl",
    info: "/herobutton/juno.jpeg"
  }
]