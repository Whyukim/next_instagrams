"use client";
import { SimplePost } from "model/post";
import { DetailUser } from "model/user";
import useSWR from "swr";

import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

interface IPostCard {}

function PostCard({}: IPostCard) {
  const { data: posts } = useSWR<SimplePost[]>("/api/posts");
  console.log(posts);

  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
    // <ul className="bg-blocks shadow-md shadow-neutral-300 border-2 rounded-xl">
    //   {isLoading ? (
    //     <div>loading</div>
    //   ) : (
    //     <>
    //       <PostHeader user={me} />
    //       <PostImage user={me} />
    //       <PostFooter user={me} />
    //     </>
    //   )}
    // </ul>
  );
}

export default PostCard;
