import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { FormFields } from './types';

const mockDatalist: FormFields[] = [
  {
    id: 'sfsdf',
    timestamp: new Date('2021-09-01'),
    title: 'title1sdf',
    category: ['category1', 'category2'],
    favorite: true,
    description: 'description1lsdkfjlsdkfjlsdkfjalsdkfjalsdfkjaldfkjaldkfjl',
    solution: 'solution1sdf.kjsdlfkjsdlfkjsldfkja',
    insight: 'insight1dfglkjfdlgkdjfgl',
    status: 'active',
  },
  {
    id: 'sdfgdfg',
    timestamp: new Date('2021-09-02'),
    title: 'title2dfg',
    category: ['category2', 'category3'],
    favorite: false,
    description: 'description2',
    solution: 'solution2',
    insight: 'insight2',
    status: 'active',
  },
  {
    id: 'fghfgh',
    timestamp: new Date('2021-09-03'),
    title: 'title3',
    category: ['category3', 'category4'],
    favorite: true,
    description: 'description3',
    solution: 'solution3',
    insight: 'insight3',
    status: 'active',
  },
];

export const logListAtom = atom<FormFields[]>([]);

const storage = createJSONStorage<string | null>(() => sessionStorage);

export const selectedIdAtom = atomWithStorage<string | null>(
  'seletedId',
  null,
  storage
);
