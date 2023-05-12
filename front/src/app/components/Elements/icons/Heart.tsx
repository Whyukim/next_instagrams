import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface IHeart {
  fill: boolean;
  size?: number;
}

function Heart({ fill, size = 24 }: IHeart) {
  return fill ? <BsFillHeartFill size={size} /> : <BsHeart size={size} />;
}

export default Heart;
