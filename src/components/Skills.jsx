import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "C#", icon: <TbBrandCSharp /> },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;