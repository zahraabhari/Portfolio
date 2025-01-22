import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="bg-gray900 w-full sm:w-1/3 flex flex-col gap-8 px-8 pt-10 pb-[108px] sm:p-12 relative z-10">
        <span className="medium4">Contact information</span>
        <span className="medium5">
          Want to get in touch?
          <br />
          Drop me a line!
        </span>
        <div className="flex items-center gap-3">
          <Image src="/icons/phone.svg" alt="phone" width={24} height={24} />
          <span className="medium5">+1 98 912 7138380</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/icons/mail.svg" alt="mail" width={24} height={24} />
          <span className="medium5">sa.alizadeh.sh@gmail.com</span>
        </div>
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
        <div className="trapezoid w-full sm:w-1/3 h-[calc(100%-32px)] sm:h-1/2  bg-gray-800 absolute right-0 bottom-0 z-[-1] "></div>
      </div>
      <div className="flex flex-col bg-black px-4 py-10 sm:p-12 w-full sm:w-2/3 gap-8">
        <span className="medium3">Send us a message</span>
        <div className="flex flex-col gap-1">
          <label className="medium5">Full name</label>
          <input
            placeholder="Type here..."
            className="border-white border h-[50px] px-4 py-3 rounded-[8px] bg-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="medium5">Email</label>
          <input
            placeholder="Type here..."
            className="border-white border h-[50px] px-4 py-3 rounded-[8px] bg-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="medium5">Phone</label>
          <input
            placeholder="Type here..."
            className="border-white border h-[50px] px-4 py-3 rounded-[8px] bg-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="medium5">Message</label>
          <input
            placeholder="Type here..."
            className="border-white border h-[50px] px-4 py-3 rounded-[8px] bg-black"
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2">
          <button className="medium6 text-white rounded-[32px] h-[56px] py-4 w-full sm:w-[114px] hover:bg-[#4E4E4E] ">
            Go back
          </button>
          <button className=" medium6 text-black bg-white rounded-[32px] h-[56px] py-4 w-full sm:w-[114px] hover:bg-gray200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
