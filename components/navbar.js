import Image from "next/image";

export default function NavBar() {
  return (
    <div className="container d-flex flex-column flex-md-row">
      <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
        <a className="navbar-brand" href="#">
          <Image
            src="/images/aeieslogo.png"
            alt=">>AEIES"
            width="100"
            height="100"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
            <li>
              <a href="a" className="nav-link" aria-current="page">
                Candidates
              </a>
            </li>
            <li>
              <a href="a" className="nav-link">
                Results
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
