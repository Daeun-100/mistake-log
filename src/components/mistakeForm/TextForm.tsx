import { Path, UseFormRegister } from 'react-hook-form';
import { TextFormFields, FormFileds } from '../../types';
//내용,해결방법,해결책, 느낀점
//key : cause description solution insights

type InputProps = {
  label: Path<TextFormFields>;
  register: UseFormRegister<FormFileds>;
  required: string;
};

const TextForm: React.FC<InputProps> = ({
  label,
  register,
  required,
}: InputProps) => (
  <>
    <div>{label}</div>
    <textarea
      {...register(label, { required })}
      placeholder="텍스트를 입력해주세요"
    ></textarea>
  </>
);

export default TextForm;
