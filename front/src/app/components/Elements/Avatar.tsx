type AvatarSize = "big" | "medium" | "small";
interface IAvatar {
  image?: string | null;
  border: boolean;
  size: AvatarSize;
}

function Avatar({ image, border, size }: IAvatar) {
  return (
    <div className={getStyle(size, border)}>
      <img
        className={`w-full h-full object-cover rounded-full ${
          border && "bg-white p-[2px]"
        }`}
        src={image ?? undefined}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default Avatar;

function getStyle(size: AvatarSize, border: boolean) {
  const baseStyle = `rounded-full cursor-pointer`;
  const borderStyle = border
    ? "bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.15rem]"
    : "";

  const sizeStyle = getImageSizeStyle(size);

  return `${baseStyle} ${sizeStyle} ${borderStyle}`;
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-12 h-12";
    case "big":
      return "w-16 h-16";
  }
}
