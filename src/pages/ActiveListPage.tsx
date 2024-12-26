import LogItem from '../components/LogItem';
import { useAtom } from 'jotai';
import { logListAtom } from '../atom';

const ActiveListPage = () => {
  const [logList, setLogList] = useAtom(logListAtom);
  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 w-full">
      <div className="w-80 border-2 bg-slate-300">로그 추가</div>

      <div className="bg-lime-500 flex justify-between w-full">
        <div>검색바</div>
        <div className="bg-slate-200">옵션</div>
      </div>
      <div className="w-full h-full">
        {logList.map((data, index) => (
          <LogItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default ActiveListPage;
