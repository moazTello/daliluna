import React from "react";
import { Link } from "react-router-dom";
import owl from "../assets/images/owl.webp";
const Navdesy = () => {
  return (
    <div className="navbar bg-base-100 fixed z-20 px-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sunrise</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Sections</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <Link
                        to="/classifieds"
                        className=""
                        onClick={() => {
                          handleClick();
                          setWhere("Home");
                        }}
                      >
                        Classifieds
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/yellowPages"
                        className=""
                        onClick={() => {
                          handleClick();
                          setWhere("Resources");
                        }}
                      >
                        YellowPages
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={owl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navdesy;
