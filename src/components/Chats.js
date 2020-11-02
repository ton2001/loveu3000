import React from "react";
import "./Chat.css";
import Chat from "./Chat";

function Chats()
{
    return (
        <div className="chats">
            <Chat
                name="Danny Lee"
                message="Whats up!"
                timestamp="40 seconds ago"
                //profilePic="..."
            />
            <Chat
                name="Katsuya"
                message="Whats up!"
                timestamp="40 seconds ago"
                //profilePic="..."
            />
            <Chat
                name="Van Darkholmes"
                message="Whats up!"
                timestamp="40 seconds ago"
                //profilePic="..."
            />
            <Chat
                name="Billy"
                message="Whats up!"
                timestamp="40 seconds ago"
                //profilePic="..."
            />
        </div>
    );
}

export default Chats;