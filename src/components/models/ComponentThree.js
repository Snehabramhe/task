import React,{useContext} from 'react'
import { ApplicationContext , UpdateChild, ArrayData} from '../../App'

const ComponentThree = () => {
  let appData = useContext(ApplicationContext)

  let dataArray = useContext(ArrayData)

  const updateChildContext =useContext(UpdateChild);

  console.log(updateChildContext);

  const clickMe = () => {
    updateChildContext("Iam from lowest child");
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-danger text-black">
               <pre>{JSON.stringify(appData)}</pre>

               <pre>{JSON.stringify(dataArray)}</pre>

               <button className='btn btn-success' onClick={clickMe}>click me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComponentThree
