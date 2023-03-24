const BASE_URL = "https://assets.breatheco.de/apis/fake/contact"
const HEADERS = { "Content-Type": "application/json" }

export const getAllContacts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/agenda/enrique_ibarra`, { method: "GET" });
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log("err", err);
    }
};

export const createNewContact = async (contact) => {
    try {
        const response = await fetch(`${BASE_URL}/`, {
            method: "POST",
            body: JSON.stringify(contact),
            headers: HEADERS, 
        });
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log("err", err);
    }
};

export const deleteData = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log("err", err);
    }
};

export const editData = async (contact) => {
    try {
        const response = await fetch(`${BASE_URL}/${contact.id}`, {
            method: "PUT",
            body: JSON.stringify(contact), 
            headers: HEADERS
        });
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log("err", err);
    }
};

