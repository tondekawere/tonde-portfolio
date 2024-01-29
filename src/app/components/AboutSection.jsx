"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>SASS</li>
        <li>Bootstrap</li>
        <li>jQuery</li>
        <li>JavaScript</li>
        {/* <li>Git</li> */}
      </ul>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Uncommon.org</li>
  //       <li>Freecodecamp</li>
  //       <li>ProProfs Quiz Maker</li>
  //       <li>Alison</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Development Libraries</li>
        <li>Responsive Web Design certificate</li>
        <li>JavaScript Application Programming</li>
        <li>Web Development with HTML and CSS</li>
        <li>HTML Quiz: Multiple Choice Questions</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={600}
          height={600}
          className=" md:h-[60vh]  lg:h-[40vh] object-cover xl:h-[76vh]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a professional Frontend developer with a strong commitment to
            transforming concepts into cutting-edge web applications. My
            expertise lies in JavaScript, React, Redux, Node.js, Next.js, HTML,
            CSS, Wordpress, and Git. I have a proven track record of quickly
            grasping new concepts and continually enhancing my knowledge and
            abilities. Collaborative by nature, I thrive in team settings and am
            enthusiastic about collaborating with others to develop exceptional
            web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
