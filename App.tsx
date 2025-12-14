import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CurrencyProvider } from './contexts/CurrencyContext';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';
import AddEmployeeScreen from './screens/AddEmployeeScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import CalendarScreen from './screens/CalendarScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';
import SharePreviewScreen from './screens/SharePreviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/employees" element={<EmployeeListScreen />} />
            <Route path="/employees/add" element={<AddEmployeeScreen />} />
            <Route path="/employees/:id" element={<EmployeeDetailsScreen />} />
            <Route path="/attendance" element={<AttendanceScreen />} />
            <Route path="/calendar" element={<CalendarScreen />} />
            <Route path="/share" element={<SharePreviewScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
          </Routes>
        </HashRouter>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
