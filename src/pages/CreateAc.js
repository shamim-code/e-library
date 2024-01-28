import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import firebaseConfig from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function CreateAc() {

  const auth = getAuth(); 
  const navigate = useNavigate();
  const [ermsg, setErr]= useState("");


  const formik =  useFormik({

    initialValues: {
        name : "",
        email: "",
        pass : "",
        conPass : "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        const formData = new URLSearchParams();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('pass', values.pass);
        formData.append('conPass', values.conPass);

        let name = formik.values.name;
        let email = formik.values.email;
        let pass = formik.values.pass;

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);

              updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }).then(() => {
                // Profile updated!
                // ...
              })

              navigate("/dashboard");
              
              // ...
            })
            .catch((error) => {
              console.log(error.code);
              if(error.code === "auth/weak-password"){
                  setErr("Please give a strong password!");
              }else if(error.code === "auth/email-already-in-use"){
                setErr("This email is already in used!");
              }
            });



        const res = await axios.post(
          //'http://localhost/Eapi/createA.php',
          formData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }

      resetForm({ values: '' });
    },
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/dashboard");
    } 
  });

  return (

    <form  className='CreateForm' onSubmit={formik.handleSubmit} >
      <h4 style={{color:"white"}}>Create Account</h4>
        
        <div>

        </div>

       <div class="form-floating" >
        <input class="form-control" type='text' id="name" name="name" required value={formik.values.name} onChange={formik.handleChange} style={{height: "50px",width: "50vw", margin:"0 auto"}} ></input>
        <label style={{marginLeft:"150px"}}>Name</label>
      </div>

        <br></br>

        <div class="form-floating">
          <input class="form-control" type='email' id="email" required  name='email' value={formik.values.email} onChange={formik.handleChange} style={{height: "50px",width: "50vw", margin:"0 auto"}} ></input>
          <label style={{marginLeft:"150px"}}>Email</label>
        </div>

       <br></br>

       <div class="form-floating">
        <input class="form-control" type='password' id="pass" name='pass' required value={formik.values.pass} onChange={formik.handleChange} style={{height: "50px",width: "50vw", margin:"0 auto"}} ></input>
        <label style={{marginLeft:"150px"}}>Password</label>
      </div>

       <br></br>

       <div class="form-floating">
        <input class="form-control" type='password' id="conPass" name='conPass' required value={formik.values.conPass} onChange={formik.handleChange} style={{height: "50px",width: "50vw", margin:"0 auto"}} ></input>
        <label style={{marginLeft:"150px"}}>Confirm Password</label>
      </div>
      <p style={{color:"white",backgroundColor:"red",display:"inline-block",padding:"3px", borderRadius:"2px",marginTop:"5px"}}>{ermsg}</p>

       <br></br>
      <button type='submit' style={{position:"absolute"}} class="btn btn-outline-danger" >Submit</button>
      

    </form>
  )
}
