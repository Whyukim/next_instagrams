import { getUserFollowing } from "app/service/getUserFollowing";
import { client } from "app/service/sanity";
import { NextRequest } from "next/server";

export async function GET(req: Request) {
  console.log(req);
  const query = `*[_type == "user" && email == "devhyukim@gmail.com"] | select(following)`;
  const results = await client.fetch(query).then((res) => {
    console.log(res);
  });

  return new Response("Hello, Next.js!");
}
