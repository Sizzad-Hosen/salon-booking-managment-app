import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const [sucess , setSucess] = useState('');
  const [RegisterError , setRegisterError] = useState('');
  const [showPassword , setShowPassword] = useState(false);



    const handleRegister = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const number = e.target.number.value;
        const accepted = e.target.terms.checked;

        console.log(email , password , name, number );

        // craeteuser
        createUser(email, password)
        .then(result=>{
          console.log(result.user)
          .catch(error=>{
            console.log(error);

          })
        })

                 
// reset state
setSucess('');
setRegisterError('');


// condition check password



if(password.length< 6){
  setSucess('Your password must be 6 character or longer');
  return;

}


else if (!/[A-Z]/.test(password)){
  setRegisterError('Your password at last one upper case');
  return;
  

}
else if(!accepted){
  setRegisterError("Please accepted our terms and conditions");
}


        // create user

        createUserWithEmailAndPassword(auth, email ,password)
        .then(result=>{

          console.log(result.user);
          setSucess("User create sucessfully");

          // user verification ,, user one time cretae a accout we check registration from valid or not email 
          sendEmailVerification(auth.currentUser)
          .then(() => {

           alert('please check your email and verified account');
    
  });


        })
        .catch(error=>{
          console.log(error);
          setRegisterError(error.message);
        })



    }  



    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center px-12 py-5 lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


            <form onSubmit={handleRegister}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="text" name="number" placeholder="Your Number" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input 
                type="email"
                 name="email"
              
                  placeholder="email" 
                  className="input input-bordered" 
                  required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                {/* input password section  */}
              <div className="relative mb-4">
              <input 
                type={showPassword ? "text" : "password" }
                name="password"
                 placeholder="password"
                  className="input w-full input-bordered"
                   required />

                   <span className="absolute top-4 right-2" onClick={()=>setShowPassword(!showPassword)}>
                  {
                    showPassword ?  <FaEye /> : <FaEyeSlash /> 
                  }
                    
                    </span>
                    <br />
                    {/* terms and condition  */}
                    <div className="mb-4 p-4"> 
                      <input type="checkbox" name="terms" id="terms" />
                      <label className="ml-2" htmlFor="terms">Accepted our terms and condition 

                      </label>
                    </div>
              </div>
                <label className="label">
                  <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="ps-5 pb-2 ">Already have a account ? <Link to="/login" className=" text-green-400">Log In</Link>
            </p>
            {
    sucess && <p className="text-1xl text-center p-2 text-green-400">{sucess}</p>
  }
  {
    RegisterError && <p className="text-1xl text-center ps-2 text-red-400">{RegisterError}</p>
  }



          </div>
        </div>
      </div>
    );
};

export default Register;