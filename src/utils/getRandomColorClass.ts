// tainwind의 색상 클래스 중 랜덤한 클래스를 반환하는 함수
//  red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose
// 위 색상과  -100 -200 -300 이 붙은 색상 클래스 중 랜덤한 클래스를 반환

export const getRandomColorClass = () => {
  const colors = [
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const shade = Math.floor(Math.random() * 3) + 1;
  return `bg-${color}-${shade}00`;
};

