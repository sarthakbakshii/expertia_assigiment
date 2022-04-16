import "./Signup.scss"
import "./Login.scss"

import { FiXCircle } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { PageContext } from "../../mainContext/PageContext";

export const Login = () =>{

    const {setShowSignupModal, setShowLogInModal} = useContext(PageContext)

    const closeModal = () =>{
        setShowLogInModal(false)
    }

    useEffect( () =>{

    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
       return () =>{
               document.documentElement.style.overflow = 'visible';  // firefox, chrome
                document.body.scroll = "off"; // ie only
       }
    }, [])

    return <section className="modal-cont">
                  <div className="container">
                        <div className="top">
                                <FiXCircle
                                onClick={closeModal}
                                className="cancle"/>
                        </div>
                        <div className="bottom">
                            <div className="bottom-decs">
                                    <div className="Login">
                                            Login
                                    </div>
                            </div>

                            <div className="bottom-button">

                                <input type="text" className="login-input" placeholder="Enter name" name="" id="" />

                                <input type="text" className="login-input" placeholder="Enter password" name="" id="" />

                                <button className="hire">
                                  log In
                                </button>

                            </div>
                        
                        </div>
                  </div>
           </section>
}