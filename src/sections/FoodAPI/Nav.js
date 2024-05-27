import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Registration.css";

const Nav = () => {
    return (
        <div className="navbarr w-25 mt-5">
            <div>
                <button className="btn btnn btn-light">
                    <Link className="Link" to="/login">
                        Log-In
                    </Link>
                </button>
                <button className="btn btnn btn-light">
                    <Link className="Link" to="/registration">
                        Registration
                    </Link>
                </button>
            </div>

            <Outlet />
        </div>
    );
};

export default Nav;