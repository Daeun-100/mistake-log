import LogItem from '../components/LogItem';
import { useAtom } from 'jotai';
import { logListAtom } from '../atom';
import { useState } from 'react';
import MistakeFrom from '../components/mistakeForm/MistakeForm';

type OwnProps = {
  onClickAdd: () => void;
};

const LogListPage: React.FC<OwnProps> = ({ onClickAdd }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [logList, setLogList] = useAtom(logListAtom);

  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 w-full">
      <div className="w-80 border-2 bg-slate-300" onClick={onClickAdd}>
        로그 추가
      </div>

      <div className="bg-lime-500 flex justify-between w-full">
        <div>검색바</div>
        <div className="bg-slate-200">옵션</div>
      </div>
      <div className="w-full h-full">
        {logList.map((data) => (
          <LogItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default LogListPage;
