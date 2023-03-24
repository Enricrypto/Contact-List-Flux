import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { getAllContacts } from "../service/index.js";
import Card from "../component/card.jsx"
import Modal from "../component/modal.jsx"
import "../../styles/home.css";

const Home = () => {

	const { store, actions } = useContext(Context);

	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		const data = await getAllContacts(); // solicitamos los datos desde el servidor con la función de petición del index y la guardamos en la variable "data"
		actions.addContactList(data); // seteamos el store utilizando la función addContactList creada en el index y le pasamos la "data" traida del servidor. 
		setIsLoading(true);
	};

	useEffect(() => {
		getData();
	}, []);


	return (
		<div className="text-center mt-5">
			<div>
				<Link to="/form/create">
					<button className="btn btn-primary mb-3">Add new Contact</button>
				</Link>
			</div>
			<div>
				{!isLoading ? <div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span></div> :
					store.contactList.map((contact) => <Card key={contact.id} contact={contact} />)} </div>
			<Modal />
		</div>
	);
};

export default Home; 
