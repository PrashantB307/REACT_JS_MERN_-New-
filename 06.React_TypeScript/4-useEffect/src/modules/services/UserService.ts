import axios from "axios";

export class UserService {
    private static serverURL : string = "https://jsonplaceholder.typicode.com";

    public static getAllUsers() : Promise<any> {
        return axios.get(`${this.serverURL}/users`);
    }
}