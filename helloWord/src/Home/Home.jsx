import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [count, setCount] = useState(0);
  
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">TO DO LIST</Link>
            <img src="undertalePixel.gif"></img>
        </div>
    );
}