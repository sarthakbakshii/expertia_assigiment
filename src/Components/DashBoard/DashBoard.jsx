import { Dash_Navbar } from "./Dash_Navbar";
import { Route, Routes } from 'react-router-dom';
import { OverView } from "./OverView";
import { useEffect, useState } from "react";
import { OverView_apply } from "./OverViev_apply";

export const DashBoard = () =>{
    let params = new URLSearchParams(document.location.search);
     let roleQuery = params.get("role");

    let [role , setRole] = useState("");

    const RoleChanger = (val) =>{
        sessionStorage.setItem('role-session', JSON.stringify({ role : val}));
        setRole(val)
    }

    const sessionTester = () =>{
        let data = JSON.parse( sessionStorage.getItem('role-session') );
        setRole(data.role)
    }

    useEffect( () =>{
            sessionTester()
    })
   

    return <div style={{ display : "flex"}}> 
                    <Dash_Navbar/>

                    {role == "hire" && <OverView RoleChanger={RoleChanger} /> }
                    {role == "apply" && <OverView_apply/> }
           </div>
}