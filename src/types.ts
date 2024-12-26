//FormField에서 description:, solution:, insights: 만 뽑아서 저장
//pick 함수를 사용해서 뽑아내기

export type FormFields = {
  timestamp: Date;
  title: string;
  category: string[];
  favorite: boolean;
  description: string;
  solution: string;
  insights: string;
  severity: number;
  frequency: number;
  relatedMistakes?: number[];
  status: 'archived' | 'active';
};

export type TextFormFields = Pick<
  FormFields,
  'description' | 'solution' | 'insights'
>;

//LogItemFields도 위와 같이 Pick 함수를 사용해서 뽑아내기
export type LogItemFields = Pick<
  FormFields,
  'timestamp' | 'title' | 'category' | 'favorite'
>;
