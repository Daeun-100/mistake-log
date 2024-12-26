import { FormFields } from '../types';
import { selectedIdAtom, logListAtom } from '../atom';
import { useAtom } from 'jotai';

const LogDetail: React.FC = () => {
  const [logList, setLogList] = useAtom(logListAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);

  const seletedLog = logList.find((log) => log.id === selectedId);

  if (!seletedLog) return <div>선택된 로그가 없습니다.</div>;

  return (
    <div className="bg-slate-300 w-full h-full p-4">
      <div className="bg-slate-100 p-4">
        <div>날짜 : {seletedLog.timestamp.toLocaleDateString()}</div>
        <div>제목 : {seletedLog.title}</div>
        <div>카테고리 : {seletedLog.category}</div>
        <div>심각성 : {seletedLog.severity}</div>
        <div>빈도 : {seletedLog.frequency}</div>
        <div>내용 : {seletedLog.description}</div>
        <div>해결방법 : {seletedLog.solution}</div>
        <div>느낀점 : {seletedLog.insights}</div>
      </div>
    </div>
  );
};

export default LogDetail;
