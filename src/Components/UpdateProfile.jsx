
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { findUserByCredentials, updateUserProfile } from "../services/users";
import { toast } from "react-toastify";
import { useAuth } from "../Provider/AuthProvider";

function UpdateProfile() {
    // use formData object to maintain the state of the form fields
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        address:"",
        phoneno: "",
    });
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    // componentDidMount()
    useEffect(() => {
        // get user info from context and
        // update user info in state
        setFormData({name: user.name, mobile: user.mobile})
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault(); // prevent submission of html form
        try {
            // update logic here
            const message = await updateUserProfile(formData)
            setUser({...user,firstName: formData.firstName, lastName: formData.lastName, email: formData.email, address: formData.address, phoneno: formData.phoneno})
            // also update in sessionStorage ...
            toast.success(message)
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
            <h2>Profile</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <input
                        type="text"
                        id="firstName"
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="address"
                        className="form-control"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        id="phoneno"
                        className="form-control"
                        name="phoneno"
                        placeholder="Phone no"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default UpdateProfile;
