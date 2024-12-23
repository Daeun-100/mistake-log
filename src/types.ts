export type TextFormFields = {
  cause: string;
  description: string;
  solution: string;
  insights: string;
};
type otherFields = {
  title: string;
  category: string[];
  timestamp: string;
  severity: number;
  frequency: number;
  relatedMistakes?: number[];
  favorite?: boolean; // 즐겨찾기
  status?: string; //  "archived"
};
export type FormFileds = TextFormFields & otherFields;
