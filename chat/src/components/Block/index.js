import React from 'react'
import classNames from 'classnames'
import './Block.scss'                      // В каждой папке создаются стили и сам компонент

const Block = ({children, className}) =>  (
    <div className={classNames('block', className)}>{children}</div>
)

export default Block