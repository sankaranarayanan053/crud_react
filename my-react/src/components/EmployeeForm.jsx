import React, { useState } from 'react';


const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && role) {
      const newEmployee = { name, role };
      addEmployee(newEmployee);
      setName('');
      setRole('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px', padding: '10px' , borderRadius: '5px', border: 'none'}}
      />
      <input
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ marginRight: '10px',  padding: '10px', 
          borderRadius: '5px', border: 'none'
        }}
      />
      <button type="submit"
      style={{ padding: '8px', marginRight: '5px', }}>Add Employee</button>
    </form>
  );
};

export default EmployeeForm;