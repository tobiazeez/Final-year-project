import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import aeies from "/public/images/aeies.png";
import Authentication from "./authentication";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [proceed, setProceed] = useState(false);
  const [email, setEmail] = useState("");
  const [matric, setMatric] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post(
        "https://voting-app.adaptable.app/api/v1/auth/login-password",
        {
          email,
          matricNo: matric,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        setProceed(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Login failed");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      {proceed ? (
        <Authentication />
      ) : (
        <div className="row vh-100 align-items-center justify-content-center ">
          <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
            <div className="row justify-content-center mb-4">
              <Image src={aeies} className="w-25" height="24" alt=">>AEIES" />
            </div>
            <h4 className="text-center p-2 ">Login to your account</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Student E-mail address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="matric" className="form-label">
                  Matriculation Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="matric"
                  value={matric}
                  onChange={(e) => setMatric(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-100"
                disabled={isLoading} // Disable the button when loading is true
              >
                {isLoading ? "Loading..." : "Proceed"}{" "}
                {/* Display loading text when loading is true */}
              </button>
              {error && <p className="text-danger">{error}</p>}

              <p className="registered text-right">
                Do not have an account? <Link href="/signup">Register</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
