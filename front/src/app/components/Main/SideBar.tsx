"use client";

import { User } from "model/user";
import { useSession } from "next-auth/react";
import Avatar from "../Elements/Avatar";

interface ISideBar {
  user: User;
}

function SideBar({ user }: ISideBar) {
  const list = [
    "About ・",
    "Help ・",
    "Press ・",
    "API ・",
    "Jobs ・",
    "Privacy ・",
    "Terms ・",
    "Location ・",
    "Language",
  ];

  return (
    <article>
      <ul className="flex flex-col gap-10">
        {user && (
          <li className="flex gap-3">
            <Avatar image={user.image} size="big" border={false} />
            <span>
              <h2 className="font-bold">{user.email}</h2>
              <p className="text-gray-500 dark:text-gray-300">{user.name}</p>
            </span>
          </li>
        )}
        <li>
          <ul className="flex grow gap-2 max-w-full flex-wrap">
            {list.map((v) => (
              <li key={v} className="text-gray-400 cursor-pointer">
                {v}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-gray-700 font-bold dark:text-gray-400">
            @Copyright INSTANGRAMSfrom HELLO
          </p>
        </li>
      </ul>
    </article>
  );
}

export default SideBar;
