// import Task1 from "./components/Task1"
// import Task2 from "./components/Task2"

import {  useState } from "react"
// import ThemeButton from "./components/ThemeButton"
// import { ThemeContext } from "./Context"
import { NotificationContext } from "./Context"

// import LanguageChange from "./components/LanguageChange"
import NotificationCreateContext from "./components/NotificationCreateContext"
import Error from "./components/Error"
import ToastCard from "./components/ToastCard"



function App() {
 
  // const [theme, setTheme] = useState("light")

  // const [language, setLanguage] = useState("ka")

  const [toasts, setToasts] = useState([])

   function notify(text, type){


        const toast = { message: text, 
                        type: type,
                      }
        setToasts([...toasts, toast ])
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

      <NotificationContext.Provider value={{toasts, setToasts, notify}}>
        
        <div>
          <NotificationCreateContext/>
          <Error/>
        </div>

        

        <div className="flex flex-col gap-2 justify-start items-end">
          {toasts.map((i, index)=><ToastCard key={index} toast={i}/>)}
        </div>
        
        
        
      </NotificationContext.Provider>

      </div>
    </>
   



    
  )
}

export default App
