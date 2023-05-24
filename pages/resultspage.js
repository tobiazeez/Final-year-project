import Image from "next/image";
import { useState, useEffect } from "react";
import aeies from "/public/images/aeies.png";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { API } from "./controller/api";

const Sidebar = ({ isCollapsed, toggleSidebarCollapse, handleLogout }) => (
  <aside className="sidebar" data-collapse={isCollapsed}>
    <button className="button" onClick={toggleSidebarCollapse}>
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
    <div className="d-grid gap-2 d-md-flex justify-content-md-end p-4">
      <button
        className="btn btn-primary me-md-2"
        type="submit"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  </aside>
);

export default function ResultsPage() {
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const handleLogout = () => {
    // Code to log the user out of the account
  };

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await API().get("/candidate");
        console.log("API response:", response);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <>
      <div className="layout">
        <div className="sidebar_wrapper">
          <Sidebar
            isCollapsed={isCollapsedSidebar}
            toggleSidebarCollapse={() => toggleSidebarCollapse((prev) => !prev)}
            handleLogout={handleLogout}
          />
        </div>
        <table className="table p-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Post</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            {/* {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <th scope="row">{candidate.id}</th>
                <td>{candidate.name}</td>
                <td>{candidate.post}</td>
                <td>{candidate.votes}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
