import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here


function Users() {

  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length );
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      
        {users.map((user) => 
          <li key={user.username}>{user.username} from: {user.hometown}</li>
          )
        }

      </ul>
      Total users: {userCount}
     
    </div>
  );
}

export default Users;
