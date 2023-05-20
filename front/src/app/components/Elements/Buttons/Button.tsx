interface IButton {
  text: string;
  onClick: () => void;
  red?: boolean;
}

function Button({ text, onClick, red }: IButton) {
  return (
    <button
      className={`border-none rounded-md py-2 px-8 text-white font-bold ${
        red ? "bg-red-500" : "bg-sky-500"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
