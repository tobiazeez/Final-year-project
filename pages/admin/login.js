import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="container m-50">
        <div className="row mt-3">
          <div className="col-md-7 mx-auto text-center ">
            <Image
              src="/images/aeieslogo.png"
              className="w-25"
              width="30"
              height="24"
              alt=">>AEIES"
            />

            <h6 className="h5 mt-5">Welcome Admin</h6>
          </div>
          <a href="#" className="text-decoration-none text-capitalize">
            <div className="link-box mt-3 text-center">List of Students</div>
          </a>
          <a href="#" className="text-decoration-none text-capitalize">
            <div className="link-box mt-3 text-center">List of Candidates</div>
          </a>
          <a href="#" className="text-decoration-none text-capitalize">
            <div className="link-box mt-3 text-center">Results</div>
          </a>
          <div className="row justify-content-center mt-3">
            <button type="submit" className="btn btn-secondary w-25">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
