
import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || course.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    addStudent(name, course);

    setName("");
    setCourse("");
  }

  return (
    <div>
      <h2>Register New Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter student course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default StudentForm;
