import React from 'react'
import './Chat.css'
import { ChatEngine} from 'react-chat-engine';

function Chat() {
    return (
        <div>
            <ChatEngine
                height='98vh' 
                userName='Admin'
                userSecret='1234567890'
                projectID='1b2d60d1-e8c0-4431-9002-18740cc56ef3'
		    /> 
        </div>
    )
}

export default Chat
