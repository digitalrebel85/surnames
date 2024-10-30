import { Surname, SurnameGroup, OriginGroup } from './types';

export function groupSurnamesByLetter(surnames: Surname[]): SurnameGroup[] {
  const groups = surnames.reduce((acc: { [key: string]: Surname[] }, surname) => {
    const letter = surname.name.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(surname);
    return acc;
  }, {});

  return Object.entries(groups)
    .map(([letter, surnames]) => ({
      letter,
      surnames: surnames.sort((a, b) => a.name.localeCompare(b.name))
    }))
    .sort((a, b) => a.letter.localeCompare(b.letter));
}

export function groupSurnamesByOrigin(surnames: Surname[]): OriginGroup[] {
  const groups = surnames.reduce((acc: { [key: string]: Surname[] }, surname) => {
    const origin = surname.nationality;
    if (!acc[origin]) {
      acc[origin] = [];
    }
    acc[origin].push(surname);
    return acc;
  }, {});

  return Object.entries(groups)
    .map(([origin, surnames]) => ({
      origin,
      count: surnames.length,
      surnames: surnames.sort((a, b) => a.name.localeCompare(b.name))
    }))
    .sort((a, b) => b.count - a.count);
}

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}