import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="search"
          autoFocus
          type="text"
          placeholder="Search Post"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </form>
    </nav>
  );
};

export default Nav;
