import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between max-w-[1440px] m-auto py-12 px-[160px] text-white bg-black w-full">
      <span className="medium5 ">
        © 2020 Workflow, Inc. All rights reserved.
      </span>
      <div className="flex items-center gap-3">
        <Link href={""}>
          <Image
            src="/images/footer/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
        </Link>
        <Link href={""}>
          <Image
            src="/images/footer/behance.svg"
            alt="behance"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
