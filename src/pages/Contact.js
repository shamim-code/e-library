import React from 'react'

export default function Contact() {
  return (
    <div class="container" style={{marginTop: "100px"}}>
    <form>
    <div class="form-floating">
        <input class="form-control" type='email' id="email" style={{height: "50px"}} ></input>
        <label for="floatingTextarea2">Email</label>
      </div>
      <br></br>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} ></textarea>
        <label for="floatingTextarea2">Message</label>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
