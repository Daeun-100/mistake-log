import { set, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FormFields } from '../../../types';
import { useState } from 'react';
import CategoryLabel from '../../category/CategoryLabel';
import { categoriesAtom } from '../../../atom';
import { useAtom } from 'jotai';
//내용,해결방법,해결책, 느낀점
//key : cause description solution insights

type InputProps = {
  label: 'category';
  register: UseFormRegister<FormFields>;
  setValue: UseFormSetValue<FormFields>;
};

const CategoryForm: React.FC<InputProps> = ({
  label,
  register,
  setValue,
}: InputProps) => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [addCategoryName, setAddCategoryName] = useState<string>('');

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  const handleClickAddCategory = () => {
    setAddCategory(!addCategory);
  };

  const onChangeAddCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddCategoryName(e.target.value);
  };

  const handleClickAddButton = () => {
    // setCategoryColor로 바꿔야함
    // setCategory([...category, addCategoryName]);
    setAddCategoryName('');
    setAddCategory(false);
  };

  const handleClickCategory = (categoryName: string) => {
    let newCategory;
    if (selectedCategory.includes(categoryName)) {
      newCategory = selectedCategory.filter(
        (category) => category !== categoryName
      );
    } else {
      newCategory = [...selectedCategory, categoryName];
    }
    //state를 꼭 써야하나,,,?
    setSelectedCategory(newCategory);
    setValue('category', newCategory);
  };

  const handleClickDelete = (categoryName: string) => {
    const newCategory = selectedCategory.filter(
      (category) => category !== categoryName
    );
    setSelectedCategory(newCategory);
    setValue('category', newCategory);
  };

  return (
    <div className="flex gap-2 relative">
      <div>{label}</div>
      <div className="hover:cursor-pointer" onClick={handleOpenCategory}>
        +
      </div>
      <input
        {...register(label)}
        className="w-full pointer-events-none bg-slate-200 hidden"
      />
      <div className=" flex flex-wrap">
        {selectedCategory.map((categoryName) => (
          <CategoryLabel
            key={categoryName}
            categoryName={categoryName}
            onClickDelete={handleClickDelete}
            type="display"
          ></CategoryLabel>
        ))}
      </div>
      {openCategory && (
        <div
          className="flex flex-wrap absolute flex-grow bg-white border-2 border-purple-300 top-6 left-16 min-w-[405px] min-h-11 max-h-44 overflow-y-auto z-50"
          style={{ width: 'calc(100% - 4rem)' }}
        >
          {categories.map(({ name }) => (
            <CategoryLabel
              key={name}
              categoryName={name}
              handleClickCategory={handleClickCategory}
              type="selector"
              alreadySelected={selectedCategory.includes(name)}
            ></CategoryLabel>
          ))}
          <div className="bg-green-400">
            {addCategory ? (
              <div className="flex">
                <input
                  placeholder="카테고리를 입력해주세요"
                  value={addCategoryName}
                  onChange={onChangeAddCategory}
                ></input>
                <div onClick={handleClickAddButton}>추가</div>
              </div>
            ) : (
              <div onClick={handleClickAddCategory}>카테고리 추가</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryForm;
