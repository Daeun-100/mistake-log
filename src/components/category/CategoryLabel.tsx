import { useAtom } from 'jotai';
import { categoryColorAtom } from '../../atom';
import { useState } from 'react';

type CategoryLabelType = 'selector' | 'display';
type SelectorProps = {
  type: 'selector';
  categoryName: string;
  handleClickCategory: (categoryName: string) => void; // 필수
  onClickDelete?: never; // 사용 불가
};

type DisplayProps = {
  type: 'display';
  categoryName: string;
  handleClickCategory?: never; // 사용 불가
  onClickDelete: (categoryName: string) => void; // 필수
};
type OwnProps = SelectorProps | DisplayProps;

const CategoryLabel = ({
  categoryName,
  handleClickCategory,
  onClickDelete,
  type,
}: OwnProps) => {
  const categoryColor = useAtom(categoryColorAtom)[0];
  const [isSelected, setIsSelected] = useState(false);

  const handleClickSelector = () => {
    if (type === 'display') return;
    handleClickCategory && handleClickCategory(categoryName);
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`flex p-1 h-8 m-1 whitespace-nowrap hover:cursor-pointer ${
        isSelected
          ? categoryColor[categoryName].click
          : categoryColor[categoryName].bg
      } `}
      onClick={handleClickSelector}
    >
      <div className="pr-2">{categoryName}</div>
      {type === 'display' ? (
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
