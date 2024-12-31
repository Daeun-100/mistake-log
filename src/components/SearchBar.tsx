import { searchTextAtom } from '../atom';

import { SetStateAction, useAtom } from 'jotai';

const SearchBar = () => {
  const [searchText, setSearchText] = useAtom<string>(searchTextAtom);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchText(e.target.value);
  };

  return (
    <input
      className="bg-lime-500 flex-grow h-8 pl-2 pr-2"
      placeholder="검색바"
      value={searchText}
      onChange={handleChange}
    ></input>
  );
};

export default SearchBar;
