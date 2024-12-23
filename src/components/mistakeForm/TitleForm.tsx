import { UseFormRegister } from 'react-hook-form';
import { FormFileds } from '../../types';

type InputProps = {
  label: 'title';
  register: UseFormRegister<FormFileds>;
  required: string;
};

const TitleForm: React.FC<InputProps> = ({
  label,
  register,
  required,
}: InputProps) => (
  <>
    <div>{label}</div>
    <input
      {...register(label, { required })}
      placeholder="제목를 입력해주세요"
    ></input>
  </>
);

export default TitleForm;
