import axios from "axios";

export default {
  // Gets all books
  getUserByName: function () {
    return axios.get((username) => `/api/user/${username}`);
  },
  getUserByEmail: function (email) {
    return axios.get(`/api/user/${email}`);
  },
  // Gets the book with the given id
  getUserById: function (id) {
    return axios.get(`/api/user/${id}`);
  },
  // Deletes the book with the given id
  updateUserInfo: function (userData, id) {
    return axios.delete(`/api/user/${id}`, userData);
  },
  // Saves a book to the database
  createUser: function (userData) {
    return axios.post("/api/user/create", userData);
  },
};
