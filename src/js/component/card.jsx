import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"; 

const Card = ({ contact }) => {

    const { store, actions } = useContext(Context); 
    const navigate = useNavigate(); 

    const editContact = () => {
        actions.editContact(contact); 
        navigate('/form/edit'); 
    }

    return (
        <div className="card p-3 mb-2 d-flex flex-row justify-content-between align-items-center" >
            <div>
                <img className="image-card" src="https://bbts1.azureedge.net/images/p/full/2022/08/f925401b-45d8-4edc-bafa-567dbcdf458e.jpg" />
            </div>
            <div className="d-flex align-items-start flex-column">
                <h3>{contact.full_name}</h3>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
                <p>{contact.phone}</p> 
            </div>
            <div className="d-flex flex-column">
                <button onClick={editContact} className="btn btn-success mb-1">Edit</button>
                <button onClick={() => actions.deleteContact(contact.id)} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Delete
                </button>
            </div>
        </div>
    )
};

export default Card; 