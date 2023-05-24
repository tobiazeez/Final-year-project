import { useState } from "react";

export default function AdminSignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://voting-app.adaptable.app/api/v1/auth/admin/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
            adminSecret,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Admin signup response:", data);
        // Handle the response data
      } else {
        console.error("Admin signup failed");
        // Handle the signup failure
      }
    } catch (error) {
      console.error("Error signing up admin:", error);
      // Handle any errors
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Admin Signup</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="adminSecret">Admin Secret:</label>
        <input
          type="text"
          id="adminSecret"
          value={adminSecret}
          onChange={(e) => setAdminSecret(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
