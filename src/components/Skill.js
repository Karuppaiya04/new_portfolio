import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

export default function Skill() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section
      id="skill"
      className="relative flex flex-col items-center justify-center px-6 md:px-12 py-16 
                 bg-[#505050] overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 
                     text-center tracking-wide drop-shadow-lg uppercase">
        My <span className="text-[#09c6f9]">Skills</span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                      gap-6 sm:gap-8 md:gap-10 place-items-center max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 
                       bg-[#3a3a3a] rounded-2xl shadow-md
                       hover:scale-110 hover:shadow-xl transition-all duration-500 ease-out
                       hover:bg-gradient-to-br hover:from-[#09c6f933] hover:to-[#f91ce133]"
          >
            <span className="text-5xl mb-3 group-hover:rotate-12 transition-transform duration-500">
              {skill.icon}
            </span>
            <p className="text-[#e0e0e0] text-sm sm:text-base md:text-lg font-semibold 
                          group-hover:text-[#09c6f9] transition-colors duration-500">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
