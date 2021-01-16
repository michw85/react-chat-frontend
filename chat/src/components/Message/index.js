import React from 'react'
import PropTypes from 'prop-types'
import { Button as BaseButton } from 'antd'   // Подключаем компоненты кнопки из библиотеки ant.design
import './Message.scss'                      // В каждой папке создаются стили и сам компонент
import classNames from 'classnames'

const Message = ({ avatar, text, user, isFirst}) => (
    <div className={classNames('message', {'message--isfirst': isFirst})}>
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <span className="message__username">{user}</span>
        </div>
    </div>
)

Message.defaultProps = {
    user: {}
}
// Описываем тип
Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.object,
    text: PropTypes.string,
    isFirst: PropTypes.bool
}
export default Message