import React, { Component } from 'react';
import {connect} from 'react-redux';
import MessageItem from '../components/MessageItem';
import {fetchMessages, removeMessage} from '../store/actions/messages'

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }
    render() {
        const {messages, removeMessage, currentUser} = this.props;
        let messageList = messages.map((m) => {
            return <MessageItem key={m._id} 
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}
            removeMessage={removeMessage.bind(this, m.user._id, m._id)}
            isCorrectUser={currentUser === m.user._id}
            date={m.createdAt} text={m.text} />
        })
        return (
            <div className='col-sm-8 row'>
                <div className='offset-1 col-sm-10'>
                    <ul className='list-group' id='messages'>
                        {messageList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList);
