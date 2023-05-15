import BookMarks from "components/Elements/icons/BookMarks";
import Heart from "components/Elements/icons/Heart";
import TextBold from "components/Elements/Texts/TextBold";
import { parseDate } from "util/date";

interface IPostActionBar {
  text: string;
  likes: string[];
  username: string;
  createdAt: string;
}

function PostActionBar({ text, likes, username, createdAt }: IPostActionBar) {
  return (
    <div className="grid gap-3 p-3">
      <div className="flex justify-between items-center">
        <Heart fill={false} />
        <BookMarks fill={false} />
      </div>
      <b className="font-semibold">{`${likes?.length ?? 0} ${
        likes?.length > 1 ? "likes" : "like"
      }`}</b>
      <span className="flex gap-2">
        <TextBold>{username}</TextBold>
        <p>{text}</p>
      </span>
      <p className="text-gray-400">{parseDate(createdAt)}</p>
    </div>
  );
}

export default PostActionBar;
