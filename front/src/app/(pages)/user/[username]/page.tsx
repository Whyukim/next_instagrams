import { notFound } from "next/navigation";
import { getUserForProfile } from "service/user";
import UserProfile from "components/Forms/User/UserProfile";
import UserPosts from "components/Forms/User/UserPosts";

interface IUserPage {
  params: { username: string };
}

async function userPage({ params: { username } }: IUserPage) {
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  return (
    <section>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export default userPage;
