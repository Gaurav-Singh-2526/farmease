import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../CSS/tooldetails.css";

const ToolDetails = () => {

  const { id } = useParams();

  const [tool, setTool] = useState(null);

  const [days, setDays] = useState(1);

  useEffect(() => {

    fetchTool();

  }, []);

  const fetchTool = async () => {

    try {

      const res = await axios.get(
        `http://localhost:3004/api/tools/${id}`
      );

      setTool(res.data);

    } catch (err) {

      console.log(err);

    }

  };
  const handleBooking = async () => {
    try {
      const orderData = {
        userId: localStorage.getItem("userId"),
        ownerId: tool.userId,
        toolId: tool._id,

        toolName: tool.toolName,
        toolImage: tool.imageUrl,

        location:
          tool.location,

        days: days,

        pricePerDay:
          tool.price,

        amount:
          tool.price * days,

        paymentStatus:
          "Pending",

        bookingStatus:
          "Booked"

      };
      const res = await axios.post("http://localhost:3004/api/orders/",orderData)
    }catch(error){
      console.log(error);
    }
  
  }

  if (!tool) return <h1>Loading...</h1>;

  return (

    <div className="details-container">

      {/* IMAGE */}
      <div className="details-image">

        <img
          src={tool.imageUrl}
          alt=""
        />

      </div>

      {/* CONTENT */}
      <div className="details-content">

        <h1>{tool.toolName}</h1>

        <p> {tool.location}</p>

        <h2>₹ {tool.price} / day</h2>

        {/* RENT DAYS */}
        <div className="days-box">

          <label>
            Rental Days
          </label>

          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) =>
              setDays(e.target.value)
            }
          />

        </div>

        {/* TOTAL */}
        <h3>
          Total:
          ₹ {tool.price * days}
        </h3>

        {/* BUTTON */}
        <button>
          Proceed To Payment
        </button>

      </div>

    </div>

  );
};

export default ToolDetails;