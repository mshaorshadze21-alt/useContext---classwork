// import Task1 from "./components/Task1"
// import Task2 from "./components/Task2"

import {  useState } from "react"
// import ThemeButton from "./components/ThemeButton"
// import { ThemeContext } from "./Context"
import { NotificationContext } from "./Context"

// import LanguageChange from "./components/LanguageChange"
import NotificationCreateContext from "./components/NotificationCreateContext"
import Error from "./components/Error"



function App() {
 
  // const [theme, setTheme] = useState("light")

  // const [language, setLanguage] = useState("ka")

  const [toast, setToast] = useState([])

   function notify(text){

        setToast([...toast, text])
        console.log(toast)

    }

  return (
    <>
      {/* <ThemeContext.Provider value={{theme, setTheme, language, setLanguage}}>

        <div className={`bg-gr p-20 w-full h-screen ${theme == "dark"? "bg-gray-800 text-white" : "bg-white : text-gray-900" }` }>
          <Task1/>
          <Task2/>
          <ThemeButton />
          <LanguageChange/>
          
      
        </div>
      </ThemeContext.Provider> */}

      <div className="p-10 flex justify-between">

      <NotificationContext.Provider value={{toast, setToast, notify}}>
        
        <div>
          <NotificationCreateContext/>
          <Error/>
        </div>

        

        <div className="flex flex-col gap-2 justify-start items-end">
          {toast.map((i)=><div className="w-50 h-20 bg-amber-500 text-gray-900 rounded-lg flex items-center justify-center">{i}</div>)}
        </div>
        
        
        
      </NotificationContext.Provider>

      </div>
    </>
   



    
  )
}

export default App
