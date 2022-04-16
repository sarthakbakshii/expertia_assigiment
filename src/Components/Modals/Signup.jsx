import "./Signup.scss"
import { FiXCircle } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { PageContext } from "../../mainContext/PageContext";
import { useNavigate } from "react-router-dom";

export const Signup = () =>{

    const {setShowSignupModal,setShowLogInModal} = useContext(PageContext)
    const navigate = useNavigate()

    const closeModal = () =>{
        setShowSignupModal(false)
    }

    const haveAccount_Handler = () =>{
        closeModal();
        setShowLogInModal(true)
    }

    const GoOn_hire = () =>{
        sessionStorage.setItem('role-session', JSON.stringify({ role : "hire"}));
        navigate("/dashboard?role=hire")
    }

    const GoOn_apply = () =>{
         sessionStorage.setItem('role-session', JSON.stringify({ role : "apply"}));
         navigate("/dashboard?role=apply")
    }


    useEffect( () =>{

    document.documentElement.style.overflow = 'hidden'; // firefox, chrome 
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
                                    <p>Great!</p>
                                    <div className="heading">
                                            What are <br/>
                                            you looking for?
                                    </div>
                            </div>

                            <div className="bottom-button">

                                <button className="hire"
                                onClick={ GoOn_hire }>
                                  To Hire
                                </button>

                                <button className="apply"
                                onClick={ GoOn_apply }>
                                  To Apply
                                </button>

                                <div className="small-text" onClick={ haveAccount_Handler}>
                                   I already have account
                                </div>
                            </div>
                        
                        </div>
                  </div>
           </section>
}