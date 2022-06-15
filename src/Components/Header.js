import React from "react";


const Header = () => {
  return (
    <header className="header">
      <div >
        <div className="d-flex flex-wrap align-items-center justify-content-around ">
           NC <span className="text-warning">NEWS</span>

          <form className="search" role="search">
            <input
              type="search"
              className=""
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Home
            </button>
            <button type="button" className="btn btn-warning">
             About
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;