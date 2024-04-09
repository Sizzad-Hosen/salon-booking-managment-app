import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

import { useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { useNavigate } from "react-router-dom";


const LogIn = () => {

  

  const navigate = useNavigate();
  const {signInUser , googleSignIn } = useContext(AuthContext);

  const [sucess , setSucess] = useState('');
  const [loginError , setLoginError] = useState('');
  const [showPassword , setShowPassword] = useState(false);


  const emailRef = useRef(null);


  // handle forget email system
  const handleForget=()=>{
      const email = emailRef.current.value;
      if(!email){

          console.log("please proivide a email",emailRef.current.value);
          return;
      }
      else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      {
          alert("please write a valid email");
          return;

      }

      // sent forgot validation email 
      sendPasswordResetEmail(auth,email)
      .then(()=>{
         alert("please check your email")
      })

      .catch(error=>{
          console.log(error);

      })

  }


  // login handler button show

    const handleLogIn = e=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email=(form.get('email'));
        const password=form.get('password');
        console.log(email , password);


// sign in user
signInUser(email,password)
.then(result=>{
  console.log(result.user)
  navigate('/')
  .catch(error=>{
    console.log(error);

  })
})

      

          
// reset state
setSucess('');
setLoginError('');



        if(password.length< 6){
          setSucess('Your password must be 6 character or longer');
          return;
    
        }
        else if (!/[A-Z]/.test(password)){
          setLoginError('Your password at last one upper case');
          return;
          
    
        }
        

// / sign in firebase 
// add verified

signInWithEmailAndPassword(auth,email , password)
.then((result) => {
  console.log(result.user);

  // sendEmailVerification(auth.currentUser)
  // .then(() => {

  //   alert('please check your email and verified account');
  //   // Email verification sent!
  //   // ...
  // });


  const login = result.user;
  if(result.user.emailVerified){

      setSucess("Log in  sucessfully");
  }
  else{
     alert("please verify your email addresss");
  }
  

  console.log(login);
})
.catch((error) => {
console.log(error);


  setLoginError(error.message);




});


  

    }  
    // google sign in method

    const handleGoogle=()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user)
        .catch(error=>{
          console.log(error);

        })
      })

    }
    // facebook sign in 
    const handleFacebook =() =>{
      
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center px-12 py-5 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


            <form onSubmit={handleLogIn}  className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                {/* input password field */}
                <div className="relative mb-4">
                <input 
                type={showPassword ? "text" : "password" }
                name="password" 
                placeholder="password"
                 className="input w-full input-bordered" required />
                <span className="absolute top-4 right-2" onClick={()=>setShowPassword(!showPassword)}>
                  {
                    showPassword ?  <FaEye /> : <FaEyeSlash /> 
                  }
                    
                    </span>
                    </div>
                
                <label className="label">
                  <a href="#"onClick={handleForget} className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-2xl ps-5 pb-2">Create a account? <Link className="text-green-400" to="/register">Register </Link></p>
 
  
  {
    sucess && <p className="text-1xl p-2 text-green-400">{sucess}</p>
  }
  {
    loginError && <p className="text-1xl p-2 text-red-400">{loginError}</p>
  }
{/* google , fb sign un methid */}
          </div>
<p className="text-2xl text-center ">Or , Sign In With</p>
<div className="border px-3 py-3">
<button onClick={handleGoogle} className="btn btn-primary text-2xl text-center">Google</button>
<br />
<button onClick={handleFacebook} className="btn mt-4 btn-primary text-2xl text-center">Facebook</button>
</div>
      
        </div>
      </div>
    );
};

export default LogIn;