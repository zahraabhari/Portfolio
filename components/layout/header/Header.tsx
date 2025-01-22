"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="m-auto flex h-[86px] max-w-[1440px] items-center justify-between bg-black px-[160px] text-white">
      <h2 className="titleS">Saeed</h2>
      <button
        className="medium6 flex items-center justify-center gap-2 p-2"
        onClick={() => router.push("/")}
      >
        Home{" "}
        <Image
          src="/icons/arrow-right-white.svg"
          alt="arrow-right"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
export default Header;
