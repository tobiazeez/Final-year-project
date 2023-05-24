import Image from "next/image";
import aeies from "/public/images/aeies.png";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Sidebar = ({
  isCollapsed,
  toggleSidebarCollapse,
  handleLogout,
}) => (
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
