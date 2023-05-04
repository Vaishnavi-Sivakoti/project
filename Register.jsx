import axios from "axios";
import {  useState } from "react";
import { Navigate } from "react-router-dom";
import '../css/style.css'

function Register() {

    const [name, setName] = useState("");
    const [aluminiId, setId] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          const res = await axios.post("http://localhost:9999/alumini/create", {
          name: name,
          aluminiId: aluminiId,
          email: email,
          password: password,
          })
          alert("Alumini Registation Successfully");
          console.log(res);
        } catch (err) {
          alert(err);
        }
      }

    return (
     <div id="container">
        <div class="container mt-4" >
    <div class="card" id="card">
            <h1>Alumini Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Name :</label>
          <input type="text"  class="form-control" id="name" placeholder="Enter Name"
          
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          />

          
        </div>

        <div class="form-group">
            <label>Alumini Id :</label>
            <input type="text"  class="form-control" id="aluminiId" placeholder="Enter Id"
            
            value={aluminiId}
            onChange={(event) => {
              setId(event.target.value);
            }}
            
            />
          </div>
    
        <div class="form-group">
          <label>Email :</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
          
          
          
        </div>

        <div class="form-group">
            <label>Password :</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>


    
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>




    </div>



     </div>
    );
  }
  
  export default  Register;