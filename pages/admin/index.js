import { Inter } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLogin() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/admin/login");
  };
  return (
    <>
      <div className="row vh-100 align-items-center justify-content-center ">
        <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
          <div className="row justify-content-center mb-4">
            <Image
              src="/images/aeieslogo.png"
              className="w-25"
              width="30"
              height="24"
              alt=">>AEIES"
            />
          </div>
          <h1 className="text-center p-2">ADMIN LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="text" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-secondary w-100">
              Login
            </button>{" "}
          </form>
        </div>
      </div>
    </>
  );
}
