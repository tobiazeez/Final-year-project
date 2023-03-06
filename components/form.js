import { BiBrush, BiEdit, BiTrashAlt } from "react-icons/bi";
import { useState } from "react";

export default function Form() {
  const [array, setArray] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    level: "",
    manifestoe: "",
    position: "",
    image: "",
  });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { name, course, level, manifestoe, position, image } = formData;

  const data = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      course === "" ||
      level === "" ||
      manifestoe === "" ||
      position === "" ||
      image === ""
    ) {
      alert("Enter all information");
    } else {
      setArray([
        ...array,
        { name, course, level, manifestoe, position, image },
      ]);
      setFormData({
        name: "",
        course: "",
        level: "",
        manifestoe: "",
        position: "",
        image: "",
      });
    }
  };

  const deleteData = (i) => {
    console.log(i, "this index row is about to be deleted");
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  };

  const updateData = (i) => {
    let { name, course, level, manifestoe, position, image } = array[i];
    setFormData({ name, course, level, manifestoe, position, image });
    setBolin(true);
    setIndex(i);
  };

  const updateInfo = (e) => {
    e.preventDefault();
    let total = [...array];
    total.splice(index, 1, {
      name,
      course,
      level,
      manifestoe,
      position,
      image,
    });
    setArray(total);
    setBolin(false);
    setFormData({
      name: "",
      course: "",
      level: "",
      manifestoe: "",
      position: "",
      image: "",
    });
  };

  return (
    <div>
      <form className="row g-3" onSubmit={!bolin ? handleSubmit : updateInfo}>
        <div className="input-type col-md-6">
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            className="border form-control shadow-none rounded"
            placeholder="FullName"
            onChange={data}
          ></input>
        </div>
        <div className="input-type col-md-6">
          <input
            type="text"
            name="course"
            value={formData.course || ""}
            className="border form-control shadow-none rounded"
            placeholder="Course"
            onChange={data}
          ></input>
        </div>
        <div className="input-type col-md-6">
          <input
            type="number"
            name="level"
            value={formData.level || ""}
            className="border form-control shadow-none rounded"
            placeholder="Level"
            onChange={data}
          ></input>
        </div>
        <div className="input-type">
          <input
            type="text"
            name="manifestoe"
            value={formData.manifestoe || ""}
            className="border form-control shadow-none rounded"
            placeholder="Manifestoe"
            onChange={data}
          ></input>
        </div>
        <div className="input-type col-md-6">
          <input
            type="text"
            name="position"
            value={formData.position || ""}
            className="border form-control shadow-none rounded"
            placeholder="Position"
            onChange={data}
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="file">Upload your picture </label>
          <input
            className="form-control"
            name="image"
            // value={formData.image || ""}
            id="formFileSm"
            type="file"
            accept="image/png, image/jpeg"
            onChange={data}
          ></input>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className=" flex btn btn-warning text-white px-4 py-2 border rounded justify-center"
          >
            {!bolin ? `Add data` : `Update data`}
            <span className="px-1">
              <BiBrush size={22}></BiBrush>
            </span>
          </button>
        </div>
      </form>
      <table className="table table-hover">
        <thead className="bg-secondary">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Course</th>
            <th>Level</th>
            <th>Manifestoe</th>
            <th>Position</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {array &&
            array.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>{item.level}</td>
                  <td>{item.manifestoe}</td>
                  <td>{item.position}</td>
                  <td>{item.image}</td>
                  <td className="d-flex justify-content-around gap-1">
                    <button className="cursor">
                      <BiEdit
                        onClick={() => updateData(i)}
                        size={25}
                        color={"rgb(34,197,94)"}
                      ></BiEdit>
                    </button>
                    <button onClick={() => deleteData(i)} className="cursor">
                      <BiTrashAlt
                        size={25}
                        color={"rgb(244,63,94)"}
                      ></BiTrashAlt>
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
