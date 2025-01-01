import { useAtom } from 'jotai';
import { isSortingByFavoriteAtom } from '../../atom';

const SortByFavorite = () => {
  const [isSortingByFavorite, setIsSortingByFavorite] = useAtom(
    isSortingByFavoriteAtom
  );

  const handleClick = () => {
    setIsSortingByFavorite(!isSortingByFavorite);
  };

  return (
    <div onClick={handleClick} className="bg-pink-400 hover:cursor-pointer">
      ⭐
    </div>
  );
};

export default SortByFavorite;
