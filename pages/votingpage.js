import Image from "next/image";
import aeies from "/public/images/aeieslogo.png";
import styles from "../styles/Home.module.css";

export default function VotingPage() {
  const presidentialCandidates = listOfCandidates;
  return (
    <>
      <div className="container d-flex flex-column flex-md-row">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
          <div className={styles.imageContainer}>
            <Image src={aeies} alt=">>AEIES" fill className={styles.image} />
          </div>
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
            {presidentialCandidates.map((candidate, i) => {
              const { name, course, level, manifesto, image_url } = candidate;
              return (
                <div className="col" key={i}>
                  <div className="card h-100">
                    <Image
                      src={image_url}
                      className="card-img-top"
                      width="100"
                      height="200"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {name}
                        <br />
                        {course}
                        <br /> {level}
                      </h5>
                      <p className="card-text"> {manifesto}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end p-4">
            <button class="btn btn-primary me-md-2" type="button">
              Vote
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

const listOfCandidates = [
  {
    name: "Azeez Oluwatobi",
    course: "Computer Engineering",
    level: 500,
    manifesto: "I do not like to brag, just vote for me and see.",
    image_url: "/images/Tobsss.jpeg",
  },
  {
    name: "Jane Doe",
    course: "Information and Communication Engineering",
    level: 400,
    manifesto:
      "I just dey contest, make e no look like say I no serious with my life.",
    image_url: "/images/IY.jpeg",
  },
  {
    name: "John Doe",
    course: "Electrical and Electronics Engineering",
    level: 300,
    manifesto: "I will show you a town hall different from balabalu.",
    image_url: "/images/Vicky.jpeg",
  },
];
