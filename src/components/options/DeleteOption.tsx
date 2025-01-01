import { isDeletingAtom, deletedIdsAtom } from '../../atom';
import { useAtom } from 'jotai';

const DeleteOption = () => {
  const [isDeleting, setIsDeleting] = useAtom(isDeletingAtom);
  const [deletedIds, setDeletedIds] = useAtom(deletedIdsAtom);
  const handleClick = () => {
    setIsDeleting(!isDeleting);
    setDeletedIds([]);
  };

  return (
    <div onClick={handleClick} className="bg-pink-400 hover:cursor-pointer">
      Delete
    </div>
  );
};

export default DeleteOption;
