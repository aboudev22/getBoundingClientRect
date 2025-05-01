import { ForwardedRef } from "react";

type BntProps = {
  className?: string;
  text: string;
  ref?: ForwardedRef<HTMLButtonElement>;
  onclick: () => void;
};

export default function CustomBtn({
  className = "bg-violet-500/10",
  text,
  onclick,
  ref,
}: BntProps) {
  return (
    <button
      ref={ref}
      onClick={onclick}
      className={`btn-inset-ring w-fit rounded-full px-4 py-1 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
