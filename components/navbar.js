import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src="/images/aeieslogo.png"
            alt=">>AEIES"
            width="30"
            height="24"
          />
        </a>
      </div>
    </nav>
  );
}
