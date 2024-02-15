import React, { useEffect, useState } from "react";

import Spinner from "../../../Spinner";

import { RandomUserService } from "../services/UserService";
import { Link} from "react-router-dom";


const UserListComp = () => {
  let [state, setState] = useState({});

  let {loading, errorMessage, users} = state;
 
  useEffect(() => {
    setState({ ...state, loading: true });
    RandomUserService().then((response) => {
      console.log(
        response?.data?.results
      )
      setState({
        ...state,
        users: response?.data?.results,
        loading: false,
      });
    })  
      .catch((error) => {
        setState({
          ...state,
          errorMessage: error?.message,
          loading: false,
        });
      });
  }, []);

  console.log(state.users)

  return (
    <>
     

      {loading && <Spinner/>}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">User List</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              laboriosam animi, quod dignissimos incidunt similique. Amet cum
              deleniti tempore neque sint quia eos quibusdam ex sit? Itaque
              repudiandae dicta incidunt?
            </p>
          </div>
        </div>

        {users?.length > 0 &&  <div className="containe mt-3">
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead className="bg-success texxt-white">
                <tr>
                  <th>SNO</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user,index) => {
                    return(
                      <tr key={index}>
                      {/* <td>
                      <Link to={`/users/${user.id}`} className="text-decoration-none text-success">{user.id }</Link>
                      </td> */}
                      <td>
                      <Link to={`/users/${user.login.uuid}`} className="text-decoration-none text-success">{user.login.uuid.substring(user.login.uuid.length - 5)}</Link>
                      </td>
                      <td>
                      <img src={user.picture.medium} alt="" width={50} height={50}/>
                      </td>
                      <td>{user.name.first}</td>
                      <td>{user.dob.age} Years</td>
                      <td>{user.email}</td>
                      <td>{user.location.city}</td>
                      <td>{user.location.country}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    }
       
      </div>
    </>
  );
};

export default UserListComp;
