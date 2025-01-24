import { useState } from 'react';
import { EmployeeProvider } from './context/EmployeeContext';
import Navbar from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import EmployeeCard from './components/EmployeeCard';
import EmployeeForm from './components/EmployeeForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <EmployeeProvider>
      <Navbar />
      <div className="container">
        <button className="add-employee-btn" onClick={() => setIsModalOpen(true)}>
          Add Employee
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <EmployeeForm closeModal={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
        <EmployeeTable />
        <EmployeeCard />
      </div>
      <Footer />
    </EmployeeProvider>
  );
};

export default App;