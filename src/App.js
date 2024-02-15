import React, { useState } from "react";
import NavBar from "./modules/layout/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import store from "./store/store";
import ContactDashboard from "./modules/contact/pages/dashboard/ContactDashboard";
import AdminContact from "./modules/contact/pages/admin/AdminContact";
import AddContact from "./modules/contact/pages/add-contact/AddContact";
import ViewContact from "./modules/contact/pages/view-contact/ViewContact";
import Home from "./modules/layout/home/Home";


export const ApplicationContext = React.createContext({});

export const UpdateChild = React.createContext("");

export const ArrayData = React.createContext([]);

const App = () => {

  const [appData, setappData] = useState({
    name: "Sneha Bramhe",
    version: "18.0",
    author: "FB Admin",
  });

  const [dataArray, setDataArray] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    // Add more items as needed
  ]);

  let [childText, setChildText] = useState("");

  let updateChildText = (value) => {
    setChildText(value);
  };

  return (
    <>
      <NavBar heading="Contact Manager" color="bg-dark" />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacts/admin" element={<AdminContact/>} />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/edit/:contactId" element={<AddContact edit/>} />
        <Route path="/contacts/view/:contactId" element={<ViewContact/>} />
      </Routes>
    </>
  );
};

export default App;
