import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { createNewContact, editData } from "../service/index.js"
import { useParams } from 'react-router-dom'; 


const initialState = {
    agenda_slug: "enrique_ibarra",
    full_name: "",
    email: "",
    address: "",
    phone: "",
  };

const Form = () => {

const [contact, setContact] = useState(initialState);
const { type } = useParams(); 
const {store, actions} = useContext(Context); 
const navigate = useNavigate(); 

useEffect(() => {
    if (type === 'edit') {
        setContact(store.contact); 
    }
}, []); 
 
const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;  
    setContact({...contact, [name]: value});   
}; 

const handleSubmit = async (e) => { 
    e.preventDefault(); 
    type === 'edit' ? await editData(contact) : await createNewContact(contact); 
    navigate('/'); 
}; 

    return (
        <div className="container">
            <form onChange={handleChange} onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name="full_name" type="text" className="form-control" placeholder="Full Name" defaultValue = {contact.full_name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" defaultValue = {contact.email} aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" type="text" className="form-control" placeholder="Enter address" defaultValue = {contact.address} aria-describedby="addresslHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Phone</label>
                    <input name="phone" type="text" className="form-control" placeholder="Enter Phone" defaultValue = {contact.phone} aria-describedby="phonelHelp" />
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