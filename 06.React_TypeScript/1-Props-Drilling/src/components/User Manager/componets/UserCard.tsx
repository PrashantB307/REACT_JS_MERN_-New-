import React from "react";
import { IUser } from "../models/model";

interface IProps {
  user: IUser;
}

export const UserCard: React.FC<IProps> = (props) => {

    const {user} = props;

  return (
    <>
      {
        user && Object.keys(user).length > 0 && (
        <div className="card sticky-top">
          <div className="card-header text-center">
            <img src={user.picture.large} alt="" />
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Name : <span className="fw-bold">{user.name.first} {user.name.last}</span>
              </li>
              <li className="list-group-item">
                Age : <span className="fw-bold">{user.dob.age}</span>
              </li>
              <li className="list-group-item">
                City : <span className="fw-bold">{user.location.city}</span>
              </li>
              <li className="list-group-item">
                State : <span className="fw-bold">{user.location.state}</span>
              </li>
              <li className="list-group-item">
                Country : <span className="fw-bold">{user.location.country}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
