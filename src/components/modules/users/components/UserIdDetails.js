import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RandomUserService, UserService } from "../services/UserService";
import Spinner from "../../../Spinner";

const UserIdDetails = () => {

  let { userId } = useParams();

  console.log(userId);

  let [state, setState] = useState({});


  let { loading, errorMessage, user } = state;

  useEffect(() => {
    setState({ ...state, loading: true });
    RandomUserService()
      .then((response) => {
      let userList = response?.data?.results;
      let user = userList.find(eachUser => eachUser.login.uuid === userId) 
        if (user) {
          setState({
            ...state,
            user: user,
            loading: false,
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          errorMessage: error.message,
          loading: false,
        });
      });
  }, [userId]);

  return (
    <>
      {loading && <Spinner />}
     {/* <pre>{JSON.stringify(userId)}</pre> */}
     
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">User Details</p>
            <p className="fst-italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fugit quos deserunt unde fuga, reprehenderit delectus
              veniam tempora, beatae dolores ipsam necessitatibus corrupti
              consequatur labore? Dolore, culpa nobis. Dolores, deleniti.
            </p>
          </div>
        </div>

        {/* {!loading && user && Object.keys(user).length > 0 && ( <pre>{JSON.stringify(user)}</pre>)}  */}

        {!loading && user && Object.keys(user).length > 0 && (
          <div className="container m-3">
            <div className="row align-item-center">
              <div className="col-sm-3 text-center">
                <img src={user.picture.large} alt="not-found"/>
              </div>
              <div className="col-sm-8">
                <ul className="list-group">
                  <li className="list-group-item">
                      Name: <span className="fw-bold">{user.name.first}</span>
                  </li>

                  <li className="list-group-item">
                      Email: <span className="fw-bold">{user.email}</span>
                  </li>

                  <li className="list-group-item">
                      Age: <span className="fw-bold">{user.dob.age} Years</span>
                  </li>

                  <li className="list-group-item">
                      City: <span className="fw-bold">{user.location.city}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Link to={"/users"} className="btn btn-success">Back</Link>
              </div>
            </div>

          </div>
       )} 
      </div>
    </>
  );
};

export default UserIdDetails;
