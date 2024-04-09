

const Revie = ({revie}) => {

    const {review,thumbnail_url} = revie;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{review[0].user}</h2>
     <div>
        <img src={thumbnail_url} alt="" />
     </div>
        <p> <span className="text-4xl">Rating : </span>

             <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> <span className="text-4xl">  {review[0].rating} </span>

<p className="pt-2">Comment : {review[0].comment}</p>

</p>
        </div>
        
        </div>

    );
};

export default Revie;