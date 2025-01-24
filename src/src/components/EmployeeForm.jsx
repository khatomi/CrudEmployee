import { useState, useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeForm = ({ employee, closeModal }) => {
    const { addEmployee, updateEmployee } = useContext(EmployeeContext);
    const [formData, setFormData] = useState({
        name: employee?.name || '',
        position: employee?.position || '',
        salary: employee?.salary || '',
        notes: employee?.notes || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee) {
            updateEmployee({ ...formData, id: employee.id });
        } else {
            addEmployee({ ...formData, id: Date.now() });
        }
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleChange}
                required
            />
            <textarea
                name="notes"
                placeholder="Notes"
                value={formData.notes}
                onChange={handleChange}
            />
            <button type="submit">{employee ? 'Update' : 'Add'} Employee</button>
        </form>
    );
};

export default EmployeeForm;