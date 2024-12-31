import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../types';
import { useState } from 'react';
import CategoryLabel from '../../category/CategoryLabel';
//내용,해결방법,해결책, 느낀점
//key : cause description solution insights

type InputProps = {
  label: 'category';
  register: UseFormRegister<FormFields>;
};

const CategoryForm: React.FC<InputProps> = ({
  label,
  register,
}: InputProps) => {
  const [openCategory, setOpenCategory] = useState(false);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  return (
    <div className="flex gap-2 relative">
      <div>{label}</div>
      <div className="hover:cursor-pointer" onClick={handleOpenCategory}>
        +
      </div>
      {openCategory && (
        <div
          className="absolute flex-grow bg-white border-2 border-purple-300 top-6 left-16 min-w-[405px]   h-24 "
          style={{ width: 'calc(100% - 4rem)' }}
        >
          카테고리 추가창
          <div className="flex">
            <CategoryLabel categoryName="프론트엔드"></CategoryLabel>
            <CategoryLabel categoryName="백엔드"></CategoryLabel>
            <CategoryLabel categoryName="디자인"></CategoryLabel>
            <CategoryLabel categoryName="기획"></CategoryLabel>
            <CategoryLabel categoryName="데브옵스"></CategoryLabel>
            <CategoryLabel categoryName="데이터 사이언스"></CategoryLabel>
            <CategoryLabel categoryName="QA"></CategoryLabel>
            <CategoryLabel categoryName="보안"></CategoryLabel>
            <CategoryLabel categoryName="모바일 개발"></CategoryLabel>
          </div>
        </div>
      )}
      <input
        {...register(label)}
        className="w-full pointer-events-none bg-slate-200"
        placeholder="카테고리를 추가해주세요"
      ></input>
    </div>
  );
};

export default CategoryForm;
