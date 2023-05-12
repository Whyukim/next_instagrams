import Image from "next/image";

interface IPostImage {
  user: any;
}

function PostImage({ user }: IPostImage) {
  return (
    <li>
      <img className="w-full object-cover" src={user.image} alt={"postImage"} />
    </li>
  );
}

export default PostImage;
