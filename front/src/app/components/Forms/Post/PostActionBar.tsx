import BookMarks from "components/Elements/icons/BookMarks";
import Heart from "components/Elements/icons/Heart";
import TextBold from "components/Elements/Texts/TextBold";
import { parseDate } from "util/date";
import useSWR, { useSWRConfig } from "swr";
import ToggleButton from "components/Elements/Buttons/ToggleButton";
import { useCallback, useState } from "react";
import HeartFill from "components/Elements/icons/HeartFill";
import BookMarksFill from "components/Elements/icons/BookMarksFill";
import { SimplePost } from "model/post";
import { useSession } from "next-auth/react";
import usePosts from "hooks/posts";
import useMe from "hooks/me";
interface IPostActionBar {
  post: SimplePost;
}

function PostActionBar({ post }: IPostActionBar) {
  const { id, likes, username, text, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    if (user) setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    if (user) setBookmark(id, bookmark);
  };

  return (
    <div className="grid gap-3 p-3">
      <div className="flex justify-between items-center">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFill />}
          offIcon={<Heart />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookMarksFill />}
          offIcon={<BookMarks />}
        />
      </div>
      <b className="font-semibold">{`${likes?.length ?? 0} ${
        likes?.length > 1 ? "likes" : "like"
      }`}</b>
      {text && (
        <span className="flex gap-2">
          <TextBold>{username}</TextBold>
          <p>{text}</p>
        </span>
      )}
      <p className="text-gray-400">{parseDate(createdAt)}</p>
    </div>
  );
}

export default PostActionBar;
