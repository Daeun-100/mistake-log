import { categoriesAtom, reorderedCategoryNameAtom } from '../../atom';
import { useAtom } from 'jotai';
type OwnProps = {
  type: 'up' | 'down';
};

const UpDownCategoryOption: React.FC<OwnProps> = ({ type }) => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [reorderedCategoryName, setReorderedCategoryName] = useAtom(
    reorderedCategoryNameAtom
  );
  console.log(reorderedCategoryName);
  const handleClickUp = () => {
    const newCategories = [...categories];
    const index = newCategories.findIndex(
      (category) => category.name === reorderedCategoryName
    );
    if (index === 0) return;
    //구조분해할당으로 순서 변경
    [newCategories[index], newCategories[index - 1]] = [
      newCategories[index - 1],
      newCategories[index],
    ];
    setCategories(newCategories);
  };
  const handleClickDown = () => {
    const newCategories = [...categories];
    const index = newCategories.findIndex(
      (category) => category.name === reorderedCategoryName
    );
    if (index === newCategories.length - 1) return;
    //구조분해할당으로 순서 변경
    [newCategories[index], newCategories[index + 1]] = [
      newCategories[index + 1],
      newCategories[index],
    ];
    setCategories(newCategories);
  };
  return (
    <>
      {type === 'up' ? (
        <div onClick={handleClickUp}>⬆️</div>
      ) : (
        <div onClick={handleClickDown}>⬇️</div>
      )}
    </>
  );
};

export default UpDownCategoryOption;
