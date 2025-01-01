import { useAtom } from 'jotai';
import { categoryAtom, logListAtom } from '../../atom';
import { useState, useRef, useEffect } from 'react';

type OwnProps = {
  categoryName: string;
};

const CategoryRow: React.FC<OwnProps> = ({ categoryName }) => {
  const [category, setCategory] = useAtom(categoryAtom);
  const [logList, setLogList] = useAtom(logListAtom);
  const [newCategoryName, setNewCategoryName] = useState(categoryName);
  const [isRenaming, setIsRenaming] = useState(false);
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

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newCategory = category.map((name) => {
        if (name === categoryName) {
          return newCategoryName;
        }
        return name;
      });
      setCategory(newCategory);
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
        <div>색</div>
        <div>🎨</div>
      </div>
    </div>
  );
};

export default CategoryRow;
