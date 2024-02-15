import React from "react";
import ComponentTwo from "./ComponentTwo";



const ComponentOne = () => {

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-primary text-white">
          
                <ComponentTwo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentOne;
