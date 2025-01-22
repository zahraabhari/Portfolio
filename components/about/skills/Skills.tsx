import { SkillItems } from "../constants/Skills";

const Skills = () => {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="medium1">Skills</h3>
      <div className="flex flex-col gap-4">
        {SkillItems.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-16  "
          >
            <span className="medium3 w-full sm:w-1/5">{skill.title}</span>
            <ul className="flex items-center gap-x-8 gap-y-2 flex-wrap list-disc w-full sm:w-4/5 px-4 sm:px-0 ">
              {skill.items.map((item, index) => (
                <li key={index} className="medium5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
