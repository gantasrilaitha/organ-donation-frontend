import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [bloodtype,setBloodType]=useState("O");
  const [organ,setOrgan]=useState("Heart");
  const [tissuesize,setTissueSize]=useState("");
  const [urgency,setUrgency]=useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
        bloodtype,
        organ,
        tissuesize,
        urgency
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns mt-2">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">BloodType</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={bloodtype}
                  onChange={(e) => setBloodType(e.target.value)}
                >
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="A+">A+</option>
                  <option value="B-">b-</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Organ</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={organ}
                  onChange={(e) => setOrgan(e.target.value)}
                >
                  <option value="Heart">Heart</option>
                  <option value="Brain">Brain</option>
                  <option value="Kidney">Kidney</option>
                  <option value="Eyes">Eyes</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">TissueSize</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tissuesize}
                onChange={(e) => setTissueSize(e.target.value)}
                placeholder="TissueSize"
              />
              
            </div>
          </div>
          <div className="field">
            <label className="label">Urgency</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                placeholder="Urgency"
              />
              
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddUser;