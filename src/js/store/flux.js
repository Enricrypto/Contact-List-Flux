
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
			deleteContactId: "",
			contact: {}
		},
		actions: {
			addContactList: (data) => {
				setStore({ contactList: data }) // "contactList" hace ref. al parámetro del objeto y "data" hace ref. al parámetro de la función addContactList					
			}, 
			deleteContact: (id) => {
				const store = getStore();  
				setStore({...store, deleteContactId: id})
			}, 
			editContact: (editContact) => {
				const store = getStore(); 
				setStore({...store, contact: editContact}); 
			}
		}	
	};
}; 

export default getState;
