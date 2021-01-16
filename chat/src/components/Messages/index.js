import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

import { Message } from '../'

const Messages = ({ items }) => {
   return items ? (<div>
    <Message
        avatar="https://scontent.fnlv2-1.fna.fbcdn.net/v/t31.0-8/16178556_1830539643852045_1133274209413442461_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=BaoTDsI_3zsAX-BQKGT&_nc_ht=scontent.fnlv2-1.fna&oh=d08166b840e2abfdf13fc4b65392396c&oe=600AE1CC"
        text="Всем привет!"
        user="МВ"
        isFirst={false}
    />
    <Message
        avatar="https://scontent.fnlv2-1.fna.fbcdn.net/v/t1.0-9/27540753_122150468598650_7473608882269470011_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=S0YjpRqKxa4AX9hU4Tv&_nc_ht=scontent.fnlv2-1.fna&oh=2b91a20e7caa043ffdae043ff4bd7364&oe=600B8840"
        text="И тебе привет!"
        user="ОВ"
        isFirst={true}
    />
</div>) : <Empty description="Откройте диалог" />
}


// Описываем тип
Message.propTypes = {
    items: PropTypes.array,
}
export default Messages