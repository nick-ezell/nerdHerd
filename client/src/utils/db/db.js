import axios from "axios";

export default {
  //User functions
  getUserByName: function (username) {
    return axios.get(`/api/user/` + username);
  },

  getUserByEmail: function (email) {
    return axios.get(`/api/user/` + email);
  },

  getUserById: function (id) {
    return axios.get(`/api/user/` + id);
  },

  updateUserInfo: function (userData, id) {
    return axios.put(`/api/user/` + id, userData);
  },

  LoginUser: function (userData) {
    return axios.get(
      `/api/user/login/` + userData.email + `/` + userData.password
    );
  },

  createUser: function (userData) {
    return axios.post("/api/user/create", userData);
  },
  //Group functions
  getGroupsByGame: function (game) {
    return axios.get(`/api/groups/` + game);
  },

  getGroupById: function (id) {
    return axios.get(`/api/groups/` + id);
  },

  updateGroup: function (groupData, id) {
    return axios.put(`/api/groups/` + id, groupData);
  },

  createGroup: function (groupData) {
    return axios.post(`/api/groups/create`, groupData);
  },

  removeGroup: function (id) {
    return axios.delete(`/api/groups/remove/` + id);
  },
  //Games functions
  getGameByTitle: function (title) {
    return axios.get(`/api/games/` + title);
  },

  getGameByGenre: function (genre) {
    return axios.get(`/api/games/` + genre);
  },

  addGame: function (gameData) {
    return axios.post(`/api/games/create`, gameData);
  },

  updateGame: function (id, gameData) {
    return axios.put(`/api/games/` + id, gameData);
  },
};
