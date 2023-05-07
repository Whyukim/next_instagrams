import { client } from "./sanity";

export async function getUserFollowing() {
  let query = `*[_type == "user" && email == devhyukim@gmail.com]`;
  return await client.fetch(query);
}
