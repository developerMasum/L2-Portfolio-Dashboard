import httpStatus from 'http-status';

import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog is created successfully',
    data: result,
  });
});
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog  retrieved successfully',
    data: result,
  });
});
const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});
export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
};
