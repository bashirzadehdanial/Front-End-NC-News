import React from "react";




const Header = () => {
  return (
    <header className="header">
      <div >
        <div >
           Danial <span className="text-warning">NEWS</span> 

          <form className="search-box" role="search">
            <input
              type="search"
              className="search-box"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="button">
            <button type="button-item"  className="button-item">
              Home
            </button>
            <button type="button-item" className="button-item">
             About
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;