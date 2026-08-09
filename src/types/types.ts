// Table.astro
export interface Cell {
  content: string | number;
  class?: string;
}

export interface Header {
  title: string;
  class?: string;
}

export interface TableData {
  headers: Header[];
  rows: Cell[][];
}

export interface TableProps {
  table: TableData;
  class?: string;
}

// Alphabet.astro
export interface Phoneme {
  symbol: string;
  href: string;
}

export interface PhonemeGroup {
  title: string;
  items: Phoneme[];
}

export interface PhonemeCategory {
  title: string;
  groups: PhonemeGroup[];
}

export interface PhoneticAlphabetData {
  categories: PhonemeCategory[];
}

export interface PhoneticAlphabetDataProps {
  table: PhoneticAlphabetData;
  class?: string;
}