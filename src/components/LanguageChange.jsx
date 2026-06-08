import { ThemeContext } from "../Context"
import { useContext } from "react"


const LanguageChange = () => {

    const {language, setLanguage} = useContext(ThemeContext)
    // const {theme, setTheme} = useContext(ThemeContext) 

  return (
    <div>
        <button 
        onClick={()=> setLanguage(language == "ka"? "en" : "ka")}
        className="w-fit h-fit border-2 border-amber-600 px-4 py-2 mt-5"
        >  {language == "en" ? "ka" : "en"} </button>
        <h1 className="text-center font-bold text-2xl">
            {language == "ka"? "გამარჯობა!" : "Hello!"}
        </h1>

    </div>
  )
}

export default LanguageChange