import { faker } from '@faker-js/faker';

export interface Recap {
  id: string;
  title: string;
  isTextRecap: boolean;
  videoUrl?: string;
  imageUrl?: string;
  category: string;
}

export const danceStyles = [
  "Salsa",
  "Bachata",
  "Zouk",
  "Kiz",
  "Blues",
  "Tango",
  "Lindy Hop",
  "West Coast Swing",
  "Hip-Hop",
  "Ballet",
];

const styleSpecificClasses: Record<string, string[]> = {
  "Salsa": [
    "Casino Rueda Basics",
    "Shines & Footwork",
    "On2 Timing Drills",
    "Cross Body Lead Variations",
    "Arm Styling Workshop",
    "Mambo Basics",
    "Suelta Solo Work",
    "Partner Patterns",
    "Dile Que No Combos",
    "Turn Patterns"
  ],
  "Bachata": [
    "Sensual Body Waves",
    "Dominican Footwork",
    "Headrolls & Cambrés",
    "Close Embrace Styling",
    "Modern Fusion Moves",
    "Basic Step Variations",
    "Dips & Tricks",
    "Musicality Workshop",
    "Partner Connection",
    "Shadow Position Work"
  ],
  "Zouk": [
    "Head Movement Basics",
    "Lambada Flow",
    "Body Rolls & Waves",
    "Lateral Movements",
    "Hair Styling Workshop",
    "Connection Drills",
    "Viradinha Technique",
    "Counter-Balance Work",
    "Compression & Extension",
    "Musical Expression"
  ],
  "Kiz": [
    "Ginga Foundation",
    "Tarraxinha Basics",
    "Close Embrace Leads",
    "Saida Variations",
    "Musical Breaks",
    "Corridor Steps",
    "Urban Kiz Styling",
    "Frame & Posture",
    "Walking Patterns",
    "Connection Drills"
  ],
  "Blues": [
    "Pulse & Groove",
    "Ballroomy Blues",
    "Juke Joint Moves",
    "Slow Drag Technique",
    "Call & Response",
    "Struttin' Workshop",
    "Fishtails & Kicks",
    "Close Embrace Blues",
    "Solo Blues Movement",
    "Musical Interpretation"
  ],
  "Tango": [
    "Ocho Technique",
    "Milonga Rhythm",
    "Vals Workshop",
    "Gancho & Boleo",
    "Walking the Line",
    "Embrace Variations",
    "Sacada Patterns",
    "Parada & Sandwich",
    "Musicality Study",
    "Cabeceo Practice"
  ],
  "Lindy Hop": [
    "Swingout Technique",
    "Charleston Variations",
    "Tandem Moves",
    "Aerial Foundations",
    "Jazz Steps Solo",
    "Musicality Workshop",
    "Texas Tommy",
    "Lindy Circle",
    "Jig Walks & Breaks",
    "Jam Circle Prep"
  ],
  "West Coast Swing": [
    "Sugar Push Basics",
    "Whip Technique",
    "Anchor Step Drills",
    "Musical Accents",
    "Starter Step Variations",
    "Side Pass Combos",
    "Rolling Count Patterns",
    "Connection Workshop",
    "Styling & Arm Work",
    "Competition Prep"
  ],
  "Hip-Hop": [
    "Groove Foundation",
    "Popping Basics",
    "House Dance Steps",
    "Breaking Toprock",
    "Locking Fundamentals",
    "Krump Expression",
    "Freestyle Workshop",
    "Choreography Class",
    "Musicality Training",
    "Cypher Practice"
  ],
  "Ballet": [
    "Barre Fundamentals",
    "Port de Bras",
    "Petit Allegro",
    "Adagio Workshop",
    "Pirouette Technique",
    "Grand Allegro",
    "Pointe Work Basics",
    "Floor Barre",
    "Centre Practice",
    "Variation Study"
  ],
};

export const getRandomDanceStyle = (): string => {
  return faker.helpers.arrayElement(danceStyles);
};

export const generateRecaps = (count: number, category: string = 'Zouk'): Recap[] => {
  const classNames = styleSpecificClasses[category] || styleSpecificClasses["Zouk"];
  
  return Array.from({ length: count }, (_, i) => {
    const isTextRecap = i % 5 === 0;
    
    let title: string;
    if (isTextRecap) {
      title = faker.helpers.arrayElement([
        'Remember to stay grounded',
        'Focus on connection',
        'Practice makes perfect',
        'Lead with intention',
        'Follow with trust',
        'Maintain the frame',
        'Listen to the music',
        'Feel the rhythm',
        'Embrace the movement',
        'Dance with joy'
      ]);
    } else {
      const random = Math.random();
      
      if (random < 0.25) {
        // 25% chance: combination of two moves with varied patterns
        const move1 = faker.helpers.arrayElement(classNames);
        const move2 = faker.helpers.arrayElement(classNames.filter(m => m !== move1));
        const pattern = faker.helpers.arrayElement([
          `${move1} into ${move2}`,
          `${move1} to ${move2}`,
          `${move1} with ${move2}`,
          `${move1} & ${move2}`,
          `${move1} + ${move2} Combo`,
          `From ${move1} to ${move2}`,
        ]);
        title = pattern;
      } else if (random < 0.40) {
        // 15% chance: add "Variation"
        title = `${faker.helpers.arrayElement(classNames)} Variation`;
      } else {
        // 65% chance: just the class name
        title = faker.helpers.arrayElement(classNames);
      }
    }
    
    return {
      id: faker.string.uuid(),
      title,
      isTextRecap,
      imageUrl: !isTextRecap ? faker.image.urlLoremFlickr({ category: 'dance' }) : undefined,
      category,
    };
  });
};
