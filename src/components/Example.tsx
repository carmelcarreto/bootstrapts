import { useState } from "react";

export interface Employee {
  name: string;
  lastName: string;
  hiringDate: string;
  salary: number;
}

export default function Example() {
  const employee: Employee[] = [
    {name: 'Carlos', lastName: 'Molina', hiringDate: '2023-07-19', salary: 95000},
    {name: 'Catalina', lastName: 'Carreto', hiringDate: '2023-08-25', salary: 98700},
  ];

  const [employees, setEmployes] = useState<Employee[]>(employee);

  const handleAddEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newEmployee : Employee = {name: 'Luis', lastName: 'Hernandez', hiringDate: '2022-08-25', salary: 8700};
    setEmployes([...employees, newEmployee]);
  }

  return (
    <>
      <h1>Example</h1>

      <button onClick={handleAddEmployee}>Add Employee</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hired</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
        {
        employees.map((employee) => (
          <tr>
            <td>`${employee.name} ${employee.lastName}`</td>
            <td>`${employee.hiringDate}`</td>
            <td>`${employee.salary}`</td>
          </tr>
        ))
        }
        <tr>
          <td>Catalina Carreto</td>
          <td>2023-08-25</td>
          <td>98700</td>
        </tr>
        <tr>
          <td>Catalina Carreto</td>
          <td>2023-08-25</td>
          <td>98700</td>
        </tr>
        <tr>
          <td>Catalina Carreto</td>
          <td>2023-08-25</td>
          <td>98700</td>
        </tr>
        <tr>
          <td>Catalina Carreto</td>
          <td>2023-08-25</td>
          <td>98700</td>
        </tr>
        </tbody>
      </table>
    </>
  );
}


