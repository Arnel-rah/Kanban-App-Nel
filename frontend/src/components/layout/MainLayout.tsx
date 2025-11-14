'use client';

import Sidebar from './Sidebar';
import { useSidebar } from '../../hooks/useSidebar';
import clsx from 'clsx';
import { Menu } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex min-h-screen bg-base-200">
      <Sidebar />

      {/* Mobile menu button */}
      <button
        onClick={() => {
          const sidebar = document.getElementById('sidebar');
          sidebar?.classList.toggle('-translate-x-full');
        }}
        className="lg:hidden fixed top-4 left-4 z-50 btn btn-circle btn-ghost bg-base-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      <main
        className={clsx(
          'flex-1 transition-all duration-300 p-4 lg:p-8',
          isOpen ? 'lg:ml-64' : 'lg:ml-20'
        )}
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}