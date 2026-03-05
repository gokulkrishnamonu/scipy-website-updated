import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/services',
    Component: ServicesPage,
  },
  {
    path: '/products',
    Component: ProductsPage,
  },
  {
    path: '/portfolio',
    Component: PortfolioPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/blog',
    Component: BlogPage,
  },
  {
    path: '/blog/:slug',
    Component: BlogPostPage,
  },
]);