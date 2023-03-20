import React, { useState } from "react";
import { Link } from "react-router-dom";


const Form = () => {

const [contact, setContact] = useState(); 

const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name; 
    setContact({...contact, [name]: value}); 
}; 

const sendData = (e) => {
    e.preventDefault(); 
    console.log(contact);
}; 

    return (
        <div className="container">
            <form onSubmit={sendData} onChange={handleChange}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name="fullname" type="text" className="form-control" placeholder="Full Name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" type="text" className="form-control" placeholder="Enter address" aria-describedby="addresslHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Phone</label>
                    <input name="phone" type="text" className="form-control" placeholder="Enter Phone" aria-describedby="phonelHelp" />
                </div>
                <input type="submit" className="btn btn-primary" value="send"/>
            </form>
            <br />
            <br />
            <Link to="/">
                Back to Contacts
            </Link>
        </div>
    );

};

export default Form; 