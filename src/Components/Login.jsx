// Login component with email and password and login button
// use bootstrap classes for styling
// add logged in user in AuthContext
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { findUserByCredentials } from "../services/users";
import { toast } from "react-toastify";
import { useAuth } from './../Provider/AuthProvider';

function Login() {
    // use formData object to maintain the state of the form fields
  
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault(); 
          debugger;
        try {
            if (!formData.email || !formData.password) {
                throw new Error("Please enter both email and password")
            }
            
            // Clear any previous errors
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            setUser(null);
            
            // login logic here
            const cred = {email: formData.email, password: formData.password}
            console.log("Attempting login with:", { email: formData.email });
            const user = await findUserByCredentials(cred)
            
            if (!user) {
                console.error("Login failed - No user data received");
                throw new Error("Login failed - Invalid credentials")
            }
            if (!user.token) {
                console.error("Login failed - Response:", user);
                throw new Error("Login failed - Authentication error")
            }
            // store token in sessionStorage
            sessionStorage.setItem("token", user.token)
            // store whole user object in sessionStorage
            sessionStorage.setItem("user", JSON.stringify(user))
            // add logged in user in AuthContext
            setUser(user);
            console.log(user)
            toast.success("Welcome, " + (user.firstName || user.name))
            navigate("/user/dashboard");
        }
        catch(err) {
            console.error("Login error:", err);
            toast.error(err.message || "Login failed. Please try again.")
            // Clear any partial session data on error
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            setUser(null);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container text-center ">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">

                    <input
                        type="email"
                        className=" text-center"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    
                    <input
                        type="password"
                        className=" text-center"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <h6>Don't have a account ?   <Link to="/register" >Sign Up</Link> </h6>
                    <button type="submit" className="btn btn-primary "> Login</button>
                </div>
            </form>
             
        </div>
        
    );
}

export default Login;
