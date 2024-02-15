import React, { useState } from "react";
import axios from "axios";

const Users = () => {
  let [userDetails, setUserDetails] = useState([]);

  let [data, setData] = useState([]);


  let getUserDetails = () => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        console.log(response.data.results);
        setUserDetails(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert("somthing went wrong");
      });
  };

  let filterUser = (e) => {
//alert(e.target.value)
if(e.target.value === "male"){
  setUserDetails(data.filter((user)=> user.gender === "male"));
} else if(e.target.value === "female"){
  setUserDetails(data.filter((user)=> user.gender === "female"));
}  else{
  setUserDetails(data);
}
}

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h2 className="text-success">User Information</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              accusantium nemo eum fugit quibusdam nostrum vero doloremque?
              Tenetur et aut culpa sint! Perspiciatis fugit eius commodi
              necessitatibus eos et id in, ullam magni nemo. Officiis odio ab
              officia, eaque repudiandae sequi et impedit eos animi assumenda
              iusto nesciunt corporis sed, id laborum cum perspiciatis, culpa
              quisquam nemo similique est quibusdam iure laboriosam labore.
              Quidem eveniet maxime placeat consectetur libero dolore nemo iste,
              aspernatur, rem ut nihil reprehenderit ad, quos debitis cupiditate
              rerum suscipit ipsum necessitatibus ea velit obcaecati! Aliquid
              eos accusamus minima labore natus, consectetur fugit dolore
              tempora dignissimos eveniet voluptatibus enim assumenda? Nesciunt,
              natus tempore. Molestias voluptate reiciendis velit rem ipsam
              saepe culpa, cum porro laboriosam, officiis aut harum hic officia
              possimus esse odit natus eveniet nemo nisi quam consequuntur
              blanditiis architecto nostrum. Sint, ducimus? Possimus odit quo
              incidunt molestiae eveniet. Possimus, doloremque. Nam mollitia
              quisquam inventore, accusamus excepturi voluptatem, cumque
              explicabo omnis quam ipsam odio libero aliquam ipsa molestiae
              minus sapiente! Quia repellendus nobis dolore non quos
              praesentium, consequuntur mollitia labore nisi libero earum ipsum
              beatae illum assumenda et laboriosam odio, tenetur esse officia
              ipsam, saepe harum. Quis sit illo rerum libero magnam placeat,
              perferendis nobis velit vero?
            </p>
            <button onClick={getUserDetails} className="btn btn-success">
              Get Users
            </button>

            {userDetails.length > 0 && (
              <div className="mt-3" style={{ textAlign: "center" }}>
                <input type="radio" className="m-2" name="gender" defaultChecked value="all" onChange={filterUser}/> All
                <input type="radio" className="m-2" name="gender" value="female" onChange={filterUser}/> Female
                <input type="radio" className="m-2" name="gender" value="male" onChange={filterUser}/> Male
              </div>
            )}

            {userDetails.length > 0 ? (
              <>
                <table className="table table-hover table-striped text-center">
                  <thead style={{ backgroundColor: "black", color: "white" }}>
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
                    {userDetails.map((userDetail, index) => {
                      return (
                        <tr key={userDetail.login.uuid}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={userDetail.picture.medium}
                              alt="img-notfound"
                            />
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
            ) : (
              <h2 style={{ color: "red", textAlign: "center" }}>
                No Users Information
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
