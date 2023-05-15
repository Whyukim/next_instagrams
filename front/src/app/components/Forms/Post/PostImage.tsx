"use client";
import PostModal from "components/Elements/Modals/PostModal";
import { SimplePost } from "model/post";
import Image from "next/image";
import { useState } from "react";

interface IPostImage {
  post: SimplePost;
  priority: boolean;
}

function PostImage({ post, priority }: IPostImage) {
  const { image } = post;
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <Image
        className="w-full object-cover aspect-square"
        src={image}
        alt={"postImage"}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setShowImage(true)}
      />
      <PostModal show={showImage} setShow={setShowImage} post={post} />
    </div>
  );
}

export default PostImage;
