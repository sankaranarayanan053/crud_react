import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  

  const addEmployee = (employee) => {
    setEmployees([...employees,{ ...employee, id: Date.now() }]);
    
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee details</h1>
      <EmployeeForm
        addEmployee={addEmployee}
        editingEmployee={editingEmployee}
        updateEmployee={updateEmployee}
      />
      <EmployeeList
        employees={employees}
        handleEdit={handleEdit}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default App;
