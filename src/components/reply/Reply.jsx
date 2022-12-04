import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyComment, selectComment } from "../../features/commentSlice";
import { selectCurrentUser } from "../../features/currentuserSlice";

export const Reply = ({
  type,
  parentId,
  data,
  newContent,
  setNewContent,
  setReplyMode,
}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const commentList = useSelector(selectComment);

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
    <div className="bg-gray-100 m-2 w-full rounded-2xl border-1 border-gray-300 p-5 flex flex-col gap-6">
      <textarea
        defaultChecked={newContent}
        placeholder={`@${data.user.username}`}
        onChange={(e) => setNewContent(e.target.value)}
        className="border-2 border-lightGray rounded-xl w-full resize-none h-32 focus:outline-none py-3 px-2 text-grayishBlue scrollbar"
      />
      <div className="flex justify-between items-center">
        <img
          width={32}
          height={32}
          className="rounded-full"
          src={currentUser.image.png}
        />
        <button
          className={`${
            newContent ? "bg-blue-500" : "bg-blue-200 cursor-not-allowed"
          } rounded-lg py-2 px-4 text-white font-bold`}
          onClick={() => {
            dispatch(
              replyComment({
                id: getNewId(),
                content: newContent,
                createdAt: Date(),
                score: 0,
                parentId:
                  type === "comments" ? data.id : type === "reply" && parentId,
                replyingTo: data.user.username,
                user: {
                  image: {
                    png: currentUser.image.png,
                    webp: "",
                  },
                  username: currentUser.username,
                },
              })
            );
            setReplyMode(false);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
