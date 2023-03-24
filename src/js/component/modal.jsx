import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { deleteData, getAllContacts } from "../service/index.js"

const Modal = () => {

    const { store, actions } = useContext(Context); 

	const deleteContact = async () => {
		await deleteData(store.deleteContactId);  
        const data = await getAllContacts(); 
        actions.addContactList(data); 
	}; 

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this contact? 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick ={deleteContact} >Yes, delete it</button>
                        <button type="button" className="btn btn-primary">Do not delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal; 