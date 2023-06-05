import NewPost from "components/Forms/Add/newPost";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "New Post",
  description: "Create a new post",
};

interface IaddPage {}

async function addPage({}: IaddPage) {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return <NewPost user={session.user} />;
}

export default addPage;
