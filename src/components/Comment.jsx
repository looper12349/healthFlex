// import React, { useEffect, useState, useCallback } from 'react';
// import './Comment.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// const edit = <FontAwesomeIcon icon={faEdit} />;
// const dele = <FontAwesomeIcon icon={faTrash} />;
// const coment = <FontAwesomeIcon icon={faComment} />;

// const Comment = ({ comment, onEditComment, onDeleteComment, onReplyComment, onEditReply, onDeleteReply }) => {
//   const [showReplies, setShowReplies] = useState(false);
//   const [reply, setReply] = useState(false);
//   const [replyVal, setReplyVal] = useState('');
//   const [shouldSubmitReply, setShouldSubmitReply] = useState(false);
//   const [edit, setEdit] = useState(false);

//   const formattedDate = useCallback(() => {
//     const D = new Date(comment.timestamp);
//     let month = D.getMonth();
//     let hour = D.getHours();
//     let minute = D.getMinutes();
//     let date = D.getDate();
//     const year = D.getFullYear();
//     if (hour >= 12) {
//       hour = hour > 12 ? hour - 12 : hour;
//       var amOrPm = 'PM';
//     } else {
//       var amOrPm = 'AM';
//     }
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     return `${months[month]} ${date}, ${year} ${hour}:${minute < 10 ? `0${minute}` : minute} ${amOrPm}`;
//   }, [comment.timestamp]);

//   const handleChange = () => {
//     setReply(!reply);
//   }

//   const changeEdit = () => {
//     setEdit(!edit);
//     }


//   const inputChange = (e) => {
//     setReplyVal(e.target.value);
//   } 

//   const handleReply = () => {
//     if (replyVal.trim() !== '') {
//       setShouldSubmitReply(true);
//     }
//   }

//   useEffect(() => {
//     if (shouldSubmitReply) {
//       onReplyComment(comment.id, replyVal);
//       setReplyVal('');
//       setReply(false);
//       setShouldSubmitReply(false);
//     }
//   }, [shouldSubmitReply, comment.id, replyVal, onReplyComment]);

//   const handleEdit = useCallback(() => {
//     const newText = prompt('Edit comment text:', comment.content);
//     if (newText !== null && newText.trim() !== '') {
//       onEditComment(comment.id, newText);
//     }
//   }, [comment.id, comment.content, onEditComment]);

//   const handleDelete = useCallback(() => {
//     if (window.confirm('Are you sure you want to delete this comment?')) {
//       onDeleteComment(comment.id);
//     }
//   }, [comment.id, onDeleteComment]);

//   const handleReplyEdit = useCallback((replyId, content, commentId) => {
//     const newText = prompt('Edit reply text:', content);
//     if (newText !== null && newText.trim() !== '') {
//       onEditReply(commentId, replyId, newText);
//     }
//   }, [onEditReply]);

//   const handleReplyDelete = useCallback((commentId, replyId) => {
//     if (window.confirm('Are you sure you want to delete this reply?')) {
//       onDeleteReply(commentId, replyId);
//     }
//   }, [onDeleteReply]);

//   return (
//     <div className='commentCard'>
//       <div className='commentCard__header'>
//         <img src='https://picsum.photos/200' alt='profile' />
//         <div className='commentCard__header__text'>
//           <h3>{comment.username}</h3>
//           <p>{formattedDate()}</p>
//         </div>
//       </div>
//       <div className='commentCard__body'>
//         <p>{comment.content}</p>
//       </div>
//       <div className='commentCard__footer'>
//         <button onClick={handleChange}>Reply</button>
//         <button onClick={handleEdit}>Edit {edit}</button>
//         <button onClick={handleDelete}>{dele}</button>
//       </div>

//       <div className='commentCard_replies'>
//         <div onClick={() => setShowReplies(!showReplies)} className='reply'>
//           {showReplies ? 'Hide Replies' : 'Show Replies'}
//         </div>
//       </div>

//       <div className={reply ? 'reply-form' : 'reply-form disabled'}>
//         <input type='text' placeholder='Add a reply...' value={replyVal} onChange={inputChange}/>
//         <button className='post-btn' onClick={handleReply}>Post</button>
//       </div>
      
//       {showReplies && (
//         <div className='commentCard__replies'>
//           {comment.replies.length > 0 && <h4>Replies:</h4>}
//           {[...comment.replies].reverse().map(reply => (
//             <div key={reply.id} className='replyCard'>
//               <div className='replyCard__header'>
//                 <img src='https://picsum.photos/200' alt='profile' />
//                 <div className='replyCard__header__text'>
//                   <h5>{comment.username}</h5>
//                 </div>
//               </div>
//               <div className='replyCard__body'>
//                 <p >{reply.content}</p>
//               </div>
//               <div className='replyCard__body'>
                
//                 <textarea type='text' value={reply.content} />
//               </div>

