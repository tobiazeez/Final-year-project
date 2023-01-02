import Image from "next/image";

export default function VotingPage() {
  return (
    <>
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
        <main className="ps-0 ps-md-5 flex-grow-1">
          <h1 className="text-center">Voting Page</h1>
          <h6>Presidents</h6>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <Image
                  src="/images/IY.jpeg"
                  className="card-img-top"
                  width="100"
                  height="200"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Inyene Eduok <br />
                    Computer Engineering
                    <br /> 500 level
                  </h5>
                  <p className="card-text">
                    {" "}
                    Vote for me and it will be a party everyday in EIE.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src="/images/Vicky.jpeg"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Victoria Mogbolu <br />
                    Computer Engineering
                    <br /> 500 level
                  </h5>
                  <p className="card-text">
                    If I become president, I will be doing giveaway everyweek
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Image
                  src="/images/Tobsss.jpeg"
                  className="card-img-top"
                  alt="..."
                  width="100"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Azeez Oluwatobi <br />
                    Computer Engineering
                    <br /> 500 level
                  </h5>
                  <p className="card-text">
                    I do not like to brag, just vote for me and see.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end m-4">
            <button class="btn btn-primary me-md-2" type="submit">
              Vote
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
