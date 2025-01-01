import { useAtom } from 'jotai';
import { categoryAtom } from '../atom';
import CategoryRow from '../components/category/CategoryRow';

const CategoryPage = () => {
  const [category, setCategory] = useAtom(categoryAtom);

  return (
    <div>
      <div className="flex gap-6 bg-amber-500 ">
        <div>이름</div>
        <div>색</div>
        <div>사용횟수(빈도)</div>
      </div>
      {category.map((categoryName) => {
        return <CategoryRow key={categoryName} categoryName={categoryName} />;
      })}
    </div>
  );
};

export default CategoryPage;
