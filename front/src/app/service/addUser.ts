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

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"][0]{ 
    ...,
  "id":_id,
    following[]->{username,image},
    followers[]->{username,image},
    "bookmarks":bookmarks[]->_id
  }`);
}
