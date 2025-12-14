import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    const base = "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors";
    return isActive 
        ? `${base} text-primary` 
        : `${base} text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300`;
  };

  const getIconClass = (path: string) => {
      const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
      return isActive ? "material-symbols-outlined filled" : "material-symbols-outlined";
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background-light dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto w-full">
        <button className={getLinkClass('/dashboard')} onClick={() => navigate('/dashboard')}>
          <span className={getIconClass('/dashboard')}>home</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className={getLinkClass('/employees')} onClick={() => navigate('/employees')}>
          <span className={getIconClass('/employees')}>badge</span>
          <span className="text-[10px] font-medium">Staff</span>
        </button>
        <button className={getLinkClass('/calendar')} onClick={() => navigate('/calendar')}>
          <span className={getIconClass('/calendar')}>calendar_month</span>
          <span className="text-[10px] font-medium">Calendar</span>
        </button>
        <button className={getLinkClass('/settings')} onClick={() => navigate('/settings')}>
          <span className={getIconClass('/settings')}>settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
