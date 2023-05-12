"use client";
import { DetailUser } from "model/user";
import useSWR from "swr";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

interface IPostCard {}

function PostCard({}: IPostCard) {
  const { data: me, isLoading, error } = useSWR<DetailUser>("/api/me");
  return (
    <ul className="bg-blocks shadow-md shadow-neutral-300 border-2 rounded-xl">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <PostHeader user={me} />
          <PostImage user={me} />
          <PostFooter user={me} />
        </>
      )}
    </ul>
  );
}

export default PostCard;