//               <div className='replyCard__footer'>
//                 <button onClick={changeEdit}>edit {edit}</button>
//                 <button onClick={() => handleReplyDelete(comment.id, reply.id)}>{dele}</button>
                
//               </div>
//               <div className={`replyCard__footer`}>
//                 <button onClick={() => handleReplyEdit(reply.id, reply.content, comment.id)}>save</button> 
//                 <button onClick={changeEdit}>{dele}</button> 
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default React.memo(Comment);

import React, { useEffect, useState, useCallback } from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const edit = <FontAwesomeIcon icon={faEdit} />;
const dele = <FontAwesomeIcon icon={faTrash} />;
const coment = <FontAwesomeIcon icon={faComment} />;

const Comment = ({ comment, onEditComment, onDeleteComment, onReplyComment, onEditReply, onDeleteReply }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState(false);
  const [replyVal, setReplyVal] = useState('');
  const [shouldSubmitReply, setShouldSubmitReply] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [editedCommentContent, setEditedCommentContent] = useState(comment.content);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [editedReplyContent, setEditedReplyContent] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const formattedDate = useCallback(() => {
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
  }, [comment.timestamp]);

  const handleChange = () => {
    setReply(!reply);
  }

  const inputChange = (e) => {
    setReplyVal(e.target.value);
  } 

  const handleReply = () => {
    if (replyVal.trim() !== '') {
      setShouldSubmitReply(true);
    }
  }

  useEffect(() => {
    if (shouldSubmitReply) {
      onReplyComment(comment.id, replyVal);
      setReplyVal('');
      setReply(false);
      setShouldSubmitReply(false);
    }
  }, [shouldSubmitReply, comment.id, replyVal, onReplyComment]);

  const handleEditComment = () => {
    setEditingComment(true);
  }

  const handleSaveComment = () => {
    if (editedCommentContent.trim() !== '') {
      onEditComment(comment.id, editedCommentContent);
      setEditingComment(false);
    }
  }

  const handleDeleteComment = () => {
    setShowDeleteConfirm(true);
  }

  const confirmDeleteComment = () => {
    onDeleteComment(comment.id);
    setShowDeleteConfirm(false);
  }

  const handleEditReply = (replyId, content) => {
    setEditingReplyId(replyId);
    setEditedReplyContent(content);
  }

  const handleSaveReply = (replyId) => {
    if (editedReplyContent.trim() !== '') {
      onEditReply(comment.id, replyId, editedReplyContent);
      setEditingReplyId(null);
    }
  }

  const handleDeleteReply = (replyId) => {
    onDeleteReply(comment.id, replyId);
  }

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
        {editingComment ? (
          <textarea 
            value={editedCommentContent} 
            onChange={(e) => setEditedCommentContent(e.target.value)}
          />
        ) : (
          <p>{comment.content}</p>
        )}
      </div>
      <div className='commentCard__footer'>
        <button onClick={handleChange}>Reply</button>
        {editingComment ? (
          <button onClick={handleSaveComment}>Save</button>
        ) : (
          <button onClick={handleEditComment}>Edit {edit}</button>
        )}
        <button onClick={handleDeleteComment}>{dele}</button>
      </div>

      {showDeleteConfirm && (
        <div className='deleteConfirm'>
          <p>Are you sure you want to delete this comment?</p>
          <button onClick={confirmDeleteComment}>Yes, delete</button>
          <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
        </div>
      )}

      <div className='commentCard_replies'>
        <div onClick={() => setShowReplies(!showReplies)} className='reply'>
          {showReplies ? 'Hide Replies' : 'Show Replies'}
        </div>
      </div>

      <div className={reply ? 'reply-form' : 'reply-form disabled'}>
        <input type='text' placeholder='Add a reply...' value={replyVal} onChange={inputChange}/>
        <button className='post-btn' onClick={handleReply}>Post</button>
      </div>
      
      {showReplies && (
        <div className='commentCard__replies'>
          {comment.replies.length > 0 && <h4>Replies:</h4>}
          {[...comment.replies].reverse().map(reply => (
            <div key={reply.id} className='replyCard'>
              <div className='replyCard__header'>
                <img src='https://picsum.photos/200' alt='profile' />
                <div className='replyCard__header__text'>
                  <h5>{comment.username}</h5>
                </div>
              </div>
              <div className='replyCard__body'>
                {editingReplyId === reply.id ? (
                  <textarea 
                    value={editedReplyContent} 
                    onChange={(e) => setEditedReplyContent(e.target.value)}
                  />
                ) : (
                  <p>{reply.content}</p>
                )}
              </div>
              <div className='replyCard__footer'>
                {editingReplyId === reply.id ? (
                  <>
                    <button onClick={() => handleSaveReply(reply.id)}>Save</button>
                    <button onClick={() => setEditingReplyId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditReply(reply.id, reply.content)}>Edit {edit}</button>
                    <button onClick={() => handleDeleteReply(reply.id)}>{dele}</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Comment);