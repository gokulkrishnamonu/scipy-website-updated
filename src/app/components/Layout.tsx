import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppChat } from './WhatsAppChat';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}