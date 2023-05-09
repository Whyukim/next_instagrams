"use client";

import "react-multi-carousel/lib/styles.css";
import useSWR from "swr";
import { SyncLoader } from "react-spinners";
import Avatar from "../Elements/Avatar";
import { DetailUser } from "app/model/user";
import Link from "next/link";
import ScrollableBar from "./ScrollableBar";

interface IFollowingBar {}

function FollowingBar({}: IFollowingBar) {
  const { data, isLoading, error } = useSWR<DetailUser>("/api/me");
  // const users = undefined;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  // if (data) a = [...data.following_users, ...data.following_users];

  return (
    <section className="w-full flex justify-center items-center p-4 bg-gray-50 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-auto ">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <SyncLoader color="#36d7b7" />
        </div>
      ) : (
        (!users || users.length == 0) && <p>{`You don't have folowing`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} border size="big" />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}

      {/* <ul>
            <li>
        <Carousel responsive={responsive}>
              <Link>

              </Link>
          {a?.map((v: any) => (
            <Avatar image={v.image} size="big" border={true} />
          ))}
          </li>
        </ul>
        </Carousel> */}
    </section>
  );
}

export default FollowingBar;
