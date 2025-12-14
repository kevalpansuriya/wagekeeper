import { Employee, Attendance, Borrowing, Company } from '../types';

const STORAGE_KEYS = {
  EMPLOYEES: 'wk_employees',
  ATTENDANCE: 'wk_attendance',
  BORROWING: 'wk_borrowing',
  COMPANY: 'wk_company',
  USER: 'wk_user'
};

// Seed Data
const seedEmployees: Employee[] = [
  { id: '1', name: 'Robert Fox', role: 'Barista', phone: '(555) 001-0001', rate: 150, isActive: true, joinedDate: '2023-01-15', paymentType: 'Daily', photoUrl: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Jane Cooper', role: 'Manager', phone: '(555) 001-0002', rate: 145, isActive: true, joinedDate: '2023-02-20', paymentType: 'Daily', photoUrl: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Cody Fisher', role: 'Server', phone: '(555) 001-0003', rate: 0, isActive: false, joinedDate: '2023-03-10', paymentType: 'Hourly', photoUrl: 'https://i.pravatar.cc/150?u=3' },
  { id: '4', name: 'Esther Howard', role: 'Chef', phone: '(555) 001-0004', rate: 135, isActive: true, joinedDate: '2023-01-05', paymentType: 'Daily', photoUrl: 'https://i.pravatar.cc/150?u=4' },
  { id: '5', name: 'John Anderson', role: 'Carpenter', phone: '(555) 001-0005', rate: 120, isActive: true, joinedDate: '2023-01-01', paymentType: 'Hourly', photoUrl: 'https://i.pravatar.cc/150?u=5' },
];

const seedAttendance: Attendance[] = [
    { id: 'a1', employeeId: '1', date: '2023-10-24', regularHours: 8, overtimeHours: 0, bonus: 0, notes: '' },
    { id: 'a2', employeeId: '5', date: '2023-10-01', regularHours: 8, overtimeHours: 0, bonus: 0, notes: '' },
    { id: 'a3', employeeId: '5', date: '2023-10-02', regularHours: 6.5, overtimeHours: 0, bonus: 0, notes: '' },
    { id: 'a4', employeeId: '5', date: '2023-10-04', regularHours: 8, overtimeHours: 0, bonus: 0, notes: '' },
    { id: 'a5', employeeId: '5', date: '2023-10-05', regularHours: 8, overtimeHours: 0, bonus: 0, notes: '' },
];

const seedBorrowing: Borrowing[] = [
    { id: 'b1', employeeId: '1', date: '2023-10-20', amount: 200, note: 'Advance', isPaid: false },
    { id: 'b2', employeeId: '5', date: '2023-10-05', amount: 50, note: 'Lunch', isPaid: false }
];

// Helper to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class DBService {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.EMPLOYEES)) {
      localStorage.setItem(STORAGE_KEYS.EMPLOYEES, JSON.stringify(seedEmployees));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ATTENDANCE)) {
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(seedAttendance));
    }
    if (!localStorage.getItem(STORAGE_KEYS.BORROWING)) {
      localStorage.setItem(STORAGE_KEYS.BORROWING, JSON.stringify(seedBorrowing));
    }
    if (!localStorage.getItem(STORAGE_KEYS.COMPANY)) {
        localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify({ name: 'TechStart Solutions', address: '123 Tech St' }));
    }
  }

  // Employees
  async getEmployees(): Promise<Employee[]> {
    await delay(100);
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.EMPLOYEES) || '[]');
  }

  async getEmployee(id: string): Promise<Employee | undefined> {
    await delay(50);
    const employees = await this.getEmployees();
    return employees.find(e => e.id === id);
  }

  async addEmployee(employee: Omit<Employee, 'id'>): Promise<Employee> {
    await delay(200);
    const employees = await this.getEmployees();
    const newEmployee = { ...employee, id: Date.now().toString() };
    employees.push(newEmployee);
    localStorage.setItem(STORAGE_KEYS.EMPLOYEES, JSON.stringify(employees));
    return newEmployee;
  }

  // Attendance
  async getAttendance(employeeId?: string): Promise<Attendance[]> {
    await delay(100);
    const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.ATTENDANCE) || '[]');
    if (employeeId) {
        return all.filter((a: Attendance) => a.employeeId === employeeId);
    }
    return all;
  }

  async addAttendance(entry: Omit<Attendance, 'id'>): Promise<Attendance> {
    await delay(200);
    const all = await this.getAttendance();
    // Check duplication for day? Simplified for now allow edits or multiples
    const newEntry = { ...entry, id: Date.now().toString() };
    all.push(newEntry);
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(all));
    return newEntry;
  }

  // Borrowing
  async getBorrowings(employeeId?: string): Promise<Borrowing[]> {
      await delay(50);
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.BORROWING) || '[]');
      if (employeeId) return all.filter((b: Borrowing) => b.employeeId === employeeId);
      return all;
  }

   // Auth
   isLoggedIn(): boolean {
       return !!localStorage.getItem(STORAGE_KEYS.USER);
   }

   login(email: string) {
       localStorage.setItem(STORAGE_KEYS.USER, email);
   }

   logout() {
       localStorage.removeItem(STORAGE_KEYS.USER);
   }
}

export const db = new DBService();
