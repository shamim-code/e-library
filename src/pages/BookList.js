import React from 'react'

export default function BookList(props) {


  console.log(props.t);
  console.log(props.a);
  console.log(props.l);
  // console.log(author_name);
  // console.log(booklink);

  return (



    <div class="container bg-success" style={{padding:"5px", borderRadius:"5px"}}>

    <h4 style={{textAlign:"center",color:"white", textDecoration:"underline",marginBottom:"20px"}}>Your Collections:</h4>
      
      <table class="table table-hover" style={{color:"white"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book's Title</th>
              <th scope="col">Author Name</th>
              <th scope="col">Read</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{props.t}</td>
              <td>{props.a}</td>
              <td><a style={{backgroundColor:"white"}} href={props.l}>Link</a></td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}
