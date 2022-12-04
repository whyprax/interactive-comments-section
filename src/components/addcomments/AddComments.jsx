import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, selectComment } from "../../features/commentSlice";
import { selectCurrentUser } from "../../features/currentuserSlice";

export const AddComments = () => {
  const [newContent, setNewContent] = useState("");
  const currentUser = useSelector(selectCurrentUser);
  const commentList = useSelector(selectComment);
  const dispatch = useDispatch();

  const getNewId = () => {
    const com = Math.max(...commentList.map((comment) => Math.max(comment.id)));
    const rep = Math.max(
      ...commentList
        .map((comment) => comment.replies)
        .flat()
        .map((reply) => Math.max(reply.id))
    );
    if (rep > com) return rep + 1;
    else com + 1;
  };

  return (
    <div className="bg-gray-100 m-2 w-5/6 rounded-2xl border-1 border-gray-300 p-5 flex flex-col gap-6">
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        placeholder="Add a comment..."
        className="border-2 border-lightGray rounded-xl w-full resize-none h-32 focus:outline-none py-3 px-2 text-grayishBlue scrollbar"
      />
      <div className="flex justify-between items-center">
        <img src={currentUser.image.png} width={32} className="rounded-full" />
        <button
          className={`${
            newContent ? "bg-blue-500" : "bg-blue-200 cursor-not-allowed"
          } rounded-lg py-2 px-4 text-white font-bold`}
          onClick={() => {
            dispatch(
              addComment({
                id: getNewId(),
                content: newContent,
                createdAt: Date(),
                score: 0,
                user: {
                  image: {
                    png: currentUser.image.png,
                    webp: "",
                  },
                  username: currentUser.username,
                },
                replies: [],
              })
            );
            setNewContent("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
