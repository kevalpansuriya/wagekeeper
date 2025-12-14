import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/db';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        if (db.isLoggedIn()) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col justify-between items-center bg-background-light dark:bg-background-dark p-6">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center justify-center w-full max-w-sm gap-4">
        <div className="relative mb-4 group">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full transform scale-125 dark:opacity-40"></div>
          <div className="relative flex items-center justify-center w-28 h-28 bg-white dark:bg-[#1a2632] rounded-[2rem] shadow-xl border border-[#e5e7eb] dark:border-[#2a3642]">
            <span className="material-symbols-outlined text-primary text-[4rem] filled">
              account_balance_wallet
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#111418] dark:text-white tracking-tight text-[36px] font-extrabold leading-tight px-4 text-center">
            WageKeeper
          </h1>
          <h2 className="text-[#637588] dark:text-[#9dabb9] text-lg font-medium leading-tight tracking-normal px-4 text-center pt-2">
            Fast. Secure. Simple.
          </h2>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center w-full pb-8">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mb-6"></div>
        <p className="text-[#9dabb9] text-xs font-normal leading-normal px-4 text-center tracking-wide uppercase">
          Version 1.0
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
