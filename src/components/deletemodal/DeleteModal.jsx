import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../features/commentSlice";

export const DeleteModal = ({ type, deleteMode, setDeleteMode }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/20 flex justify-center items-center">
      <div className="bg-white p-4 py-6 rounded-lg flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Delete comment</h1>
        <p className="text-gray-400">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-around">
          <button
            onClick={() => setDeleteMode(false)}
            className="bg-gray-400 text-white py-2 px-4 rounded"
          >
            No
          </button>
          <button
            className="bg-red-400 text-white py-2 px-4 rounded"
            onClick={() => {
              dispatch(
                deleteComment({
                  id: deleteMode.num,
                  type,
                })
              );
              setDeleteMode(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
