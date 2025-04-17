import React, { useEffect,useState } from "react";

const EmployeeForm = ({ addEmployee, editingEmployee, updateEmployee }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !role.trim()) return;

    const newEmployee = {
      name: name,
      role: role,
    };

    if (editingEmployee) {
      updateEmployee({ ...newEmployee, id: editingEmployee.id });
    } else {
      addEmployee(newEmployee);
      setName("");
      setRole("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginRight: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        }}
      />
      <input
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          marginRight: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: editingEmployee ? "#2196F3" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {editingEmployee? 'update': 'add'} Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
