// import { useEffect, useState } from "react";
// import axios from "axios";

// function ViewTools() {
//     const [tools, setTools] = useState([]);


//     useEffect(() => {
//         const fetchTools = async () => {
//             try {
//                 const response = await axios.get("http://localhost:3004/api/tools");
//                 setTools(response.data); 
//             } catch (error) {
//                 console.error(" Failed to fetch tools:", error);
//             }
//         };

//         fetchTools();
//     }, []);

//     return (
//         <div>
//             <h2>Available Tools for Rent</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                 {tools.length > 0 ? (
//                     tools.map((tool) => (
//                         <div key={tool._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", maxWidth: "300px" }}>
//                             <img
//                                 src={tool.imageUrl}
//                                 alt={tool.toolName}
//                                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//                             />
//                             <h3>{tool.toolName}</h3>
//                             <p>Location: {tool.location}</p>
//                             <p>Price: ₹{tool.price}/day</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No tools available for rent.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ViewTools;


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import "../CSS/viewtool.css";

function ViewTools() {
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
        // navigate("/checkout", { state: { tool } });
        navigate(`/tool/${tool._id}`)
    };

    // Handle Buy Now Click

    return (
        <div className="viewtools-container">
            <h2>Available Tools for Rent</h2>
            <div className="tools-grid">
                {tools.length > 0 ? (
                    tools.map((tool) => (
                        <div className="tool-card" key={tool._id} >
                            <img src={tool.imageUrl} alt={tool.toolName} />

                            <div className="tool-content">
                                <h3>{tool.toolName}</h3>
                                <p>Location: {tool.location}</p>
                                <p>Price: ₹{tool.price}/day</p>

                                <button onClick={() => handleBuyNow(tool)}>Buy Now</button>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>No tools available for rent.</p>
                )}
            </div>
        </div>
    );
}

export default ViewTools;
