export type TextFormFields = {
  description: string;
  solution: string;
  insights: string;
};
export type LogItemFields = {
  timestamp: string;
  title: string;
  category: string[];
  favorite: boolean;
};
type otherFields = {
  severity: number;
  frequency: number;
  relatedMistakes?: number[];
  status?: string; //  "archived"
};
export type FormFields = TextFormFields & LogItemFields & otherFields;
