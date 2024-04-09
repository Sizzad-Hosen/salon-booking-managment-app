import { Link } from "react-router-dom";
const Servic = ({servic}) => {

const {title , description,price,thumbnail_url, massage, id ,review}  = servic ;




    return (
    
            <div className="card  w-96 bg-base-100 shadow-xl">
        <figure><img className="w-1/2" src={thumbnail_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p >I{description}</p>
          <p className="text-2xl">Price : ${price}</p>
       
        
          <div className="card-actions justify-end">
            <button className="btn btn-primary hover:bg-purple-500"><Link to="/login">Buy Now</Link></button>
          </div>
        </div>
      </div>
    
    );
};

export default Servic;
