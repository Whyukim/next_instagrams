import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FollowingBar from "./components/Main/FollowingBar";
import PostList from "./components/Main/PostList";
import SideBar from "./components/Main/SideBar";

export default async function HomePage({}: any) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) redirect("/auth/signin");

  return (
    <section className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-[3fr_1fr] max-w-[850px] ">
      <main className="max-w-full overflow-hidden">
        <FollowingBar />
        <PostList />
      </main>
      <SideBar user={user} />
    </section>
  );
}
