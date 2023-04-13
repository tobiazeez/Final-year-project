import Image from "next/image";
import { useState } from "react";
import aeies from "/public/images/aeies.png";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function resultsPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isCollapsedSidebar, toggleSidebarCollapse] = useState(false);
  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };
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
        <table class="table p-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Post</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-success">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>President</td>
              <td>400</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>President</td>
              <td>299</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>President</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
