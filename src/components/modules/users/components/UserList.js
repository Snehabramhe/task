import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../../Spinner";

const UserList = () => {
  let [users, setUsers] = useState([]);

  let [loading, setLoading] = useState(false);

  let [errror, setError] = useState("");

  useEffect(() => {}, []);

  let clickgetUsers = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">User List</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              molestias a sed reiciendis obcaecati placeat ducimus nulla. Fuga
              laboriosam temporibus ea similique incidunt asperiores molestiae
              ratione voluptatibus quos accusantium eum vero totam
              necessitatibus nulla nam illum ex harum, adipisci recusandae quia
              sint libero odio vel? Mollitia assumenda tempora nihil architecto
              consectetur? In quaerat obcaecati amet perferendis sequi explicabo
              culpa libero.
            </p>

            <button className="btn btn-success" onClick={clickgetUsers}>
              Get Users
            </button>
          </div>
        </div>
      </div>

      {users.length === 0 && !loading && errror.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-danger">{errror}</p>
            </div>
          </div>
        </div>
      )}

      {users.length > 0 && (
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped text-center shadow-lg">
                <thead className="bg-success text-white">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Phone No</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.address.city}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>{user.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
