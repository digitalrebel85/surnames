export interface Surname {
  name: string;
  nationality: string;
  meaning: string;
  popularity: string;
  notableFigures: string[];
  interestingFacts: string[];
}

export interface SurnameGroup {
  letter: string;
  surnames: Surname[];
}

export interface OriginGroup {
  origin: string;
  count: number;
  surnames: Surname[];
}

export interface SurnameResponse {
  meaning: string;
  popularity: string;
  notableFigures: string[];
  interestingFacts: string[];
}