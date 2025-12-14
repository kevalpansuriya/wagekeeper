import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { db } from '../services/db';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
      db.logout();
      navigate('/login');
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-hidden select-none h-screen flex flex-col transition-colors duration-300">
      <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark">
        <header className="flex items-center px-4 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-10 transition-colors duration-300">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-xl font-semibold ml-4">Settings</h1>
        </header>

        <main className="flex-1 overflow-y-auto px-4 pb-6">
          <div className="mt-4 mb-2 px-2">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide">Preferences</h2>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-[#2a3642] active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-medium">Language</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">English (US)</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
            </button>
            <div className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-[#2a3642]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined">dark_mode</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-medium">Dark Mode</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Adjust app appearance</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          <div className="mt-8 mb-2 px-2">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide">About</h2>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-[#2a3642] active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-medium">App Information</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Version 1.0.2</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
            </button>
            <button className="flex items-center justify-between w-full p-4 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-[#2a3642] active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-base font-medium">Help & Support</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">FAQ and Contact</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <button onClick={handleLogout} className="flex items-center justify-center w-full p-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-2xl border border-red-100 dark:border-red-900/30 active:scale-[0.99] transition-transform">
              <span className="material-symbols-outlined mr-2">logout</span>
              <span className="font-bold text-base">Log Out</span>
            </button>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
              Logged in as supervisor@example.com
            </p>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default SettingsScreen;