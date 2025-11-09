// Register component with name, email, password, confirmPassword, mobile and Register button
// use bootstrap classes for styling
import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../services/users";
import { toast } from "react-toastify";
import { Link } from 'react-router';

function Register() {
    // use formData object to maintain the state of the form fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // register logic here
            const user = await registerUser(formData)
            toast.success(`User registered: ${user.uid}`)
            navigate("/login");
        }
        catch(err) {
            toast.error(err.message)
        }
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="container text-center">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.nfame}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                 <h6>Already have a account ?   <Link to="/login" > Login here </Link> </h6>
                <button type="submit" className="btn btn-primary"> Register </button>
            </form>
        </div>
    );
}    

export default Register
