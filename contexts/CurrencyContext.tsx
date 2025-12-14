import React, { createContext, useContext, useEffect, useState } from 'react';

interface CurrencyContextType {
  currencySymbol: string;
  currencyCode: string;
  formatCurrency: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencySymbol, setCurrencySymbol] = useState('$');
  const [currencyCode, setCurrencyCode] = useState('USD');
  const [locale, setLocale] = useState('en-US');

  useEffect(() => {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        // Check for Indian Standard Time
        if (timeZone === 'Asia/Kolkata') {
          setCurrencySymbol('₹');
          setCurrencyCode('INR');
          setLocale('en-IN');
        } else {
          // Default to USD for others (can be expanded)
          setCurrencySymbol('$');
          setCurrencyCode('USD');
          setLocale('en-US');
        }
    } catch (e) {
        console.error("Error detecting timezone", e);
        // Fallback
        setCurrencySymbol('$');
        setCurrencyCode('USD');
        setLocale('en-US');
    }
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <CurrencyContext.Provider value={{ currencySymbol, currencyCode, formatCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
