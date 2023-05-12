interface ITextBold {
  children: React.ReactNode;
}

function TextBold({ children }: ITextBold) {
  return <b className="font-bold">{children}</b>;
}

export default TextBold;
