import { BiBrush, BiEdit, BiTrashAlt } from "react-icons/bi";
import { useState, useRef } from "react";

export default function Form() {
  const [array, setArray] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    level: "",
    manifestoe: "",
    position: "",
  });
  const [image, setImage] = useState("");
  let [index, setIndex] = useState();
  let [update, setUpdate] = useState(false);
  const imageRef = useRef(null);

  let { name, course, level, manifestoe, position } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
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
      });
      imageRef.current.value = "";
      e.target.reset();
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
    setUpdate(true);
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
    setUpdate(false);
    setFormData({
      name: "",
      course: "",
      level: "",
      manifestoe: "",
      position: "",
      image: "",
    });
    e.target.reset();
  };

  const courses = [
    {
      label: "CEN",
      value: "Computer Engineering",
    },
    {
      label: "EEE",
      value: "Electrical & Information Engineering",
    },
    {
      label: "ICE",
      value: "Information & Communication Engineering",
    },
  ];
  const options = [
    {
      label: 100,
      value: 100,
    },
    {
      label: 200,
      value: 200,
    },
    {
      label: 300,
      value: 300,
    },
    {
      label: 400,
      value: 400,
    },
    {
      label: 500,
      value: 500,
    },
  ];

  const positions = [
    {
      id: 1,
      name: "President",
    },
    {
      id: 2,
      name: "Vice President",
    },
    {
      id: 3,
      name: "Executive Secretary",
    },
    {
      id: 4,
      name: "Financial Secretary",
    },
    {
      id: 5,
      name: "Welfare Officer",
    },
    {
      id: 6,
      name: "Public Relations Officer",
    },
    {
      id: 7,
      name: "Events Officer",
    },
    {
      id: 8,
      name: "Academic Officer",
    },
  ];
  return (
    <div>
      <form className="row g-3" onSubmit={!update ? handleSubmit : updateInfo}>
        <div className="input-type col-md-6">
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            className="border form-control shadow-none rounded"
            placeholder="FullName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-type col-md-6">
          <select
            className="form-select"
            aria-label="Default select example"
            name="course"
            onChange={handleChange}
            value={formData.course || ""}
          >
            {" "}
            <option selected>Select Course</option>
            {courses.map((course, label) => (
              <option value={course.label} key={label}>
                {course.value}
              </option>
            ))}
          </select>
        </div>
        <div className="input-type col-md-2">
          <select
            className="form-select"
            aria-label="Default select example"
            name="level"
            onChange={handleChange}
            value={formData.level || ""}
          >
            {" "}
            <option selected>Select Level</option>
            {options.map((option, i) => (
              <option value={option.value} key={i}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-type  ">
          <input
            type="text"
            name="manifestoe"
            value={formData.manifestoe || ""}
            className="border form-control shadow-none rounded"
            placeholder="Manifestoe"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-type col-md-6">
          <select
            className="form-select"
            aria-label="Default select example"
            name="position"
            onChange={handleChange}
            value={formData.position || ""}
          >
            <option selected>Select Position</option>
            {positions.map((position, id) => (
              <option value={position.name} key={id}>
                {position.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="file">Upload your picture </label>
          <input
            className="form-control"
            name="image"
            id="formFileSm"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            ref={imageRef}
          ></input>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className=" flex btn btn-warning text-white px-4 py-2 border rounded justify-center"
          >
            {!update ? `Add data` : `Update data`}
            <span className="px-1">
              <BiBrush size={22}></BiBrush>
            </span>
          </button>
        </div>
      </form>
      <table className="table table-hover">
        <thead className="bg-secondary">
          <tr>
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
