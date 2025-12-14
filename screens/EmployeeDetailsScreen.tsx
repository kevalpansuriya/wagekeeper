import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../services/db';
import { Employee } from '../types';
import { useCurrency } from '../contexts/CurrencyContext';

const EmployeeDetailsScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const { formatCurrency } = useCurrency();

  useEffect(() => {
    if (id) {
        db.getEmployee(id).then(emp => {
            if (emp) setEmployee(emp);
        });
    }
  }, [id]);

  if (!employee) return <div className="p-8 text-center text-white">Loading...</div>;

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-white antialiased overflow-hidden select-none h-screen flex flex-col">
      <div className="h-12 w-full bg-background-light dark:bg-background-dark sticky top-0 z-50"></div>
      <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark">
        <header className="flex items-center justify-between px-4 py-2 sticky top-12 z-40 bg-background-light dark:bg-background-dark">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-semibold">Employee Details</h1>
          <button className="p-2 rounded-full active:bg-gray-200 dark:active:bg-gray-800 transition-colors text-primary">
            <span className="material-symbols-outlined text-2xl filled">edit</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
          <div className="flex flex-col items-center pt-6 pb-8 px-6 text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-lg bg-gray-300">
                <img alt="Employee Photo" class="w-full h-full object-cover" src={employee.photoUrl || "https://i.pravatar.cc/150"} />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-2 border-white dark:border-background-dark flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[18px]">check</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{employee.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{employee.role} • Joined Jan 2023</p>
            <div className="mt-4 flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-[18px] filled">call</span>
                Call
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="material-symbols-outlined text-[18px] filled">sms</span>
                Message
              </button>
            </div>
          </div>

          <div className="sticky top-0 z-30 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-4">
              <button className="relative flex-1 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Attendance</button>
              <button className="relative flex-1 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Borrowed</button>
              <button className="relative flex-1 py-4 text-sm font-bold text-primary">
                Summary
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Current Month Wage</h3>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Nov 2023</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Total Work Days</span>
                  <span className="font-medium">22 Days</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Daily Rate</span>
                  <span className="font-medium">{formatCurrency(employee.rate)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Overtime (10h)</span>
                  <span className="font-medium text-green-600">+{formatCurrency(250)}</span>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">Total Earned</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(2890)}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Deductions</h3>
                <button className="text-primary text-sm font-medium">View History</button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span className="text-gray-500 dark:text-gray-400">Advance Taken</span>
                  </div>
                  <span className="font-medium text-red-500">-{formatCurrency(200)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span className="text-gray-500 dark:text-gray-400">Late Fine</span>
                  </div>
                  <span className="font-medium text-red-500">-{formatCurrency(15)}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-2xl p-5 border border-primary/20">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Net Payable Amount</span>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(2675)}</span>
                </div>
                <button className="bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                  <span className="material-symbols-outlined">payments</span>
                </button>
              </div>
            </div>
            
             <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Payment History</h3>
                <button className="text-primary text-sm font-medium hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[20px]">account_balance</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Bank Transfer</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Nov 01 • Oct Salary</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(1200)}</p>
                    <p className="text-xs text-green-600 font-medium">Paid</p>
                  </div>
                </div>
                <div className="h-px bg-gray-50 dark:bg-gray-800"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Cash Advance</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Oct 20 • Emergency</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{formatCurrency(200)}</p>
                    <p className="text-xs text-green-600 font-medium">Paid</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
        
        <div className="fixed bottom-6 left-0 right-0 px-4 z-50">
            <button onClick={() => navigate('/share')} className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-full shadow-xl active:scale-[0.99] transition-all">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                Share Wage Slip
            </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsScreen;
