import { useAtom } from 'jotai';
import {
  logListAtom,
  categoriesAtom,
  recoloredCategoryNameAtom,
} from '../../atom';
import { useState, useRef, useEffect, useMemo } from 'react';
import Palete from '../palete/Palete';
import { Category } from '../../types';

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

  const category = useMemo(() => {
    return (
      categories.find((category) => category.name === categoryName) || {
        name: '',
        bg: '',
        click: '',
      }
    );
  }, [categories]);

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
      const newCategories = [...categories];
      const newCategory = {
        name: newCategoryName,
        bg: category.bg,
        click: category.click,
      };
      const index = newCategories.findIndex(
        (category) => category.name === categoryName
      );

      newCategories[index] = newCategory;
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
        <div className={`w-4 h-4 ${category.bg}`}></div>
        <div onClick={handleClickRecolor}>🎨</div>
        {isRecloring ? <Palete /> : null}
      </div>
    </div>
  );
};

export default CategoryRow;
