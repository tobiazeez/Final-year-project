import { Inter } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import Authentication from "./authentication";
import Link from "next/link";
import aeies from "/public/images/aeies.png";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [proceed, setProceed] = useState(false);

  return (
    <>
      {" "}
      {proceed ? (
        <Authentication />
      ) : (
        <div className="row vh-100 align-items-center justify-content-center ">
          <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
            <div className="row justify-content-center mb-4">
              <Image
                src={aeies}
                className="w-25"
                width="30"
                height="24"
                alt=">>AEIES"
              />
            </div>
            <h4 className="text-center p-2 ">Login to your account</h4>
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
