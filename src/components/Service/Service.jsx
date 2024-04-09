import { useEffect, useState } from "react";
import Servic from "../Servic/Servic";


const Service = () => {


    const [data , setData] = useState([]);


    useEffect(()=>{

        fetch('salons.json')
        .then(res=>res.json())
        .then(data=>setData(data));
    
 


    },[])




  

    return (


        <div>
<h1 className="text-4xl  text-green-500 text-center p-2">SERVICE WE PROVIDE</h1>
<p className="text-2xl  text-secondary text-center p-2">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>

<div className="lg:ps-5 grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 grid-cols-1 gap-3">

{
    data.map(servic=><Servic key={servic.id} servic={servic}></Servic>)
}



    </div>
        </div>
    );
};

export default Service;