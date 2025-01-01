import { useAtom } from 'jotai';
import {
  categoryListAtom,
  logListAtom,
  categoriesAtom,
  recoloredCategoryNameAtom,
} from '../../atom';
import { useState, useRef, useEffect } from 'react';
import Palete from '../palete/Palete';

type OwnProps = {
  categoryName: string;
};

const CategoryRow: React.FC<OwnProps> = ({ categoryName }) => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [logList, setLogList] = useAtom(logListAtom);
  const [recoloredCategoryName, setRecoloredCategoryNameAtom] = useAtom(
    recoloredCategoryNameAtom
  );
  const [newCategoryName, setNewCategoryName] = useState(categoryName);
  const [isRenaming, setIsRenaming] = useState(false);
  const [isRecloring, setIsRecoloring] = useState(false);
  const renameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming && renameRef.current) {
      renameRef.current.focus();
      renameRef.current.click();
    }
  }, [isRenaming]);

  const handleClickRename = () => {
    setIsRenaming(!isRenaming);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(e.target.value);
  };

  const handleClickRecolor = () => {
    setRecoloredCategoryNameAtom(categoryName);
    setIsRecoloring(!isRecloring);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const color = categories[categoryName];
      const newCategories = { ...categories };
      delete newCategories[categoryName];
      newCategories[newCategoryName] = color;
      setCategories(newCategories);

      const newLogList = logList.map((log) => {
        if (log.category.includes(categoryName)) {
          return {
            ...log,
            category: log.category.map((name) => {
              if (name === categoryName) {
                return newCategoryName;
              }
              return name;
            }),
          };
        }
        return log;
      });
      setLogList(newLogList);

      const newCategoryOrder = Object.keys(categories).map((key) =>
        key === categoryName ? newCategoryName : key
      );
      const orderedCategories = newCategoryOrder.reduce((acc, key) => {
        acc[key] = newCategories[key];
        return acc;
      }, {} as typeof categories);
      setCategories(orderedCategories);

      setIsRenaming(false);
    }
  };

  return (
    <div className="flex gap-4">
      <input type="checkbox"></input>
      <div className="flex gap-2">
        {isRenaming ? (
          <input
            value={newCategoryName}
            onChange={handleChangeName}
            onKeyDown={handleEnter}
            ref={renameRef}
            className="max-w-36 w-fit"
          ></input>
        ) : (
          <div>{categoryName}</div>
        )}
        <div onClick={handleClickRename}>✏️</div>
      </div>
      <div className="flex gap-2">
        <div className={`w-4 h-4 ${categories[categoryName].bg}`}></div>
        <div onClick={handleClickRecolor}>🎨</div>
        {isRecloring ? <Palete /> : null}
      </div>
    </div>
  );
};

export default CategoryRow;
