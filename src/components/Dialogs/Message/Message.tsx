import React from 'react';

type messagePropsType = {
    message: string
}

const Message = ({message}:messagePropsType) => {
    return <div>
        <span>{message}</span>
    </div>
}

export default Message;