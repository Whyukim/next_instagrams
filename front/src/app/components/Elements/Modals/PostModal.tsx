"use client";

import PostChats from "components/Forms/Post/PostChats";
import PostFooter from "components/Forms/Post/PostFooter";
import PostHeader from "components/Forms/Post/PostHeader";
import { SimplePost } from "model/post";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Close from "../icons/Close";
import Modal from "./Modal";

interface IPostModal {
  post: SimplePost;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const position = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`;

function PostModal({ post, show, setShow }: IPostModal) {
  console.log(post);
  return (
    <>
      {show && (
        <Modal>
          <div
            className={"absolute right-8 top-8 cursor-pointer z-20"}
            onClick={() => setShow(false)}
          >
            <Close />
          </div>
          <ul
            className={`${position} grid grid-cols-[0.6fr_0.4fr] w-4/5 max-h-[99vh] aspect-video bg-white z-10`}
          >
            <li className="max-h-[99vh] w-full">
              <Image
                className="w-full h-full"
                src={post.image}
                alt={"post image"}
                width={500}
                height={500}
              />
            </li>
            <li className="grid grid-rows-[auto_1fr_auto]">
              <PostHeader userImage={post.userImage} username={post.username} />
              <PostChats
                text={post.text}
                username={post.username}
                userImage={post.userImage}
              />
              <PostFooter
                likes={post.likes}
                username={post.username}
                createdAt={post.createdAt}
              />
            </li>
          </ul>

          <div className={`${position} w-full h-[101vh] bg-black opacity-60`} />
        </Modal>
      )}
    </>
  );
}

export default PostModal;
