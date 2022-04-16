import { useState } from "react"
import "./OverView.scss"
import { FaFilePdf } from "react-icons/fa";


export const OverView = ({RoleChanger}) =>{

    const [statusVAl , setStatusVAl ] = useState(1)

    const StatusIncrement = () =>{
            if(statusVAl == 3) RoleChanger("apply")

            setStatusVAl(statusVAl + 1)
    }
     return <div className="overview">
                    <h3> 
                        <div className="circle"></div>
                        Your  Company Name
                    </h3>

                    <div className="container">
                        <div className="statusBar">
                                <div className={statusVAl >= 1?"staus staus-active":"staus"} >
                                    <span></span>
                                    Upload/Create jd
                                </div>

                                <div className={statusVAl >= 2?"staus staus-active":"staus"} >
                                    <span></span>
                                    Source Candidate
                                </div>

                                <div className={statusVAl >= 3?"staus staus-active":"staus"} >
                                    <span></span>
                                    Get Result
                                </div>
                        </div>

                        <form action="">

                            {
                                statusVAl == 1 && 
                                <div className="stepOne">
                                   <h3>Step 1</h3>
                                        <div className="top">

                                             <div className="inputSec">
                                                    <label> Tell us about your company</label>
                                                    <input type="text" placeholder="Your company name" />
                                             </div>
                                             <div className="inputSec">
                                                     <label> Tell us about your company</label>
                                                    <input type="text" placeholder="Your company name" />
                                             </div>

                                        </div>
                                        <div className="bottom">
                                                <div className="fileUpload">
                                                      <FaFilePdf/>  <input type="file" name="" id="" />
                                                </div>
                                                <div className="fileUpload">
                                                      <FaFilePdf/> Paste Link here  <input type="text" className="text" name="" id="" />
                                                </div>
                                        </div>
                                </div>
                            }

                            {
                                statusVAl == 2 && <h3>Step 2</h3>
                            }
                            {
                                statusVAl == 3 && <h3>Step 3</h3>
                            }
                        
                        </form>

                        <button onClick={StatusIncrement}
                        className="nextBtn">
                          Next
                        </button>
                    </div>
            </div>
}