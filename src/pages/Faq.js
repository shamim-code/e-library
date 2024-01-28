import React, { useState } from 'react'

export default function Faq() {


   const [flag1, setFalg1]= useState(false);
   const [flag2, setFalg2]= useState(false);
   const [flag3, setFalg3]= useState(false);
   const [flag4, setFalg4]= useState(false);

  return (
  

    <div className='faq-container'>
              <h3 style={{textAlign:"center",textDecoration: "underline"}}>FAQs</h3>
              <div className='faq-container div1'>

                  <div>

                  <h3>Who we are?</h3>

                  {
                    flag1 ? <p>We are a small team of Daffodil International University.</p> : null
                  } 

                  </div>

                  <button onClick={()=>{
                    setFalg1(!flag1);
                  }}>

                    {
                      flag1 ? "-" : "+"
                    }

                  </button>

             </div>
             <div className='faq-container div1'>

                  <div>

                  <h3>What are the objectives of this project?</h3>

                  {
                    flag2 ? <p>Our Project Objective is to make access a booke easier.</p> : null
                  } 

                  </div>

                  <button onClick={()=>{
                    setFalg2(!flag2);
                  }}>

                    {
                      flag2 ? "-" : "+"
                    }

                  </button>

             </div>
             <div className='faq-container div1'>

                  <div>

                  <h3>How to contact with us?</h3>

                  {
                    flag3 ? <p>If you want to conatact with us then goto our contact secton or follow our social media.</p> : null
                  } 

                  </div>

                  <button onClick={()=>{
                    setFalg3(!flag3);
                  }}>

                    {
                      flag3 ? "-" : "+"
                    }

                  </button>

             </div>
             <div className='faq-container div1'>

                  <div>

                  <h3>Have you any copyright issue?</h3>

                  {
                    flag4 ? <p>Yes, don't copy or share our document with orthers. It will be unfair.</p> : null
                  } 

                  </div>

                  <button onClick={()=>{
                    setFalg4(!flag4);
                  }}>

                    {
                      flag4 ? "-" : "+"
                    }

                  </button>

             </div>
    </div>
  )
}
