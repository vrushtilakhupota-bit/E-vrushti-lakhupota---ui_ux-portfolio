export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  image: string;
  behanceUrl: string;
  pdfUrl: string;
  role: string;
  duration?: string;
  process?: string;
  highlights: string[];
}
