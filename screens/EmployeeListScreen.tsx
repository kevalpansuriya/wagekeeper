import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { db } from '../services/db';
import { Employee } from '../types';
import { useCurrency } from '../contexts/CurrencyContext';

const EmployeeListScreen: React.FC = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const { formatCurrency } = useCurrency();

  useEffect(() => {
    db.getEmployees().then(setEmployees);
  }, []);

  const filteredEmployees = employees.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased transition-colors duration-200 min-h-screen pb-24">
      <div className="relative flex w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark">
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
          <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Employee List
          </h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-[24px]">more_vert</span>
          </button>
        </header>

        <div className="px-4 pb-4 pt-2">
          <div className="group flex w-full items-center rounded-xl bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 transition-all focus-within:ring-2 focus-within:ring-primary">
            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 mr-3">search</span>
            <input 
              className="w-full bg-transparent text-base font-normal text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none border-none p-0 focus:ring-0" 
              placeholder="Search by name..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <main className="flex-1 px-4 space-y-3">
          {filteredEmployees.map(emp => (
             <div key={emp.id} onClick={() => navigate(`/employees/${emp.id}`)} className={`flex items-center justify-between rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-sm border border-gray-100 dark:border-gray-800/50 hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer group ${!emp.isActive ? 'opacity-75' : ''}`}>
                <div className="flex items-center gap-4">
                    <div 
                        className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center shrink-0 ring-2 ring-transparent group-hover:ring-primary/20 transition-all" 
                        style={{backgroundImage: `url('${emp.photoUrl}')`}}
                    ></div>
                    <div className="flex flex-col">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">{emp.name}</h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{formatCurrency(emp.rate)} <span className="text-xs font-normal text-gray-400 dark:text-gray-500">/ {emp.paymentType === 'Hourly' ? 'hr' : 'day'}</span></p>
                    </div>
                </div>
                <div className="shrink-0">
                    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${emp.isActive ? 'bg-green-500/10 text-green-600 dark:text-green-400 ring-green-500/20' : 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 ring-gray-500/10 dark:ring-gray-600/20'}`}>
                        {emp.isActive ? 'Active' : 'Inactive'}
                    </span>
                </div>
             </div>
          ))}
        </main>

        <button 
            onClick={() => navigate('/employees/add')}
            className="fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary/90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>
      <BottomNav />
    </div>
  );
};

export default EmployeeListScreen;
