import { Surname } from './types';

export const surnames: Surname[] = [
  {
    name: "Smith",
    nationality: "English",
    meaning: "Derived from the Old English 'smitan', meaning 'to strike' or 'to forge', referring to someone who works with metal - a blacksmith, silversmith, etc.",
    popularity: "The most common surname in English-speaking countries, particularly in the United States, Australia, and the United Kingdom.",
    notableFigures: [
      "Will Smith (Actor)",
      "Adam Smith (Economist)",
      "Maggie Smith (Actress)"
    ],
    interestingFacts: [
      "One in every 100 Americans has the surname Smith",
      "The name emerged independently in different regions due to the importance of blacksmiths in medieval society",
      "Variations exist in many languages: Schmidt (German), Ferraro (Italian), Kovács (Hungarian)"
    ]
  },
  {
    name: "Johnson",
    nationality: "English",
    meaning: "Means 'son of John', derived from the personal name John, ultimately from the Hebrew name Yochanan meaning 'Yahweh is gracious'.",
    popularity: "Second most common surname in the United States and highly prevalent in English-speaking countries.",
    notableFigures: [
      "Boris Johnson (British Politician)",
      "Dwayne Johnson (Actor)",
      "Samuel Johnson (Lexicographer)"
    ],
    interestingFacts: [
      "The surname has patronymic origins, meaning it's derived from the father's given name",
      "Common variations include Johnsen, Jonsson, and Jansen",
      "Particularly common among African Americans due to its adoption during the slavery era"
    ]
  },
  {
    name: "Williams",
    nationality: "English",
    meaning: "Patronymic form meaning 'son of William', from the Germanic name Wilhelm composed of elements meaning 'will, desire' and 'helmet, protection'.",
    popularity: "Third most common surname in the United States and very common in Wales.",
    notableFigures: [
      "Robin Williams (Actor)",
      "Serena Williams (Athlete)",
      "William Carlos Williams (Poet)"
    ],
    interestingFacts: [
      "Particularly common in Wales due to the Welsh patronymic naming system",
      "The name William became popular after the Norman Conquest of England",
      "Has royal connections through various monarchs named William"
    ]
  }
];

export const popularSurnames = surnames.slice(0, 3);