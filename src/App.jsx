import { useLoaderData } from "react-router-dom"
import Cloth from "./Components/Cloth";
import { useState } from "react";


function App() {
const allCloth = useLoaderData()
const [cloths,setCloths]= useState(allCloth)
console.log(cloths);
  return (
    <>
      <h1 className="text-5xl">Total Cloth : {cloths.length}</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto  gap-5">
        {
          cloths.map(cloth => <Cloth setCloths={setCloths} cloths={cloths} key={cloth._id} cloth={cloth}></Cloth>)
        }
      </div>
    </>
  )
}

export default App
