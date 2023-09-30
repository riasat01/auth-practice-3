import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className="hero max-w-screen-2xl max-h-screen bg-base-200 m-auto">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-10">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onClick={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <Link to={`/login`}><p>Already has an account? Please Login</p></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;