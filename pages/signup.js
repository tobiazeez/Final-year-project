import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State variable for loading state

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !matricNo) {
      alert("All information not entered");
      return;
    }
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post(
        "https://voting-app.adaptable.app/api/v1/auth/signup",
        {
          firstname: fname,
          lastname: lname,
          email,
          matricNo,
        }
      );
      console.log(response.data);
      setResponseMessage(response.data.message);
      if (response.data.success) {
        router.push("/loginpage");
      } else {
        throw new Error("Sign up failed");
      }
    } catch (error) {
      console.error(error);
      alert("Sign up failed");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="row vh-100 align-items-center justify-content-center ">
      <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
        <form onSubmit={handleSubmit}>
          <h4 className="text-center">Create a secure account</h4>
          <p className="text-center text-muted">Join the vote</p>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Matriculation Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter matric no"
              onChange={(e) => setMatricNo(e.target.value)}
            />
          </div>
          {responseMessage && (
            <div className="alert alert-success" role="alert">
              {responseMessage}
            </div>
          )}{" "}
          {/* Render the response message if it exists */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <p className="registered text-right">
            Already registered <Link href="/loginpage">sign in?</Link>
          </p>
        </form>
      </div>{" "}
    </div>
  );
}
