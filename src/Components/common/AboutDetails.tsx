import React from "react";
import { Link } from "react-router-dom";

const AboutDetails = () => {
  return (
    <div>
      <h1 className="text-center my-5">About Me</h1>
      <div className="card mb-5 w-75 mx-auto mt-5 border-1 border-dark shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center md-mt-3">
            <img
              src="https://res.cloudinary.com/dnqfg86zq/image/upload/t_Fill300x300/v1727468291/mmdforwyiqbmkqkzzkfl.jpg"
              className="img-fluid rounded-start"
              alt="Brenda Soto"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Brenda Soto</h5>
              <p className="card-text">
                Hello, I'm Brenda. I was born and raised in the Bronx. I have a
                background in veterinary medicine and have transitioned into
                full-stack software development. I thrive in collaborative
                environments, excelling in communication and leveraging
                technology to solve complex problems. Now living in Connecticut,
                I am dedicated to continuous learning and I’m currently
                expanding my skills after finishing the Pursuit Fellowship. When
                I'm not coding or solving puzzles, I crochet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
