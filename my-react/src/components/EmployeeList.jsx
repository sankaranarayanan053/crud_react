import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index} style={{ textAlign: 'left'}}>
              <strong>{emp.name}</strong> - {emp.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;