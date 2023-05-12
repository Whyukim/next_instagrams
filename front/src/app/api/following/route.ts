import { getUser } from "service/addUser";
import { getUserFollowing } from "service/getUserFollowing";
import { client } from "service/sanity";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const query = `*[_type == "user" && email == "${email}"]{ 
    "following_users": *[_type == "user" && _id in ^.following[]._ref]{
      _id,
      email,
      image,
    }
  }`;
  const results = await client.fetch(query).then((res) => res[0]);

  return NextResponse.json(results);
}
