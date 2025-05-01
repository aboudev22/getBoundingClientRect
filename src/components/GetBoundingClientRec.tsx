import { useRef, useState } from "react";
import CustomBtn from "./CustomBtn";

type ButtonData = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export default function GetBoundingClientRec() {
  const [position, setPosition] = useState<ButtonData | null>(null);
  const btnRef1 = useRef<HTMLButtonElement | null>(null);
  const btnRef2 = useRef<HTMLButtonElement | null>(null);
  const btnRef3 = useRef<HTMLButtonElement | null>(null);
  const btnRef4 = useRef<HTMLButtonElement | null>(null);
  const btnRef5 = useRef<HTMLButtonElement | null>(null);

  const HandleClick = (ref: React.RefObject<HTMLButtonElement | null>) => {
    if (ref.current) {
      const rec = ref.current.getBoundingClientRect();
      setPosition(rec);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-sm btn-inset-ring bg-orange-500/25 rounded-2xl p-4 h-52">
        <p>Cliquez sur un bouttn pour voir sa position exacte</p>
        <p>top :{position?.top?.toFixed(2)}</p>
        <p>left :{position?.left?.toFixed(2)}</p>
        <p>widht :{position?.width?.toFixed(2)}</p>
        <p>height :{position?.height?.toFixed(2)}</p>
      </div>
      <CustomBtn
        ref={btnRef1}
        onclick={() => HandleClick(btnRef1)}
        text="Pending"
        className="bg-orange-500/10 text-orange-500"
      />
      <CustomBtn
        ref={btnRef2}
        onclick={() => HandleClick(btnRef2)}
        text="Submitted"
        className="bg-blue-500/10 text-blue-500"
      />
      <CustomBtn
        ref={btnRef3}
        onclick={() => HandleClick(btnRef3)}
        text="Success"
        className="bg-green-500/10 text-green-500"
      />
      <CustomBtn
        ref={btnRef4}
        onclick={() => HandleClick(btnRef4)}
        text="Failed"
        className="bg-red-500/10 text-red-500"
      />
      <CustomBtn
        onclick={() => HandleClick(btnRef5)}
        ref={btnRef5}
        text="Expired"
      />
    </div>
  );
}
