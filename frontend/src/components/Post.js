import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5001/images/";
  return (
    <>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <Link href="#">
            {post.image && (
              <img class="rounded-t-lg" src={PF + post.image} alt="" />
            )}
          </Link>

          <div class="p-5">
            <Link to={`/post/${post._id}`}>
              <h5 class="text-green font-bold text-2xl tracking-tight mb-2">
                {post.title}
              </h5>
            </Link>
            <p
              class="font-normal text-gray-700 mb-3 truncate text-ellipsis"
              dangerouslySetInnerHTML={{ __html: post.desc }}
            >
              {/* {post.desc} */}
            </p>
            <Link
              to={`/post/${post._id}`}
              class="text-blue  font-medium  text-md "
            >
              Read more
            </Link>
            <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
              <span class="m-1 px-2 py-1 rounded bg-hoverDark">Primary</span>
              <span class="m-1 px-2 py-1 rounded bg-hoverDark">
                Mathematics
              </span>
              <span class="m-1 px-2 py-1 rounded bg-hoverDark">Sets</span>
            </div>
            <div class="flex items-center justify-between mt-2">
              <div class="font-medium">
                {new Date(post.createdAt).toDateString()}
              </div>
              <div class="text-gray-600 text-sm">{post.username}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
