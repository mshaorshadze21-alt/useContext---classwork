import { useState, useEffect } from "react"


const ToastCard = ({toast}) => {
    const [cardType, setCardType] = useState("")
    const [time, setTime] = useState(true)

     function CheckCardType(){
        if(toast.type == "success"){
                setCardType("bg-green-500 text-white" )
            }else if(toast.type == "error"){
                setCardType("bg-red-400 text-white")
            }else{
                setCardType("bg-yellow-500 text-white")
            }
    }
    
    setTimeout(() => {
       return setTime(false)
    }, 3000);

    useEffect(()=>{

        return(()=>CheckCardType())
        
    },[toast])

  if (time){
    return (
    <div className={`w-60 h-20 px-5 py-2 text-gray-900 rounded-lg flex items-center justify-center ${cardType}`}>{toast.message}</div>
  )
  }else {
    return null
  }
}

export default ToastCard