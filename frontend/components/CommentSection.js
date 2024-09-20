// CommentSection.js
import React, { useState } from 'react';
import { FaComment, FaReply, FaTrash } from 'react-icons/fa';

const Comment = ({ comment, onReply }) => {
  return (
    <div className="flex flex-col mb-4 p-2 border rounded-lg bg-gray-100">
      <div className="flex justify-between items-center">
        <p className="font-semibold">{comment.user}</p>
        <FaTrash className="cursor-pointer text-red-600 hover:text-red-800" />
      </div>
      <p>{comment.text}</p>
      <div className="flex items-center mt-2">
        <FaReply
          className="cursor-pointer text-blue-600 hover:text-blue-800 mr-2"
          onClick={() => onReply(comment.id)}
        />
        <span className="text-sm text-gray-600">{comment.replies.length} Replies</span>
      </div>
      {comment.replies.length > 0 && (
        <div className="ml-4 mt-2">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="p-2 border-l-2 border-blue-300 mb-2 bg-gray-50">
              <p className="font-semibold">{reply.user}</p>
              <p>{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, user: 'Alice', text: 'Great post!', replies: [] },
    { id: 2, user: 'Bob', text: 'Thanks for the info!', replies: [] },
  ]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([...comments, { id: Date.now(), user: 'You', text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  const handleReplySubmit = () => {
    if (replyText && replyTo !== null) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === replyTo) {
          return {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), user: 'You', text: replyText }],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setReplyText('');
      setReplyTo(null);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReply={setReplyTo} />
      ))}
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleCommentSubmit}
        >
          <FaComment className="inline mr-1" /> Comment
        </button>
      </div>
      {replyTo && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            rows="2"
            placeholder="Reply to comment..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
            onClick={handleReplySubmit}
          >
            <FaReply className="inline mr-1" /> Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
