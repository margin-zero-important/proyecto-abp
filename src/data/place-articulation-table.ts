import type { TableData } from '@/types/types'

export const placeArticulationTable: TableData = {
  headers: [
    {title: ''}, 
    {title: 'Bilabial'}, 
    {title: 'Labio-dental'}, 
    {title: 'Dental'}, 
    {title: 'Alveolar'}, 
    {title: 'Post-alveolar'}, 
    {title: 'Palatal'}, 
    {title: 'Velar'}, 
    {title: 'Glottal'}
  ],
  rows: [
    [
      {content: 'oclusiva', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'},
      {content: 'p b'},
      {content: ''}, 
      {content: ''}, 
      {content: 't d'}, 
      {content: ''}, 
      {content: ''}, 
      {content: 'k g'}, 
      {content: 'ʔ -'}
    ],
    [
      {content: 'nasal', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: '- m'}, 
      {content: ''}, 
      {content: ''}, 
      {content: '- n'}, 
      {content: ''}, 
      {content: ''}, 
      {content: '- ŋ'}, 
      {content: ''}
    ],
    [
      {content: 'vibrante', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: '- r'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}
    ],
    [
      {content: 'fricativa', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: ''}, 
      {content: 'f v'}, 
      {content: 'θ ð'}, 
      {content: 's z'}, 
      {content: 'ʃ ʒ'}, 
      {content: ''}, 
      {content: ''}, 
      {content: 'h -'}
    ],
    [
      {content: 'africada', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: 'tʃ dʒ'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}
    ],
    [
      {content: 'aproximante', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: '- j'}, 
      {content: ''}, 
      {content: ''}
    ],
    [
      {content: 'aproximante lateral', class: 'bg-custom-gray-800 dark:bg-custom-blue-200/10 text-custom-gray-50 dark:text-custom-gray-200 border-none'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: '- l'}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}, 
      {content: ''}
    ],
  ],
}