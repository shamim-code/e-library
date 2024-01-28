import React from 'react'
import Table from './Table';

export default function OrderInfo(props) {
    //console.log(props.order);
    const orders = props.order;
    console.log(orders);
   //console.log(props?.uID);

  return (
    <div>
      {
         //order.map((order) => (<Table order={order}  />))
      }
    </div>
  )
}
