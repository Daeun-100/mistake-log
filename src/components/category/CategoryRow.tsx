type OwnProps = {
  categoryName: string;
};

const CategoryRow: React.FC<OwnProps> = ({ categoryName }) => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2">
        <div>{categoryName}</div>
        <div>✏️</div>
      </div>
      <div className="flex gap-2">
        <div>색</div>
        <div>🎨</div>
      </div>
      <div>삭제</div>
    </div>
  );
};

export default CategoryRow;
