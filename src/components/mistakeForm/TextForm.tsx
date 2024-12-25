import { Path, UseFormRegister } from 'react-hook-form';
import { TextFormFields, FormFileds } from '../../types';
//내용,해결방법,해결책, 느낀점
//key :  description solution insights

type InputProps = {
  label: Path<TextFormFields>;
  register: UseFormRegister<FormFileds>;
  required: string;
};

const heightVariant = {
  small: 'h-20',
  medium: 'h-40',
};

const matchHeight = (label: Path<TextFormFields>) => {
  //description solution 은 medium insights는 small
  if (label === 'description' || label === 'solution') {
    return heightVariant.medium;
  }

  return heightVariant.small;
};

const TextForm: React.FC<InputProps> = ({
  label,
  register,
  required,
}: InputProps) => (
  <>
    <div className="font-semibold">{label}</div>
    <textarea
      {...register(label, { required })}
      placeholder="텍스트를 입력해주세요"
      className={`w-full resize-none outline-none border-b-2 pl-2 pt-2 pr-2
         border-gray-400 ${matchHeight(label)}`}
    ></textarea>
  </>
);

export default TextForm;
