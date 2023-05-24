import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import aeies from "/public/images/aeies.png";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading state to true

    try {
      const response = await fetch(
        "https://voting-app.adaptable.app/api/v1/auth/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      console.log(response); // Log the response in the console

      const data = await response.json();
      console.log(data); // Log the response data in the console

      if (response.ok) {
        window.localStorage.setItem("Token", JSON.stringify(data.data.token)); // Store the token in local storage

        router.push("/admin/dashboard");
      } else {
        setError(data.message); // Set the error message from the API response
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
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
          <div className="row justify-content-center mb-4">
            <Image
              src={aeies}
              className="w-25"
              width="auto"
              height="24"
              alt="AEIES"
            />
          </div>
          <h1 className="text-center p-2">ADMIN LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button
              type="submit"
              className="btn btn-secondary w-100"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
