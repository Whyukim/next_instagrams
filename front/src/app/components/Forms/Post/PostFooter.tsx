import BookMarks from "components/Elements/icons/BookMarks";
import Heart from "components/Elements/icons/Heart";
import TextBold from "components/Elements/Texts/TextBold";
import PostComment from "./PostComment";

interface IPostFooter {
  user: any;
}

function PostFooter({ user }: IPostFooter) {
  return (
    <li>
      <div className="grid gap-3 p-3">
        <div className="flex justify-between items-center">
          <Heart fill={false} />
          <BookMarks fill={false} />
        </div>
        <b className="font-semibold">0 like</b>
        <span className="flex gap-2">
          <TextBold>anna</TextBold>
          <p>hello</p>
        </span>
        <p className="text-gray-400">2 days ago</p>
      </div>
      <PostComment />
    </li>
  );
}

export default PostFooter;
