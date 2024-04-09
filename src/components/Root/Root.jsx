import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Root = () => {
    return (
        <div>


            <Navbar></Navbar>

        <Outlet />
        <Footer></Footer>
   
            
        </div>
    );
};

export default Root;