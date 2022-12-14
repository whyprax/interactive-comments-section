import React from "react";
import { useSelector } from "react-redux";
import { selectComment } from "../../features/commentSlice";
import { Comment } from "../../components";

export const Comments = () => {
  const commentList = useSelector(selectComment);

  return (
    <>
      {commentList.map((comment, index) => (
        <>
          <Comment key={index} data={comment} type="comments" />

          <div className="border-l-2 pl-16 w-full border-gray-300">
            {comment?.replies?.map((reply, index) => (
              <>
                <Comment
                  key={index}
                  data={reply}
                  type="reply"
                  parentId={comment.id}
                />
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
