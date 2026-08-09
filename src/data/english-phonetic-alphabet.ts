import type { PhoneticAlphabetData } from '@/types/types';

export const englishPhoneticAlphabet: PhoneticAlphabetData = {
  categories: [
    {
      title: 'Vocales',
      groups: [
        {
          title: 'Monoptongos',
          items: [
            {symbol: 'ɪ', href: ''},
            {symbol: 'i:', href: ''},
            {symbol: 'ʊ', href: ''},
            {symbol: 'u:', href: ''},
            {symbol: 'e', href: ''},
            {symbol: 'ɜ:', href: ''},
            {symbol: 'ə', href: ''},
            {symbol: 'ɔ:', href: ''},
            {symbol: 'æ', href: ''},
            {symbol: 'ʌ', href: ''},
            {symbol: 'ɒ', href: ''},
            {symbol: 'ɑ:', href: ''},
          ]
        },
        {
          title: 'Diptongos',
          items: [
            {symbol: 'eɪ', href: ''},
            {symbol: 'ɔɪ', href: ''},
            {symbol: 'aɪ', href: ''},
            {symbol: 'eə', href: ''},
            {symbol: 'ɪə', href: ''},
            {symbol: 'ʊə', href: ''},
            {symbol: 'əʊ', href: ''},
            {symbol: 'aʊ', href: ''},
          ]
        }
      ]
    },
    {
      title: 'Consonantes',
      groups: [
        {
          title: 'Con voz',
          items: [
            {symbol: 'b', href: ''},
            {symbol: 'm', href: ''},
            {symbol: 'j', href: ''},
            {symbol: 'd', href: ''},
            {symbol: 'z', href: ''},
            {symbol: 'r', href: ''},
            {symbol: 'l', href: ''},
            {symbol: 'n', href: ''},
            {symbol: 'v', href: ''},
            {symbol: 'h', href: ''},
            {symbol: 'ŋ', href: ''},
            {symbol: 'g', href: ''},
            {symbol: 'w', href: ''},
            {symbol: 'dʒ', href: ''},
            {symbol: 'ʒ', href: ''},
            {symbol: 'ð', href: ''},
          ]
        },
        {
          title: 'Sin voz',
          items: [
            {symbol: 'p', href: ''},
            {symbol: 'f', href: ''},
            {symbol: 'θ', href: ''},
            {symbol: 't', href: ''},
            {symbol: 's', href: ''},
            {symbol: 'ʃ', href: ''},
            {symbol: 'tʃ', href: ''},
            {symbol: 'k', href: ''},
          ]
        }
      ]
    }
  ]
}