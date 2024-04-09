
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="mx-auto ms-3">
        
           
            <h1 className="text-3xl text-center">
            <Marquee >
            We Prove Unique salon, Beauty , Haircut service . Our Dream to serve special service which reach to around the world 
</Marquee>
                
                .</h1>
        
        <p className="text-2xl p-4 text-red-400">Total 20 worker has been work in our shop </p>
      <h2 className="text-2xl p-4 font-bold">Commitment To Service</h2>
<p className="text-2xl">Our salon is dedicated to service and value. All of our licensed specialists sincerely enjoy what we do and it is reflected in the loyalty of our clients. We promise individual attention and great value for all of our customers.</p>
    <h2 className="font-bold text-2xl p-4">Appointments</h2>
    <p className="text-2xl">Please arrive 10 minutes prior to your appointment. We schedule appointments according to our specialists’ availability and specialty.If you are running late, please let us know and we will do our best to accommodate you. Arriving late will likely limit the time allocated for your service; it will lessen the effectiveness and most importantly your pleasure and enjoyment. As a courtesy to all clients our treatments are completed as scheduled. Cancellations of all spa services require a 24-hour notice. Thank you for your consideration and understanding. Gratuities are not included in the price of services and are greatly appreciated. Suggestions are always welcome.</p>
       
       <h2 className="text-2xl font-bold p-4">Gift Certificates</h2>
       <p className="text-2xl">Ideal for holiday gifts, birthdays, anniversaries as well as employees and business clients. Please call ahead or stop by the salon to pick up yours today.</p>
        

      <p className="text-3xl font-bold">Payment System  </p>  
      <span className="text-red-400 p-4"> Bikash or Nogot</span>

      <button className="btn btn-primary m-5 mt-5"><Link to="/login">Order Now</Link></button>

      <p className="text-2xl">Contact Us : +88017465464, +0999545154651 US , London </p>
        </div>
    );
};

export default About;