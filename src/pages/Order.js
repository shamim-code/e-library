import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import BookList from './BookList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from './Table';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Order() {

  const auth = getAuth();
  const [books, setBookData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost/Eapi/getBookData.php")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setBookData(data);
    })
  },[])

  console.log(books)
  const bookC =books;
  console.log(`this is bookc: ${bookC}`);

  

  const {title} = useParams();
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [title2, setTitle2] = useState("");
  const [author, setAuthor] = useState("");
  const [setLink, setLink2] = useState("");
  const [uID, setUid] = useState("");

  const bookInfo = bookC.filter((book)=> book?.[1] === title);
  console.log(bookInfo);
  // console.log(bookInfo[0]?.book_name);
  // console.log(bookInfo[0].cover_pic);
  // console.log(bookInfo[0].price);
  console.log(bookInfo[0]?.[1]);
  console.log(bookInfo[0]?.[6]);

  let authorName = bookInfo[0]?.[2];
  let bookLink = bookInfo[0]?.[7];

  console.log(authorName);

  const passdata =()=>{

    console.log(bookInfo[0]?.[1]);

    const title = bookInfo[0]?.[1];
    const author = bookInfo[0]?.[2];
    const link = bookInfo[0]?.[7];
    setTitle2(title);
    setAuthor(author);
    setLink2(link);
    
  }

  

  const CompleteOrder = async () => {

    toast.success('🦄 Order Completed !', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

      passdata();
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

      //const formData = {uID,title2,author,setLink};

      const formData = new URLSearchParams();
      formData.append("uID", uID);
      formData.append("title2", title2);
      formData.append("author", author);
      formData.append("setLink", setLink);
    
      try {
        const response = await axios.post(
          "http://localhost/Eapi/receiveOrder.php",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    

  }
  

  return (
    <div>
    <div class="container p-5 ml-5 mt-5 text-center " style={{backgroundColor:"#535c68", borderRadius:"5px", height:"600px", marginBottom:"10px"}}>
      <h2 style={{color:"white"}} >{title}</h2>
      <img class="h-50 m-2" src={bookInfo[0]?.[6]} alt="Book Image.."></img>
      <p style={{color:"white"}}>{bookInfo[0]?.[8]}</p>
      <label style={{color:"white", fontWeight:"bold"}}>Price: {bookInfo[0]?.[4]} ৳</label>
      <br />
      <button class="btn btn-outline-light mt-5" onClick={CompleteOrder}>Confirm</button>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      
          
    </div>


    </div>
  )
}
