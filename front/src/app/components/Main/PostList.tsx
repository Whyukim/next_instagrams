"use client";
import PostCard from "components/Forms/Post/PostCard";
import { SimplePost } from "model/post";
import { DotLoader } from "react-spinners";
import useSWR from "swr";

interface IPostList {}

function PostList({}: IPostList) {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {loading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      {posts && (
        <ul className="grid gap-10">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} priority={index < 2} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostList;
