import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen()
{
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '',
            message: 'Whats up',
        },
        {
            name: 'Ellen',
            image: '',
            message: 'Whats up',
        },
        {
            message: 'Whats up',
        },
    ]);

    return(
        <div className="chatScreen">
            <h2>Chat screen</h2>
            <p className="chatScreen_timestamp">
                YOU MATCHED WITH SASSADA ON 10/08/2020
            </p>
            { messages.map ? (
                <div className="chatScreen_message">
                    <Avatar
                        className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="chatScreen_text">{messages.message}</p>
                </div>
                )   :   (
                    <div className="chatScree_message">
                        <p className="chatScreen_text"{messages.message}></p>
                    </div>
                )}
            
        </div>
    )
}

export default ChatScreen;