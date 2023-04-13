import Image from "next/image";
import aeies from "/public/images/aeies.png";
import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function VotingPage() {
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const allRoles = Object.keys(listOfCandidates);
  const [currentRole, setCurrentRole] = useState(allRoles[0]);
  const candidatesToShow = listOfCandidates[currentRole];
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCandidate !== null) {
      const indexOfCurrentRole = allRoles.findIndex(
        (role) => role === currentRole
      );
      console.log(indexOfCurrentRole, "Index of current role");

      const indexOfNextRole = indexOfCurrentRole + 1;
      const nextRole = allRoles[indexOfNextRole];

      if (indexOfNextRole < allRoles.length) {
        setCurrentRole(allRoles[indexOfNextRole]);
        setSelectedCandidate(null);
        alert(
          `You have voted for ${candidatesToShow[selectedCandidate].name}. Thank you for voting!`
        );
      } else {
        alert("Success! VOTES SUBMITTED SUCCESSFULLY");
      }
    } else {
      alert("Please select a candidate to vote.");
    }
  };

  return (
    <div className="layout">
      <div className="sidebar_wrapper">
        <aside className="sidebar" data-collapse={isCollapsedSidebar}>
          <button className="button" onClick={toggleSidebarCollapseHandler}>
            <MdOutlineKeyboardArrowLeft />
          </button>
          <div className="sidebar_top">
            <Image
              src={aeies}
              width={100}
              height={80}
              className="sidebar_logo"
              alt="logo"
            />
            <p className="sidebar_logo-name">CU CHAPTER</p>
          </div>
          <ul className="sidebar_list">
            <li className="sidebar_item">
              <Link href="/votingpage" className="sidebar_link">
                <span className="sidebar_icon">
                  <BsPeople />
                </span>
                <span className="sidebar_name">Candidates</span>
              </Link>
            </li>
          </ul>
          <ul className="sidebar_list">
            <li className="sidebar_item">
              <div href="/" className="sidebar_link">
                <span className="sidebar_icon">
                  <MdDashboard />
                </span>
                <span className="sidebar_name">Results</span>
                <span className="arrow">&rsaquo;</span>
              </div>
              <ul className="sidebar_list">
                <li className="sidebar_item">
                  <Link href="/winnerspage" className="sidebar_link">
                    <span className="sidebar_icon">
                      <MdDashboard />
                    </span>
                    <span className="sidebar_name">Top candidates</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resultspage" className="sidebar_link">
                    <span>
                      <MdDashboard />
                    </span>
                    <span className="sidebar_name">All candidates</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <div className="header">
          Your vote, your voice now just a click away!
        </div>
        <main className="ps-0 ps-md-5 flex-grow-1">
          {" "}
          <h1 className="text-center">AEIES COUNCIL ELECTION</h1>
          <h6 className="category">
            <p>CATEGORY:</p>
            {currentRole.replace("_", " ").toUpperCase()}
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="body">
              {candidatesToShow.map((candidate, i) => {
                const { name, course, level, manifesto, image_url } = candidate;
                return (
                  <div
                    className={`slide-container ${
                      selectedCandidate === i ? "border border-primary" : ""
                    }`}
                    key={i}
                    onClick={() => setSelectedCandidate(i)}
                  >
                    {/* <div className="slide-container"> */}
                    <div className="slide-content">
                      <div className="card-wrapper">
                        <div className="card">
                          <div className="image-content">
                            <span className="overlay"></span>
                            <div className="card-image">
                              <Image
                                src={image_url}
                                className="card-img"
                                width="100"
                                height="200"
                                alt="..."
                              />
                            </div>
                          </div>
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
                    </div>
                    {/* </div> */}
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
    </div>
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
      manifesto: "Emi lokan",
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
      image_url: "/images/aeies.png",
    },
    {
      name: "Onojake Mercy",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "Don't you like good things.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Jewel David",
      course: "Computer Engineering",
      level: 300,
      manifesto: "Jesus is Lord.",
      image_url: "/images/aeies.png",
    },
  ],
  executive_secretary: [
    {
      name: "Victoria",
      course: "Computer Engineering",
      level: 100,
      manifesto: "I'm shy,lol",
      image_url: "/images/aeies.png",
    },
    {
      name: "Inyene",
      course: "ICE",
      level: 200,
      manifesto: "Please vote for me",
      image_url: "/images/aeies.png",
    },
  ],
  financial_secretary: [
    {
      name: "Jane Madu",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "I do not like to brag, just vote for me and see.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Sharon Chinedu",
      course: "Information and Communication Engineering",
      level: 500,
      manifesto:
        "I just dey contest, make e no look like say I no serious with my life.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Jim Rod",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I will show you a town hall different from balabalu.",
      image_url: "/images/aeies.png",
    },
  ],
  welfare_officer: [
    {
      name: "Blessing James",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "Your comfort is my care.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Job Dan",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "I will treat you well.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Hill Crest",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I am the one for you.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Sommy Vick",
      course: "Electrical and Electronics Engineering",
      level: 500,
      manifesto: "Anything for you.",
      image_url: "/images/aeies.png",
    },
  ],
  public_relations_officer: [
    {
      name: "Osahon Orha",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "Make we relate.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Okey Bakassi",
      course: "Electrical and Information Engineering",
      level: 400,
      manifesto: "I will treat you well.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Basket Mouth",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I will make you laugh.",
      image_url: "/images/aeies.png",
    },
  ],
  events_officer: [
    {
      name: "Davido",
      course: "Electrical and Information Engineering",
      level: 500,
      manifesto: "When I look into your eyes, all i see is your waist",
      image_url: "/images/aeies.png",
    },
    {
      name: "Burna Boy",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "I got a lot of enemies, I'm a baboon,I libe in the zoo.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Wiz Kid",
      course: "Electrical and Electronics Engineering",
      level: 300,
      manifesto: "I tell you say...",
      image_url: "/images/aeies.png",
    },
  ],
  academic_officer: [
    {
      name: "Mayorkun Baby",
      course: "Electrical and Electronics Engineering",
      level: 500,
      manifesto: "Let us help each other graduate.",
      image_url: "/images/aeies.png",
    },
    {
      name: "Elijah Nelson",
      course: "Information and Communication Engineering",
      level: 400,
      manifesto: "I will make academics fun.",
      image_url: "/images/aeies.png",
    },
  ],
};
