import { useContext } from "react";
import { NotificationContext } from "../Context";




const NotificationCreateContext = () => {

    const {notify, setToasts} = useContext(NotificationContext)


   
  return (
    <div className="flex flex-col gap-2">

        <button onClick={()=> notify("გადახდა წარმატებით შესრულდა", "success")}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2">
            add message
        </button>

         <button onClick={()=> notify("გადახდა ვერ შესრულდა", "error")}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2">
            add error
        </button>

         <button onClick={()=> notify("გადახდისთვის საჭიროა მონაცემების შევსება", "info")}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2">
            add info
        </button>
        
        <button onClick={()=>setToasts([])}
        className="border-2 border-gray-900 w-fit h-fit rounded-sm px-4 py-2 mt-2">
            remove toasts
        </button>

    </div>
  )
}

export default NotificationCreateContext