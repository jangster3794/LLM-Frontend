import React, { PureComponent } from "react";
import "../css/Message.css"

import user from "../assets/user.jpeg"

class Message extends PureComponent {
    render() {
      return (
        <div>
          {this.props.origin == "Human" ? (
            <div className="chat-message user">
              <div className="avatar">
                <img src={user} alt="user-avatar" />
              </div>
              <div className="message">{this.props.message}</div>
            </div>
          ) : (
            <div className="chat-message bot">
              <div className="avatar">
                <img src="https://i.ibb.co/cN0nmSj/Screenshot-2023-05-28-at-02-37-21.png" alt="bot-avatar" />
              </div>
              <div className="message">{this.props.message}</div>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default Message;
  