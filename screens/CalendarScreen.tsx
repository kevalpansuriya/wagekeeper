import React from 'react';
import BottomNav from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';

const CalendarScreen: React.FC = () => {
    const navigate = useNavigate();
    const { currencySymbol, formatCurrency } = useCurrency();
    const days = Array.from({length: 31}, (_, i) => i + 1);
    
    // Mock data wrapper
    const getDayData = (day: number) => {
        if ([2, 4, 5, 9, 10, 11, 12, 13].includes(day)) return { hours: 8, wage: 120 };
        if (day === 3) return { hours: 6.5, wage: 95 };
        if (day === 6) return { hours: 4, wage: 60 };
        if (day === 17) return { hours: 10, wage: 150 };
        return null;
    }

    const getBorrowed = (day: number) => [4, 11, 17].includes(day);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen flex flex-col overflow-hidden font-display">
      <header className="flex items-center justify-between px-4 py-3 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 shrink-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">chevron_left</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold leading-tight tracking-tight">October 2023</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-primary text-sm font-bold hover:opacity-80 transition-opacity">Today</button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-white">chevron_right</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
        <div className="grid grid-cols-7 px-2 py-2 bg-background-light dark:bg-background-dark sticky top-0 z-10 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-800">
          {['S','M','T','W','T','F','S'].map(d => (
              <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 auto-rows-fr bg-gray-200 dark:bg-gray-800 gap-[1px] border-b border-gray-200 dark:border-gray-800">
          <div className="bg-background-light dark:bg-background-dark min-h-[90px] p-1 flex flex-col opacity-30"><span className="text-xs font-medium text-center mb-1">29</span></div>
          <div className="bg-background-light dark:bg-background-dark min-h-[90px] p-1 flex flex-col opacity-30"><span className="text-xs font-medium text-center mb-1">30</span></div>
          
          {days.map(day => {
              const data = getDayData(day);
              const borrowed = getBorrowed(day);
              const isSelected = day === 12;

              return (
                <div key={day} 
                     className={`min-h-[90px] p-1 flex flex-col items-center relative group transition-colors cursor-pointer
                        ${isSelected ? 'bg-primary/10 dark:bg-primary/20 ring-1 ring-inset ring-primary' : 'bg-background-light dark:bg-background-dark active:bg-gray-100 dark:active:bg-gray-800'}
                     `}>
                    {day === 5 ? (
                         <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mb-1 shadow-md shadow-primary/30">
                            <span className="text-xs font-bold">5</span>
                        </div>
                    ) : (
                        <span className={`text-xs font-medium mb-1 ${isSelected ? 'text-primary font-bold' : 'text-gray-500 dark:text-gray-400'}`}>{day}</span>
                    )}
                    
                    {data && (
                        <div className="flex flex-col items-center justify-center gap-0.5 mt-1">
                            <span className="text-[10px] text-gray-500 dark:text-gray-300 font-medium">{data.hours}h</span>
                            <span className="text-[10px] text-wage-green font-bold">{currencySymbol}{data.wage}</span>
                            {borrowed && <div className="w-1.5 h-1.5 rounded-full bg-borrow-orange mt-0.5"></div>}
                        </div>
                    )}
                </div>
              );
          })}
           <div className="bg-background-light dark:bg-background-dark min-h-[90px] opacity-30"></div>
           <div className="bg-background-light dark:bg-background-dark min-h-[90px] opacity-30"></div>
           <div className="bg-background-light dark:bg-background-dark min-h-[90px] opacity-30"></div>
           <div className="bg-background-light dark:bg-background-dark min-h-[90px] opacity-30"></div>
        </div>
        <div className="h-24"></div>
      </main>

      <div className="absolute bottom-40 right-4 z-30">
        <button onClick={() => navigate('/attendance')} className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-transform text-white">
          <span className="material-symbols-outlined" style={{fontSize: '28px'}}>add</span>
        </button>
      </div>

      <div className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shrink-0 pb-2 z-20">
        <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Monthly Summary</span>
            <span className="text-xs font-medium text-primary cursor-pointer" onClick={() => navigate('/share')}>View Report</span>
        </div>
        <div className="flex items-center gap-3">
            <div className="flex-1 p-3 bg-gray-50 dark:bg-background-dark rounded-lg border border-gray-100 dark:border-gray-800/50">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Hours</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">160<span className="text-xs font-medium text-gray-500 ml-0.5">h</span></p>
            </div>
             <div className="flex-1 p-3 bg-gray-50 dark:bg-background-dark rounded-lg border border-gray-100 dark:border-gray-800/50">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Wages</p>
                <p className="text-lg font-bold text-wage-green mt-0.5">{formatCurrency(2400)}</p>
            </div>
             <div className="flex-1 p-3 bg-gray-50 dark:bg-background-dark rounded-lg border border-gray-100 dark:border-gray-800/50">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Borrowed</p>
                <p className="text-lg font-bold text-borrow-orange mt-0.5">{formatCurrency(200)}</p>
            </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default CalendarScreen;
