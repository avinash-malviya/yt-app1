import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };

  // const { photoURL } = useSelector((state) => state.auth?.user);

  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img
          src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://lh6.googleusercontent.com/-_p3gXEMzy-s/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN24UYviWGN1AM0XZQOusjvEBQcuQ/photo.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
