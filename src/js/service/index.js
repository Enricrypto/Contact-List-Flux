
const HEADERS = { "Content-Type": "application/json" }

export const getData = async () => {
    const BASE_URL = "https://assets.breatheco.de/apis/fake/contact/agenda/enrique_ibarra"; 
    try { 
        const response = await fetch(BASE_URL);  
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 

export const createData = async () => {
    const BASE_URL = `https://assets.breatheco.de/apis/fake/contact/`; 
    try { 
        const response = await fetch(BASE_URL, {method: "POST", 
        body: JSON.stringify(
        {"full_name": "",
        "email": "",
        "agenda_slug": "",
        "address":"",
        "phone":""}), 
        headers: HEADERS});  
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 

export const deleteData = async (contact_id) => {
    const BASE_URL = `https://assets.breatheco.de/apis/fake/contact/${contact_id}`; 
    try { 
        const response = await fetch(BASE_URL, {method: "DELETE"})
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 

export const deleteAllData = async (agenda_slug) => {
    const BASE_URL = `https://assets.breatheco.de/apis/fake/contact/${agenda_slug}`; 
    try { 
        const response = await fetch(BASE_URL, {method: "DELETE"})
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 

export const editData = async (contact_id) => {
    const BASE_URL = `https://assets.breatheco.de/apis/fake/contact/${contact_id}`; 
    try { 
        const response = await fetch(BASE_URL, {method: "PUT", 
        body: JSON.stringify({full_name: "",
        email: "",
        agenda_slug: "",
        address:"",
        phone:""}), headers: HEADERS});  
        const data = await response.json();
        return data; 
    } 
    catch (err) {
        console.log("err", err);
    }
}; 

