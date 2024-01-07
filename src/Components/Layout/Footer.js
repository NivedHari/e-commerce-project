import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h4 className="text-white font-weight-bold">THE GENERICS</h4>
        </div>
        <div className="">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mr-3">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mr-3">
            <i className="fab fa-spotify"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
