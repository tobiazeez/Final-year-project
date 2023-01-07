import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import LoginPageTwo from "./loginpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [proceed, setProceed] = useState(false);

  return (
    <>
      {" "}
      {proceed ? (
        <LoginPageTwo />
      ) : (
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
            <h1 className="text-center p-2">E-VOTING PORTAL</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setProceed(!proceed);
              }}
            >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Student E-mail address
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="matric" className="form-label">
                  Matriculation Number
                </label>
                <input type="text" className="form-control" id="matric" />
              </div>
              <button type="submit" onS className="btn btn-secondary w-100">
                Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
