import api from "./api";  // Import the configured axios instance

export const itemService = {                        // Define the itemService object with various methods for CRUD operations

    getAllData: () =>api.get("/students"),  // Fetch all items

    getDataById: (id) =>api.get(`/student/${id}`),  // Fetch a single item by ID

    createNewData: (data) =>api.post("/student/create", data),  // Create a new item

    updateData: (id, data) =>api.put(`/student/update/${id}`, data),  // Update an existing item by ID

    deleteData: (id) =>api.delete(`/student/delete/${id}`),  // Delete an item by ID

};  // Initialize the itemService object


export default itemService;  // Export the itemService for use in other parts of the application