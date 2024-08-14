// src/components/MainBar.js
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Comment from './Comment';
import { commentsState } from '../store/store';

const MainBar = () => {
  const comments = useRecoilValue(commentsState);
  const setComments = useSetRecoilState(commentsState);

  const handleEditComment = (id, newText) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === id ? { ...comment, content: newText } : comment
      )
    );
  };

  const handleDeleteComment = (id) => {
    setComments((oldComments) =>
      oldComments.filter(comment => comment.id !== id)
    );
  };

  const handleEditReply = (commentId, replyId, newText) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === replyId ? { ...reply, content: newText } : reply
              )
            }
          : comment
      )
    );
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments((oldComments) =>
      oldComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter(reply => reply.id !== replyId)
            }
          : comment
      )
    );
  };

  return (
    <div className='mainBar'>
      <h4>Comments</h4>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onEditComment={handleEditComment}
          onDeleteComment={handleDeleteComment}
          onEditReply={handleEditReply}
          onDeleteReply={handleDeleteReply}
        />
      ))}
    </div>
  );
};

export default MainBar;
