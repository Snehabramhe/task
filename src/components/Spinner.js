import React from "react";
import spinnerImg from "../assets/img/spinner.gif";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <div className="d-flex flex-column justify-content-center align-item-center h-100">
          <img src={spinnerImg} slot="not-found" className="d-block m-auto"/>
        </div>
      </div>
    </>
  );
};

export default Spinner;
