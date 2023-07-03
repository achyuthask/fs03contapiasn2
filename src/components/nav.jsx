import { React } from "react";
import { Link } from "react-router-dom";
import './nav.css'

const Nav =()=>{
    return(
    <>
           <div className="nav">

    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to ="/product">products</Link>
        </li>
        <li>
        <Link to ="/addcart"> add to cart</Link>
        </li>
      </ul>
       
     </div>
    </>
    );
}

export default Nav;