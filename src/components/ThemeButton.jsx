
import { useContext } from "react"
import { ThemeContext } from "../Context"


const ThemeButton = () => {

  const {theme, setTheme} = useContext(ThemeContext)
  

  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light")
    console.log(theme)
  }
  return   <button className="p-3 bg-green-400 "
   onClick={()=> changeTheme()}
   >{theme == "dark" ? "light" : "dark"}</button>
  
}

export default ThemeButton