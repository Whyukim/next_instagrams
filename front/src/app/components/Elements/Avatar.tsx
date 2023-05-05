interface IAvatar {
  image?: string | null;
}

function Avatar({ image }: IAvatar) {
  return (
    <div
      className={`w-9 h-9 bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.2rem] rounded-full cursor-pointer`}
    >
      <img
        className="rounded-full p-[0.1rem]"
        src={image ?? undefined}
        alt="profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default Avatar;
