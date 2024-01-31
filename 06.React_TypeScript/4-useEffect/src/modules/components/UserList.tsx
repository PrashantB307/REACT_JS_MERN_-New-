import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
import ErroeMessage from "./ErroeMessage";
import Spinner from "./Spinner";

export const UserList: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);

  const [users, setUsers] = useState<IUser[]>([] as IUser[]);

  const [errorMessage, setErroeMessage] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErroeMessage(error.message);
        setLoading(false);
      });
  }, []);

  const selectUser = (user: IUser): void => {
    alert(JSON.stringify(user));
  };

  return (
    <>
    {loading && <Spinner/>}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">User List</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae modi sint eveniet quas voluptates cumque ullam
              molestiae sit ipsam, amet est velit, libero aliquam aspernatur
              maiores quod architecto tenetur vel!
            </p>
          </div>
        </div>
      </div>

      {users.length > 0 && 
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <table className="table table-striped table-hover text-center">
                <thead>
                  <tr>
                    <th>SNo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => {
                    return (
                      <tr key={user.id} onClick={() => selectUser(user)}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                        <td>{user.website}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
      {errorMessage.length > 0 && <ErroeMessage msg = {errorMessage}/>}
    </>
  )
};

export default UserList;
