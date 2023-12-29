import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { currenUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between item-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-orange-300">Real</span>
          <span className="text-slate-500">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-orange-300" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:glow">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currenUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currenUser.avatar} alt="profile" />
            ) : (
              <li className="hidden bold sm:inline text-slate-700 hover:underline">
                <span>Sign-</span>
                <span className="text-orange-300 bold">in</span>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
