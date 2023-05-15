"use client";
import { SimplePost } from "model/post";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
interface IPostCard {
  post: SimplePost;
  priority: boolean;
}

function PostCard({ post, priority = false }: IPostCard) {
  const { userImage, username, image, createdAt, likes, text } = post;

  return (
    <li className=" bg-blocks shadow-md shadow-neutral-300 border-2 rounded-xl">
      <PostHeader userImage={userImage} username={username} />
      <PostImage post={post} priority={priority} />
      <PostFooter
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
    </li>
  );
}

export default PostCard;
