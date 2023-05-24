import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import aeies from "/public/images/aeies.png";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin");
  };

  return (
    <>
      <div className="container m-50">
        <div className="row mt-3">
          <div className="col-md-7 mx-auto text-center">
            <Image
              src={aeies}
              className="w-25"
              width="auto"
              height="24"
              alt="AEIES"
            />

            <h6 className="h5 mt-5">Welcome Admin,</h6>
          </div>

          <ul className="sidebar_list">
            <li className="sidebar_item">
              <Link href="/admin/students" passHref className="sidebar_link">
                <span className="sidebar_icon">
                  <BsPeople />
                </span>
                <span className="sidebar_name">List of Students</span>
              </Link>
            </li>
            <li className="sidebar_item">
              <Link href="/admin/candidates" passHref className="sidebar_link">
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
          <div className="row justify-content-center mt-3">
            <button
              type="button"
              className="btn btn-secondary w-25"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
