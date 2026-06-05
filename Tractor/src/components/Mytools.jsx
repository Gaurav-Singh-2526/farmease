
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import "../CSS/mytools.css";
function Mytools() {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    // Fetch tools from the backend
    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await axios.get("http://localhost:3004/api/tools");
                // const response = await axios.get("https://farmerbackend-2.onrender.com/api/tools");
                setTools(response.data);
            } catch (error) {
                console.error(" Failed to fetch tools:", error);
            }
        };

        fetchTools();
    }, []);

    const handleBuyNow = (tool) => {
        navigate("/checkout", { state: { tool } });
    };

    // Handle Buy Now Click

    return (
        <div className="mytools-container">
            <h1>My Uploaded Tools 🚜</h1>
            <div className="tools-grid">
                {tools.length > 0 ? (
                    tools.map((tool) => (
                        <div key={tool._id} className="tool-card">
                            <img src={tool.imageUrl} alt={tool.toolName}  />
                            <h3>{tool.toolName}</h3>
                            <p>Location: {tool.location}</p>
                            <p>Price: ₹{tool.price}/day</p>

                        </div>
                    ))
                ) : (
                    <p>No tools Uploaded.</p>
                )}
            </div>
        </div>
    );
}

export default Mytools;
