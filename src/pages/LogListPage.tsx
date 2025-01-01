import LogItem from '../components/LogItem';
import { useAtom } from 'jotai';
import { logListAtom, searchTextAtom } from '../atom';
import { useState } from 'react';
import MistakeFrom from '../components/mistakeForm/MistakeForm';
import SearchBar from '../components/SearchBar';
import decomposeHangul from '../utils/decomposeHangul';

type OwnProps = {
  onClickAdd: () => void;
};

const LogListPage: React.FC<OwnProps> = ({ onClickAdd }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [logList, setLogList] = useAtom(logListAtom);
  const [searchText, setSearchText] = useAtom<string>(searchTextAtom);

  let filteredList = logList;
  if (searchText !== '') {
    filteredList = logList.filter((log) => {
      const decomposedTitle = decomposeHangul(log.title); // 제목 분해
      const decomposedSearchText = decomposeHangul(searchText); // 검색어 분해
      return decomposedTitle.includes(decomposedSearchText);
    });
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 w-full">
      <div className="w-80 border-2 bg-slate-300" onClick={onClickAdd}>
        로그 추가
      </div>

      <div className="flex justify-between w-full">
        <SearchBar></SearchBar>
        <div className="bg-slate-200">옵션</div>
      </div>
      <div className="w-full h-full">
        {filteredList.map((data) => (
          <LogItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default LogListPage;
