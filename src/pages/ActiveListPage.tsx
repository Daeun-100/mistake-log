import { FormFields } from '../types';
import LogItem from '../components/LogItem';
const mockDatalist: FormFields[] = [
  {
    timestamp: '2021-09-01',
    title: 'title1',
    category: ['category1', 'category2'],
    favorite: true,
    description: 'description1lsdkfjlsdkfjlsdkfjalsdkfjalsdfkjaldfkjaldkfjl',
    solution: 'solution1sdf.kjsdlfkjsdlfkjsldfkja',
    insights: 'insights1dfglkjfdlgkdjfgl',
    severity: 1,
    frequency: 1,
    status: 'active',
  },
  {
    timestamp: '2021-09-02',
    title: 'title2',
    category: ['category2', 'category3'],
    favorite: false,
    description: 'description2',
    solution: 'solution2',
    insights: 'insights2',
    severity: 2,
    frequency: 2,
    status: 'active',
  },
  {
    timestamp: '2021-09-03',
    title: 'title3',
    category: ['category3', 'category4'],
    favorite: true,
    description: 'description3',
    solution: 'solution3',
    insights: 'insights3',
    severity: 3,
    frequency: 3,
    status: 'active',
  },
];

const ActiveListPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 pt-6 w-full">
      <div className="w-80 border-2 bg-slate-300">로그 추가</div>

      <div className="bg-lime-500 flex justify-between w-full">
        <div>검색바</div>
        <div className="bg-slate-200">옵션</div>
      </div>
      <div className="w-full h-full">
        {mockDatalist.map((data, index) => (
          <LogItem key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default ActiveListPage;
