import Image from "next/image";
import aeies from "/public/images/aeies.png";
import { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function WinnersPage() {
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

        <div className="body">
          <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay-w"></span>
                    <div className="card-image">
                      <Image
                        src="/images/tobsss.jpeg"
                        className="card-img"
                        width="150"
                        height="150"
                        alt=">>AEIES"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Tobi Azeez</h2>
                    <p>President</p>
                    <p className="description">Total Number of votes:100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay-w"></span>
                    <div className="card-image">
                      <Image
                        src="/images/tobsss.jpeg"
                        className="card-img"
                        width="150"
                        height="150"
                        alt=">>AEIES"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Tobi Azeez</h2>
                    <p>President</p>
                    <p className="description">Total Number of votes:100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay-w"></span>
                    <div className="card-image">
                      <Image
                        src="/images/tobsss.jpeg"
                        className="card-img"
                        width="150"
                        height="150"
                        alt=">>AEIES"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Tobi Azeez</h2>
                    <p>President</p>
                    <p className="description">Total Number of votes:100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay-w"></span>
                    <div className="card-image">
                      <Image
                        src="/images/tobsss.jpeg"
                        className="card-img"
                        width="150"
                        height="150"
                        alt=">>AEIES"
                      />
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Tobi Azeez</h2>
                    <p>President</p>
                    <p className="description">Total Number of votes:100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
