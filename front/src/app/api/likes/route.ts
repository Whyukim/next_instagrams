import { authOptions } from "api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { disLikePost, likePost } from "service/post";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Auth Error", { status: 401 });
  }

  const { id, like } = await req.json();

  if (!id || like === undefined) {
    return new Response("Bad body", { status: 401 });
  }

  const request = like ? likePost : disLikePost;

  return request(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(error, { status: 500 }));
}
