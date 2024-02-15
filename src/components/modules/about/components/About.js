import React from "react";

const About = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-success">About US</p>
          <p className="fst-italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            fugit quos deserunt unde fuga, reprehenderit delectus veniam
            tempora, beatae dolores ipsam necessitatibus corrupti consequatur
            labore? Dolore, culpa nobis. Dolores, deleniti.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <ul className="list-group">
            <li className="list-group-item">
              App Name : <small className="fw-bold">React Routing</small>
            </li>

            <li className="list-group-item">
           Version : <small className="fw-bold">1.0.1</small>
          </li>

          <li className="list-group-item">
          Auther : <small className="fw-bold">Sneha</small>
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
