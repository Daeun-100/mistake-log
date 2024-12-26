import { LogItemFields } from '../types';
import FavoriteOn from '../assets/favorite.svg?react';
import FavoriteNo from '../assets/favorite2.svg?react';
import { selectedIdAtom, logListAtom } from '../atom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const LogItem: React.FC<LogItemFields> = ({
  id,
  timestamp,
  title,
  category,
  favorite,
}) => {
  const [logList, setLogList] = useAtom(logListAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const navigate = useNavigate();

  const handleItemClick = () => {
    setSelectedId(id);
    navigate('/detail');
  };

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    const newLogList = logList.map((log) => {
      if (log.id === id) {
        return { ...log, favorite: !log.favorite };
      }
      return log;
    });
    setLogList(newLogList);
  };

  return (
    <div
      className="flex justify-between items-center border-b-2 border-gray-400"
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
  );
};

export default LogItem;
