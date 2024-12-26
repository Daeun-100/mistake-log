import LogDetail from '../components/LogDetail';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MistakeForm from '../components/mistakeForm/MistakeForm';
import { selectedIdAtom } from '../atom';
import { useAtom } from 'jotai';

const LogDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [isEdditing, setIsEdditing] = useState(false);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);

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

  return (
    <div>
      <div>LogDetailPage</div>
      <div onClick={handleClickBack}>뒤로가기</div>
      <div onClick={handleClickEdit}>수정하기</div>
      {isEdditing ? (
        <MistakeForm onClickSubmit={handleClickSubmit} />
      ) : (
        <LogDetail />
      )}
    </div>
  );
};

export default LogDetailPage;
