import { UseFormRegister } from 'react-hook-form';
import { FormFileds } from '../../types';
//내용,해결방법,해결책, 느낀점
//key : cause description solution insights

type InputProps = {
  label: 'category';
  register: UseFormRegister<FormFileds>;
};

const CategoryForm: React.FC<InputProps> = ({
  label,
  register,
}: InputProps) => (
  <div className="flex gap-2">
    <div>{label}</div>
    <input
      {...register(label)}
      className="w-full"
      placeholder="카테고리를 입력해주세요"
    ></input>
  </div>
);

export default CategoryForm;
