import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

interface IBookMarks {
  fill: boolean;
  size?: number;
}

function BookMarks({ fill, size = 24 }: IBookMarks) {
  return fill ? <BsBookmarkFill size={size} /> : <BsBookmark size={size} />;
}

export default BookMarks;
