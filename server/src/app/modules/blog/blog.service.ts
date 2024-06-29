import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogs,
  getSingleBlog,
};
