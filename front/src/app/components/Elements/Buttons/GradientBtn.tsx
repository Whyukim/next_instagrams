import Link from "next/link";

interface IGradientBtn {
  href: string;
  round: string;
  border: number;
}

function GradientBtn({ href, round, border }: IGradientBtn) {
  return (
    <Link
      href={href}
      className={`bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.2rem] ${round}`}
    >
      <div className={`bg-white dark:bg-black p-${border} ${round}`}>
        로그인
      </div>
    </Link>
  );
}

export default GradientBtn;
