import { useState, React } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import "./Registration.css";
import Nav from "./Nav";

const Registration = () => {
    const [Data, setData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: true,
    });

    const myhandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };
    const mysubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/accounts/register", Data)
            .then((e) => {
                toast("successfully...");
            })
            .catch(() => {
                toast("Something wrong...");
            });
        setData((e.target.value = ''));
    };
    return (
        <div>
            <Nav />
            <div className="midd toop mt-5 p-4 ">
                <form onSubmit={mysubmit}>
                    <h1 className="text-center  bg-light  p-2 rounded-2  mb-4 headerr">
                        Registration
                    </h1>

                    <TextField
                        label="title"
                        name="title"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="firstName"
                        name="firstName"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="lastName"
                        name="lastName"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="email"
                        name="email"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="password"
                        type="password"
                        name="password"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />
                    <TextField
                        label="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        onChange={myhandler}
                        className="w-100 mt-3"
                        variant="outlined"
                        required
                    />

                    <input
                        type="submit"
                        className="btn btn-danger mt-4  form-control"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Registration;