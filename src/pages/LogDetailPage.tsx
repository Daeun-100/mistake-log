import LogDetail from '../components/LogDetail';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MistakeForm from '../components/mistakeForm/MistakeForm';
import { selectedIdAtom, logListAtom } from '../atom';
import { useAtom } from 'jotai';

const LogDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [isEdditing, setIsEdditing] = useState(false);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const [logList, setLogList] = useAtom(logListAtom);

  const handleClickBack = () => {
    if (isEdditing) {
      setIsEdditing(false);
      return;
    }

    setSelectedId(null);
    navigate('/');
  };

  const handleClickEdit = () => {
    setIsEdditing(true);
  };

  const handleClickSubmit = () => {
    setIsEdditing(false);
  };

  const handleClickDelete = () => {
    setLogList(logList.filter((log) => log.id !== selectedId));
    navigate('/');
  };

  return (
    <div>
      <div>LogDetailPage</div>
      <div onClick={handleClickBack}>뒤로가기</div>
      <div onClick={handleClickEdit}>수정하기</div>
      <div onClick={handleClickDelete}>삭제하기</div>
      {isEdditing ? (
        <MistakeForm onClickSubmit={handleClickSubmit} />
      ) : (
        <LogDetail />
      )}
    </div>
  );
};

export default LogDetailPage;
