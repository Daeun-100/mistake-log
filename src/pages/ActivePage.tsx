import LogItem from '../components/LogItem';
import { useAtom } from 'jotai';
import { logListAtom } from '../atom';
import { useState, useEffect } from 'react';
import MistakeFrom from '../components/mistakeForm/MistakeForm';
import LogListPage from './LogListPage';
import LogAddPage from './LogAddPage';

const ActivePage = () => {
  const [logList, setLogList] = useAtom(logListAtom);
  const [isAdding, setIsAdding] = useState(false);

  const handleClickAdd = () => {
    setIsAdding(true);
  };

  const handleClickBack = () => {
    setIsAdding(false);
  };

  const handleClickSubmit = () => {
    setIsAdding(false);
  };

  return isAdding ? (
    <LogAddPage
      onClickBack={handleClickBack}
      onclickSubmint={handleClickSubmit}
    />
  ) : (
    <LogListPage onClickAdd={handleClickAdd} />
  );
};

export default ActivePage;
