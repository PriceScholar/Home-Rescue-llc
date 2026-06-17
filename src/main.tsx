import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.tsx';
import './index.css';

// Prevent vite-react-ssg from fetching the static loader manifest and breaking client hydration
if (typeof window !== 'undefined') {
  (window as any).__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ = {};
}

export const createRoot = ViteReactSSG(
  { routes }
);


