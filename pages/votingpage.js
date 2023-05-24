import Image from "next/image";
import aeies from "/public/images/aeies.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { API } from "./controller/api";

export default function VotingPage() {
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const [listOfCandidates, setListOfCandidates] = useState([]);
  const [currentPosition, setCurrentPosition] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    // Fetch the candidates from the backend/server
    getCandidates();
  }, []);
  const getCandidates = async () => {
    try {
      const response = await API().get(
        `/candidate/position?position=president`
      );
      console.log("response", response);
      // Log the response data
      if (response.data.success) {
        const candidatesData = response.data.data.map((candidate) => {
          const image_url = candidate.image;
          return { ...candidate, image_url };
        });
        console.log("cd", candidatesData);

        setListOfCandidates(candidatesData);
        setCurrentPosition(candidatesData[0].position); // Set the currentPosition correctly
      } else {
        console.log(response.data.message); // Log the error message
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCandidate !== null) {
      try {
        const candidate = listOfCandidates[currentPosition][selectedCandidate];
        const candidateId = candidate.id;

        const response = await API().post(`/candidate/vote/${candidateId}`);
        console.log(response.data);
        // Handle the response as needed

        const allPositions = Object.keys(listOfCandidates);
        const indexOfCurrentPosition = allPositions.findIndex(
          (position) => position === currentPosition
        );
        const indexOfNextPosition = indexOfCurrentPosition + 1;

        if (indexOfNextPosition < allPositions.length) {
          setCurrentPosition(allPositions[indexOfNextPosition]);
          setSelectedCandidate(null);
          alert(
            `You have voted for ${listOfCandidates[currentPosition][selectedCandidate].name}. Thank you for voting!`
          );
        } else {
          alert("Success! VOTES SUBMITTED SUCCESSFULLY");
        }
      } catch (error) {
        console.error(error);
        // Handle the error as needed
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
          <h1 className="text-center">AEIES COUNCIL ELECTION</h1>
          <h6 className="category">
            <p>POSITION:</p>
            {currentPosition
              ? currentPosition.replace("_", " ").toUpperCase()
              : ""}
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="body">
              {listOfCandidates && listOfCandidates.length > 0 ? (
                Object.values(listOfCandidates).map((candidate, i) => {
                  const { fullname, course, level, manifestoe, image_url } =
                    candidate;
                  return (
                    <div
                      className={`slide-container ${
                        selectedCandidate === i ? "border border-primary" : ""
                      }`}
                      key={i}
                      onClick={() => setSelectedCandidate(i)}
                    >
                      <div className="slide-content">
                        <div className="card-wrapper">
                          <div className="card">
                            <div className="image-content">
                              <span className="overlay"></span>
                              <div className="card-image">
                                <Image
                                  src={image_url}
                                  className="card-img"
                                  width={100}
                                  height={200}
                                  alt="..."
                                />
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">
                                {fullname}
                                <br />
                                {course}
                                <br /> {level}
                              </h5>
                              <p className="card-text"> {manifestoe}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No candidates available.</p>
              )}
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
