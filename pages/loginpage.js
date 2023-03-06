import Image from "next/image";
import aeies from "/public/images/aeieslogo.png";
import styles from "../styles/Home.module.css";
export default function LoginPageTwo() {
  return (
    <>
      <div className="row vh-100 align-items-center justify-content-center ">
        <div className="col-sm-8 col-md-6 col-lg-4 rounded p-4 shadow">
          <div className="row justify-content-center mb-4">
            <div className={styles.imageContainer}>
              <Image src={aeies} alt=">>AEIES" fill className={styles.image} />
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}
