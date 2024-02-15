import axios from "axios";


export const RandomUserService = () => {
    return axios.get(`https://gist.githubusercontent.com/Snehabramhe/bd3e3b63f3dbb7040edbdc312d1c643d/raw/96cc317da2d790ff9b2df036c34050740b37ebc0/rendom-users-26-2024.json`);
}

export const UserService = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/`);
}

// export const UserDetails = (id) => {
//     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// }

// export const UserDetails = (userId) => {
//     return axios.get(`https://gist.githubusercontent.com/Snehabramhe/bd3e3b63f3dbb7040edbdc312d1c643d/raw/96cc317da2d790ff9b2df036c34050740b37ebc0/rendom-users-26-2024.json/${userId}`);
// }