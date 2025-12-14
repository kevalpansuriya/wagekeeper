export interface Employee {
  id: string;
  name: string;
  role: string;
  phone: string;
  rate: number;
  isActive: boolean;
  joinedDate: string;
  photoUrl?: string;
  paymentType: 'Hourly' | 'Daily' | 'Monthly';
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: string; // ISO Date string YYYY-MM-DD
  regularHours: number;
  overtimeHours: number;
  bonus: number;
  notes: string;
}

export interface Borrowing {
  id: string;
  employeeId: string;
  date: string;
  amount: number;
  note: string;
  isPaid: boolean;
}

export interface Company {
  name: string;
  address: string;
}

export interface DashboardStats {
  employeeCount: number;
  totalHours: number;
  totalWages: number;
  totalBorrowed: number;
}
