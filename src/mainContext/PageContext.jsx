import { createContext, useState } from "react";

export const PageContext = createContext();
export const PageContextProvider = ({children}) =>{
  
    const [showSignUpModal ,setShowSignupModal] = useState(false)
    const [showLogInModal ,setShowLogInModal] = useState(false)

    return <PageContext.Provider
           value={
                  {showSignUpModal ,
                   setShowSignupModal,
                   showLogInModal,
                   setShowLogInModal
                  }
                }>
                  {children}  
          </PageContext.Provider>
}