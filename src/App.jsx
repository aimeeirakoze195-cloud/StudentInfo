
import { useState } from "react";

import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  function addStudent(name, course) {
    const newStudent = {
      id: Date.now(),
      name,
      course
    };

    setStudents([...students, newStudent]);
  }

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  function editStudent(id, updatedName, updatedCourse) {
    setStudents(
      students.map(student =>
        student.id === id
          ? { ...student, name: updatedName, course: updatedCourse }
          : student
      )
    );
  }

  const totalCourses = new Set(
    students.map(student => student.course)
  ).size;

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <h2>GROUP 7</h2>
          <p>Student Management</p>
        </div>

        <nav>
          <a href="#dashboard" className="active">▦ Dashboard</a>
          <a href="#register">＋ Add Student</a>
          <a href="#students">♟ View Students</a>
        </nav>

        <div className="sidebar-about">
          <h3>ⓘ About</h3>
          <p>
            Manage student records easily with
            options to add, view, update and delete students.
          </p>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content" id="dashboard">

        <Header />

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card blue">
            <h3>Total Students</h3>
            <h1><Counter count={students.length} /></h1>
            <p>Registered students</p>
          </div>

          <div className="stat-card green">
            <h3>Courses</h3>
            <h1>{totalCourses}</h1>
            <p>Registered courses</p>
          </div>

          <div className="stat-card orange">
            <h3>Latest Student</h3>
            <h1 className="latest-name">
              {students.length > 0
                ? students[students.length - 1].name
                : "None"}
            </h1>
            <p>Recently registered</p>
          </div>

          <div className="stat-card red">
            <h3>System Status</h3>
            <h1>Active</h1>
            <p>Management system</p>
          </div>

        </section>

        {/* Registration Form */}
        <section className="content-card" id="register">
          <StudentForm addStudent={addStudent} />
        </section>

        {/* Student Table */}
        <section className="content-card" id="students">

          <div className="section-heading">
            <h2>♟ All Students</h2>
          </div>

          <StudentList
            students={students}
            deleteStudent={deleteStudent}
            editStudent={editStudent}
          />

        </section>

        {/* Quick Actions */}
        <section className="quick-actions">

          <a href="#register" className="action-card">
            <span>👤</span>
            <div>
              <h3>Add Student</h3>
              <p>Register a new student</p>
            </div>
          </a>

          <a href="#students" className="action-card">
            <span>👥</span>
            <div>
              <h3>View Students</h3>
              <p>View registered students</p>
            </div>
          </a>

        </section>

      </main>
    </div>
  );
}

export default App;
