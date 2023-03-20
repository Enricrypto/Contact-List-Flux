import React, {useState} from 'react';
import Modal from './modal.jsx';

const Card = ({ contactList }) => {

const [openModal, setOpenModal] = useState(false); 

    return (
        <div className="card-list">
            {contactList.map((people, index) => {
                return (
                    <div key={index} className="card p-3 mb-2 d-flex flex-row justify-content-between align-items-center" >
                        <div>
                            <img className="image-card" src="https://bbts1.azureedge.net/images/p/full/2022/08/f925401b-45d8-4edc-bafa-567dbcdf458e.jpg" />
                        </div>
                        <div className="d-flex align-items-start flex-column">
                            <h3>{people.full_name}</h3>
                            <p>{people.email}</p>
                            <p>{people.address}</p>
                            <p>{people.phone}</p>
                        </div>
                        <div className="d-flex flex-column">
                            <button className="btn btn-success mb-1">Edit</button>
                            <button type="button" className="openModalBtn btn btn-danger" onClick={() => {setOpenModal(true)}}>
                            Delete
                            </button>
                        </div>
                        {openModal && <Modal closeModal={setOpenModal}/>}
                    </div>
                )
            })}
      
        </div>
    )
};

export default Card; 