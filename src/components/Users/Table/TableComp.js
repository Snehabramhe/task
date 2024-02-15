import React from "react";

const TableComp = ({ users }) => {
  return (
    <>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 &&
            users.map((userDetail, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={userDetail.picture.medium} alt="img-notfound" />
                </td>
                <td>
                  {userDetail.name.first} {userDetail.name.last}
                </td>
                <td>{userDetail.gender}</td>
                <td>{userDetail.email}</td>
                <td>{userDetail.location.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComp;
