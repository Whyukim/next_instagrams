import Avatar from "components/Elements/Avatar";
import TextBold from "components/Elements/Texts/TextBold";

interface IPostHeader {
  user: any;
}

function PostHeader({ user }: IPostHeader) {
  return (
    <li className="flex items-center gap-3 p-3">
      <Avatar image={user?.image} border size={"medium"} />
      <TextBold>{user.username}</TextBold>
    </li>
  );
}

export default PostHeader;
