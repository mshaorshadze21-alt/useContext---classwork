 import { useState } from "react"



const Task1 = () => {

    const [students, setStudents] = useState([
    { id: 1, name: 'ჰარი პოტერი', house: 'გრიფინდორი', points: 100 },
    { id: 2, name: 'ჰერმიონა გრეინჯერი', house: 'გრიფინდორი', points: 150 },
    { id: 3, name: 'ნევილი ლონგბოტომი', house: 'გრიფინდორი', points: 80 },
    { id: 4, name: 'დრაკო მალფოი', house: 'სლიზერინი', points: 90 }
    ]);


    const addPoints = (id) => (
        setStudents (
            students.map((student) => student.id === id? {...student, points: student.points + 10} : student)
        )
    )

    const resetPoints = (id) => (
        setStudents(
            students.map((student) => student.id === id? {...student, points: 0} : student) 
        )
    )


   const sumPoints = students.reduce((sum, student) => sum + student.points, 0);

   console.log(sumPoints)
    


  return (
    <div>
        <ul className="flex flex-col gap-5">
            {students.map((student => (
                <div className="w-200 grid grid-cols-3">
                    <li>
                        <ul className="flex flex-col gap-2"><li key={student.id} className="font-bold text-lg">
                        {student.id}. 
                        {student.name}</li> 
                        <li>ფაკულტეტი: {student.house}</li>
                        <li className="text-red-500 font-bold">ქულა - {student.points}</li></ul>
                    </li>

                    <button onClick={() => addPoints(student.id)} className="w-fit h-fit px-6 py-3 rounded-lg mt-4 bg-white text-blue-950 ml-20"> +10 ქულა </button>

                    <button onClick={() => resetPoints(student.id)} className="w-fit h-fit px-6 py-3 rounded-lg mt-4 bg-white text-blue-950"> გაანულეთ ქულა </button>


                </div>
            )))}
        </ul>

        <h2 className="bg-white w-fit h-fit px-6 py-3 rounded-lg text-red-500 mt-20">ქულების ჯამი: {sumPoints}</h2>
    </div>
  )
}

export default Task1