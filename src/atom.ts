import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { FormFields } from './types';
import { getRandomColorClass } from './utils/getRandomColorClass';

const mockDatalist: FormFields[] = [
  {
    id: 'sdfsdf',
    timestamp: new Date('2021-09-01'),
    title: 'title1sdf',
    category: ['프론트엔드', '데브옵스'],
    favorite: true,
    description: 'description1lsdkfjlsdkfjlsdkfjalsdkfjalsdfkjaldfkjaldkfjl',
    solution: 'solution1sdf.kjsdlfkjsdlfkjsldfkja',
    insights: 'insights1dfglkjfdlgkdjfgl',
    status: 'active',
  },
  {
    id: 'fdgfghfgh',
    timestamp: new Date('2021-09-02'),
    title: 'title2dfg',
    category: ['디자인', '기술'],
    favorite: false,
    description: 'description2',
    solution: 'solution2',
    insights: 'insights2',
    status: 'active',
  },
  {
    id: 'dfgehfgh',
    timestamp: new Date('2021-09-03'),
    title: 'title3',
    category: ['백엔드', '프로젝트'],
    favorite: true,
    description: 'description3',
    solution: 'solution3',
    insights: 'insights3',
    status: 'active',
  },
];

//deFaultCategory의 값들을 키로 갖고 value는 {bg:bg-색-50,click:bg-색-200}인 객체인 랜덤한 색인 객체 생성,atom 아니고 객체
// getRandomColorClass 함수를 사용하지 않고 직접 지정
const category: Record<string, { bg: string; click: string }> = {
  시험: { bg: 'bg-red-200', click: 'bg-red-400' },
  프로젝트: { bg: 'bg-blue-200', click: 'bg-blue-400' },
  업무: { bg: 'bg-green-200', click: 'bg-green-400' },
  일상: { bg: 'bg-yellow-200', click: 'bg-yellow-400' },
  프론트엔드: { bg: 'bg-purple-200', click: 'bg-purple-400' },
  백엔드: { bg: 'bg-indigo-200', click: 'bg-indigo-400' },
  디자인: { bg: 'bg-pink-200', click: 'bg-pink-400' },
  기획: { bg: 'bg-teal-200', click: 'bg-teal-400' },
  데브옵스: { bg: 'bg-orange-200', click: 'bg-orange-400' },
  '데이터 사이언스': { bg: 'bg-cyan-200', click: 'bg-cyan-400' },
  QA: { bg: 'bg-lime-200', click: 'bg-lime-400' },
  보안: { bg: 'bg-amber-200', click: 'bg-amber-400' },
  '모바일 개발': { bg: 'bg-emerald-200', click: 'bg-emerald-400' },
  '게임 개발': { bg: 'bg-fuchsia-200', click: 'bg-fuchsia-400' },
  'AI/머신러닝': { bg: 'bg-rose-200', click: 'bg-rose-400' },
  블록체인: { bg: 'bg-violet-200', click: 'bg-violet-400' },
  사물인터넷: { bg: 'bg-sky-200', click: 'bg-sky-400' },
  '클라우드 컴퓨팅': { bg: 'bg-blue-200', click: 'bg-blue-400' },
  네트워크: { bg: 'bg-Gray-200', click: 'bg-Gray-400' },
  '시스템 엔지니어링': { bg: 'bg-red-200', click: 'bg-red-400' },
  '테크니컬 라이터': { bg: 'bg-gray-200', click: 'bg-gray-400' },
  교육: { bg: 'bg-blue-200', click: 'bg-blue-400' },
};

const deFaultCategory = Object.keys(category);

export const logListAtom = atom<FormFields[]>(mockDatalist);

export const searchTextAtom = atom('');

const storage = createJSONStorage<string | null>(() => sessionStorage);

export const selectedIdAtom = atomWithStorage<string | null>(
  'seletedId',
  null,
  storage
);

export const categoryListAtom = atom((get) => Object.keys(get(categoriesAtom)));
export const categoriesAtom = atom(category);

//delete 버튼 누른 상태인지
export const isDeletingAtom = atom<boolean>(false);
export const deletedIdsAtom = atom<string[]>([]);

//sort by favorite
export const isSortingByFavoriteAtom = atom<boolean>(false);

//sort by category
export const sortedCategoryAtom = atom<string[]>([]);
