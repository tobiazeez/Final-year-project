import Image from "next/image";
import aeies from "/public/images/aeieslogo.png";
import styles from "../styles/Home.module.css";

export default function resultsPage() {
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
        <table class="table p-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Post</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-success">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>President</td>
              <td>400</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>President</td>
              <td>299</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>President</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
