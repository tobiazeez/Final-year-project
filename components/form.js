import { BiBrush, BiEdit, BiTrashAlt } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { API } from "../pages/controller/api";

export default function Form() {
  const [array, setArray] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    level: "",
    manifestoe: "",
    position: "",
  });
  const [image, setImage] = useState(null);
  let [index, setIndex] = useState();
  let [update, setUpdate] = useState(false);
  const imageRef = useRef(null);

  let { name, course, level, manifestoe, position } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const getCandidates = async () => {
    try {
      const response = await API().get(`/candidate`);
      console.log("response", response); // Log the response data
      if (response.data.success) {
        setCandidate(response.data.data);
      } else {
        console.log(response.data.message); // Log the error message
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const api = API(); // Create an instance of the API

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      course === "" ||
      level === "" ||
      manifestoe === "" ||
      position === "" ||
      image === null
    ) {
      alert("Enter all information");
    } else {
      const formData = new FormData();
      formData.append("fullname", name);
      formData.append("course", course);
      formData.append("level", level);
      formData.append("manifestoe", manifestoe);
      formData.append("position", position);
      formData.append("image", image);

      try {
        const response = await api.post("/candidate", formData);

        if (response.status === 200) {
          const newItem = {
            id: Date.now(),
            name,
            course,
            level,
            manifestoe,
            position,
            image: URL.createObjectURL(image),
          };
          setArray([...array, newItem]);
          setFormData({
            name: "",
            course: "",
            level: "",
            manifestoe: "",
            position: "",
          });
          imageRef.current.value = "";
          e.target.reset();
          getCandidates();
        } else {
          console.log("Error:", response.data); // Handle error response
        }
      } catch (error) {
        console.log("Error:", error); // Handle network or other errors
      }
    }
  };

  const deleteData = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this row?"
    );
    if (confirmDelete) {
      try {
        const response = await api.delete(`/candidate/${id}`);
        if (response.data.success) {
          const updatedArray = array.filter((item) => item.id !== id);
          setArray(updatedArray);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateData = (id) => {
    const itemToUpdate = array.find((item) => item.id === id);
    if (itemToUpdate) {
      setFormData({ ...itemToUpdate });
      setUpdate(true);
      setIndex(id);
    }
  };

  const updateInfo = async (e) => {
    e.preventDefault();
    const itemToUpdate = array.find((item) => item.id === index);
    if (itemToUpdate) {
      const updatedItem = {
        id: itemToUpdate.id,
        name,
        course,
        level,
        manifestoe,
        position,
        image: URL.createObjectURL(image),
      };
      try {
        const response = await api.put(
          `/candidate/${itemToUpdate.id}`,
          updatedItem
        );
        if (response.data.success) {
          const updatedArray = array.map((item) => {
            if (item.id === itemToUpdate.id) {
              return updatedItem;
            }
            return item;
          });
          setArray(updatedArray);
          setUpdate(false);
          setFormData({
            name: "",
            course: "",
            level: "",
            manifestoe: "",
            position: "",
          });
          e.target.reset();
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const courses = [
    {
      label: "Computer Engineering",
      value: "CEN",
    },
    {
      label: "Electrical & Information Engineering",
      value: "EEE",
    },
    {
      label: "Information & Communication Engineering",
      value: "ICE",
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
            <option value="" defaultValue>
              Select Course
            </option>
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
            <option value="" defaultValue>
              Select Level
            </option>
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
            <option value="" defaultValue>
              Select Position
            </option>
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
            accept="image/png, image/jpeg, image/jpg
            "
            onChange={handleImageChange}
            ref={imageRef}
          ></input>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="flex btn btn-warning text-white px-4 py-2 border rounded justify-center"
          >
            {!update ? `Add data` : `Update data`}
            <span className="ms-2">{!update ? <BiBrush /> : <BiEdit />}</span>
          </button>
        </div>
      </form>

      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>
              <th scope="col">Level</th>
              <th scope="col">Manifestoe</th>
              <th scope="col">Position</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidate.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.fullname}</td>
                <td>{data.course}</td>
                <td>{data.level}</td>
                <td>{data.manifestoe}</td>
                <td>{data.position}</td>
                <td>
                  {data.image && (
                    <Image
                      src={data.image}
                      alt="Candidate Image"
                      width={50}
                      height={50}
                      // decoding="async"
                      // loading="lazy"
                      // style={{ display: "block" }}
                    />
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteData(data.id)}
                  >
                    <BiTrashAlt />
                  </button>
                  <button
                    type="button"
                    className="btn btn-success ms-2"
                    onClick={() => updateData(data.id)}
                  >
                    <BiEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
