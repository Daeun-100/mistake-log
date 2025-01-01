import { colors } from '../../Constants';
import PaleteSlot from './PaleteSlot';
//colors 배열에 있는 색을 사용해서 tailwind 형식으로 "bg-색상-100" "bg-색상-200" 요소를 배열에 추가
const paleteColors = colors
  .map((color) => [`bg-${color}-100`, `bg-${color}-200`])
  .flat();

const Palete = () => {
  console.log(paleteColors);
  return (
    <div className="flex flex-wrap max-w-36 ">
      {paleteColors.map((color) => (
        <PaleteSlot key={color} bgColor={color} />
      ))}
    </div>
  );
};

export default Palete;
