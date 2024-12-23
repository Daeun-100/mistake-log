import { SubmitHandler, useForm } from 'react-hook-form';
import TextForm from './TextForm';
import { FormFileds } from '../../types';
import TitleForm from './TitleForm';
import CategoryForm from './CategoryForm';
import LabelRangeForm from './LabelRangeForm';

const WriteForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFileds>({
    defaultValues: {
      severity: 1,
      frequency: 1,
    },
  });

  const onSubmit: SubmitHandler<FormFileds> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error('에러 발생');
      console.log(data);
    } catch (e) {
      setError('root', {
        type: 'manual',
        message: '에러가 발생했습니다.',
      });
    }
  };

  return (
    <div className="w-1/2 bg-slate-200 p-4">
      <form className=" flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('timestamp')}
          type="text"
          placeholder="타임스탬프"
          className="w-full border-b-2 border-gray-400 outline-none"
        />
        <TitleForm
          label="title"
          register={register}
          required="제목은 필수입니다."
        />
        <div className="flex gap-2">
          <LabelRangeForm label="severity" register={register} />
          <LabelRangeForm label="frequency" register={register} />
        </div>

        <CategoryForm label="category" register={register} />

        <TextForm
          label="description"
          register={register}
          required="내용은 필수입니다."
        />
        <TextForm
          label="solution"
          register={register}
          required="해결방법은 필수입니다."
        />
        <TextForm
          label="insights"
          register={register}
          required="느낀점은 필수입니다."
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? '로딩' : '저장'}
        </button>
        {errors.root && <div>{errors.root.message}</div>}
      </form>
    </div>
  );
};

export default WriteForm;
