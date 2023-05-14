import Smile from "components/Elements/icons/Smile";

interface IPostComment {}

function PostComment({}: IPostComment) {
  return (
    <form
      onSubmit={() => {
        console.log(1);
      }}
      className="flex border-t-2 px-3"
    >
      <button type="button">
        <Smile />
      </button>
      <input
        type="text"
        className="flex-grow p-2 outline-none bg-transparent"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostComment;
