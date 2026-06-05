import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user } = useAuth();
  const location = useLocation();
  const product = location.state?.tool;

  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const placeOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        alert("please login to place order");
        return;
      }

      const res = await axios.post("http://localhost:3004/api/order", {
        productId: product._id,
        userId: user?._id,
        address: address
      });
      console.log(res)


      alert(" Order Placed Successfully");
    } catch (err) {
      console.log(err);
      alert(" Order Failed");
    }
  };
  //payment system integration 

  // const handlePayment = async () => {
  //   try {
  //     // 1️⃣ Create order
  //     const res = await fetch("http://localhost:3004/api/create-order", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ amount: 500 }), // dynamic
  //     });

  //     const order = await res.json();

  //     // 2️⃣ Razorpay options
  //     const options = {
  //       key: "rzp_test_ShKS3xSgbcYLfy",
  //       amount: order.amount,
  //       currency: "INR",
  //       name: "Farming Tools",
  //       description: "Order Payment",
  //       order_id: order.id,

  //       handler: async function (response) {
  //         // 3️⃣ Verify payment
  //         const verifyRes = await fetch("http://localhost:3004/verify-payment", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(response),
  //         });

  //         const verifyData = await verifyRes.json();

  //         if (verifyData.success) {
  //           alert("Payment Successful ✅");

  //           // 👉 redirect
  //           window.location.href = "/myorder";
  //         } else {
  //           alert("Payment Failed ❌");
  //         }
  //       },

  //       prefill: {
  //         name: "Gaurav",
  //         email: "test@gmail.com",
  //       },

  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  const handlePayment = async () => {
    try {
      //  Create order
      const res = await fetch("http://localhost:3004/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: product.price }),
      });

      const order = await res.json();

      // 2️ Razorpay open
      const options = {
        key: "rzp_test_ShKS3xSgbcYLfy",
        amount: order.amount,
        currency: "INR",
        name: "Farming Tools",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {
          //  VERIFY PAYMENT (correct way)
          const verifyRes = await fetch("http://localhost:3004/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,

              userId: user?._id,
              amount: product.price,
            })
          });
          console.log(response);
          const data = await verifyRes.json();

          if (data.success) {
            alert("Payment Successful ");
            navigate("/myorder");
          } else {
            alert("Payment Failed ");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h2>Checkout Page</h2>

      {product && (
        <>
          <div key={product._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", maxWidth: "300px" }}>
            <img src={product.imageUrl} alt={product.toolName} style={{ width: "100%", height: "200px", objesctFit: "cover" }} />
            <h3>{product.toolName}</h3>
            <h4>{product.FullName}</h4>
            <p>Price: ₹{product.price}</p>

            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <br /><br />

            <button onClick={placeOrder}>Place Order</button>
            <button onClick={handlePayment}>Pay Now</button>
          </div>
         <div>
          
         </div>
          
        </>
      )
      }
    </div >
  );
}

export default Checkout;