import { authOptions } from "api/auth/[...nextauth]/route";
import SearchForm from "components/Forms/Search/SearchForm";
import { getServerSession } from "next-auth";

interface IsearchPage {}

async function searchPage({}: IsearchPage) {
  await getServerSession(authOptions);

  return <SearchForm />;
}

export default searchPage;
