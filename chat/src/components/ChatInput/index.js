import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from 'antd'   // Подключаем компоненты кнопки из библиотеки ant.design
import './ChatInput.scss'                      // В каждой папке создаются стили и сам компонент

const ChatInput = props => (
    <div className="chat-input">
        <div className="chat-input__smile-btn">
            <Button type="link" shape="circle" icon="smile"/>
        </div>
        <Input size="large" placeholder="Введите текст сообщения..." />
        <div className="chat-input__send">
            <Button type="link" shape="circle" icon="check-circle"/>
        </div>
    </div>
)
// Описываем тип
ChatInput.propTypes = {
    className: PropTypes.string
}
export default ChatInput