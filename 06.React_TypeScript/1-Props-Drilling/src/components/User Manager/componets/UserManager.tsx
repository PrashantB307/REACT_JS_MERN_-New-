import React, { useState } from 'react'
import UserList from './UserList'
import UserCard from './UserCard'
import { IUser } from '../models/model'

export const UserManager : React.FC = () => {

    const [user, setUser] = useState<IUser>( {} as IUser);

    const receiveUser = (user : IUser): void => {
        setUser(user);
    };


  return (
    <>
    {/* <pre>{JSON.stringify(user)}</pre> */}
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className='h2 text-success'>User Manager</p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia cupiditate labore ratione quas aspernatur aliquid, ex voluptate sequi libero dignissimos nihil nisi eaque dolorum ipsam illo voluptates accusamus natus doloremque, eos quibusdam ea maxime animi commodi? Perspiciatis, nemo adipisci.</p>

            </div>
        </div>
    </div>

    <div className="container mt-3">
        <div className="row">
            <div className="col-sm-9">
                <UserList receiveUser={receiveUser}/>
            </div>

            <div className='col-sm-3'>
                <UserCard user={user} />
            </div>
        </div>
    </div>
    </>
  )
}

export default UserManager