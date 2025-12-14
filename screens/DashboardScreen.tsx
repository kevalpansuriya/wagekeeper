import React, { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
import { db } from '../services/db';
import { Employee, DashboardStats } from '../types';
import { useCurrency } from '../contexts/CurrencyContext';

const DashboardScreen: React.FC = () => {
  const { formatCurrency, currencySymbol } = useCurrency();
  const [stats, setStats] = useState<DashboardStats>({
    employeeCount: 0,
    totalHours: 1420,
    totalWages: 24500,
    totalBorrowed: 1200
  });

  useEffect(() => {
    const fetchData = async () => {
        const employees = await db.getEmployees();
        // In a real app, we'd calculate totals from Attendance and Borrowing tables
        setStats(prev => ({
            ...prev,
            employeeCount: employees.length
        }));
    }
    fetchData();
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased pb-24 min-h-screen">
      <div className="sticky top-0 z-20 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto w-full">
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] flex-1">TechStart Solutions</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-full h-10 w-10 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar max-w-lg mx-auto w-full">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-5 pr-5 shadow-lg shadow-primary/25 transition-transform active:scale-95">
            <span className="text-white text-sm font-bold leading-normal">October 2023</span>
          </button>
          {['September 2023', 'August 2023'].map(m => (
             <button key={m} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 pl-5 pr-5 transition-transform active:scale-95">
                <span className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">{m}</span>
             </button>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto w-full px-4 pt-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Employees</span>
            </div>
            <p className="text-3xl font-bold leading-tight tracking-tight">{stats.employeeCount}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Hours</span>
            </div>
            <p className="text-3xl font-bold leading-tight tracking-tight">{stats.totalHours}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Wages</span>
            </div>
            <p className="text-3xl font-bold leading-tight tracking-tight text-emerald-600 dark:text-emerald-400">{formatCurrency(stats.totalWages)}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl p-5 bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Borrowed</span>
            </div>
            <p className="text-3xl font-bold leading-tight tracking-tight text-orange-600 dark:text-orange-400">{formatCurrency(stats.totalBorrowed)}</p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
            <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px]">add_task</span>
                <span className="truncate">Log Hours</span>
            </button>
            <button className="flex-1 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px] text-slate-500 dark:text-slate-400">currency_exchange</span>
                <span className="truncate">Advance</span>
            </button>
        </div>

        <div>
            <div className="flex items-center justify-between pb-3 px-1">
                <h3 className="text-lg font-bold leading-tight">Recent Activity</h3>
                <button className="text-sm font-medium text-primary">View All</button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
                    <div className="relative w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">JD</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Requested Advance</p>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-orange-600 dark:text-orange-400">-{currencySymbol}200</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">2h ago</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
                    <div className="relative w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xs">SM</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Sarah Miller</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Logged Hours</p>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white">8 hrs</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">5h ago</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
                    <div className="relative w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-xs">MR</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Mike Ross</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Weekly Payout</p>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+{currencySymbol}850</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">1d ago</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default DashboardScreen;
