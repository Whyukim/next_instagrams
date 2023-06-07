import { AuthUser } from "model/user";
import React from "react";

interface InewPost {
  user: AuthUser;
}

function NewPost({ user }: InewPost) {
  return <section></section>;
}

export default NewPost;
