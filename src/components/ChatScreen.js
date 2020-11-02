import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen()
{
    const [input, setInput] = useState('');
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

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return(
        <div className="chatScreen">
            <h2>Chat screen</h2>
            <p className="chatScreen_timestamp">
                YOU MATCHED WITH SASSADA ON 10/08/2020
            </p>
            {messages.map((message) =>
            message.name ? (
                <div className="chatScreen_message">
                    <Avatar
                        className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                        />
                        <p className="chatScreen_text">{message.message}</p>
                </div>
                )   :   (
                    <div className="chatScree_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            )}

            <div>
                <form className="chatScreen_input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen_inputField"
                        placeholder="Type a message..."
                        type="text" 
                    />
                    <button onClick={handleSend} className="chatScreen_inputButton">SEND</button>
                </form>
            </div>
        </div>
    )}

export default ChatScreen;