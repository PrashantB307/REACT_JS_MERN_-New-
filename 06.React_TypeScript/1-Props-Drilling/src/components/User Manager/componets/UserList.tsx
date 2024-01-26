import React, { useState } from 'react'
import { IUser } from '../models/model';
import { UserService } from '../services/UserService';

interface IProps {
    receiveUser : (user : IUser) => void;
}

export const UserList : React.FC<IProps> = (props) => {

    const [users] = useState<IUser[]>(UserService.getAllUsers());

    const clickUserRow = (user : IUser) => {
        props.receiveUser(user);
    };

  return (
    <>
    <table className='table table-hover text-center table-striped'>
        <thead className='bg-dark text-white'>
            <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {
                users.length > 0 && users.map( (user, index) => {
                    return (
                        <tr key={index} onClick={() => clickUserRow(user)}>
                            <td>{index + 1}</td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.dob.age}</td>
                            <td>{user.email}</td>
                            <td>{user.location.city}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
};

export default UserList;