import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../contexts/CurrencyContext';

const AddEmployeeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { currencySymbol } = useCurrency();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-hidden h-screen flex flex-col">
        <div className="relative flex h-full w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
            <header className="flex items-center justify-between px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
                <button onClick={() => navigate(-1)} className="text-primary text-base font-medium active:opacity-70">Cancel</button>
                <h1 className="text-base font-semibold text-center absolute left-1/2 -translate-x-1/2">Add Employee</h1>
                <div className="w-12"></div>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
                <section className="flex flex-col items-center justify-center pt-8 pb-6 px-4">
                    <div className="relative group cursor-pointer active:scale-95 transition-transform">
                        <div className="w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-700 bg-center bg-cover" 
                             style={{backgroundImage: "url('https://i.pravatar.cc/150?u=new')"}}>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-background-light dark:border-background-dark flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">photo_camera</span>
                        </div>
                    </div>
                    <p className="mt-3 text-primary font-medium text-sm">Edit Photo</p>
                </section>

                <section className="px-4 mb-6">
                    <h4 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 ml-1">Personal Details</h4>
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 ml-1 text-slate-700 dark:text-slate-300">Full Name</label>
                            <div className="relative">
                                <input className="w-full bg-white dark:bg-[#1c2127] border border-slate-300 dark:border-[#3b4754] rounded-xl px-4 py-3.5 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]" placeholder="e.g. John Doe" type="text"/>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 ml-1 text-slate-700 dark:text-slate-300">Phone Number</label>
                            <div className="relative">
                                <input className="w-full bg-white dark:bg-[#1c2127] border border-slate-300 dark:border-[#3b4754] rounded-xl px-4 py-3.5 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]" placeholder="(555) 000-0000" type="tel"/>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">call</span>
                            </div>
                        </div>
                         <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 ml-1 text-slate-700 dark:text-slate-300">Address <span className="text-slate-400 font-normal ml-1">(Optional)</span></label>
                            <div className="relative">
                                <input className="w-full bg-white dark:bg-[#1c2127] border border-slate-300 dark:border-[#3b4754] rounded-xl px-4 py-3.5 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]" placeholder="Street Address" type="text"/>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 mb-6">
                    <h4 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 ml-1">Role & Position</h4>
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 ml-1 text-slate-700 dark:text-slate-300">Job Title</label>
                            <div className="relative">
                                <input className="w-full bg-white dark:bg-[#1c2127] border border-slate-300 dark:border-[#3b4754] rounded-xl px-4 py-3.5 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-[#9dabb9]" placeholder="e.g. Senior Barista" type="text"/>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">work</span>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 ml-1 text-slate-700 dark:text-slate-300">Date of Joining</label>
                            <div className="relative cursor-pointer">
                                <input className="w-full bg-white dark:bg-[#1c2127] border border-slate-300 dark:border-[#3b4754] rounded-xl px-4 py-3.5 text-base focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-900 dark:text-white [color-scheme:dark]" type="date"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 mb-8">
                    <h4 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 ml-1">Compensation</h4>
                    <div className="bg-white dark:bg-[#1c2127] rounded-xl border border-slate-200 dark:border-[#3b4754] p-4 shadow-sm">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Payment Type</label>
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                <button className="flex-1 py-2 px-3 text-sm font-medium rounded-md bg-white dark:bg-[#3b4754] shadow-sm text-primary transition-all">Hourly</button>
                                <button className="flex-1 py-2 px-3 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700 transition-all">Daily</button>
                                <button className="flex-1 py-2 px-3 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-700 transition-all">Monthly</button>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Rate Amount</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 text-slate-500 dark:text-slate-400 font-medium">{currencySymbol}</span>
                                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg pl-8 pr-4 py-3 text-lg font-semibold focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="0.00" type="number"/>
                                <span className="absolute right-4 text-slate-500 dark:text-slate-400 text-sm">/hr</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="absolute bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 backdrop-blur-xl bg-opacity-90 dark:bg-opacity-90 z-40">
                <button 
                    onClick={() => navigate('/employees')}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">save</span>
                    Save Employee
                </button>
            </footer>
        </div>
    </div>
  );
};

export default AddEmployeeScreen;
