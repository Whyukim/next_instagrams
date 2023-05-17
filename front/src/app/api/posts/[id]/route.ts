import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "api/auth/[...nextauth]/route";
import { getPost, getPosts } from "service/post";

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getPost(context.params.id) //
    .then((res) => NextResponse.json(res));
}
