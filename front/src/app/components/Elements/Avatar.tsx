import Link from "next/link";

interface IAvatar {
  image?: string | null;
  border: boolean;
  size: "big" | "small";
}

function Avatar({ image, border, size }: IAvatar) {
  return (
    <div className={getStyle(size, border)}>
      <Link href={"/"}>
        <img
          className={`w-full h-full object-cover rounded-full ${
            border && "bg-white p-[2px]"
          }`}
          src={image ?? undefined}
          alt="profile"
          referrerPolicy="no-referrer"
        />
      </Link>
    </div>
  );
}

export default Avatar;

function getStyle(size: string, border: boolean) {
  const baseStyle = ` rounded-full cursor-pointer`;
  const sizeStyle = size == "big" ? "w-16 h-16" : "w-9 h-9";
  const borderStyle = border
    ? "bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.15rem]"
    : "";

  return `${baseStyle} ${sizeStyle} ${borderStyle}`;
}
