import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserInfo } from "./auth-provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {

    const {user} = useContext(UserInfo);
    console.log(user);

    const handleSignOut = () =>{
        signOut (auth)
        .then(() => alert(`user signed out`))
        .catch(error => console.log(error.message));
    }
    return (
        <section className="flex justify-between items-center py-3 shadow-xl">
            <div className="text-white text-3xl font-semibold">Auth Practice 3</div>
            <nav className="tabs">
                <NavLink to={`/`} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Home</button></NavLink>
                <NavLink to={`/login`} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Login</button></NavLink>
                <NavLink to={`/register`} className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Register</button></NavLink>
            </nav>
            <div>
                {
                    user ?
                    <>
                        <span className="pr-4 text-lg font-semibold">Name: {user.displayName}</span>
                        <button onClick={handleSignOut} className="border-2 rounded-lg text-white bg-violet-700 px-3 py-2">Sign Out</button>
                    </>
                    :
                    <button className="border-2 rounded-lg text-white bg-violet-700 px-3 py-2">Log in</button>
                }
            </div>
        </section>
    );
};

export default Navbar;