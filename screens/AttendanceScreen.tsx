import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';

const AttendanceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [hours, setHours] = useState(8.0);
  const [showOvertime, setShowOvertime] = useState(false);
  const { currencySymbol, formatCurrency } = useCurrency();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-x-hidden pb-24">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Log Attendance</h2>
      </div>

      <div className="flex p-4 px-5">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-4 items-center bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-[#3b4754] shadow-sm">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary/20" 
                 style={{backgroundImage: 'url("https://i.pravatar.cc/150?u=5")'}}></div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-500 dark:text-[#9dabb9] text-xs font-medium uppercase tracking-wider mb-0.5">Logging for</p>
              <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">John Doe</p>
            </div>
            <div className="ml-auto">
              <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-2">
        <label className="flex flex-col w-full">
          <p className="text-gray-900 dark:text-white text-base font-semibold leading-normal pb-2">Date</p>
          <div className="flex w-full items-center rounded-xl border border-gray-200 dark:border-[#3b4754] bg-surface-light dark:bg-surface-dark overflow-hidden h-14 relative group cursor-pointer hover:border-primary transition-colors">
            <input className="flex w-full h-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white text-lg font-medium p-4 cursor-pointer" readOnly type="text" value="Tue, Oct 24, 2023"/>
            <div className="flex items-center justify-center pr-4 text-primary">
              <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            </div>
          </div>
        </label>
      </div>
      <div className="h-4"></div>

      <div className="flex flex-col items-center justify-center py-6 mx-5 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#3b4754] shadow-sm">
        <h2 className="text-gray-500 dark:text-[#9dabb9] tracking-wide text-sm font-semibold uppercase mb-6">Regular Hours</h2>
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setHours(Math.max(0, hours - 0.5))}
            className="flex items-center justify-center size-16 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all shadow-sm border border-gray-200 dark:border-[#3b4754]">
            <span className="material-symbols-outlined text-[32px] font-bold">remove</span>
          </button>
          <div className="flex flex-col items-center min-w-[100px]">
            <h1 className="text-gray-900 dark:text-white tracking-tight text-[56px] font-extrabold leading-none">{hours.toFixed(1)}</h1>
            <span className="text-gray-400 dark:text-gray-500 text-sm mt-1 font-medium">HRS</span>
          </div>
          <button 
            onClick={() => setHours(hours + 0.5)}
            className="flex items-center justify-center size-16 rounded-full bg-primary text-white hover:bg-blue-600 active:scale-95 transition-all shadow-md shadow-blue-500/20">
            <span className="material-symbols-outlined text-[32px] font-bold">add</span>
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 bg-background-light dark:bg-background-dark py-2 px-4 rounded-full border border-gray-200 dark:border-[#3b4754]">
          <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[20px]">payments</span>
          <p className="text-gray-600 dark:text-gray-300 font-medium">Est. Daily Pay: <span className="text-gray-900 dark:text-white font-bold">{formatCurrency(hours * 15)}</span></p>
        </div>
      </div>
      <div className="h-6"></div>

      <div className="px-5">
        <div className="group bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-[#3b4754] overflow-hidden transition-all duration-300">
          <div 
            onClick={() => setShowOvertime(!showOvertime)}
            className="flex items-center justify-between p-5 cursor-pointer select-none">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">timelapse</span>
              </div>
              <span className="text-gray-900 dark:text-white text-lg font-bold">Overtime & Bonus</span>
            </div>
            <span className={`material-symbols-outlined text-gray-400 transition-transform duration-300 ${showOvertime ? 'rotate-180' : ''}`}>expand_more</span>
          </div>
          {showOvertime && (
            <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-4">
                <label className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">OT Hours</span>
                <div className="flex w-full items-center rounded-lg border border-gray-200 dark:border-[#3b4754] bg-background-light dark:bg-background-dark focus-within:border-primary transition-colors h-12">
                    <input className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white p-3 font-semibold" placeholder="0.0" type="number"/>
                </div>
                </label>
                <label className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">Bonus ({currencySymbol})</span>
                <div className="flex w-full items-center rounded-lg border border-gray-200 dark:border-[#3b4754] bg-background-light dark:bg-background-dark focus-within:border-primary transition-colors h-12">
                    <span className="pl-3 text-gray-500 dark:text-gray-400 font-semibold">{currencySymbol}</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white p-3 font-semibold" placeholder="0.00" type="number"/>
                </div>
                </label>
            </div>
          )}
        </div>
      </div>

      <div className="px-5 mt-6">
        <label className="flex flex-col w-full">
          <p className="text-gray-900 dark:text-white text-base font-semibold leading-normal pb-2">Notes</p>
          <textarea className="flex w-full resize-none rounded-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-[#3b4754] bg-surface-light dark:bg-surface-dark placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-4 text-base font-normal leading-normal" placeholder="Add any additional notes here..." rows={3}></textarea>
        </label>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-[#3b4754] z-50">
        <div className="max-w-screen-md mx-auto">
          <button onClick={() => navigate('/calendar')} className="w-full h-14 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">save</span>
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceScreen;
