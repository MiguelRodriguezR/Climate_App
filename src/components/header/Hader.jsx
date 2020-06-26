import React from "react";

const Header = ({ title }) => {
  return (
    <nav>
      <div className="nav-wraper light-blue darken-2">
        <a href="#!" className="brand-logo">{title}</a>
      </div>
    </nav>
  );
};

export default Header;
