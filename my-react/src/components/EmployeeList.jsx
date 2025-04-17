import React from 'react';

const EmployeeList = ({ employees,handleEdit, deleteEmployee }) => {
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
              <button
                onClick={() => handleEdit(emp)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(emp.id)}
                style={{
                  marginLeft: '5px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  padding: '5px 5px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginBottom: '5px'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;