// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";


// function MyOrder(){
//     const [orders,setOrders] = useState([]);
//     useEffect(()=>{
//         const fetchorders = async()=>{
//             try{
//                 const userData = localStorage.getItem("user");
//                 const user = userData ? JSON.parse(userData): null;
//                 console.log("User:", user);
//                 if(!user){
//                     alert("please Login first");
//                     return;
//                 }
//                 const res = await axios.get(`http://localhost:3004/api/MyOrders/${user._id}`);
//                 setOrders(res.data);
//                 console.log("Orders API Response:", res.data);
//             }catch(error){
//                 console.log(error);
//                 alert("Error fetching orders");
//             }
//         };
//         fetchorders();
//     },[]);

//     return(
//         <div>
//             <h2>My Order</h2>
//             {orders.length === 0 ?(
//                 <p>No orders found</p>
//             ):(
//                 orders.map((order)=>(
//                     <div key={order._id} style={{border:"1px solid #ccc",margin:"10px", padding:"10px", borderRadius: "10px", maxWidth: "300px" }}>
//                         <img src={order.productId?.imageUrl} alt={order.productId?.toolName} style={{width:"100%", height:"200px",objectFit:"cover"}} />
//                         <h3>Order Details</h3>
//                         <h3>Tool: {order.productId?.toolName}</h3>
//                         <p><b>Price:</b> ₹{order.productId?.price}</p>

//                         <p><b>Address:</b>{order.address}</p>
//                         <p><b>status: </b>{order.status}</p>

//                     </div>
//                 ))
//             )}
//         </div>
//     )
// }
// export default MyOrder;


import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      alert("Please login first!");
      return;
    }
    fetch(`http://localhost:3004/api/my-orders/${user._id}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user]);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div key={order._id}>
          <p>Amount: ₹{order.amount}</p>
          <p>Payment ID: {order.paymentId}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;