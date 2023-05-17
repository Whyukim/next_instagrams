import { SimplePost } from "model/post";
import { client, urlFor } from "./sanity";

const postProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": count(comments),
  "id": _id,
  "createdAt": _createdAt
`;

export async function getPosts(username: string) {
  let query = `
  *[_type == "post" &&author->username=='${username}' 
  || author._ref in  *[_type == 'user' && username=='${username}'][0].following[]._ref]
  | order(_createdAt desc){${postProjection}}`;

  return await client
    .fetch(query)
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type=="post" &&_id == "${id}"][0] {
        ...,
        "username": author->username,
        "userImage": author->image,
        "image":photo,
        "likes":likes[]->username,
        comments[]{comment, "username": author->username, "image":author->image},
        "id":_id,
        "createdAt":_createdAt}`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
}
