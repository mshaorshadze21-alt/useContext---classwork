import { useState } from "react";


const Task2 = () => {

    // const [user1,setUser1] = useState({ id: 1, name: 'ხმლიანი მეომარი', health: 100, mana: 50, level: 5 })
    // const [user2,setUser2] = useState({ id: 2, name: 'ფერმკრთალი ჯადოქარი', health: 60, mana: 100, level: 8 })


    const [characters, setCharacters] = useState([
        { id: 1, name: 'ხმლიანი მეომარი', health: 100, mana: 50, level: 5 },
        { id: 2, name: 'ფერმკრთალი ჯადოქარი', health: 60, mana: 100, level: 8 }
    ]);

    // const fight = (id) => {
    //     if(id){
    //         const newValue = characters.find((c)=>c.id !== id)
    //         newValue.health -= 5


            
    //         const newArray = [characters.filter((i)=> i.id !== id) ]


    //         setCharacters([...newArray, newValue.health-5])


    //       setCharacters([...characters, ])

    //         console.log(characters)
    //     }
    // }


     const fight = (id) => {
        if(id){
            const myOpponent = characters.find((c)=>c.id !== id)
            if(myOpponent.health<=0){
                return 
            }            


        setCharacters (
            characters.map((char) => char.id !==id? {...char, health: char.health -15} : char)
        )}
    }

    const heal = (id) => {
            const me = characters.find((c)=>c.id === id)
           if (me.health >= 100 || me.mana<30) return

            if(me.mana == 40){
                 setCharacters (characters.map((char) => char.id === id? {...char, health: char.health + 15, mana: char.mana - 30} : char) )
            }else{
             setCharacters ( characters.map((char) => char.id === id? {...char, health: char.health + 20, mana: char.mana - 30} : char) )
            }


      
         
         

        
    }

  return (
    <div className="mt-20">
        <ul className="flex gap-30">
            {characters.map((char) => 
            <li key={char.id}>
                <ul className="flex flex-col gap-3">
                    <li>name: {char.name}</li>
                    <li className={char.health < 50? "bg-red-900 rounded-lg p-2" : "bg-green-900 rounded-lg p-2" }>health: {char.health}</li>
                    <li className="bg-blue-900 rounded-lg p-2">mana: {char.mana}</li>
                    <li>level: {char.level}</li>
                </ul>
                <span className="flex gap-5 mt-5">
                    <button onClick={() => fight(char.id)} className="w-fit h-fit px-6 py-2 rounded-2xl bg-white text-red-900 font-bold text-md">Fight</button>
                    <button onClick={()=> heal(char.id)} className="w-fit h-fit px-6 py-2 rounded-2xl bg-white text-green-900 font-bold text-md">Heal</button>
                </span>

            </li>)}
            

            

        </ul>

        
    </div>
  )
}

export default Task2