import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
//import { React, useState } from "react";
//import TextField from "@mui/material/TextField";
//import List from "./components/List"
import React, { useState } from "react";
import{Users} from"./user";
import "./App.css";
import Table from "./Table";
function App() {
  const [query,setQuery]=useState("");
  const keys=["organ","name","gender"]
  console.log(Users[0]["organ"])
  const search=(data)=>{return data.filter(
    (item)=>
    /*item.organ.toLowerCase().includes(query)||
    item.name.toLowerCase().includes(query)
    )*/
    keys.some((key)=>item[key].toLowerCase().includes(query))
  )
  };
  //console.log(Users.filter(user=>user.organ.toLowerCase().includes("br")));
  return (
    
    <BrowserRouter>
    <h2 align="center"><b>Organ Donation</b></h2>
      <div className="App">
        <input type="text" 
        placeholder="Search" 
        className="search" 
        onChange={(e)=>setQuery(e.target.value)}
        />
      <Table data={search(Users)}/>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;