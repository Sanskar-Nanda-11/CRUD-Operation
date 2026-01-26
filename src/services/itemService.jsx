import api from "./api";  // Import the configured axios instance

export const itemService = {

    getAllData: () =>api.get("/students"),  // Fetch all items

    getDataById: (id) =>api.get(`/student/${id}`),  // Fetch a single item by ID

    createnewdata: () =>api.post("/student/create"),  // Create a new item

    updatedata: (id, data) =>api.put(`/student/update/${id}`, data),  // Update an existing item by ID

    deletedata: (id) =>api.delete(`/student/delete/${id}`),  // Delete an item by ID

};  // Initialize the itemService object