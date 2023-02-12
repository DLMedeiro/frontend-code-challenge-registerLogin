import axios from "axios";

const BASE_API_URL =
  "https://register-login-backend.onrender.com" || "http://localhost:3000";

class RegisterLoginApi {
  static async getAllUsers() {
    const url = `${BASE_API_URL}/users`;
    const method = "get";
    const withCredentials = false;

    try {
      return (await axios({ url, method, withCredentials })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async addUser(userData) {
    try {
      let newUser = await axios.post(`${BASE_API_URL}/users`, userData);
      return newUser;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default RegisterLoginApi;
