import Smile from "components/Elements/icons/Smile";

interface IPostComment {}

function PostComment({}: IPostComment) {
  return (
    <form
      onSubmit={() => {
        console.log(1);
      }}
      className="flex px-3 items-center"
    >
      <Smile />
      <input
        type="text"
        className="flex-grow p-2 outline-none bg-transparent"
        placeholder="Add a comment..."
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostComment;
