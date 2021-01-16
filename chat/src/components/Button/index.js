import React from 'react'
import PropTypes from 'prop-types'
import {Button as BaseButton} from 'antd'   // Подключаем компоненты кнопки из библиотеки ant.design
import './Button.scss'                      // В каждой папке создаются стили и сам компонент
import classNames from 'classnames'

const Button = (props) =>  (<BaseButton {...props} className={classNames('button', propps.className, {'button--large': props.size === 'large'})} />)

// Описываем тип
Button.propTypes = {
    className: PropTypes.string
}
export default Button