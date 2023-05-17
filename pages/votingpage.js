import Image from "next/image";
import aeies from "/public/images/aeies.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import { API } from "./controller/api";

export default function VotingPage() {
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const [listOfCandidates, setListOfCandidates] = useState({});
  const [currentRole, setCurrentRole] = useState("");
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
      console.log("response", response); // Log the response data
      if (response.data.success) {
        setListOfCandidates(response.data.data);
        setCurrentRole(Object.keys(response.data.data)[0]);
      }
      console.log(response.data.data); // Log the list of candidates
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCandidate !== null) {
      const allRoles = Object.keys(listOfCandidates);
      const indexOfCurrentRole = allRoles.findIndex(
        (role) => role === currentRole
      );
      const indexOfNextRole = indexOfCurrentRole + 1;

      if (indexOfNextRole < allRoles.length) {
        setCurrentRole(allRoles[indexOfNextRole]);
        setSelectedCandidate(null);
        alert(
          "You have voted for ${listOfCandidates[currentRole][selectedCandidate].name}. Thank you for voting!"
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
            {/* {currentRole.replace("_", " ").toUpperCase()} */}
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="body">
              {listOfCandidates[currentRole]?.map((candidate, i) => {
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
