import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const LogOut = async () =>{
          await signOut (auth);
          navigate("/");
    }


    return (
    
      <div className="navbar">
         <div className="appName">
            <h1>PRIT-SCRIBES</h1>
        </div>

        <div className="links">
        <Link to='/' className="home"> Home </Link>
        {!user ? <Link to='/Login' className="login"> Login </Link> : <Link to='/Createpost' className="login"> New Post </Link> }
        
        
        </div>
       
        


        <div className="user">
            {user && (
            <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""}  width="30" height="30" />
                <button onClick={LogOut}>Log Out</button>
            </>)}
            
        </div>

    </div>
    ) 

    
}