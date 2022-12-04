import React from "react";
import { useSelector } from "react-redux";
import { Counter } from "../../components";
import { selectCurrentUser } from "../../features/currentuserSlice";
import imgReply from "../../images/icon-reply.svg";

export const Comment = ({ data, type, parentId }) => {
  const { content, user, createdAt } = data;
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <div className="bg-gray-100 m-2 w-5/6 rounded-2xl border-1 border-gray-300 py-8 px-5 flex flex-col gap-4">
        {/* user  */}
        <div className="flex justify-start items-center gap-4">
          <img
            src={user.image.png}
            className="w-8 h-8 object-cover rounded-full"
          />
          <h1 className="font-bold text-gray-700">{user.username}</h1>

          {/* currentuser  */}
          {currentUser.username === user.username ? (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-lg">
              you
            </span>
          ) : null}
          <span className="text-gray-400">{createdAt}</span>
        </div>

        {/* content  */}
        <div>
          <p className="text-gray-500">{content}</p>
        </div>

        {/* footer */}
        <div className="flex justify-between items-center">
          <div>
            <Counter data={data} type="comments" />
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <img src={imgReply} />
            <span className="text-blue-800 font-bold">Reply</span>
          </div>
        </div>
      </div>
    </>
  );
};
