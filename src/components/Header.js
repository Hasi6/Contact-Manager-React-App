import React from "react";

const Header = props => {
  const { branding } = props;
  return (
      <nav className="navbar navbar-expand-sm
        navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a className="navbar-brand" href="/">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"> <a className="nav-link" href="/">Home</a> </li>
                </ul>
            </div>
        </div>
      </nav>
  );
};

Header.defaultProps = {
  branding: "My app"
};

export default Header;
