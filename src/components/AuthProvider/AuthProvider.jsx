
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config"; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] =useState(true);
    const provider = new GoogleAuthProvider();


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email ,password);
    
    }
    const signInUser =(email , password)=>{
        setLoading(true);

        return signInWithEmailAndPassword(auth , email ,password);

    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }



    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut,
        loading,
      googleSignIn,



    }

    useEffect(()=>{
      const unSubcribe =  onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('observing the fu=current user auth provider',currentUser);
        })
        return ()=>{
            unSubcribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
 
    );
};

export default AuthProvider;