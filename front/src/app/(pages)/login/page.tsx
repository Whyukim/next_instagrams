import GradientBtn from "@/app/components/Elements/Buttons/GradientBtn";

interface IloingPage {}

async function loingPage({}: IloingPage) {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <section className="flex items-center justify-center mt-12">
      <GradientBtn title={"Google Login"} round="rounded-md" padding="p-5" />
    </section>
  );
}

export default loingPage;
