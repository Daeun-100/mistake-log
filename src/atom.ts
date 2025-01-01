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
    severity: 1,
    frequency: 1,
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
    severity: 2,
    frequency: 2,
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

//deFaultCategory의 값들을 키로 갖고 value는 {bg:bg-색-50,click:bg-색-200}인 객체인 랜덤한 색인 객체 생성,atom 아니고 객체
// getRandomColorClass 함수를 사용하지 않고 직접 지정
const categoryColor: Record<string, { bg: string; click: string }> = {
  시험: { bg: 'bg-red-50', click: 'bg-red-200' },
  프로젝트: { bg: 'bg-blue-50', click: 'bg-blue-200' },
  업무: { bg: 'bg-green-50', click: 'bg-green-200' },
  일상: { bg: 'bg-yellow-50', click: 'bg-yellow-200' },
  프론트엔드: { bg: 'bg-purple-50', click: 'bg-purple-200' },
  백엔드: { bg: 'bg-indigo-50', click: 'bg-indigo-200' },
  디자인: { bg: 'bg-pink-50', click: 'bg-pink-200' },
  기획: { bg: 'bg-teal-50', click: 'bg-teal-200' },
  데브옵스: { bg: 'bg-orange-50', click: 'bg-orange-200' },
  '데이터 사이언스': { bg: 'bg-cyan-50', click: 'bg-cyan-200' },
  QA: { bg: 'bg-lime-50', click: 'bg-lime-200' },
  보안: { bg: 'bg-amber-50', click: 'bg-amber-200' },
  '모바일 개발': { bg: 'bg-emerald-50', click: 'bg-emerald-200' },
  '게임 개발': { bg: 'bg-fuchsia-50', click: 'bg-fuchsia-200' },
  'AI/머신러닝': { bg: 'bg-rose-50', click: 'bg-rose-200' },
  블록체인: { bg: 'bg-violet-50', click: 'bg-violet-200' },
  사물인터넷: { bg: 'bg-sky-50', click: 'bg-sky-200' },
  '클라우드 컴퓨팅': { bg: 'bg-blueGray-50', click: 'bg-blueGray-200' },
  네트워크: { bg: 'bg-warmGray-50', click: 'bg-warmGray-200' },
  '시스템 엔지니어링': { bg: 'bg-trueGray-50', click: 'bg-trueGray-200' },
  '테크니컬 라이터': { bg: 'bg-coolGray-50', click: 'bg-coolGray-200' },
  교육: { bg: 'bg-lightBlue-50', click: 'bg-lightBlue-200' },
};

export const logListAtom = atom<FormFields[]>(mockDatalist);

export const searchTextAtom = atom('');

const storage = createJSONStorage<string | null>(() => sessionStorage);

export const selectedIdAtom = atomWithStorage<string | null>(
  'seletedId',
  null,
  storage
);

export const categoryAtom = atom<string[]>(deFaultCategory);
export const categoryColorAtom = atom(categoryColor);

//delete 버튼 누른 상태인지
export const isDeletingAtom = atom<boolean>(false);
export const deletedIdsAtom = atom<string[]>([]);

//sort by favorite
export const isSortingByFavoriteAtom = atom<boolean>(false);

//sort by category
export const sortedCategoryAtom = atom<string[]>([]);
