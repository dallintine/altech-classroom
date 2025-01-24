import React from "react";
import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div className="grid gap-4 grid-cols-2">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
