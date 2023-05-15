import BookMarks from "components/Elements/icons/BookMarks";
import Heart from "components/Elements/icons/Heart";
import TextBold from "components/Elements/Texts/TextBold";
import { parseDate } from "util/date";
import PostActionBar from "./PostActionBar";
import PostComment from "./PostComment";

interface IPostFooter {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
}

function PostFooter({ likes, username, text, createdAt }: IPostFooter) {
  return (
    <div>
      <PostActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <PostComment />
    </div>
  );
}

export default PostFooter;
