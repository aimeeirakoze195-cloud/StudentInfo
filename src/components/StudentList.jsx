
import { useState } from "react";

function StudentList({ students, deleteStudent, editStudent }) {

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCourse, setEditCourse] = useState("");

  function startEdit(student) {
    setEditingId(student.id);
    setEditName(student.name);
    setEditCourse(student.course);
  }

  function saveEdit(id) {
    if (editName.trim() === "" || editCourse.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    editStudent(id, editName, editCourse);
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  return (
    <div>
      <h2>Student Information</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>

              <td>{index + 1}</td>

              <td>
                {editingId === student.id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  student.name
                )}
              </td>

              <td>
                {editingId === student.id ? (
                  <input
                    value={editCourse}
                    onChange={(e) => setEditCourse(e.target.value)}
                  />
                ) : (
                  student.course
                )}
              </td>

              <td>
                {editingId === student.id ? (
                  <>
                    <button onClick={() => saveEdit(student.id)}>
                      Save
                    </button>

                    <button onClick={cancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(student)}>
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {students.length === 0 && (
        <p>No students registered yet.</p>
      )}

    </div>
  );
}

export default StudentList;
