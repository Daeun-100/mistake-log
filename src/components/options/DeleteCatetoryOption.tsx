import {
  categoriesAtom,
  reorderedCategoryNameAtom,
  logListAtom,
} from '../../atom';
import { useAtom } from 'jotai';
const DeleteCatetoryOption = () => {
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [reorderedCategoryName, setReorderedCategoryName] = useAtom(
    reorderedCategoryNameAtom
  );
  const [logList, setLogList] = useAtom(logListAtom);

  const handleClickDelete = () => {
    const newCategories = categories.filter(
      (category) => category.name !== reorderedCategoryName
    );
    setCategories(newCategories);
    const newLogList = logList.map((log) => {
      const newCategory = log.category.filter(
        (category) => category !== reorderedCategoryName
      );
      return { ...log, category: newCategory };
    });
    setLogList(newLogList);
  };

  return <div onClick={handleClickDelete}>삭제</div>;
};

export default DeleteCatetoryOption;
