import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/currentuserSlice";

export const AddComments = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="bg-gray-100 m-2 w-5/6 rounded-2xl border-1 border-gray-300 p-5 flex flex-col gap-6">
      <textarea
        placeholder="Add a comment..."
        className="border-2 border-lightGray rounded-xl w-full resize-none h-32 focus:outline-none py-3 px-2 text-grayishBlue scrollbar"
      />
      <div className="flex justify-between items-center">
        <img src={currentUser.image.png} width={32} className="rounded-full" />
        <button className="bg-blue-200 rounded-lg py-2 px-4 text-white font-bold">
          Send
        </button>
      </div>
    </div>
  );
};
