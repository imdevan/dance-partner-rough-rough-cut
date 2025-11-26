import { faker } from '@faker-js/faker';

export interface Recap {
  id: string;
  title: string;
  isTextRecap: boolean;
  videoUrl?: string;
  imageUrl?: string;
  category: string;
}

export const generateRecaps = (count: number, category: string = 'Zouk'): Recap[] => {
  return Array.from({ length: count }, (_, i) => {
    const isTextRecap = i % 5 === 0; // Every 5th recap is a text recap
    
    return {
      id: faker.string.uuid(),
      title: isTextRecap 
        ? faker.helpers.arrayElement([
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
          ])
        : `${category} Class - ${faker.helpers.arrayElement([
            'Basic Steps Review',
            'Styling Workshop',
            'Partner Connection',
            'Musical Interpretation',
            'Advanced Patterns',
            'Body Movement',
            'Social Dancing Tips',
            'Technique Focus',
            'Fundamentals',
            'Performance Practice'
          ])}`,
      isTextRecap,
      imageUrl: !isTextRecap ? faker.image.urlLoremFlickr({ category: 'dance' }) : undefined,
      category,
    };
  });
};
