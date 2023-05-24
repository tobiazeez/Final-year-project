import indexbg from "../public/indexbg.mp4";
import Link from "next/link";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <video src={indexbg} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="navbarr">
        <div className="menu">
          <div>
            <Link className="link" href="/admin">
              Admin
            </Link>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="home-text">
        <h1>AEIES COVENANT UNIVERSITY</h1>
        <p>Power to the People: Vote Today</p>
      </div>
      <div className="home-btn">
        <Link className="link" href="/signup">
          Register
        </Link>
      </div>{" "}
      <div className="home-btn">
        <Link className="link" href="/loginpage">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
