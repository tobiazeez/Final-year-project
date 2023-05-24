import { useEffect, useState } from "react";
import { API } from "/Users/oluwatobiazeez/my-voting-app/util/api.js";


export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await API().get("/user");
      console.log(response);
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">List of Students</h1>
        <table className="table .table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
