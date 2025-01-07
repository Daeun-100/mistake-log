import { useAtom } from 'jotai';
import { categoriesAtom } from '../../atom';
import { useEffect, useState, useMemo } from 'react';
import { Category } from '../../types';

type CategoryLabelType = 'selector' | 'display';
type SelectorProps = {
  type: 'selector';
  categoryName: string;
  handleClickCategory: (categoryName: string) => void; // 필수
  onClickDelete?: never; // 사용 불가
  alreadySelected: boolean;
};

type DisplayProps = {
  type: 'display';
  categoryName: string;
  handleClickCategory?: never; // 사용 불가
  onClickDelete: (categoryName: string) => void; // 필수
  alreadySelected?: never; // 사용 불가
};
type OwnProps = SelectorProps | DisplayProps;

const CategoryLabel = ({
  categoryName,
  handleClickCategory,
  onClickDelete,
  type,
  alreadySelected,
}: OwnProps) => {
  const categories = useAtom(categoriesAtom)[0];

  const category = useMemo(() => {
    return (
      categories.find((category) => category.name === categoryName) || {
        name: '',
        bg: '',
        click: '',
      }
    );
  }, [categories]);

  console.log(category);
  const [isSelected, setIsSelected] = useState(alreadySelected);

  const handleClickSelector = () => {
    if (type === 'display') return;
    handleClickCategory && handleClickCategory(categoryName);
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`flex p-1 h-8 m-1 whitespace-nowrap hover:cursor-pointer ${
        isSelected ? category.click : category.bg
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
