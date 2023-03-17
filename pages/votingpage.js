import Image from "next/image";
import aeies from "/public/images/aeieslogo.png";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { getXataClient } from "./xata";

export default function VotingPage() {
  const allRoles = Object.keys(listOfCandidates);
  const [currentRole, setCurrentRole] = useState(allRoles[0]);
  const candidatesToShow = listOfCandidates[currentRole];

  const handleSubmit = (e) => {
    e.preventDefault();
    const indexOfCurrentRole = allRoles.findIndex(
      (role) => role === currentRole
    );
    console.log(indexOfCurrentRole, "Index of current role");

    const indexOfNextRole = indexOfCurrentRole + 1;
    const nextRole = allRoles[indexOfNextRole];

    if (indexOfNextRole < allRoles.length) {
      setCurrentRole(nextRole);
    } else {
      alert("Oya come and be going!");
    }
  };
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
          <h6>{currentRole.replace("_", " ").toUpperCase()}</h6>
          <form onSubmit={handleSubmit}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {candidatesToShow.map((candidate, i) => {
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
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-4">
              <button className="btn btn-primary me-md-2" type="submit">
                Vote
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

const listOfCandidates = {
  president: [
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
  ],
  vice_president: [
    {
      name: "Olanipekun Temiloluwa",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "Emi Lokan.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Onojake Mercy",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "Don't you like good things.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Jewel David",
      course: "Computer Engineering",
      level: 300,
      manifesto: "Jesus is Lord.",
      image_url: "/images/aeies.jpg",
    },
  ],
  executive_secretary: [
    {
      name: "Victoria",
      course: "Computer Engineering",
      level: 100,
      manifesto: "I'm shy,lol",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Inyene",
      course: "Information and Communication Engineering",
      level: 200,
      manifesto: "Please vote for me",
      image_url: "/images/aeies.jpg",
    },
  ],
  financial_secretary: [
    {
      name: "Jane Madu",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "I do not like to brag, just vote for me and see.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Sharon Chinedu",
      course: "Information and Communication Engineering",
      level: 500,
      manifesto:
        "I just dey contest, make e no look like say I no serious with my life.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Jim Rod",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I will show you a town hall different from balabalu.",
      image_url: "/images/aeies.jpg",
    },
  ],
  welfare_officer: [
    {
      name: "Blessing James",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "Your comfort is my care.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Job Dan",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "I will treat you well.",
      image_url: "/images/aeies.jpg",
    },
    {
      name: "Hill Crest",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I am the one for you.",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Sommy Vick",
      course: "Electrical and Electronics Engineering",
      level: 500,
      manifesto: "Anything for you.",
      image_url: "/images/aeies.jpeg",
    },
  ],
  public_relations_officer: [
    {
      name: "Osahon Orha",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "Make we relate.",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Okey Bakassi",
      course: "Okey for the people",
      level: 400,
      manifesto: "I will treat you well.",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Basket Mouth",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I will make you laugh.",
      image_url: "/images/aeies.jpeg",
    },
  ],
  events_officer: [
    {
      name: "Davido",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "When I look into your eyes, all i see is your waist",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Burna Boy",
      course: "Okey for the people",
      level: 400,
      manifesto: "I got a lot of enemies.",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Wiz Kid",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I tell you say...",
      image_url: "/images/aeies.jpeg",
    },
  ],
  academic_officer: [
    {
      name: "Mayorkun Baby",
      course: "Electrical and Electronics Engineering",
      level: 500,
      manifesto: "Let us help each other graduate.",
      image_url: "/images/aeies.jpeg",
    },
    {
      name: "Elijah Nelson",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "I will make academics fun.",
      image_url: "/images/aeies.jpeg",
    },
  ],
};
const xata = new getXataClient();

const page = await xata.db.Voters.getPaginated({
  pagination: {
    size: 15,
  },
});

console.log(page.records);
