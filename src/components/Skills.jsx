import { useState } from "react";

const skills = [
  { name: "HTML", color: "#E04D1D" },
  { name: "CSS", color: "#0177BD" },
  { name: "TailwindCSS", color: "#27BABC" },
  { name: "Bootstrap", color: "#7C11F8" },
  { name: "JavaScript", color: "#EFDB4F" },
  { name: "React.js", color: "#00D8FE" },
  { name: "Node.js", color: "#80CD38" },
  { name: "Express.js", color: "black" },
  { name: "MongoDB", color: "#023430" },
  { name: "Java", color: "#F58219" },
  { name: "Firebase", color: "#FFCC33" },
  { name: "GitHub", color: "#F03C2D" },
  { name: "Figma", color: "#A259FF" },
  { name: "Adobe XD", color: "#460137" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="p-5">
      <h1 className="font-neue text-2xl md:text-4xl text-center">
        Modern Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-2 my-5">
        {skills.map((skill) => (
          <h1
            className={`transition-transform duration-300 ease-in-out md:text-xl text-md rounded-full px-4 py-2 bg-zinc-800 transform ${
              hoveredSkill === skill.name ? "scale-105" : "scale-100"
            }`}
            key={skill.name}
            style={{
              backgroundColor: hoveredSkill === skill.name ? skill.color : "",
              color: hoveredSkill === skill.name ? "#ffffff" : "#E5E7EB",
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}>
            {skill.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;
