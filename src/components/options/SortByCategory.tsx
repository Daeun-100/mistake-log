import { useAtom } from 'jotai';
import { useState } from 'react';
import { categoryListAtom, sortedCategoryAtom } from '../../atom';
import CategoryLabel from '../category/CategoryLabel';
import { set } from 'react-hook-form';

const SortByCategory = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [category, setCategory] = useAtom(categoryListAtom);
  const [sortedCategory, setSortedCategory] = useAtom(sortedCategoryAtom);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickCategory = (name: string) => {
    if (sortedCategory.includes(name)) {
      setSortedCategory(sortedCategory.filter((category) => category !== name));
    } else {
      setSortedCategory([...sortedCategory, name]);
    }
  };

  const handleClickNone = () => {
    setSortedCategory([]);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="relative bg-pink-400 hover:cursor-pointer"
      >
        카테고리
      </div>
      {isClicked ? (
        <div className="absolute overflow-auto bg-white w-max max-h-96">
          <div onClick={handleClickNone} className="h-8">
            없음
          </div>
          {category.map((name, index) => {
            return (
              <div key={index}>
                <CategoryLabel
                  handleClickCategory={handleClickCategory}
                  categoryName={name}
                  type="selector"
                  alreadySelected={sortedCategory.includes(name)}
                ></CategoryLabel>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SortByCategory;
