import { useAtom } from 'jotai';
import { categoriesAtom, recoloredCategoryNameAtom } from '../../atom';

type OwnProps = {
  bgColor: string;
};

const PaleteSlot: React.FC<OwnProps> = ({ bgColor }) => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [recoloredCategoryName, setRecoloredCategoryNameAtom] = useAtom(
    recoloredCategoryNameAtom
  );

  const handleClickSlot = () => {
    if (recoloredCategoryName === '') return;
    const newCategories = [...categories];
    const color = bgColor.split('-')[1];
    const number = bgColor.split('-')[2];
    const newClickColor = `bg-${color}-${parseInt(number) + 100}`;
    console.log(newClickColor);
    const index = newCategories.findIndex(
      (category) => category.name === recoloredCategoryName
    );

    newCategories[index] = {
      name: recoloredCategoryName,
      bg: bgColor,
      click: newClickColor,
    };

    setCategories(newCategories);
  };

  return (
    <div
      className={`w-4 h-4 cursor-pointer  ${bgColor}`}
      onClick={handleClickSlot}
    ></div>
  );
};

export default PaleteSlot;
