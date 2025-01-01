import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
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

const deFaultCategory = [
  '시험',
  '프로젝트',
  '업무',
  '일상',
  '프론트엔드',
  '백엔드',
  '디자인',
  '기획',
  '데브옵스',
  '데이터 사이언스',
  'QA',
  '보안',
  '모바일 개발',
  '게임 개발',
  'AI/머신러닝',
  '블록체인',
  '사물인터넷',
  '클라우드 컴퓨팅',
  '네트워크',
  '시스템 엔지니어링',
  '테크니컬 라이터',
  '교육',
];

export const logListAtom = atom<FormFields[]>(mockDatalist);

export const searchTextAtom = atom('');

const storage = createJSONStorage<number | null>(() => sessionStorage);

export const selectedIdAtom = atomWithStorage<number | null>(
  'seletedId',
  null,
  storage
);

export const categoryAtom = atom(deFaultCategory);
