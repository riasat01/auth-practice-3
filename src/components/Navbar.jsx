import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="flex justify-between items-center py-3 shadow-xl">
            <div className="text-white text-3xl font-semibold">Auth Practice 3</div>
            <nav className="tabs">
            <NavLink to={`/`} className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Home</button></NavLink>
            <NavLink to={`/login`} className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Login</button></NavLink>
            <NavLink to={`/register`} className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : ''}><button className="tab tab-lifted hover:tab-active">Register</button></NavLink>
        </nav>
        </section>
    );
};

export default Navbar;