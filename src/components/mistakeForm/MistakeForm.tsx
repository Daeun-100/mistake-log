import { set, SubmitHandler, useForm } from 'react-hook-form';
import TextForm from './TextForm';
import { DefaultValues, FormFields } from '../../types';
import TitleForm from './TitleForm';
import CategoryForm from './CategoryForm';
import LabelRangeForm from './LabelRangeForm';
import { logListAtom, selectedIdAtom } from '../../atom';
import { useAtom } from 'jotai';
import { useLocation } from 'react-router-dom';
import { DEFAULT_VALUES } from '../../Constants';
import { useEffect, useState } from 'react';

type OwnProps = {
  onClickSubmit: () => void;
};

const MistakeForm: React.FC<OwnProps> = ({ onClickSubmit }) => {
  const [logList, setLogList] = useAtom(logListAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (location.pathname.includes('detail')) {
      //상세페이지, 수정할때 불러옴
      const data = logList.find((log) => log.id === selectedId);

      if (!data) {
        console.error('선택된 로그가 없습니다.');
        return;
      }
      reset(data);
    }
  }, []);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const finalData = {
        ...data,
        timestamp: new Date(),
      };

      if (location.pathname.includes('detail')) {
        const newLogList = logList.map((log) => {
          if (log.id === selectedId) return finalData;
          return log;
        });
        setLogList(newLogList);
      } else {
        setLogList([...logList, finalData]);
      }

      onClickSubmit();
    } catch (e) {
      setError('root', {
        type: 'manual',
        message: '에러가 발생했습니다.',
      });
    }
  };

  return (
    <div className="w-1/2 bg-slate-200 p-4 min-w-form">
      <form className=" flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('timestamp')}
          type="text"
          placeholder="12/26/2024"
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

export default MistakeForm;
