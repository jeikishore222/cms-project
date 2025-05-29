import React from "react";

const developers = [
  {
    id: 1,
    name: 'Jeikishore K',
    regNo: '22BEECE019',
    course: 'Electronics And Communication Engineering',
  },
  {
    id: 2,
    name: 'Afsal Mohamed K',
    regNo: '22BEECE001',
    course: 'Electronics And Communication Engineering',
  },
  {
    id: 3,
    name: 'Dharan Vignesh S',
    regNo: '22BEECE009',
    course: 'Electronics And Communication Engineering',
  }
];

const Develop = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
      <h1>Developer Page - Student Details</h1>
      {developers.map((student) => (
        <div
          key={student.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#dee2e6",
          }}
        >
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Reg No:</strong> {student.regNo}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      ))}
    </div>
  );
};

export default Develop;
