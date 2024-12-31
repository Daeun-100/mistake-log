import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../types';
import { useState } from 'react';
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
        <div className="absolute bg-white border-2 border-purple-300 top-6 left-16 w-[405px] h-24">
          카테고리 추가창
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
