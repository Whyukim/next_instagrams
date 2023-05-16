"use client";
import ModalPortal from "components/Elements/Modals/ModalPortal";
import PostModal from "components/Elements/Modals/PostModal";
import { SimplePost } from "model/post";
import Image from "next/image";
import { useState } from "react";
import PostDetail from "./PostDetail";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
interface IPostCard {
  post: SimplePost;
  priority: boolean;
}

function PostCard({ post, priority = false }: IPostCard) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <li className=" bg-blocks shadow-md shadow-neutral-300 border-2 rounded-xl">
      <PostHeader userImage={userImage} username={username} />
      <div>
        <Image
          className="w-full object-cover aspect-square"
          src={image}
          alt={"postImage"}
          width={500}
          height={500}
          priority={priority}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <PostFooter
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </li>
  );
}

export default PostCard;
