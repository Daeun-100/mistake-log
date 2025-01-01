type OwnProps = {
  categoryName: string;
};

const CategoryRow: React.FC<OwnProps> = ({ categoryName }) => {
  return (
    <div className="flex gap-4">
      <input type="checkbox"></input>
      <div className="flex gap-2">
        <div>{categoryName}</div>
        <div>✏️</div>
      </div>
      <div className="flex gap-2">
        <div>색</div>
        <div>🎨</div>
      </div>
    </div>
  );
};

export default CategoryRow;
