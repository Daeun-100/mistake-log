import { useAtom } from 'jotai';
import { categoriesAtom, reorderedCategoryNameAtom } from '../atom';
import CategoryRow from '../components/category/CategoryRow';
import UpDownCategoryOption from '../components/options/UpDownCategoryOption';
import DeleteCatetoryOption from '../components/options/DeleteCatetoryOption';

const CategoryPage = () => {
  const [categories, setCategories] = useAtom(categoriesAtom);

  return (
    <div>
      <div className="flex gap-6">
        <DeleteCatetoryOption />
        <UpDownCategoryOption type="up" />
        <UpDownCategoryOption type="down" />
      </div>
      <div>
        <div className="flex gap-6 bg-amber-500 ">
          <div>이름</div>
          <div>색</div>
          <div>사용횟수(빈도)</div>
        </div>
        {categories.map(({ name }) => {
          return <CategoryRow key={name} categoryName={name} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
