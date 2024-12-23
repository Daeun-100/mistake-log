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
    <>
      <input {...register('timestamp')} type="text" placeholder="타임스탬프" />
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <TitleForm
          label="title"
          register={register}
          required="제목은 필수입니다."
        />
        {errors.title && <div>{errors.title.message}</div>}

        <CategoryForm label="category" register={register} />
        <TextForm
          label="cause"
          register={register}
          required="원인은 필수입니다."
        />
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
        <LabelRangeForm label="severity" register={register} />
        <LabelRangeForm label="frequency" register={register} />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? '로딩' : '저장'}
        </button>
        {errors.root && <div>{errors.root.message}</div>}
      </form>
    </>
  );
};

export default WriteForm;
