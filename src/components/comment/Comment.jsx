import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Counter, DeleteModal } from "../../components";
import { selectCurrentUser } from "../../features/currentuserSlice";
import imgReply from "../../images/icon-reply.svg";
import iconDelete from "../../images/icon-delete.svg";
import iconEdit from "../../images/icon-edit.svg";

export const Comment = ({ data, type, parentId }) => {
  const { content, user, createdAt } = data;
  const currentUser = useSelector(selectCurrentUser);
  const [deleteMode, setDeleteMode] = useState({ num: null });

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
        {type == "reply" ? (
          <div>
            <span className="font-semibold text-blue-500">
              @{data.replyingTo + ` `}
            </span>
            <span className="text-gray-500">{content}</span>
          </div>
        ) : (
          <div>
            <p className="text-gray-500">{content}</p>
          </div>
        )}

        {/* footer */}
        <div className="flex justify-between items-center">
          <div>
            <Counter data={data} type="comments" />
          </div>
          {currentUser.username === user.username ? (
            <div className="flex justify-center items-center gap-4 cursor-pointer">
              <div
                className="flex gap-1 justify-center items-center"
                onClick={() => setDeleteMode({ num: data.id })}
              >
                <img src={iconDelete} />
                <span>Delete</span>
              </div>

              {deleteMode.num && (
                <DeleteModal
                  type={type}
                  deleteMode={deleteMode}
                  setDeleteMode={setDeleteMode}
                />
              )}

              <div className="flex gap-1 justify-center items-center">
                <img src={iconEdit} />
                <span>Edit</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <img src={imgReply} />
              <span className="text-blue-800 font-bold">Reply</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
