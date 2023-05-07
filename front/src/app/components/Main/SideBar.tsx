"use client";

import { useSession } from "next-auth/react";
import Avatar from "../Elements/Avatar";

interface ISideBar {}

function SideBar({}: ISideBar) {
  const { data: session } = useSession();
  const user = session?.user;

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
            <div>
              <h2 className="font-bold">{user.email}</h2>
              <span className="text-gray-500 dark:text-gray-300">
                {user.name}
              </span>
            </div>
          </li>
        )}
        <li>
          <ul className="flex grow gap-2 max-w-full flex-wrap">
            {list.map((v) => (
              <li className="text-gray-400 cursor-pointer">{v}</li>
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
