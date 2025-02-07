import Image from "next/image";
import { ExperienceItems } from "../constants/Experiences";

const Experiences = () => {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="medium1">Experiences</h3>
      {ExperienceItems.map((item, index) => (
        <div
          className="flex flex-col sm:flex-row items-start gap-16 [&:not(:last-child)]:border-b border-solid border-gray600"
          key={index}
        >
          <div className="flex flex-col sm:w-1/5 gap-2">
            <div className="flex items-center gap-4">
              <span className="medium2">{item.experience}</span>
              <button>
                <Image
                  src="/icons/external-link.svg"
                  alt="external-link"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <span className="regular3 text-gray50">{item.location}</span>
          </div>
          <div className="flex flex-col sm:w-4/5">
            {item.role.map((role, index) => (
              <div className="flex flex-col " key={"ROLE_" + index}>
                <div className="flex items-center gap-8">
                  {item.role.length > 1 && (
                    <div className="w-4 h-4 rounded-full bg-white" />
                  )}
                  <div className="flex flex-col sm:flex-row items-center">
                    <span className="inter-bold">{role.title}</span>
                    <span className="regular3 text-gray50">{role.date}</span>
                  </div>
                </div>
                <div
                  className={`flex flex-col pl-5 sm:pl-10 ml-2 gap-4  ${
                    item.role.length === 2 &&
                    index === 0 &&
                    "border-l-2 border-solid border-white"
                  }`}
                >
                  <p className="medium4 mt-4">{role.description}</p>
                  <span className="semi-bold">My role:</span>
                  <ul className="flex flex-col list-disc ml-6 mb-8">
                    {role.roles.map((data, index) => (
                      <li className="medium4" key={"ROLES_ITEM_" + index}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Experiences;
