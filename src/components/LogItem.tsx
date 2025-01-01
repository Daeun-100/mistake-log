import { LogItemFields } from '../types';
import FavoriteOn from '../assets/favorite.svg?react';
import FavoriteNo from '../assets/favorite2.svg?react';
import {
  selectedIdAtom,
  logListAtom,
  isDeletingAtom,
  deletedIdsAtom,
} from '../atom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const LogItem: React.FC<LogItemFields> = ({
  id,
  timestamp,
  title,
  category,
  favorite,
}) => {
  const [logList, setLogList] = useAtom(logListAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const [isDeleting, setIsDeleting] = useAtom(isDeletingAtom);
  const [deletedIds, setDeletedIds] = useAtom(deletedIdsAtom);
  const navigate = useNavigate();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleItemClick = () => {
    if (isDeleting && checkboxRef.current) {
      checkboxRef.current.click();
      return;
    }
    setSelectedId(id);
    navigate('/detail');
  };

  const handleFavoriteClick = (event: React.MouseEvent) => {
    if (isDeleting && checkboxRef.current) return;

    event.stopPropagation();
    const newLogList = logList.map((log) => {
      if (log.id === id) {
        return { ...log, favorite: !log.favorite };
      }
      return log;
    });
    setLogList(newLogList);
  };

  const handleClickCheckBox = (event: React.ChangeEvent) => {
    setDeletedIds([...deletedIds, id]);
  };

  return (
    <div className="flex w-full">
      {isDeleting ? (
        <div>
          <input
            type="checkbox"
            ref={checkboxRef}
            onChange={(event) => handleClickCheckBox(event)}
          ></input>
        </div>
      ) : null}
      <div
        className="flex flex-grow justify-between items-center border-b-2 border-gray-400"
        onClick={handleItemClick}
      >
        <div className="flex flex-col pl-4  onClick={handleItemClick}">
          <div>{timestamp.toLocaleString()}</div>
          <div className="text-lg font-semibold ">{title}</div>
          <div>{category.join()}</div>
        </div>
        <div
          className="flex items-center justify-center pr-4 p-3 "
          onClick={handleFavoriteClick}
        >
          {favorite ? (
            <FavoriteOn width={22} height={22} />
          ) : (
            <FavoriteNo width={22} height={22} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogItem;
