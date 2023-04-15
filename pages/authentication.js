import { Inter } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import aeies from "/public/images/aeies.png";

export default function Authentication() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/votingpage");
  };
  return (
    <>
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
              <button type="submit" className="btn btn-secondary w-50">
                Start Voting
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
