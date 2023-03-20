import React, { useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { getData } from "../service";
import Card from "../component/card.jsx"
import "../../styles/home.css";


const Home = () => {

	const [contactList, setContactList] = useState([]);

	const getList = async () => {
		const response = await getData();
		console.log(response); 
		setContactList(response);
	};

	const handleClick = (e) => {
		console.log("haciendo click", e); 
	}

	useEffect(() => {
		getList();
	}, []);

	return (
		<div className="text-center mt-5">
				<Link to="/form"> 
					<button className="btn btn-primary mb-3">Add new Contact</button>
				</Link>
				<Card contactList = {contactList} handleClick={handleClick}/>
		</div>
	);
};

export default Home;

