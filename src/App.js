import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { Signup } from './Components/Modals/Signup';
import { useContext } from 'react';
import { PageContext } from './mainContext/PageContext';
import { Login } from './Components/Modals/Login';
import { Route, Routes } from 'react-router-dom';
import { DashBoard } from './Components/DashBoard/DashBoard';


function App() {

   const {showSignUpModal,showLogInModal} = useContext(PageContext)

  return (
    <div className="App">


            <Routes>
                <Route path="/" 
                element={ <>
                                { showSignUpModal && <Signup/> }
                                { showLogInModal && <Login/> }
                                <NavBar/>
                                <Home/>                  
                          </>
                }></Route>

                <Route path='/dashboard'
                element={ <DashBoard/> }></Route>
            
            
            </Routes>


            
    </div>
  );
}

export default App;
