import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-16">
      <p className="regular2 ">
        I am a Product Designer at Remotereps with about 4 years of experience
        in the field. My strong technical abilities and enthusiasm for design
        have allowed me to produce creative and useful designs that satisfy my
        clients. I have a thorough understanding of user-centered design
        approaches, design concepts, and a user-focused design approach. I have
        faith in my ability to convert difficult ideas into elegant and
        straightforward design solutions. I can work with cross-functional teams
        to successfully complete projects from inception to completion thanks to
        my keen attention to detail, innovative problem-solving abilities, and
        outstanding communication skills. I can&apos;t wait to hone my creative
        abilities further and realize things that have purpose and influence.
      </p>
      <Image
        src="/images/about/saeed.svg"
        alt="saeed"
        width={363}
        height={436}
      />
    </div>
  );
};
export default Introduction;
