'use client';

import { useSidebar } from '../../hooks/useSidebar';
import {
  Home,
  DollarSign,
  Receipt,
  Wallet,
  PieChart,
  Settings,
  ChevronRight,
  BarChart3,
} from 'lucide-react';
import clsx from 'clsx';
import Avatar from '../ui/Avatar';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <Home /> },
  { label: 'Revenus', href: '/revenus', icon: <DollarSign /> },
  { label: 'Dépenses', href: '/depenses', icon: <Receipt /> },
  { label: 'Budgets', href: '/budgets', icon: <Wallet /> },
  { label: 'Rapports', href: '/rapports', icon: <PieChart /> },
  { label: 'Paramètres', href: '/parametres', icon: <Settings /> },
];

export default function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <aside
      className={clsx(
        'fixed lg:static inset-y-0 left-0 z-40 flex flex-col transition-all duration-300 border-r border-white/10 shadow-2xl backdrop-blur-2xl',
        'bg-linear-to-b from-[#0f172a]/90 to-[#1e293b]/80',
        isOpen ? 'w-64' : 'w-20'
      )}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
        <div className={clsx('flex items-center gap-3 overflow-hidden transition-all', !isOpen && 'w-0')}>
          <div className="relative">
            <BarChart3 className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]" />
          </div>
          {isOpen && (
            <span className="text-lg font-semibold tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]">
              BudgetFlow
            </span>
          )}
        </div>

        <button
          onClick={toggle}
          className="hidden lg:flex btn btn-ghost btn-circle btn-xs hover:bg-cyan-400/10"
        >
          <ChevronRight
            className={clsx(
              'w-4 h-4 text-cyan-300 transition-transform duration-300',
              isOpen && 'rotate-180'
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1 scrollbar-thin scrollbar-thumb-slate-600/50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={clsx(
                'group flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 relative font-medium text-sm',
                isActive
                  ? 'bg-linear-to-r from-cyan-500/80 to-blue-600/80 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-slate-300 hover:bg-slate-700/40 hover:text-white'
              )}
            >
              <div
                className={clsx(
                  'shrink-0 transition-transform duration-300 group-hover:scale-110',
                  isActive && 'text-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                )}
              >
                {item.icon}
              </div>

              <span
                className={clsx(
                  'transition-all duration-300',
                  isOpen ? 'opacity-100' : 'opacity-0 w-0'
                )}
              >
                {item.label}
              </span>

              {!isOpen && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800/80 text-xs text-cyan-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur z-50 border border-cyan-400/30 shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                  {item.label}
                </div>
              )}
            </a>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-white/10 mt-auto">
        <div className={clsx('flex items-center gap-3', !isOpen && 'justify-center')}>
          <Avatar name="Jean Dupont" />
          {isOpen && (
            <div className="truncate">
              <p className="text-sm font-semibold text-white">Jean Dupont</p>
              <p className="text-xs text-slate-400">jean@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
