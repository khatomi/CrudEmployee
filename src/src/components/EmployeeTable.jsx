import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeTable = () => {
    const { employees, deleteEmployee, setSelectedEmployee } = useContext(EmployeeContext);

    return (
        <table className="employee-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>${employee.salary}</td>
                        <td>{employee.notes}</td>
                        <td>
                            <button onClick={() => setSelectedEmployee(employee)}>Edit</button>
                            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;