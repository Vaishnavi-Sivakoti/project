import axios from "axios";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9999/alumini/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res)
             const data = res.data;
             
             if (data.status === true) 
             {
                alert("Login Successfully"); 
                navigate('/home');
             } 
             else 
             {
                   alert("Login Failed")
             }  
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
      


    return (
     <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>

             <div class="row">
             <div class="col-sm-6">
 
             <form>
             <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
          
          
          
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>

            </div>
            </div>
            </div>

     </div>
    );


  }
  
  export default Login;