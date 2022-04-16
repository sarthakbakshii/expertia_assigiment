import "./NavBar.scss"
import { BsFillCaretDownFill } from "react-icons/bs";
import { Signup } from "./Modals/Signup";
import { useContext } from "react";
import { PageContext } from "../mainContext/PageContext";

export const NavBar = () =>{
    const {showSignUpModal,setShowSignupModal} = useContext(PageContext)

    const signupHandler = () =>{
            setShowSignupModal(true)
    }
    return <nav>
                   <div className="left"> 
                            <div className="logo"></div>
                            Expertia
                   </div>
                   <div className="right">
                            
                       <div className="solutions">Solutions
                           <BsFillCaretDownFill/>
                       
                       </div>
                       <div className="about">About us</div>
                       <div className="contact">Contact us</div>
                       <button className="signnup" 
                        onClick={signupHandler}>Sign up
                       </button>
                        
                   </div>
                    
                   
           </nav>
}