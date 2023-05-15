"use client";
import Image from "next/image";

interface IPostImage {
  image: string;
  priority: boolean;
}

function PostImage({ image, priority }: IPostImage) {
  return (
    <div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={"postImage"}
        width={500}
        height={500}
        priority={priority}
      />
    </div>
  );
}

export default PostImage;
