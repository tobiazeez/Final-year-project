import Image from "next/image";
import aeies from "../public/images/aeies.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { API } from "../util/api.js"

export default function WinnersPage() {
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const [topCandidates, setTopCandidates] = useState([]);

  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };

  useEffect(() => {
    const fetchTopCandidates = async () => {
      try {
        const response = await API().get("/candidate/top");
        console.log("API response:", response);
        setTopCandidates(response.data);
      } catch (error) {
        console.error("Error fetching top candidates:", error);
      }
    };

    fetchTopCandidates();
  }, []);

  return (
    <>
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

        <div className="body">
          {topCandidates.map((candidate) => (
            <div className="slide-container" key={candidate.id}>
              <div className="slide-content">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay-w"></span>
                      <div className="card-image">
                        <Image
                          src={candidate.image}
                          className="card-img"
                          width="150"
                          height="150"
                          alt={candidate.name}
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">{candidate.name}</h2>
                      <p>{candidate.post}</p>
                      <p className="description">
                        Total Number of votes: {candidate.votes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
