import { UseFormRegister } from 'react-hook-form';
import { FormFields } from '../../../types';

type InputProps = {
  label: 'title';
  register: UseFormRegister<FormFields>;
  required: string;
};

const TitleForm: React.FC<InputProps> = ({
  label,
  register,
  required,
}: InputProps) => (
  <div className="w-full flex-col ">
    <div className="font-semibold">{label}</div>
    <input
      {...register(label, { required })}
      placeholder="제목를 입력해주세요"
      className="w-full border-b-2 border-gray-400 pl-2  pr-2 h-8 outline-none"
    ></input>
  </div>
);

export default TitleForm;
