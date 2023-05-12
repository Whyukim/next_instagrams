import { authOptions } from "api/auth/[...nextauth]/route";
import SignIn from "components/Elements/Buttons/SignIn";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

interface ISignPage {
  searchParams: { callbackUrl: string };
}

async function SignPage({ searchParams: { callbackUrl } }: ISignPage) {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}

export default SignPage;
