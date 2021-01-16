import React from 'react'

import {UserItem} from '../'
import './UserList.scss'                      // В каждой папке создаются стили и сам компонент

const UserList = ({items, userId}) =>  (
    <div className="dialogs">
            {items.map(item =>(
                 <UserItem 
                 key={item._id} 
                 user={item.user}
                 isFirst={item.user._id === userId}/>
            ))}
        </div>
)

export default UserList