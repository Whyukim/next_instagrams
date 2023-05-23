import { authOptions } from "api/auth/[...nextauth]/route";
import SearchForm from "components/Forms/Search/SearchForm";
import { getServerSession } from "next-auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Search",
  description: "Search users to follow",
};

async function searchPage() {
  await getServerSession(authOptions);

  return <SearchForm />;
}

export default searchPage;
