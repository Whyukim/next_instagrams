"use client";
import { ProfileUser } from "model/user";
import { MouseEvent, useCallback, useState } from "react";
import UserPostsGrid from "./UserPostsGrid";

interface IUserPosts {
  user: ProfileUser;
}

const tabs = ["posts", "saved", "liked"];
function UserPosts({ user: { username } }: IUserPosts) {
  const [status, setStatus] = useState("posts");

  const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setStatus(e.currentTarget.innerText);
  }, []);

  return (
    <ul>
      <li className="w-full justify-center flex gap-14 justify-center">
        {tabs.map((v, index) => (
          <button
            key={index}
            onClick={onClick}
            className={`uppercase border-black pt-4 ${
              status.toLocaleLowerCase() == v && "font-bold border-t"
            } `}
          >
            {v}
          </button>
        ))}
      </li>
      <UserPostsGrid username={username} query={status} />
    </ul>
  );
}

export default UserPosts;
