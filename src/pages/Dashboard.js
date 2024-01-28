import React from 'react';
import { getAuth,onAuthStateChanged ,signOut  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import BookList from './BookList';
import Table from './Table';
import { useEffect, useState } from 'react';
import OrderInfo from './OrderInfo';

export default function Dashboard() {


  const [orderDetails, setOrderDetails] =useState([]);
  const [uID, setUid] =useState("");
  
  useEffect(()=>{
    fetch("http://localhost/Eapi/getOrderDetails.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setOrderDetails(data);
    })
  },[])


  console.log(orderDetails);



    const auth = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        console.log(uid);
        setUid(uid);

      } else {
        // User is signed out
        // ...
      }
    });
    

    const handleLogOut = () => {

      const auth = getAuth();
      signOut(auth).then(() => {
        navigate("/login");
      }).catch((error) => {
        // An error happened.
      });

    }

    const formik = useFormik({
      initialValues: {
        title : "",
        authors : "",
        authorsPic : "",
        price : "",
        coverPic : "",
        desc : "",
        options : "",
        pdf : "",
      },
      onSubmit: async(values, { resetForm })=>{

        console.log(values);
        const formData = {title: formik.values.title, authors: formik.values.authors, authorsPic: formik.values.authorsPic, price: formik.values.price, coverPic: formik.values.coverPic,desc: formik.values.desc,options: formik.values.options,pdf: formik.values.pdf};

        const res = await axios.post("http://localhost/Eapi/publish.php",
        formData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );


        resetForm({ values: '' });
        
      },
      
    });
    
    if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const uid = user.uid;
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {

        navigate("/login");
        
      }
    });

    



  return (


    <div >

      <div style={{textAlign:"right", margin:"10px"}}>
        <button type="button" class="btn btn-secondary btn-sm" onClick={handleLogOut} >Logout</button>
      </div>

      <div class="container bg-light" style={{marginTop:"20px", padding:"10px", borderRadius:"5px"}}>
        <h4 style={{textAlign:"center", textDecoration:"underline",marginBottom:"20px"}}>Publish book:</h4>

        <form>
        <div class="form-group">
          <input type="text" class="form-control" required id="book_ID" value={formik.values.title}  onChange={formik.handleChange} name="title" aria-describedby="emailHelp" placeholder="Title"></input>
        </div>

        <br></br>

        <div class="form-group">
          <input type="text" class="form-control" id="author" required value={formik.values.authors}  onChange={formik.handleChange} name='authors' aria-describedby="emailHelp" placeholder="Authors Name"></input>
        </div>

        <br></br>

        <div class="form-group">
          <label>Your Photo:</label><br></br>
          <input type="text" class="form-control" placeholder='Please upload link' value={formik.values.authorsPic}  onChange={formik.handleChange} id="authorsPic" name='authorsPic'></input>
        </div>

        <br></br>

        <div class="form-group">
          <input type="text" class="form-control" required value={formik.values.price}  onChange={formik.handleChange} id="book_price_id" placeholder="Price" name='price' ></input>
        </div>
        
        <br></br>

        <div id="form-group" >
            <select class="form-select" aria-label="Default select example"
            id="option"
            name="options"
            required
            value={formik.values.options}
            onChange={formik.handleChange}
            >
                <option value="">--Select--</option>
                <option value="poem">Poem</option>
                <option value="scienceFiction">Science Fiction</option>
                <option value="novel">Novel</option>
          </select>
        </div>

        <br></br>

        <div class="form-group">
          <label> Books Cover Pic:</label> <br></br>
          <input type="text" required class="form-control" placeholder='Please upload link' value={formik.values.coverPic}   onChange={formik.handleChange} id="cover_pic" name='coverPic'></input>
        </div>

        <br></br>

        <div class="form-group">
          <label> Book's pdf:</label> <br></br>
          <input type="text" required class="form-control" placeholder='Please upload link' value={formik.values.pdf}   onChange={formik.handleChange} id="cover_pic" name='pdf'></input>
        </div>

        <br></br>

        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" required value={formik.values.desc}  onChange={formik.handleChange} id="book_desc" name='desc' style={{height: "100px"}} ></textarea>
            <label for="floatingTextarea2">Describtion</label>
        </div>

        <br></br>
        
        <button type="submit" class="btn btn-outline-success" onClick={formik.handleSubmit}>Publish</button>
      </form>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <OrderInfo  order={orderDetails} />

      <table class="table table-hover table-success" style={{textAlign:"center"}}>
        <thead>

          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Link</th>
            </tr>
          </thead>

          <tbody>

            {
             orderDetails.map((item) => (
        
              item.U_id == uID && item.U_id!=null ? <tr key={item.U_id}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td><a href={item.link}>Link</a></td>
            </tr>: null
            ))
            }

          </tbody>


        </table>


      
    </div>
  )
}
