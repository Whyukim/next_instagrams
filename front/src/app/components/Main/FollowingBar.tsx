"use client";
import useSWR from "swr";

interface IFollowingBar {}

function FollowingBar({}: IFollowingBar) {
  const { data, isLoading, error } = useSWR("/api/hello");
  console.log(123, data, isLoading, error);

  return <div>FollowingBar</div>;
}

export default FollowingBar;
