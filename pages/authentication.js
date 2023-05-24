import { Inter } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import aeies from "/public/images/aeies.png";
import { useState } from "react";

export default function Authentication() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading state to true
      const response = await axios.post(
        "https://voting-app.adaptable.app/api/v1/auth/login",
        {
          password: e.target.password.value,
        }
      );
      console.log(response);
      window.localStorage.setItem(
        "Token",
        JSON.stringify(response.data.data.token)
      );
      console.log(response.data);
      if (response.data.success) {
        router.push("/votingpage");
      } else {
        setError(response.data.message); // Set the error message from the API response
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during authentication."); // Set a generic error message
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <div className="row vh-100 align-items-center justify-content-center ">
        <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
          <div className="row justify-content-center mb-4">
            <Image src={aeies} className="w-25" height="24" alt=">>AEIES" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password was sent to your mail
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <div className="row justify-content-center">
              <button
                type="submit"
                className="btn btn-secondary w-50"
                disabled={loading}
              >
                {loading ? "Loading..." : "Start Voting"}
              </button>
            </div>
            {error && <p className="text-danger">{error}</p>}{" "}
            {/* Display the error message if it exists */}
          </form>
        </div>
      </div>
    </>
  );
}
