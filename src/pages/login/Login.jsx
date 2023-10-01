import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../../components/auth-provider/AuthProvider";

const Login = () => {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const { signInUser, signinWithGoogle } = useContext(UserInfo);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        setEmail(e.target.email.value);
        console.log(email);
        setPassword(e.target.password.value);
        console.log(password);
    }

    // signin user
    useEffect(() => {
        (email && password) && signInUser(email, password)
            .then(userCredintial => {
                console.log(userCredintial.user);

                // resetting form
                // e.target.reset();
                navigate(`/`)
            }).catch(error => {
                console.log(error.message);
            })
    }, [email, password])


    const handleGoogleSignIn = () => {
        signinWithGoogle()
            .then(result => console.log(result))
            .catch(error => console.log(error.message));
    }
    return (
        <div className="hero max-w-screen-2xl max-h-screen bg-base-200 m-auto">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-10">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">

                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <Link to={`/register`}><p className="text-gray-300">New here? Please Register</p></Link>
                            </div>
                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="text-lg font-bold border-2 px-4 py-2 mt-4 rounded-lg">Google</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;