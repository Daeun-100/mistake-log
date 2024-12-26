import { LogItemFields } from '../types';
import FavoriteOn from '../assets/favorite.svg?react';
import FavoriteNo from '../assets/favorite2.svg?react';

const LogItem: React.FC<LogItemFields> = ({
  timestamp,
  title,
  category,
  favorite,
}) => (
  // each props are used in the component by <div>{props}</div>
  <div className="flex justify-between items-center border-b-2 border-gray-400">
    <div className="flex flex-col pl-4">
      <div>{timestamp.toLocaleString()}</div>
      <div className="text-lg font-semibold ">{title}</div>
      <div>{category.join()}</div>
    </div>
    <div className="flex items-center justify-center pr-4">
      {favorite ? (
        <FavoriteOn width={22} height={22} />
      ) : (
        <FavoriteNo width={22} height={22} />
      )}
    </div>
  </div>
);

export default LogItem;
