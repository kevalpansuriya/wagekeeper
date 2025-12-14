import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/db';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    db.login('user@example.com');
    navigate('/dashboard');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 antialiased overflow-x-hidden">
      <main className="w-full max-w-[480px] flex flex-col gap-6 md:gap-8">
        <header className="flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1c242c] to-[#101922] border border-[#2a3441] flex items-center justify-center shadow-xl shadow-black/20">
              <span className="material-symbols-outlined text-primary text-[40px]">
                account_balance_wallet
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight text-center">
              Welcome Back
            </h1>
            <p className="text-[#637588] dark:text-[#9dabb9] text-base font-medium leading-normal text-center">
              Sign in to WageKeeper
            </p>
          </div>
        </header>

        <form className="flex flex-col gap-5 w-full" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-[#111418] dark:text-white text-sm font-medium leading-normal" htmlFor="email">
              Email or Username
            </label>
            <div className="relative">
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#1c2127] focus:border-primary h-14 placeholder:text-[#9dabb9] px-[15px] text-base font-normal leading-normal transition-colors"
                id="email"
                placeholder="Enter your email"
                type="email"
                defaultValue="supervisor@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[#111418] dark:text-white text-sm font-medium leading-normal" htmlFor="password">
                Password
              </label>
            </div>
            <div className="flex w-full items-stretch rounded-xl overflow-hidden relative group">
              <input
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#1c2127] focus:border-primary h-14 placeholder:text-[#9dabb9] px-[15px] pr-12 text-base font-normal leading-normal transition-colors"
                id="password"
                placeholder="Enter your password"
                type="password"
                defaultValue="password"
              />
              <button
                className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center text-[#9dabb9] hover:text-primary transition-colors cursor-pointer z-10"
                type="button"
              >
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
              </button>
            </div>
            <div className="flex justify-end pt-1">
              <button type="button" className="text-primary text-sm font-medium leading-normal hover:underline hover:text-blue-400 transition-colors">
                Forgot Password?
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 transition-all"
            >
              <span className="truncate">Log In</span>
            </button>
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-[#dce0e5] dark:bg-[#2a3441] flex-1"></div>
              <span className="text-xs font-medium text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider">Or</span>
              <div className="h-px bg-[#dce0e5] dark:bg-[#2a3441] flex-1"></div>
            </div>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-14 px-5 bg-transparent border border-[#dce0e5] dark:border-[#3b4754] hover:bg-slate-100 dark:hover:bg-[#2a3441] active:bg-slate-200 dark:active:bg-[#1c2127] text-[#111418] dark:text-white text-base font-semibold leading-normal transition-all"
              onClick={() => navigate('/dashboard')}
            >
              <span className="material-symbols-outlined text-[22px]">face</span>
              <span className="truncate">Login with Face ID</span>
            </button>
          </div>
        </form>
        <footer className="flex items-center justify-center mt-2">
          <p className="text-[#637588] dark:text-[#9dabb9] text-sm font-normal leading-normal text-center">
            New here? <button className="text-primary font-bold hover:text-blue-400 transition-colors ml-1">Create an Account</button>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default LoginScreen;
