import React from "react";

const Modal = ({ closeModal }) => {
 
    return (
        <div className="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button onClick={() => closeModal(true)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        If you delete this the entire universe will go down
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => closeModal(true)} type="button" className="btn btn-secondary" data-bs-dismiss="modal"  >Oh no</button>
                        <button type="button" className="btn btn-primary">Yes, baby</button>
                    </div>
                </div>
            </div>
        </div>
    )
}; 

export default Modal; 