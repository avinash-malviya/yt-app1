import React, { useEffect, useState } from "react";
import "./_comments.scss";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentList.comments);

  // const { photoURL } = useSelector((state) => state.auth?.user);

  const [text, setText] = useState("");

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));
    setText("");
  };
  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img
          src="https://lh6.googleusercontent.com/-_p3gXEMzy-s/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN24UYviWGN1AM0XZQOusjvEBQcuQ/photo.jpg"
          alt="avatar"
          className="rounded-circle mr-3"
        />
        <form
          onSubmit={handleComment}
          className="d-flex flex-grow-1 makecomment"
        >
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
