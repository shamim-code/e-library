
import React from 'react';
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Login() {

  const auth = getAuth();
  const navigate = useNavigate();
  const [err, setErr] = useState("");


  const formikLogin = useFormik({

    initialValues : {
      email: '',
      pass : '',
    },
    
    onSubmit:(values, {resetForm})=>{

      let email = formikLogin.values.email;
      let password = formikLogin.values.pass;
      console.log(email, password);
      
      signInWithEmailAndPassword(auth, email , password)
        .then((userCredential) => {

          navigate("/dashboard");

          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === "auth/missing-password"){
            setErr("Invalid Password !",);
          }else if (errorCode === "auth/user-not-found"){
            setErr("User not found !");
          }else if(errorCode === "auth/wrong-password"){
            setErr("Invalid Password !");
          }
          
        });

      resetForm({ values : ""});
    }
    
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/dashboard");
      
    } 
  });

  

  return (

    <div class="container" style={{marginTop: "100px", width: "500px"}}>
      <h3 style={{textAlign:"center",textDecoration:"underline",marginBottom:"20px"}}>Login</h3>
    
    <form onSubmit={formikLogin.handleSubmit}>

    <div class="form-floating">
        <input class="form-control" type='email' required id="email" name="email" onChange={formikLogin.handleChange} value={formikLogin.values.email}  style={{height: "50px"}} ></input>
        <label for="floatingTextarea2">Email</label>
      </div>
      <br></br>
      <div class="form-floating">
        <input class="form-control" type='password' required placeholder="Leave a comment here" id="floatingTextarea2" name='pass' value={formikLogin.values.pass} onChange={formikLogin.handleChange} style={{height: "50px"}} ></input>
        <label for="floatingTextarea2">Password</label>
      </div>
      <p class="mb-3 form-check" style={{ color:"red",fontWeight:"bold", marginTop:"5px",display:"inline-block", borderRadius:"2px"}} >
        {err}
      </p> <br />
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    </div>
  )
}
