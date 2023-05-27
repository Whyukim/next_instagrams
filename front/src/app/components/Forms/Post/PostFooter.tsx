import { SimplePost } from "model/post";
import PostActionBar from "./PostActionBar";
import PostComment from "./PostComment";

interface IPostFooter {
  post: SimplePost;
}

function PostFooter({ post }: IPostFooter) {
  return (
    <div>
      <PostActionBar post={post} />
      <PostComment />
    </div>
  );
}

export default PostFooter;
