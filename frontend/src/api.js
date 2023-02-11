import axios from "axios";

const BASE_API_URL = "http://localhost:3000";

class RegisterLoginApi {
  static async getAllUsers() {
    const allUsers = await axios.get(`${BASE_API_URL}/users`);

    return allUsers;
  }
}

export default RegisterLoginApi;
