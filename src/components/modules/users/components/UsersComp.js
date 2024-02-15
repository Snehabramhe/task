import React, { useState } from "react";
import InitialPage from "../../../Users/InitialPage/InitialPage";
import NoData from "../../../Users/NoData/NoData";
import TableComp from "../../../Users/Table/TableComp";
import axios from "axios";

const UsersComp = () => {
let [users, setUsers] = useState([]);

const getUsers = () => {
    axios.get("https://randomuser.me/api/?results=30")
    .then((response) => {
      console.log(response.data.results);
      setUsers(response.data.results);
    })
    .catch((error) => {
      console.log(error);
      alert("somthing went wrong");
    });
}

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <InitialPage getUsers={getUsers}/>
            {
              users.length > 0 ? <TableComp users={users} /> : <NoData/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersComp;
