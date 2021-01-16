import React from 'react'
import classNames from 'classnames'
import './UserItem.scss'                      // В каждой папке создаются стили и сам компонент

const UserItem = ({user, isFirst}) =>  (
    <div className="dialogs__item">
        <div className="dialogs__item-avatar">
            <img src={user.avatar} alt={`${user.fullname} avatar`} />
        </div>
        <div className="dialogs__item-ifo">
            <b>{user.fullname}</b>
        </div>
    </div>
)

export default UserItem