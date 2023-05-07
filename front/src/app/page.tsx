import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FollowingBar from "./components/Main/FollowingBar";
import PostList from "./components/Main/PostList";
import SideBar from "./components/Main/SideBar";

export default async function HomePage({}: any) {
  const session = await getServerSession(authOptions);

  return (
    <section className="grid grid-cols-[1fr_minmax(120px,_250px)] ">
      <main>
        <FollowingBar />
        <PostList />
      </main>
      <SideBar />
    </section>
  );
}
