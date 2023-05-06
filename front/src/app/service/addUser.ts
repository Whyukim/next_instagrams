import { client } from "./sanity";

interface props {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string | null;
}

export async function getUser({ id, username, name, email, image }: props) {
  client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}