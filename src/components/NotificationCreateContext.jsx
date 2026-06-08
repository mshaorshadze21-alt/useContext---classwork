import { useContext } from "react";
import { NotificationContext } from "../Context";




const NotificationCreateContext = () => {

    const {notify, setToast} = useContext(NotificationContext)


   
  return (
    <div className="flex flex-col">

        <button onClick={()=> notify("გამარჯობა")}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2">
            add toast
        </button>
        
        <button onClick={()=>setToast([])}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2 mt-2">
            remove toasts
        </button>

    </div>
  )
}

export default NotificationCreateContext