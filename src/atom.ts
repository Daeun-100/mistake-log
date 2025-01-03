import { atom } from 'jotai';
import { FormFields } from './types';

const mockDatalist: FormFields[] = [
  {
    id: 1,
    timestamp: new Date('2021-09-01'),
    title: 'title1sdf',
    category: ['category1', 'category2'],
    favorite: true,
    description: 'description1lsdkfjlsdkfjlsdkfjalsdkfjalsdfkjaldfkjaldkfjl',
    solution: 'solution1sdf.kjsdlfkjsdlfkjsldfkja',
    insights: 'insights1dfglkjfdlgkdjfgl',
    severity: 1,
    frequency: 1,
    status: 'active',
  },
  {
    id: 2,
    timestamp: new Date('2021-09-02'),
    title: 'title2dfg',
    category: ['category2', 'category3'],
    favorite: false,
    description: 'description2',
    solution: 'solution2',
    insights: 'insights2',
    severity: 2,
    frequency: 2,
    status: 'active',
  },
  {
    id: 3,
    timestamp: new Date('2021-09-03'),
    title: 'title3',
    category: ['category3', 'category4'],
    favorite: true,
    description: 'description3',
    solution: 'solution3',
    insights: 'insights3',
    severity: 3,
    frequency: 3,
    status: 'active',
  },
];

export const logListAtom = atom<FormFields[]>(mockDatalist);

export const selectedIdAtom = atom<number | null>(null);
