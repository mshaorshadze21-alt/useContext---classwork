
import { useContext } from "react";
import { NotificationContext } from "../Context";

const Error = () => {

    const {notify} = useContext(NotificationContext)

  return (
    <div>
        <button onClick={()=> notify("Error")}
        className="border-2 border-red-900 w-fit h-fit rounded-sm px-4 py-2 mt-2 text-red-700">
            Error
        </button>
    </div>
  )
}

export default Error