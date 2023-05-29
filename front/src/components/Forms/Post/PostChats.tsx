import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";
import { Comment } from "model/post";

interface IPostChats {
  text: string;
  username: string;
  userImage: string;
}

function PostChats({ text, username, userImage }: IPostChats) {
  return (
    <ul className="border-t-2 border-gray-300 p-4">
      <li className="flex items-center gap-2">
        <Avatar image={userImage} highlight size="small" />
        <TextBold>{username}</TextBold>
        <p>{text}</p>
      </li>
    </ul>
  );
}

export default PostChats;
