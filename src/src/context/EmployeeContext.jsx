import { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const updateEmployee = (updatedEmployee) => {
        setEmployees(employees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    return (
        <EmployeeContext.Provider
            value={{ employees, addEmployee, updateEmployee, deleteEmployee, selectedEmployee, setSelectedEmployee }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};