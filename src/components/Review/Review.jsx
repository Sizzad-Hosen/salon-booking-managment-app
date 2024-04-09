import { useState } from "react";
import { useEffect } from "react";
import Revie from "../Revie/Revie";

const Review = () => {

    const [data , setData] = useState([]);


    useEffect(()=>{

        fetch('salons.json')
        .then(res=>res.json())
        .then(data=>setData(data));


    },[])



    return (
        <div >
            <h2 className="text-4xl font-medium text-red-400 mx-auto p-4 text-center">Our Customer's Give the Positive Review to Our Expertise Salon's Men</h2>

<div className="grid lg:grid-cols-3  md:grid-cols-2 container">
    {
        data.map(revie=><Revie key={revie.id} revie={revie}></Revie>)
    }
</div>



            
        </div>
    );
};

export default Review;