import React from "react";
const studentData = [
    {
        name : 'Jeikishore',
        reg no : '22BEECE019',
        course : 'Electronics and communication engineering',
    },
    {
        name : 'Afsal Mohammed',
        reg no : '22BEECE0001',
        course : 'Electronics and communication engineering',
    },
    {
        name : 'Dharan Vignesh',
        reg no : '22BEECE009',
        course : 'Electronics and communication engineering',
    }
];
const StudentDetails = () => {
    return(
        <div style={{ padding: '20px' }}>
      <h1>Developer Page - Student Details</h1>
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg no</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.reg no}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}