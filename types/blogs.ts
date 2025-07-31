export type BlogPost = {
  _id: string;
  author: string;
  title: string;
  image: string;
  markdown: string;
  category: string[]; // 👈 Add this line (array or string depending on your actual data)
  createdAt: string;
  updatedAt: string;
  clap: number;
};
