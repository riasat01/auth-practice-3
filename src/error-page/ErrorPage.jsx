import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screenlfex flex-col justify-center items-center space-y-4">
            <h1>Something went wrong</h1>
            <Link to={`/`}><button>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;