import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogsRoutes } from '../modules/blog/blog.route';
import { ProjectsRoutes } from '../modules/projects/pojects.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: AuthRoutes,
  },
  {
    path: '/blog',
    route: BlogsRoutes,
  },
  {
    path: '/projects',
    route: ProjectsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
