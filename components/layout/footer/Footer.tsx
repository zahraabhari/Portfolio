import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-4 bg-black px-8 py-12 text-white sm:m-auto sm:flex-row sm:px-[160px]">
      <span className="medium5">
        © 2020 Workflow, Inc. All rights reserved.
      </span>
      <div className="flex items-center gap-3">
        <Link
          href={"https://www.linkedin.com/in/saeed-alizadeh-sh/"}
          target="_blank"
        >
          <Image
            src="/images/footer/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
        </Link>
        <Link href={"https://www.behance.net/SaeedASh"} target="_blank">
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
