type OwnProps = {
  categoryName: string;
  handleClickCategory?: (categoryName: string) => void;
  isSelected?: boolean;
  onClickDelete?: (categoryName: string) => void;
};

type Color = {
  [key: string]: string;
};

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

const CategoryLabel = ({
  categoryName,
  handleClickCategory,
  isSelected = false,
  onClickDelete,
}: OwnProps) => {
  return (
    <div
      className={`flex p-1 h-8 m-1 whitespace-nowrap hover:cursor-pointer ${getColorByCategory(
        categoryName
      )}`}
      onClick={() => handleClickCategory && handleClickCategory(categoryName)}
    >
      <div className="pr-2">{categoryName}</div>
      {isSelected ? (
        <div
          className="pr-1 relative -top-0.5"
          onClick={() => onClickDelete && onClickDelete(categoryName)}
        >
          x
        </div>
      ) : null}
    </div>
  );
};

export default CategoryLabel;
