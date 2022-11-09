import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h1 className="text-center mb-3 my-3">About Us</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-dark">Special title treatment</h5>
              <p className={`card-text text-dark`}>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-dark">Special title treatment</h5>
              <p className={`card-text text-dark`}>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
