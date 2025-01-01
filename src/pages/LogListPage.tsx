import LogItem from '../components/LogItem';
import { useAtom } from 'jotai';
import {
  logListAtom,
  searchTextAtom,
  isDeletingAtom,
  deletedIdsAtom,
} from '../atom';
import { useState } from 'react';
import MistakeFrom from '../components/mistakeForm/MistakeForm';
import SearchBar from '../components/SearchBar';
import decomposeHangul from '../utils/decomposeHangul';
import DeleteOption from '../components/options/DeleteOption';

type OwnProps = {
  onClickAdd: () => void;
};

const LogListPage: React.FC<OwnProps> = ({ onClickAdd }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [logList, setLogList] = useAtom(logListAtom);
  const [searchText, setSearchText] = useAtom<string>(searchTextAtom);
  const [isDeleting, setIsDeleting] = useAtom(isDeletingAtom);
  const [deletedIds, setDeletedIds] = useAtom(deletedIdsAtom);

  let filteredList = logList;
  if (searchText !== '') {
    filteredList = logList.filter((log) => {
      const decomposedTitle = decomposeHangul(log.title); // 제목 분해
      const decomposedSearchText = decomposeHangul(searchText); // 검색어 분해
      return decomposedTitle.includes(decomposedSearchText);
    });
  }

  const handleClickDelete = () => {
    const newLogList = logList.filter((log) => !deletedIds.includes(log.id));
    setLogList(newLogList);
    setDeletedIds([]);
    setIsDeleting(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 w-full">
      <div className="flex gap-2">
        <div className="w-80  bg-slate-300" onClick={onClickAdd}>
          로그 추가
        </div>
        <DeleteOption />
        <div className="bg-pink-500 whitespace-nowrap">아카이브</div>
        <div className="bg-pink-500 whitespace-nowrap">정렬</div>
      </div>

      <div className="flex justify-between w-full">
        <SearchBar></SearchBar>
      </div>
      <div className="w-full h-full">
        {filteredList.map((data) => (
          <LogItem key={data.id} {...data} />
        ))}
      </div>
      {isDeleting ? <div onClick={handleClickDelete}>삭제하기</div> : null}
    </div>
  );
};

export default LogListPage;
