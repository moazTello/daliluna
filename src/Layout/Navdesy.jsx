import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import owl from "../assets/images/owl.webp";
import { FaBuromobelexperte } from "react-icons/fa6";
import useWindowSize from "../hooks/useWindowSize";
import { useDataContext } from "../DataContext/DataContext";
const Navdesy = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [flip, setFlip] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      <div className="navbar bg-base-100 fixed z-20 px-10">
        <div className="flex-1">
          <a target="_blank" href="https://sunrise-center.net" className="btn btn-ghost text-xl">Sunrise</a>
        </div>
        {currentUrl !== '/' && <div className="flex-none gap-2">
          {width < 500 && (
            <div className="form-control">
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>
                        <FaBuromobelexperte color="white" size={24} />
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        <li>
                          <Link
                            to="/classifieds"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Classifieds
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/yellowPages"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            YellowPages
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/yellowpages/yellowpagesServices"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/Countries"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Countries
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/currencies"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Currencies
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blogs"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/lang"
                            className="btn mt-1"
                            style={{ borderColor: "rgb(8,178,253)" }}
                          >
                            Languages
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="OWL" src={owl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>}
      </div>
      {width >= 500 && currentUrl !== "/" &&(
        <div
          className={`flex flex-col items-center min-h-[70vh] ${
            flip ? "w-60" : "w-14"
          } pt-24 bg-base-100 fixed border-b-2 border-r-2 border-solid z-10 rounded-br-xl`}
          style={{ borderColor: "rgb(8,178,253)" }}
        >
          <button style={{ border:"1px solid rgb(8,178,253)", padding:"2px", borderRadius:"15%" }} onClick={() => setFlip((old) => !old)}>
            <FaBuromobelexperte color="white" size={30} />
          </button>

          {flip && (
            <ul className="p-2 bg-base-100 rounded-t-none flex flex-col justify-between mt-5 pb-10 h-[75vh]">
              <li>
                <Link
                  to="/classifieds"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Classifieds
                </Link>
              </li>
              <li>
                <Link
                  to="/yellowPages"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  YellowPages
                </Link>
              </li>
              <li>
                <Link
                  to="/yellowpages/yellowpagesServices"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Countries"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  to="/currencies"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Currencies
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/lang"
                  className="btn min-w-[150px] mt-2"
                  style={{ borderColor: "rgb(8,178,253)" }}
                >
                  Languages
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navdesy;
