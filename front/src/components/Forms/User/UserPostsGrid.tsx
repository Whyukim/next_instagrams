"use client";

import { SimplePost } from "model/post";
import { DotLoader } from "react-spinners";
import useSWR from "swr";
import UserPostGridCard from "./UserPostGridCard";
interface IUserPostsGrid {
  username: string;
  query: string;
}

function UserPostsGrid({ username, query }: IUserPostsGrid) {
  const { data: posts, isLoading } = useSWR<SimplePost[]>(
    `/api/users/${username}/${query}`
  );

  return (
    <div className="w-full text-center">
      {isLoading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      <ul className="grid grid-cols-3 gap-4 py-4 px-8">
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <UserPostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserPostsGrid;
