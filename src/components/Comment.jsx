import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ comment, onEditComment, onDeleteComment, onEditReply, onDeleteReply }) => {
  const [showReplies, setShowReplies] = useState(false);

  const formattedDate = () => {
    const D = new Date(comment.timestamp);
    let month = D.getMonth();
    let hour = D.getHours();
    let minute = D.getMinutes();
    let date = D.getDate();
    const year = D.getFullYear();
    if (hour >= 12) {
      hour = hour > 12 ? hour - 12 : hour;
      var amOrPm = 'PM';
    } else {
      var amOrPm = 'AM';
    }
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[month]} ${date}, ${year} ${hour}:${minute < 10 ? `0${minute}` : minute} ${amOrPm}`;
  };

  const handleEdit = () => {
    const newText = prompt('Edit comment text:', comment.content);
    if (newText !== null && newText.trim() !== '') {
      onEditComment(comment.id, newText);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      onDeleteComment(comment.id);
    }
  };

  const handleReplyEdit = (replyId) => {
    const newText = prompt('Edit reply text:', replies.find(reply => reply.id === replyId)?.text);
    if (newText !== null && newText.trim() !== '') {
      onEditReply(replyId, newText);
    }
  };

  const handleReplyDelete = (replyId) => {
    if (window.confirm('Are you sure you want to delete this reply?')) {
      onDeleteReply(replyId);
    }
  };

  return (
    <div className='commentCard'>
      <div className='commentCard__header'>
        <img src='https://picsum.photos/200' alt='profile' />
        <div className='commentCard__header__text'>
          <h3>{comment.username}</h3>
          <p>{formattedDate()}</p>
        </div>
      </div>
      <div className='commentCard__body'>
        <p>{comment.content}</p>
      </div>
      <div className='commentCard__footer'>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setShowReplies(!showReplies)}>{showReplies ? 'Hide Replies' : 'Show Replies'}</button>
      </div>
      {showReplies && (
        <div className='commentCard__replies'>
          {comment.replies.map(reply => (
            <div key={reply.id} className='replyCard'>
              <div className='replyCard__body'>
                <p>{reply.text}</p>
              </div>
              <div className='replyCard__footer'>
                <button onClick={() => handleReplyEdit(reply.id)}>Edit</button>
                <button onClick={() => handleReplyDelete(reply.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
