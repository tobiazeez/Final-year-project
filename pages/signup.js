import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/loginpage");
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="registered text-right">
            Already registered <Link href="/loginpage">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
