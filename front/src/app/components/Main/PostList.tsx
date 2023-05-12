import PostCard from "components/Forms/Post/PostCard";

interface IPostList {}

function PostList({}: IPostList) {
  return (
    <section>
      <PostCard />
    </section>
  );
}

export default PostList;
