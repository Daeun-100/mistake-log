type OwnProps = {
  categoryName: string;
};

type Color = {
  [key: string]: string;
};

const mockCategory = [
  { categoryName: '프론트엔드', id: 1, color: 'red' },
  { categoryName: '백엔드', id: 2, color: 'blue' },
  { categoryName: '디자인', id: 3, color: 'green' },
  { categoryName: '기획', id: 4, color: 'yellow' },
  { categoryName: '데브옵스', id: 5, color: 'purple' },
  { categoryName: '데이터 사이언스', id: 6, color: 'orange' },
  { categoryName: 'QA', id: 7, color: 'pink' },
  { categoryName: '보안', id: 8, color: 'teal' },
  { categoryName: '모바일 개발', id: 9, color: 'cyan' },
  { categoryName: '게임 개발', id: 10, color: 'indigo' },
];

const color: Color = {
  프론트엔드: 'bg-red-50',
  백엔드: 'bg-blue-50',
  디자인: 'bg-green-50',
  기획: 'bg-yellow-50',
  데브옵스: 'bg-purple-50',
  '데이터 사이언스': 'bg-orange-50',
  QA: 'bg-pink-50',
  보안: 'bg-teal-50',
  '모바일 개발': 'bg-cyan-50',
  '게임 개발': 'bg-indigo-50',
};

const getColorByCategory = (name: string) => {
  return color[name] || 'bg-gray-50';
};

const CategoryLabel = ({ categoryName }: OwnProps) => {
  return (
    <div
      className={`p-1 h-8 m-1 whitespace-nowrap ${getColorByCategory(
        categoryName
      )}`}
    >
      {categoryName}
    </div>
  );
};

export default CategoryLabel;
