import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeCard = () => {
    const { employees, deleteEmployee, setSelectedEmployee } = useContext(EmployeeContext);

    return (
        <div className="employee-cards">
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <h3>{employee.name}</h3>
                    <p><strong>Position:</strong> {employee.position}</p>
                    <p><strong>Salary:</strong> ${employee.salary}</p>
                    <p><strong>Notes:</strong> {employee.notes}</p>
                    <div className="card-actions">
                        <button onClick={() => setSelectedEmployee(employee)}>Edit</button>
                        <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployeeCard;