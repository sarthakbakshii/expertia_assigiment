import "./Dash_Navbar.scss";
import { AiFillBank } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { FaCanadianMapleLeaf , FaAtlassian } from "react-icons/fa";
import { useState } from "react";

export const Dash_Navbar = () =>{

      const [activeLi , setActiveLi] = useState("Overview");

      const ActiveChangeHandler = (e) =>{
            setActiveLi(e.target.innerText)
      }
    return <nav className="nav">
                 <div className="logo">
                      <div className="circle"></div>
                       Expertia
                 </div>

                 <div className="listItem">
                       <div className={activeLi == "Overview"?"li active":"li"}
                       onClick={ActiveChangeHandler}>
                                  <AiFillBank/>  Overview
                       </div>
                       <div className={activeLi == "Candidate"?"li active":"li"}
                       onClick={ActiveChangeHandler}>
                                 <BiBody/>    Candidate
                       </div>
                       <div className={activeLi == "Hire team"?"li active":"li"}
                       onClick={ActiveChangeHandler}>
                                 <FaCanadianMapleLeaf/>   Hire team
                       </div>
                       <div className={activeLi == "Article"?"li active":"li"}
                       onClick={ActiveChangeHandler}>
                                 <FaAtlassian/>   Article
                       </div>
                 </div>



           </nav>
}