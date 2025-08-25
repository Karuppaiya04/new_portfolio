import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

const projects = [
  { image: project1, name: "Mern Ecommerce Website" },
  { image: project2, name: "React Portfolio Website" },
  { image: project3, name: "Farmer to Consumer Website" }
];

export default function Project() {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-10 py-10 bg-[#505050]">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center tracking-wide drop-shadow-lg">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-[#444] rounded-2xl p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
          >
            <div className="relative w-full">
              <img
                className="w-full h-[180px] xs:h-[220px] sm:h-[200px] md:h-[250px] object-cover rounded-xl border-4 border-[#232526] shadow group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                src={proj.image}
                alt={proj.name}
              />
              <div className="absolute top-3 right-3 bg-[#09f4fc] text-black px-3 py-1 rounded-full text-xs font-bold shadow opacity-80 group-hover:opacity-100 transition-all duration-300">
                Featured
              </div>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-semibold text-center mt-4">{proj.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}