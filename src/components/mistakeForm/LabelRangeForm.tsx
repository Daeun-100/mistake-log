import { UseFormRegister } from 'react-hook-form';
import { FormFileds } from '../../types.js';
//내용,해결방법,해결책, 느낀점
//key : cause description solution insights

type InputProps = {
  label: 'severity' | 'frequency';
  register: UseFormRegister<FormFileds>;
};

const LabelRangeForm: React.FC<InputProps> = ({
  label,
  register,
}: InputProps) => (
  <>
    <input {...register(label)} type="number" placeholder={label}></input>
  </>
);

export default LabelRangeForm;
