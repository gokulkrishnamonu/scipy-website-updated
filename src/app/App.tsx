import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import './i18n';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        {/* Smooth Scroll */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>

        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
