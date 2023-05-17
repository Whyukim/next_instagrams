"use client";

import { SearchUser } from "model/user";
import useSWR from "swr";
import { DotLoader } from "react-spinners";
import TextBold from "components/Elements/Texts/TextBold";
import TextGray from "components/Elements/Texts/TextGray";
import Avatar from "components/Elements/Avatar";
import Link from "next/link";
import { useState } from "react";
import UserCard from "./UserCard";

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${keyword}`);

  return (
    <section className="flex flex-col gap-7 items-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-3/4">
        <input
          className="w-full p-4 border border-gray-500"
          type={"text"}
          placeholder="Serach for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>에러발생</p>}
      {loading && (
        <div className="flex justify-center mt-32">
          <DotLoader color="#36d7b7" />
        </div>
      )}
      {!loading && !error && users?.length == 0 && <p>사용자가 없습니다.</p>}
      {users && (
        <ul className="flex flex-col gap-3 px-5 w-3/4">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchForm;
