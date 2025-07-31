import { create } from "zustand";
import { BlogPost } from "@/types/blogs";

type TBlogStore = {
  blogs: BlogPost[];
  setBlogs: (blogs: BlogPost[]) => void;
};

export const useBlogStore = create<TBlogStore>((set) => ({
  blogs: [],
  setBlogs: (blogs) => set({ blogs }),
}));
