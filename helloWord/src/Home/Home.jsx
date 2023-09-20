import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [count, setCount] = useState(0);
  
    return (
        <div style={{backgroundColor:"#FF00A2", border:"3px solid #CB0081", borderRadius:"5px", color:"white", fontSize:"20px", textDecoration:"none", padding:"10px 99% 10px 10px", position:"absolute", left:"0", right:"0", display:"flex"}}>
            <h1>Home</h1>
        <Link to="/todo">Próxima página</Link>
        </div>
    );
}