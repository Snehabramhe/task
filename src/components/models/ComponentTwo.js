import React from 'react'
import ComponentThree from './ComponentThree'

const ComponentTwo = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-success text-white">
                <ComponentThree/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComponentTwo
