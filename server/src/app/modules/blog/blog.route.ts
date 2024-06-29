import express from 'express';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/create-blog', BlogControllers.createBlog);
router.get('/', BlogControllers.getAllBlogs);
router.get('/:id', BlogControllers.getSingleBlog);

export const BlogsRoutes = router;
