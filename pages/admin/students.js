export default function Students() {
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
            <tr>
              <th scope="row">1</th>
              <td>Oluwatobi</td>
              <td>Azeez</td>
              <td>azeez.oluwatobi@stu.cu.edu.ng</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>John</td>
              <td>Doe</td>
              <td>johndoe@stu.cu.edu.ng</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jane</td>
              <td>Doe</td>
              <td>janedoe@stu.cu.edu.ng</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
