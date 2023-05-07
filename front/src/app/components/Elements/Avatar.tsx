interface IAvatar {
  image?: string | null;
  border?: boolean;
  size?: "big" | "small";
}

function Avatar({ image, border, size }: IAvatar) {
  return (
    <div
      className={`rounded-full cursor-pointer 
      ${size == "big" ? "w-11 h-11" : "w-9 h-9"} 
      ${
        border &&
        "bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.2rem]"
      }`}
    >
      <img
        className={`rounded-full ${border && "p-[0.025rem]"}`}
        src={image ?? undefined}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default Avatar;
