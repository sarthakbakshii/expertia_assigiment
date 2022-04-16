import "./Home.scss";
import { Signup } from "./Modals/Signup";
import { AiOutlinePlayCircle } from "react-icons/ai";

export const Home = () =>{
    return <section className="home">
                <div className="top">
                     <div className="left">
                         <h1>
                            Lets find That <br/> Best  <span className="blue"> Candidate</span>...
                         </h1>
                         <div className="p">
                           source screen etc etc <br/>
                           From multiple job critaria and better database
                         </div>

                         <button className="btn"> Get Started </button>
                           
                     </div>
                     <div className="design-Box">
                              <AiOutlinePlayCircle className="play"/>
                     </div>
                </div>
           </section>
}